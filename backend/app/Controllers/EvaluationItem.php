<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\EvaluationItemModel;
use App\Models\InterviewModel;
use App\Models\InterviewEvaluationModel;

use App\Controllers\PositionEvaluation;

class EvaluationItem extends BaseController
{

    use ResponseTrait;

    public function index()
    {
        $evaluationModel = new EvaluationItemModel();
        $evaluationList  = $evaluationModel->getEvaluationItem();
        
        return $this->respond([
            'message'   => 'evaluation item list',
            'data'      => $evaluationList,
            'statusCode'=> 200
        ]);
    }

    public function show($id = null)
    {
        $evaluationModel    = new EvaluationItemModel();
        $evaluationItem     = $evaluationModel->findEvaluationByID($id);

        if(!$evaluationItem) return $this->failNotFound("No data found!");

        return $this->respond([
            'message'   => "Evaluation item number $id",
            'data'      => $evaluationItem,
            'statusCode'=> 200
        ]);
    }

    public function create()
    {
        $evaluationModel                = new EvaluationItemModel();
        $positionEvaluationController   = new PositionEvaluation();
        $interviewEvaluationModel       = new InterviewEvaluationModel();
        $interviewModel                 = new InterviewModel();

        $request_data       = $this->request->getJSON();

        $evaName            = $request_data->evaName;
        $secID              = $request_data->secID;
        $evaMaxValue        = $request_data->evaMaxValue;
        $positions          = $request_data->positions ? $request_data->positions : null;

        $evaID = $evaluationModel->insertEvaluationItem($evaName, $secID, $evaMaxValue);

        if($positions)
        {
            foreach($positions as $position)
            {
                $positionEvaluationController->insertOne($position->posID, $evaID);
                $relatedInterview   =   $interviewModel->getPositionRelatedInterview($position->posID);

                foreach($relatedInterview as $interview)
                {
                    $itrwID     = $interview['itrwID'];
                    $interviewEvaluationModel->insertInterviewEvaluation($itrwID, $evaID, $evaMaxValue);
                }
            }
        }
        else
        {
            $positionEvaluationController->insertAll($evaID);
            $relatedInterview   =   $interviewModel->getLockedInterview();

            foreach($relatedInterview as $interview)
            {
                $itrwID     = $interview['itrwID'];
                $interviewEvaluationModel->insertInterviewEvaluation($itrwID, $evaID, $evaMaxValue);
            }
        }

        return $this->respondCreated([
            'statusCode'    => 200,
            'data'          => $evaID,
            'message'       => "Evalutation created"
        ]);
    }
    
    public function update($id = null)
    {
        $evaluationModel    = new EvaluationItemModel();
        
        $evaluationItem     = $evaluationModel->find($id);
        if(!$evaluationItem) return $this->failNotFound("No data found!");
        
        $request_data       = $this->request->getJSON();
        $data = [
            'evaName'       => $request_data->evaName,
            'secID'         => $request_data->secID,
            'evaMaxValue'   => $request_data->evaMaxValue
        ];

        $evaluationModel->update($id, $data);

        return $this->respondUpdated([
            'message'       => 'Evaluation updated',
            'statusCode'    => 200
        ]);
    }

    public function delete($id = null)
    {
        $evaluationModel    = new EvaluationItemModel();

        $evaluationItem     = $evaluationModel->find($id);
        if(!$evaluationItem) return $this->failNotFound("No data found!");

        $evaluationModel->delete($id);

        return $this->respondDeleted([
            'statusCode'    => 200,
            'message'       => 'Evaluation deleted'
        ]);
    }
}