<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use CodeIgniter\HTTP\CLIRequest;
use CodeIgniter\HTTP\IncomingRequest;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;

/**
 * Class BaseController
 *
 * BaseController provides a convenient place for loading components
 * and performing functions that are needed by all your controllers.
 * Extend this class in any new controllers:
 *     class Home extends BaseController
 *
 * For security be sure to declare any new methods as protected or private.
 */
abstract class BaseController extends Controller
{
    /**
     * Instance of the main Request object.
     *
     * @var CLIRequest|IncomingRequest
     */
    protected $request;

    /**
     * An array of helpers to be loaded automatically upon
     * class instantiation. These helpers will be available
     * to all other controllers that extend BaseController.
     *
     * @var array
     */
    protected $helpers = [];

    /**
     * Be sure to declare properties for any property fetch you initialized.
     * The creation of dynamic property is deprecated in PHP 8.2.
     */
    // protected $session;

    /**
     * @return void
     */
    public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger)
    {
        // Do Not Edit This Line
        parent::initController($request, $response, $logger);

        // Preload any models, libraries, etc, here.

        // E.g.: $this->session = \Config\Services::session();
    }
}


// TRAITER LES RESULTATS

// $query = $this->db->get('etudiant');
// $etudiants = $query->result();

// foreach ($etudiants as $etudiant) {
//     // Traitez chaque enregistrement ici
//     echo $etudiant->nom;
//     echo $etudiant->prenom;
//     // ...
// }


// jointure
// $this->db->select('utilisateurs.nom, commandes.id');
// $this->db->from('utilisateurs');
// $this->db->join('commandes', 'utilisateurs.id = commandes.utilisateur_id');
// $query = $this->db->get();


// $this->db->select('utilisateurs.nom');
// $this->db->from('utilisateurs');
// $this->db->join('commandes', 'utilisateurs.id = commandes.utilisateur_id', 'left');
// $this->db->where('commandes.id IS NULL');
// $query = $this->db->get();


// trois tables
// $this->db->select('utilisateurs.nom, commandes.id AS numero_commande, produits.nom AS nom_produit');
// $this->db->from('utilisateurs');
// $this->db->join('commandes', 'utilisateurs.id = commandes.utilisateur_id', 'inner');
// $this->db->join('produits', 'commandes.produit_id = produits.id', 'inner');
// $query = $this->db->get();


// beforeinsert
// namespace App\Models;

// use CodeIgniter\Model;

// class ProduitModel extends Model
// {
//     protected $table = 'produits';
//     protected $primaryKey = 'id';
//     protected $allowedFields = ['nom', 'description', 'prix'];

//     protected $beforeInsert = ['ajouterPrefixeNom'];

//     protected function ajouterPrefixeNom(array $data)
//     {
//         // Ajouter un préfixe au nom du produit
//         $data['nom'] = 'Produit: ' . $data['nom'];

//         return $data;
//     }
// }