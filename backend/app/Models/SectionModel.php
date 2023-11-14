<?php

namespace App\Models;

use CodeIgniter\Model;

class SectionModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'section';
    protected $primaryKey       = 'secID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [ 'secName' ];

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

    public function getSections() 
    { 
        return $this
                    ->orderBy('secID', 'DESC')
                    ->findAll(); 
    }

    public function findSection($sectionID) { return $this->find($sectionID); }

    public function insertSection($sectionName)
    {
        $sectionData = [
            'secName'   => $sectionName
        ];

        return $this->insert($sectionData);
    }

    public function updateSection($sectionID, $sectionName)
    {
        $sectionData = [
            'secName'   => $sectionName
        ];

        $this->update($sectionID, $sectionData);
    }

    public function deleteSection($sectionID)
    {
        $this->delete($sectionID);
    }
}
