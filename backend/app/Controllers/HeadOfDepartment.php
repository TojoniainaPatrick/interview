<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\HeadOfDepartmentModel;

class HeadOfDepartment extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */

    use ResponseTrait;

    public function index()
    {
        $headOfDepartmentModel  = new HeadOfDepartmentModel();

        $headOfDepartmentList   = $headOfDepartmentModel -> findAll();

        return $this -> resond([
            'message'   => 'head od department list',
            'data'      => $headOfDepartmentList,
            'statusCode'=> 200
        ]);
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {
        $headOfDepartmentModel  = new HeadOfDepartmentModel();

        $headOfDepartmentItem   = $headOfDepartmentModel -> find($id);

        if(!$headOfDepartmentItem) return $this -> failNotFound("No data found!");

        return $this -> respond([
            'message'   => "head of department number $id",
            'data'      => $headOfDepartmentItem,
            'statusCode'=> 200
        ]);
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function create()
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function update($id = null)
    {
        //
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        //
    }
}
