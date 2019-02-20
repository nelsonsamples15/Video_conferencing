<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('main_model');
	}

	public function index()
	{
		// if(empty($this->session->userdata("user_data"))){
		// 	redirect('main');
		// }
		// $user = $this->session->userdata("user_data");

		$data = array(
			"title"=>"Video Conferencing",
			"content"=>"dashboard/index"
			);
		$this->load->view('template/dashboard', $data);
	}

	public function check_room(){
		$room = $this->input->post('sRoom', TRUE);

		$check = $this->main_model->check_room($room);

		if($check){
			echo 'exist';
		}else{
			echo 'open';
		}
	}

	public function save_room(){
		$room = $this->input->post('sRoom', TRUE);
		$data = array(
					"room_name"=>trim($room),
					"date_created"=>date('Y-m-d H:i:s')
				);

		$result = $this->main_model->save_room($data);

		if($result){
			echo 'success';
		}else{
			echo 'failed';
		}
	}
}
