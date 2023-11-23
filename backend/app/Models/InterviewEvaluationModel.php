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
