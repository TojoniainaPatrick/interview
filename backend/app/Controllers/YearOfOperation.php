<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\YearOfOperationModel;
use App\Controllers\Period;

class YearOfOperation extends BaseController
{

    use ResponseTrait;

    public function index()
    {
        $yooModel   = new YearOfOperationModel();
        $result     = $yooModel->getYearList();

        return $this->respond(
            [
                'data'      => $result,
                'message'   => 'year of operation list'
            ],
            200
        );
    }

    public function find($id)
    {
        $yooModel = new YearOfOperationModel();
        $result = $yooModel->find($id);

        if(!$result)
        {
            return $this->failNotFound("No data found");
        }

        return $this->respond(
            [
                'data'      => $result,
                'message'   => "year number $id"
            ],
            200
        );
    }

    public function currentYear()
    {
        $yooModel = new YearOfOperationModel();
        $result = $yooModel->getCurrentYear();

        if(!$result)
        {
            return $this->failNotFound("No data found");
        }

        return $this->respond(
            [
                'data'      => $result,
                'message'   => "the current year"
            ],
            200
        );
    }

    public function create()
    {
        $yooModel           = new YearOfOperationModel();
        $periodController   = new Period();

        $lastYear   = $yooModel->getLastYear();

        $year       = $lastYear ? $lastYear + 1 : date('Y');
        $yearID     = $yooModel ->insertYear($year);

        $periodController->createPeriods($yearID);

        return $this -> respond(['message' => 'year created'], 200);
    }

}
