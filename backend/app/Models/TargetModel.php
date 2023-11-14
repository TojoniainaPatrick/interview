<?php

namespace App\Models;

use CodeIgniter\Model;

class TargetModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'targets';
    protected $primaryKey       = 'trgID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [ 'trgTarget', 'trgIsAccomplished', 'itrwID' ];

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

    // find all targets
    public function getTargets() { return $this->findAll(); }

    // find an interview targets
    public function getInterviewTargets($interviewID)
    {
        return $this->where('itrwID', $interviewID)
                    ->findAll();
    }

    // create target
    public function insertTarget($targetText, $interviewID)
    {
        $targetData = [
            'trgTarget' =>  $targetText,
            'itrwID'    =>  $interviewID
        ];

        return $this->insert($targetData);
    }

    // target accomplished
    public function accomplishTarget($targetID)
    {
        try 
        {
            $this   ->update($targetID, ['trgIsAccomplished' => 1]);
            return true;
        }
        catch (\Exception $error) 
        {
            return $error->getMessage();
        }
    }

    // target not accomplished
    public function unaccomplishTarget($targetID)
    {
        $this   ->update($targetID, ['trgIsAccomplished' => 0]);
    }


    // update target
    public function updateTarget($targetID, $trgTarget)
    {
        $this   ->update($targetID, ['trgTarget' => $trgTarget]);
    }
}
