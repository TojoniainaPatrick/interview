<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

use App\Controllers\BaseController;
use App\Models\CommentResponseModel;

class CommentResponse extends BaseController
{
    use ResponseTrait;

    public function index($commentID)
    {
        $commentResponseModel   =   new CommentResponseModel();
        $commentResponseList    =   $commentResponseModel->getCommentResponse($commentID);

        return $this->respond(
            [
                'data'      => $commentResponseList,
                'message'   => "response list of the comment number $commentID"
            ],
            200
        );
    }

    public function create()
    {
        $commentResponseModel   =   new CommentResponseModel();
        $request_data           =   $this->request->getJSON();

        $responseText           =   $request_data->responseText;
        $commentID              =   $request_data->commentID;

        $responseID             =   $commentResponseModel->insertResponse($responseText, $commentID);

        return $this->respond(['message'=>"response numbre $responseID created"], 200);
    }

    public function update($responseID)
    {
        $commentResponseModel   =   new CommentResponseModel();
        $request_data           =   $this->request->getJSON();

        $responseText           =   $request_data->responseText;

        $commentResponseModel->updateResponse($responseID, $responseText);

        return $this->respond(['message'=>"response numbre $responseID updated"], 200);
    }

    public function delete($responseID)
    {
        $commentResponseModel   =   new CommentResponseModel();

        $commentResponseModel->deleteResponse($responseID);

        return $this->respond(['message'=>"response numbre $responseID deleted"], 200);
    }
}
