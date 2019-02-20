<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('users_model');
	}

	public function index()
	{
		if(empty($this->session->userdata("user_data"))){
			redirect('main');
		}
		$user = $this->session->userdata("user_data");

		$data = array(
			"title"=>"Video Conferencing",
			"content"=>"dashboard/index",
			"my_name"=>$user["name"],
			"type"=>$user["type"]
			);
		$this->load->view('template/dashboard', $data);
	}
}
