<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;
use App\Models\HeadOfDepartmentModel;

class User extends BaseController
{

    use ResponseTrait;
    
    public function index()
    {
        $model = new UserModel();
        $data = $model->findAll();
        return $this->respond($data);
    }

    public function usersFullInformation()
    {
        $model  = new UserModel();
        $data   = $model->getUsersFullInformation();
        return $this->respond(
            [
                'message'   => 'users full information',
                'data'      =>$data,
            ],
            200
        );
    }


    public function show($id = null)
    {
        $model                  =   new UserModel();
        $headOfDepartmentModel  =   new HeadOfDepartmentModel();

        $request_data           =   $this->request->getJSON();

        $userEmail              =   $request_data->userEmail;
        $userPassword           =   $request_data->userPassword;

        $data                   =   $model->where('userEmail', $userEmail)->first();
        $isHeadOfDepartment     =   0;

        if(!$data) return $this -> failUnauthorized("Adresse mail incorrecte");

        if( $headOfDepartmentModel -> find($data['userID'])) $isHeadOfDepartment = 1;

        $data['isHeadOfDepartment'] = $isHeadOfDepartment;

        if(password_verify($userPassword, $data['userPassword']))
        {
            $response = [
                'data'      =>  $data,
                'message'   =>  "User authenticated"
            ];
            return $this->respond($response, 200);
        }

        return $this->failUnauthorized("Mot de passe incorrecte");
    }

    public function add()
    {
        $model = new UserModel();
        $request_data = $this->request->getJSON();
        $hashed_password = password_hash($request_data->userPassword, PASSWORD_DEFAULT);
        $data = [
            'userName'          => $request_data->userName, 
            'userLastName'      => $request_data->userLastName, 
            'userBirthDate'     => $request_data->userBirthDate, 
            'userEmail'         => $request_data->userEmail,
            'userPassword'      => $hashed_password,
            'userIsActive'      => $request_data->userIsActive,
            'deptID'            => $request_data->deptID,
            'posID'             => $request_data->posID,
            'userProfilePhoroID'=> $request_data->userProfilePhoroID,
        ];
        $model->insert($data);
        return $this->respond($model->getInsertID());
    }

}
