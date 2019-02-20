<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	public function __construct(){
		parent::__construct();

	}

	// public function index()
	// {
	// 	$data = array(
	// 		"title"=>"Video Conferencing",
	// 		"content"=>"pages/index"
	// 		);
	// 	$this->load->view('template/page', $data);
	// }

	// public function login()
	// {
	// 	$this->form_validation->set_rules("name", "Fullname", "trim|required");
	// 	$this->form_validation->set_rules("type", "Type", "trim|required");

	// 	if($this->form_validation->run() === FALSE){
	// 		$data = array(
	// 			"title"=>"Video Conferencing",
	// 			"content"=>"pages/index"
	// 			);
	// 		$this->load->view('template/page', $data);
	// 	}else{
	// 		$user_data = array(
	// 				"name"=>$this->input->post("name", TRUE),
	// 				"type"=>$this->input->post("type", TRUE),
	// 			);

	// 		$this->session->set_userdata('user_data', $user_data);

	// 		redirect('dashboard/index');
	// 	}

		
	// }

	// public function logout(){
	// 	$this->session->unset_userdata('user_data');
	// 	redirect("main");
	// }

}
