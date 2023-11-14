<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Controllers\BaseController;
use App\Models\QuestionModel;

class Question extends BaseController
{
    use ResponseTrait;

    public function index()
    {
        $questionModel =   new QuestionModel();

        $questionList    =   $questionModel->getQuestions();
        if(!$questionList) return $this->failNotFound('No data found');

        return $this->respond(
            [
                'data'      =>  $questionList,
                'message'   =>  'question list'
            ],
            200
        );
    }

    public function interviewQuestion($interviewID)
    {
        $questionModel =   new QuestionModel();

        $questionList    =   $questionModel->getInterviewQuestions($interviewID);
        if(!$questionList) return $this->failNotFound('No data found');

        return $this->respond(
            [
                'data'      =>  $questionList,
                'message'   =>  "questions list of the interview number $interviewID"
            ],
            200
        );
    }

    // OK
    public function create()
    {
        $questionModel  =   new QuestionModel();

        $request_data   =   $this->request->getJSON();

        $questionText   =   $request_data->questionText;
        $interviewID    =   $request_data->interviewID;

        $questionID     =   $questionModel->insertQuestion($questionText, $interviewID);

        return $this->respondCreated([
            'data'      =>  $questionID,
            'message'   =>  'questioncreated'
        ]);
    }

    public function update($questionID)
    {
        $questionModel  =   new QuestionModel();

        $questionItem   =   $questionModel->find($questionID);
        if(!$questionItem) { return $this->failNotFound('No data found'); }

        $request_data   =   $this->request->getJSON();
        $questionText   =   $request_data->questionText;

        $questionModel  ->  updateQuestion($questionID, $questionText);
        return $this->respondUpdated(['message'=>'question updated']);
    }

    public function answer($questionID)
    {
        $questionModel  =   new QuestionModel();

        $questionItem   =   $questionModel->find($questionID);
        if(!$questionItem) return $this->failNotFound('No data found');

        $request_data   =   $this->request->getJSON();
        $response       =   $request_data->response;

        $result   =  $questionModel->respondQuestion($questionID, $response);

        return $this->respond(
            [
                'message'   =>'Response inserted'
            ],
            200
        );
    }

    public function deleteResponse($questionID)
    {
        $questionModel  =   new QuestionModel();

        $questionItem   =   $questionModel->find($questionID);
        if(!$questionItem) return $this->failNotFound('No data found');

        $result   =  $questionModel->deleteResponse($questionID);

        return $this->respond(
            [
                'message'   =>'Response deleted'
            ],
            200
        );
    }

    public function delete($questionID)
    {
        $questionModel  =   new QuestionModel();
        $questionModel  ->  deleteQuestion($questionID);

        return $this->respondDeleted(['message'=>'Question deleted']);
    }
}
