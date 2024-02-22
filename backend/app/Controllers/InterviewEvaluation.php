<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\InterviewEvaluationModel;
use App\Models\PositionEvaluationModel;
use App\Models\InterviewModel;

class InterviewEvaluation extends BaseController
{

     use ResponseTrait;


    // OK
    public function index()
    {
        $interviewEvaluationModel   = new InterviewEvaluationModel();
        
        $interviewEvaluationList    = $interviewEvaluationModel->getInterviewEvaluations();
        
        return $this->respond([
            'message'       => "list of interview evaluation",
            'data'          => $interviewEvaluationList,
            'statusCode'    => 200
        ]);
    }

    public function interviewEvaluations($interviewID)
    {
        $interviewEvaluationModel   =   new InterviewEvaluationModel();

        $result =   $interviewEvaluationModel->showInterviewEvaluations($interviewID);

        return $this->respond([
            'message'       => "interview number {$interviewID} evaluations",
            'data'          => $result
        ]);
    }

    //get interview evaluations in the current trimester
    public function getCurrentTrimesterEvaluation()
    {
        $interviewEvaluationModel = new InterviewEvaluationModel();
        $result = $interviewEvaluationModel->currentTrimesterEvaluation();

        return $this->respond([
            'message'       => "evaluations of the current trimester",
            'data'          => $result
        ]);
    }

    //get interview evaluations in a trimester
    public function getTrimesterEvaluation($periodID)
    {
        $interviewEvaluationModel = new InterviewEvaluationModel();
        $result = $interviewEvaluationModel->trimesterEvaluation($periodID);

        return $this->respond([
            'message'       => "evaluations of the trimester number {$periodID}",
            'data'          => $result
        ]);
    }


    //get interview evaluations of one department
    public function getDepartmentEvaluation($departmentID)
    {
        $interviewEvaluationModel = new InterviewEvaluationModel();
        $result = $interviewEvaluationModel->departmentEvaluation($departmentID);

        return $this->respond([
            'message'       => "evaluations of the department number {$departmentID}",
            'data'          => $result
        ]);
    }

    //get interview evaluations of one employee
    public function getEmployeeEvaluation($userID)
    {
        $interviewEvaluationModel = new InterviewEvaluationModel();
        $result = $interviewEvaluationModel->employeeEvaluation($userID);

        return $this->respond([
            'message'       => "evaluations of the employee number {$userID}",
            'data'          => $result
        ]);
    }
    
    // OK
    public function insertInterviewEvaluation()
    {
        $interviewEvaluationModel   = new InterviewEvaluationModel();

        $result = $interviewEvaluationModel->insertInterviewEvaluation(1, 1, 10);

        return $this->respond(
            [
                'data'      =>  $result,
                'message'   =>  'interview evaluation inserted'
            ],
            200
        );
    }

    //  OK
    public function addInterviewEvaluations($interviewID)
    {
        $interviewModel             =   new InterviewModel();
        $positionEvaluationModel    =   new PositionEvaluationModel();
        $interviewEvaluationModel   =   new InterviewEvaluationModel();

        $user               =   $interviewModel->getInterviewUser($interviewID);
        $userEvaluations    =   $positionEvaluationModel->getPositionEnabledEvaluation($user['posID']);

        foreach( $userEvaluations as $evaluation)
        {
            $interviewEvaluationModel->insertInterviewEvaluation($interviewID, $evaluation['evaID'], $evaluation['evaMaxValue']);
        }
    }

    public function delete($itrwID, $evaID)//ok
    {
        $interviewEvaluationModel   =   new InterviewEvaluationModel();
        $interviewEvaluationModel->deleteInterviewEvaluation($itrwID, $evaID);

        return $this->respondDeleted("Record deleted");
    }

    public function setValue()
    {
        $interviewEvaluationModel   =   new InterviewEvaluationModel();
        $interviewModel             =   new InterviewModel();
        
        $request_data               =   $this->request->getJSON();
        $itrwID                     =   $request_data->itrwID;
        $values                     =   $request_data->evaluations;
        
        foreach($values as $value)
        {
            $interviewEvaluationModel->updateValue($itrwID, $value->critereId, $value->note);
        }

        $interviewModel->setDat($itrwID);
        
        return $this->respond(
            [
                'message'   =>  'Values updated'
            ],
            200
        );
    }


}

    // $request_data = $this->request->getJSON();
    // $interviewEvaluationModel
    //     ->where('itrwID'    , $id)
    //     ->where('evaID'     , $request_data->evaID)
    //     ->set(['interEvaValue' => $request_data->interEvaValue])
    //     ->update();