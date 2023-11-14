<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\PositionEvaluationModel;
use App\Models\PositionModel;

class PositionEvaluation extends BaseController
{
    use ResponseTrait;

    public function index($posID)
    {
        $positionEvaluationModel    =   new PositionEvaluationModel();
        return $this->respond(
            ['data' =>  $positionEvaluationModel->getPositionEnabledEvaluation($posID)],
            200
        );
    }

    public function insertOne($posID, $evaID)
    {
        $positionEvaluationModel    =   new PositionEvaluationModel();
        $positionEvaluationModel->insertPositionEvaluation($posID, $evaID);
    }

    public function insertAll($evaID)
    {
        $positionEvaluationModel    = new PositionEvaluationModel();
        $positionModel              = new PositionModel();

        $positionList               = $positionModel->getPositions();

        foreach($positionList as $position)
        {
            $posID = $position['posID'];
            $positionEvaluationModel->insertPositionEvaluation($posID, $evaID);
        }
    }

    public function findEvaluation($posID)
    {
        $positionEvaluationModel = new PositionEvaluationModel();

        return $this->respond(
            [
                'data'      => $positionEvaluationModel->getPositionEvaluation($posID),
                'message'   => "les evaluations pour le poste numero $posID"
            ],
            200
        );
    }
}