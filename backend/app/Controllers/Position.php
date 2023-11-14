<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\PositionModel;

class Position extends BaseController
{

    use ResponseTrait;

    public function index()
    {
        $positionModel  = new PositionModel();

        $positionList   = $positionModel->getPositions();

        return $this -> respond([
            'message'   => 'position list',
            'data'      => $positionList,
            'statusCode'=> 200
        ]);
    }

    public function show($id = null)
    {
        $positionModel  = new PositionModel();
        $positionItem    = $positionModel->findPosition($id);
        
        if(!$positionItem) return $this->failNotFound("No data found!");

        return $this -> respond([
            'message'   => "position number $id",
            'data'      => $positionItem,
            'statusCode'=>  200
        ]);
    }

}
