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

}

    // $request_data = $this->request->getJSON();
    // $interviewEvaluationModel
    //     ->where('itrwID'    , $id)
    //     ->where('evaID'     , $request_data->evaID)
    //     ->set(['interEvaValue' => $request_data->interEvaValue])
    //     ->update();