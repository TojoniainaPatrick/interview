<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'user';
    protected $primaryKey       = 'userID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'userName', 
        'userLastName', 
        'userBirthDate', 
        'userEmail',
        'userPassword',
        'userIsActive',
        'deptID',
        'posID',
        'userProfilePhoroID',
    ];

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
    public function findUserByID($userID)
    {
        return $this->find($userID);
    }

    // get users full information
    public function getUsersFullInformation()
    {
        return $this->select('user.*, departement.*, position.*')
                    ->join('departement', 'user.deptID = departement.deptID')
                    ->join('position', 'user.posID = position.posID')
                    ->findAll();
    }

    public function getUsers() { return $this->findAll(); }
}
