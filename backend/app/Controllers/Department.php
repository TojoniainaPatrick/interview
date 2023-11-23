<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\DepartmentModel;

class Department extends BaseController
{

    use ResponseTrait;

    public function index()
    {
        $departmentModel    = new DepartmentModel();

        $departmentList     = $departmentModel -> getDepartments();

        return $this -> respond([
            'message'   => 'department list',
            'data'      => $departmentList,
            'statusCode'=> 200
        ]);
    }

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
}
