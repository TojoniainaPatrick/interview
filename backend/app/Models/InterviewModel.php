<?php

namespace App\Models;

use CodeIgniter\Model;

class InterviewModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'interview';
    protected $primaryKey       = 'itrwID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [ 'itrwDate', 'userID', 'itrwStatus', 'perID' ];

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

    //  OK
    public function getInterviews()
    { 
        return $this->select('interview.*, period.*, yearofoperation.*, user.*, position.*')
                    ->join('period', 'interview.perID = period.perID')
                    ->join('yearofoperation', 'period.yooID = yearofoperation.yooID')
                    ->join('user', 'interview.userID = user.userID')
                    ->join('position', 'user.posID = position.posID')
                    ->orderBy('itrwID', 'DESC')
                    ->findAll();
        ;
    }

    //  OK
    public function findInterviewById($id) { return $this->find($id); }

    //  OK
    public function getFinishedInterview()
    {
        return $this->where('itrwStatus', 'finished')->findAll();
    }

    //  OK
    public function getCurrentInterview()
    {
        return $this->where('itrwStatus', 'current')->findAll();
    }

    //  OK
    public function getLockedInterview()
    {
        return $this->where('itrwStatus', 'locked')->findAll();
    }

    //  OK
    public function getPositionRelatedInterview($posID)
    {
        return $this->select('interview.*')
                    ->join('user', 'interview.userID = user.userID')
                    ->where('user.posID', $posID)
                    ->where('interview.itrwStatus', 'locked')
                    ->findAll();
    }

    // OK
    public function getInterviewUser($interviewID)
    {
        return $this->select('interview.*, user.*')
                    ->join('user', 'interview.userID = user.userID')
                    ->where('interview.itrwID', $interviewID)
                    ->first();
    }

    //  OK
    public function insertInterview($userID, $periodID)
    {
        $interviewData = [
            'userID'    => $userID,
            'perID'     => $periodID
        ];

        return $this->insert($interviewData);
    }
}
