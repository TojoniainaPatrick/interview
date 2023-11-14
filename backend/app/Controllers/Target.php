<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\TargetModel;

class Target extends BaseController
{

     use ResponseTrait;

    public function index()
    {
        $targetModel    = new TargetModel();

        $targetList     = $targetModel->findAll();
        if(!$targetList) return $this->failNotFound("No data found");

        return $this->respond(
            [
                'message'   => 'targets\' list',
                'data'      => $targetList
            ]
            ,200
        );
    }

    public function interviewTargets($interviewID)
    {
        $targetModel        =   new TargetModel();
        $interviewTarget    =   $targetModel->getInterviewTargets($interviewID);
        
        return $this->respond(
            [
                'data'      =>  $interviewTarget,
                'message'   =>  "interview number $interviewID targets"
            ],
            200
        );
    }

    public function show($id = null)
    {
        $targetModel    = new TargetModel();
        
        $targetItem     = $targetModel->find($id);
        if(!$targetItem) return $this->failNotFound("No data found");

        return $this->respond([
            'message'   => "Target number $id",
            'data'      => $targetItem,
            'statusCode'=> 200
        ]);
    }

    public function create()
    {
        $targetModel    = new TargetModel();
        
        $request_data   = $this->request->getJSON();

        $trgTarget  =   $request_data->trgTarget;
        $itrwID     =   $request_data->itrwID;

        $insertedTargetID       = $targetModel->insertTarget($trgTarget, $itrwID);

        return $this->respondCreated([
            'data'      => $insertedTargetID,
            'message'   => 'Target created'
        ]);
    }


    public function accomplish($trgID)
    {
        $targetModel    =   new TargetModel();
        $res = $targetModel->accomplishTarget($trgID);

        return $this->respondUpdated(
            [
                'message'   =>  'target accomplished',
                'result'    => $res
            ]
        );
    }


    public function unaccomplish($trgID)
    {
        $targetModel    =   new TargetModel();
        $targetModel->unaccomplishTarget($trgID);

        return $this->respondUpdated(['message' =>  'target unaccomplished']);
    }

    public function update($id = null)
    {
        $targetModel    = new TargetModel();
        
        $targetItem     = $targetModel->find($id);
        if(!$targetItem) return $this->failNotFound("No data found");

        $request_data   = $this->request->getJSON();
        $trgTarget      = $request_data->trgTarget;

        $targetModel->updateTarget($id, $trgTarget);

        return $this->respondUpdated([
            'message'   => 'Target updated'
        ]);
    }

    public function delete($id = null)
    {
        $targetModel    = new TargetModel();
        
        $targetItem     = $targetModel->find($id);
        if(!$targetItem) return $this->failNotFound("No data found");

        $targetModel->delete($id);

        return $this->respondDeleted([
            'message'   => 'Target deleted'
        ]);
    }
}
