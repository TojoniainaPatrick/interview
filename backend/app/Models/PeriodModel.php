<?php

namespace App\Models;

use CodeIgniter\Model;

class PeriodModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'period';
    protected $primaryKey       = 'perID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [ 'perName', 'perStartDate', 'perEndDate', 'yooID' ];

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

    public function getPeriod() { return $this->findAll(); }

    public function getOnePeriod($id) { return $this->findOne($id); }

    public function getAYearPeriods($yearID)
    {
        $result = $this ->select('*')
                        ->where('yooID', $yearID)
                        ->findAll();

        return $result;
    }

    public function insertPeriod($name, $start, $end, $yearID)
    {
        $periodData = [
            'perName'       => $name,
            'perStartDate'  => $start,
            'perEndDate'    => $end,
            'yooID'         => $yearID
        ];

        return $this -> insert($periodData);
    }

}
