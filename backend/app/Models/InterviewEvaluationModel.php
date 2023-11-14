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

    public function showInterviewEvaluations($id) { return $this->find($id); }
    
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
}
