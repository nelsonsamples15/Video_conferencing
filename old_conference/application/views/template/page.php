<!DOCTYPE html>
<html>
<head>
	<title><?php echo $title; ?></title>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/bootstrap-theme.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/animate.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/my_custom.css">

	<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.min.js"></script>
</head>
<body>
	<input type="hidden" value="<?php echo base_url(); ?>" class="baseUrl">
	

		<?php $this->load->view($content); ?>

	</div>

</body>
</html>


<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootstrap.min.js"></script>