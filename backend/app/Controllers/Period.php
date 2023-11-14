<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

use App\Models\PeriodModel;
use App\Models\YearOfOperationModel;

use App\Controllers\Interview;

class Period extends BaseController
{

    use ResponseTrait;

    public function index()
    {
        $periodModel = new PeriodModel();
        $result = $periodModel->getPeriod();

        if(!$result) { return $this->failNotFound('No data found'); }

        return $this->respond(
            [
                'data'      => $result,
                'message'   => 'periodlist'
            ],
            200
        );
    }

    
    public function createPeriods($yearID)
    {
        $yearOfOpertionModel    = new YearOfOperationModel();
        $periodModel            = new PeriodModel();
        $interviewController    = new Interview();


        $year                   = $yearOfOpertionModel->findByID($yearID)['yooYear'];

        $periodInfo = [
            ['Trimestre 1',"$year-01-01", "$year-03-31"],
            ['Trimestre 2',"$year-04-01", "$year-06-30"],
            ['Trimestre 3',"$year-07-01", "$year-09-30"],
            ['Trimestre 4',"$year-10-01", "$year-12-31"]
        ];

        foreach($periodInfo as $index=>$info)
        {
            list($periodName, $startDate, $endDate) = $info;
            
            $perID = $periodModel->insertPeriod($periodName, $startDate, $endDate, $yearID);
            $interviewController->createInterviews($perID);
        }

    }

}
