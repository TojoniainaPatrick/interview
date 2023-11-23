<?php

namespace App\Models;

use CodeIgniter\Model;

class EvaluationItemModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'evaluationitem';
    protected $primaryKey       = 'evaID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [ 'evaName', 'secID', 'evaMaxValue', 'evaStatus' ];

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

    public function getEvaluationItem() 
    { 
        return $this
                    ->orderBy('evaID', 'DESC')
                    ->findAll(); 
    }

    public function getSectionEvaluation($secID)
    {
        return $this->where('secID', $secID)
                    ->findAll();
    }

    public function findEvaluationByID($evaID) 
    { 
        return $this->find($evaID); 
    }

    public function insertEvaluationItem($evaName, $secID, $evaMaxValue)
    {
        $data = [
            'evaName'       => $evaName,
            'secID'         => $secID,
            'evaMaxValue'   => $evaMaxValue
        ];

        return $this->insert($data);
    }

    public function enableEvaluation($evaluationID)
    {
        $this->update($evaluationID, ['evaStatus' => 1]);
    }

    public function desableEvaluation($evaluationID)
    {
        $this->update($evaluationID, ['evaStatus' => 0]);
    }

}
