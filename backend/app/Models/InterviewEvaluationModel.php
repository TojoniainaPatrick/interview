<?php

namespace App\Models;

use CodeIgniter\Model;

class InterviewEvaluationModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'interviewevaluation';
    protected $primaryKey       = 'itrwID';
    protected $useAutoIncrement = false;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [ 'evaID', 'evaMaxValue', 'interEvaValue' ];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

    // OK
    public function getInterviewEvaluations() { return $this->findAll(); }

    // get all the interview evaluations in the current trimester
    public function currentTrimesterEvaluation()
    {
        $currentDate    = date('Y-m-d');
        $constraint = ['perStartDate <=' => $currentDate, 'perEndDate >=' => $currentDate];
        return $this->select('interviewevaluation.*, period.*')
                    ->join('interview', 'interviewevaluation.itrwID = interview.itrwID')
                    ->join('period', 'interview.perID = period.perID')
                    ->where($constraint)
                    ->findAll();
    }

    // get all the interview evaluations in a trimester
    public function trimesterEvaluation($trimesterID)
    {
        return $this->select('interviewevaluation.*, period.*')
                    ->join('interview', 'interviewevaluation.itrwID = interview.itrwID')
                    ->join('period', 'interview.perID = period.perID')
                    ->where('period.perID', $trimesterID)
                    ->findAll();
    }

    //get all the interview evaluations of one department
    public function departmentEvaluation($departementID)
    {
        return $this->select('interviewevaluation.*, period.*')
                    ->join('interview', 'interviewevaluation.itrwID = interview.itrwID')
                    ->join('period', 'interview.perID = period.perID')
                    ->join('user', 'interview.userID = user.userID')
                    ->join('departement', 'user.deptID = departement.deptID')
                    ->where('departement.deptID', $departementID)
                    ->findAll();
    }

    //get all the interview evaluations of one employee
    public function employeeEvaluation($userID)
    {
        return $this->select('interviewevaluation.*, period.*')
                    ->join('interview', 'interviewevaluation.itrwID = interview.itrwID')
                    ->join('period', 'interview.perID = period.perID')
                    ->join('user', 'interview.userID = user.userID')
                    ->where('user.userID', $userID)
                    ->findAll();
    }

    public function showInterviewEvaluations($id)
    { 
        return $this->select('interviewevaluation.*, evaluationitem.*, section.*')
                    ->join('evaluationitem', 'interviewevaluation.evaID = evaluationitem.evaID')
                    ->join('section', 'evaluationitem.secID = section.secID')
                    ->where('itrwID', $id)
                    ->findAll();
    }
    
    // OK
    public function insertInterviewEvaluation($interviewID, $evaluationID, $evaluationMaxValue)
    {
        $data = [
            'itrwID'        => $interviewID,
            'evaID'         => $evaluationID,
            'evaMaxValue'   => $evaluationMaxValue
        ];

        return $this->insert($data);
    }

    //ok
    public function deleteInterviewEvaluation($itrwID, $evaID)
    {
        $constraint = ['itrwID' => $itrwID, 'evaID' => $evaID];
        $this   ->where($constraint)
                ->delete();
    }
    
    public function updateValue($itrwID, $evaID, $note)
    {
        $constraint = ['itrwID' => $itrwID, 'evaID' => $evaID];

        $this   ->set(['interEvaValue'=>$note])
                ->where($constraint)
                ->update();
    }
}
