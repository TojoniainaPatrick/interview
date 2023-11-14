<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\DepartmentModel;

class Department extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */

    use ResponseTrait;

    public function index()
    {
        $departmentModel    = new DepartmentModel();

        $departmentList     = $departmentModel -> findAll();

        return $this -> respond([
            'message'   => 'department list',
            'data'      => $departmentList,
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
        $departmentModel    = new DepartmentModel();

        $departmentItem     = $departmentModel -> find($id);

        if(!$departmentItem) return $this -> failNotFound("No data found!");

        return $this -> respond([
            'message'   => "department number $id",
            'data'      => $departmentItem,
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
