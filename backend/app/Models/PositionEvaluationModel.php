<?php

namespace App\Models;

use CodeIgniter\Model;

class PositionEvaluationModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'positionevaluation';
    protected $primaryKey       = 'posID';
    protected $useAutoIncrement = false;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['evaID'];

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
    public function getPositionEvaluation($posID)
    {
        return $this->select('positionevaluation.*, evaluationItem.*')
                    ->join('evaluationItem', 'positionevaluation.evaID = evaluationItem.evaID')
                    ->where('positionevaluation.posID', $posID)
                    ->findAll();
    }
    // OK
    public function getPositionEnabledEvaluation($posID)
    {
        return $this->select('positionevaluation.*, evaluationItem.*')
                    ->join('evaluationItem', 'positionevaluation.evaID = evaluationItem.evaID')
                    ->where('positionevaluation.posID', $posID)
                    ->where('evaluationItem.evaStatus', 1)
                    ->findAll();
    }

    //  OK
    public function insertPositionEvaluation($posID, $evaID)
    {
        $data = [
            'posID' => $posID,
            'evaID' => $evaID
        ];

        return $this->insert($data);
    }
}
