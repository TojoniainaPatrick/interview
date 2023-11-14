<?php

namespace App\Models;

use CodeIgniter\Model;

class InterviewCommentModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'interviewcomment';
    protected $primaryKey       = 'commentID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['commentText', 'itrwID'];

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

    public function getInterviewComment($interviewID)
    {
        return $this->where('itrwID', $interviewID)
                    ->findAll();
    }

    public function insertComment($commentText, $interviewID)
    {
        $commentData = [
            'commentText'   => $commentText,
            'itrwID'        => $interviewID
        ];

        return $this->insert($commentData);
    }

    public function updateComment($commentID, $commentText)
    {
        return $this->update($commentID, ['commentText'   => $commentText]);
    }

    public function deleteComment($commentID)
    {
        $this->delete($commentID);
    }
}
