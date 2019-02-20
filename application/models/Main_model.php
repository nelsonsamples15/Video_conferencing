<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main_model extends CI_Model {

	public function __construct(){
		parent::__construct();

	}
	public function check_room($room){
		$myquery = $this->db->select("id")
							->from('rooms')
							->where('room_name', $room)
							->get();
		return $myquery->num_rows();
	}

	public function save_room($data)
	{
		$this->db->insert('rooms', $data);
		return $this->db->insert_id();
	}


}
