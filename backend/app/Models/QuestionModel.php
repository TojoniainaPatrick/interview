<?php

namespace App\Models;

use CodeIgniter\Model;

class QuestionModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'question';
    protected $primaryKey       = 'questionID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['questionText', 'isReplied', 'itrwID', 'response'];

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

    // get all questions
    public function getQuestions() { return $this->findAll(); }


    // get questions related to an interview
    public function getInterviewQuestions($interviewID)
    {
        return $this->where('itrwID', $interviewID)
                    ->findAll();
    }


    // insert new question  OK
    public function insertQuestion($questionText, $interviewID)
    {
        $questionData    = [
            'questionText'  =>  $questionText,
            'itrwID'        =>  $interviewID
        ];

        return $this->insert($questionData);
    }


    // turn the question status into replied
    public function replyQuestion($questionID)
    {
        $this->update($questionID, ['isReplied'=>1]);
    }


    // turn the question status into not replied
    public function unreplyQuestion($questionID)
    {
        $this->update($questionID, ['isReplied'=>0]);
    }


    // update question
    public function updateQuestion($questionID, $questionText)
    {
        $this->update($questionID, ['questionText'=>$questionText]);
    }


    // delete question
    public function deleteQuestion($questionID)
    {
        $this->delete($questionID);
    }


    // answer the question
    public function respondQuestion($questionID, $response)
    {
        $this->update($questionID, ['response'=>$response]);
        $this->replyQuestion($questionID);
    }


    // delete response
    public function deleteResponse($questionID)
    {
        $this->update($questionID, ['response'=>null]);
        $this->unreplyQuestion($questionID);
    }
}
