<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

use App\Models\InterviewModel;
use App\Models\InterviewEvaluationModel;
use App\Models\UserModel;

use App\Controllers\InterviewEvaluation;

class Interview extends BaseController
{
    use ResponseTrait;

    public function index()
    {
        $interviewModel = new InterviewModel();
        $interviewList  = $interviewModel->getInterviews();
        
        return $this->respond([
            'message'   => 'interview list',
            'data'      => $interviewList,
            'statusCode'=> 200
        ]);
    }

    public function show($id = null)
    {
        $interviewModel = new InterviewModel();
        $interviewItem  = $interviewModel->findInterviewById($id);
        
        if(!$interviewItem) return $this->failNotFound("No data found!");

        return $this->respond([
            'message'   => "interview number $id",
            'data'      => $interviewItem,
            'statusCode'=> 200
        ]);
    }

    public function getInterviewUser($interviewID)
    {
        $interviewModel = new InterviewModel();

        $result = $interviewModel->getInterviewUser($interviewID);

        return $this->respond(
            [
                'data'      =>  $result,
                'message'   =>  "inerview de l'utilisateur numero $interviewID"
            ],
            200
        );
    }

    public function postRelated($posID)
    {
        $interviewModel     = new InterviewModel();
        return $this->respond(
            [
                'data'      =>  $interviewModel->getPositionRelatedInterview($posID),
                'message'   =>  "inerview list of the position number $posID"
            ],
            200
        );
    }

    // create interview for every single employee
    public function createInterviews($periodID = null)
    {
        $interviewModel                 =   new InterviewModel();
        $userModel                      =   new UserModel();
        $interviewEvaluationController  =   new InterviewEvaluation();

        $users                          =   $userModel->getUsers();

        foreach($users as $user)
        {
            $interviewID                =   $interviewModel->insertInterview($user['userID'], $periodID);
            $interviewEvaluationController -> addInterviewEvaluations($interviewID);
        }
    }

    public function update($id = null)
    {
        $interviewModel = new InterviewModel();

        $interviewItem  = $interviewModel->find($id);
        if(!$interviewItem) return $this->failNotFound("No data found!");

        $request_data      = $this->request->getJSON();
        $data = [
            'itrwDate'      => $request_data->itrwDate,
            'itrwComment'   => $request_data->itrwComment,
            'userID'        => $request_data->userID,
            'perID'         => $request_data->perID
        ];

        $interviewModel->update($id, $data);

        return $this->respondUpdated([
            'statusCode'    => 200,
            'message'       => "Interview updated"
        ]);
    }

    public function delete($id = null)
    {
        $interviewModel             = new InterviewModel();
        $interviewEvaluationModel   = new InterviewEvaluationModel(); 

        $interviewItem              = $interviewModel->find($id);
        if(!$interviewItem) return $this->failNotFound("No data found!");

        $interviewModel->delete($id);
        $interviewEvaluationModel->delete($id);

        return $this->respondDeleted([
            'statusCode'    => 200,
            'message'       => "Interview deleted"
        ]);
    }
}
