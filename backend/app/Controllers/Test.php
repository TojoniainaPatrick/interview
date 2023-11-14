<?php

    namespace App\Controllers;
    use CodeIgniter\API\ResponseTrait;

    class Test extends BaseController
    {
        use ResponseTrait;
        
        public function bonjour()
        {
            $db = \Config\database::connect();

            $query   = $db->query('SELECT * FROM `interview`');
            $results = $query->getResult();

            $data = [
                'data' => $results,
                'message' => 'interview list'
            ];

            return $this->respond($data, 404);
        }

        public function paramsTest($param1, $param2)
        {
            return $this->response->setStatusCode(500)->setJSON([
                'param1' => $param1,
                'param2' => $param2
            ]);
        }

        public function paramsTest1($param1)
        {
            return $this->response->setStatusCode(500)->setJSON([
                'param1' => $param1
            ]);
        }
    }