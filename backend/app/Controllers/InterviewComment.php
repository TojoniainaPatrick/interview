<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

use App\Controllers\BaseController;
use App\Models\InterviewCommentModel;
use App\Models\CommentResponseModel;

class InterviewComment extends BaseController
{

    use ResponseTrait;

    public function index($interviewID)
    {
        $interviewCommentModel  =   new InterviewCommentModel();
        $interviewCommentList   =   $interviewCommentModel->getInterviewComment($interviewID);

        return $this->respond(
            [
                'data'      => $interviewCommentList,
                'message'   => "comment list of the interview number $interviewID"
            ],
            200
        );
    }

    public function create()
    {
        $interviewCommentModel  =   new InterviewCommentModel();
        $request_data           =   $this->request->getJSON();

        $commentText        = $request_data->commentText;
        $interviewID        = $request_data->interviewID;

        $commentID          = $interviewCommentModel->insertComment($commentText, $interviewID);

        return $this->respondCreated(
            ['message'  => "comment number $commentID inserted"]
        );
    }

    public function update($commentID)
    {
        $interviewCommentModel  =   new InterviewCommentModel();
        $request_data           =   $this->request->getJSON();

        $commentText            =   $request_data->commentText;

        $interviewCommentModel  ->  updateComment($commentID, $commentText);

        return $this->respondUpdated(['message'=>"comment updated"]);
    }

    public function delete($commentID)
    {
        $interviewCommentModel  =   new InterviewCommentModel();
        $commentResponseModel   =   new CommentResponseModel();

        $interviewCommentModel  ->  deleteComment($commentID);
        $commentResponseModel   ->  deleteCommentResponses($commentID);

        return $this->respondDeleted(['message'=>'comment deleted']);
    }
}
