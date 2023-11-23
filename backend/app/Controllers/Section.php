<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\SectionModel;
use App\Models\EvaluationItemModel;
use App\Controllers\EvaluationItem;

class Section extends BaseController
{

    use ResponseTrait;

    public function index()
    {
        $sectionModel   = new SectionModel();

        $sectionList    = $sectionModel->getSections();

        return $this -> respond([
            'message'   => 'section list',
            'data'      => $sectionList,
            'statusCode'=>  200
        ]);
    }

    public function show($id = null)
    {
        $sectionModel   = new SectionModel();
        $sectionItem    = $sectionModel->findSection($id);
        
        if(!$sectionItem) return $this->failNotFound("No data found!");

        return $this->respond([
            'message'   => "section number $id",
            'data'      => $sectionItem,
            'statusCode'=>  200
        ]);
    }

    public function create()
    {
        $sectionModel   = new SectionModel();

        $request_data   = $this->request->getJSON();
        $secName        = $request_data->secName;

        $insertedSectionID =  $sectionModel->insertSection($secName);

        return $this->respondCreated([
            'statusCode'    => 200,
            'data'          => $insertedSectionID,
            'message'       => "Section created"
        ]);
    }

    public function update($id = null)
    {
        $sectionModel   = new SectionModel();
        $sectionItem    = $sectionModel->find($id);
        
        if(!$sectionItem) return $this->failNotFound("No data found!");

        $request_data   = $this->request->getJSON();
        $secName        = $request_data->secName;


        $sectionModel->updateSection($id, $secName);

        return $this->respondUpdated([
            'statusCode'    => 200,
            'message'       => "Section updated"
        ]);
    }

    public function delete($id = null)
    {
        $sectionModel               = new SectionModel();
        $evaluationItemModel        = new EvaluationItemModel();
        $evaluationItemController   = new EvaluationItem();

        $sectionItem    = $sectionModel->find($id);
        
        if(!$sectionItem) return $this->failNotFound("No data found!");

        $sectionModel->deleteSection($id);

        $sectionEvaluations = $evaluationItemModel->getSectionEvaluation($id);

        foreach($sectionEvaluations as $evaluation)
        {
            $evaluationItemController->desablePublicFunction($evaluation['evaID']);
        }
        
        return $this->respondDeleted([
            'statusCode'    => 200,
            'message'       => "Section deleted"
        ]);
    }
}
