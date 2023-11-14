<?php

namespace App\Models;

use CodeIgniter\Model;

class CommentResponseModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'commentresponse';
    protected $primaryKey       = 'responseID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['responseText', 'commentID'];

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

    public function getCommentResponse($commentID)
    {
        return $this->where('commentID', $commentID)
                    ->findAll();
    }

    public function insertResponse($responseText, $commentID)
    {
        $responseData   = [
            'responseText'  => $responseText,
            'commentID'     => $commentID
        ];

        return $this->insert($responseData);
    }

    public function updateResponse($responseID, $responseText)
    {
        $this->update($responseID, ['responseText'=>$responseText]);
    }

    public function deleteResponse($responseID)
    {
        $this->delete($responseID);
    }

    public function deleteCommentResponses($commentID)
    {
        $this   ->where('commentID', $commentID)
                ->delete();
    }
}
