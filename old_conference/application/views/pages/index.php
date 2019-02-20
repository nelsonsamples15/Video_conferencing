<div class="container">

	<div class="col-sm-12 text-center">
		<h1>Welcome to Video Conferencing</h1>
		<!-- <button class="btn custom-btn-primary" id="login">Login</button>
		<button class="btn custom-btn-primary" id="signup">Create Account</button> -->
	</div>

	<div class="row">
		<div class="col-sm-12">
			<div class="col-md-offset-4 col-md-4 form-container hide-me" id="login-container">
				<form method="POST" action="<?php echo base_url(); ?>main/login">
					<div class="col-sm-12 padtop10">
						<label>Your Name</label>
						<input type="text" name="name" class="form-control login-username form-input" placeholder="Enter Username" required>
					</div>
					<div class="col-sm-12 padtop10">
						<label>Type</label>
						<select name="type" class="form-control form-input" required>
							<option value="Start">Start</option>
							<option value="Join">Join</option>
						</select>
					</div>
					<div class="col-sm-12 padtop10 text-right">
						<input type="submit" name="submit" value="Login" class="btn btn-primary">
						<input type="reset" name="reset" value="Clear" class="btn btn-danger">
						<!-- <button class="btn btn-primary" id="login-save">Login</button>
						<button class="btn btn-danger" id="login-clear">Clear</button> -->
					</div>
				</form>
			</div>
			<div class="clearfix"></div>
			
		</div>
	</div>

</div>

<!-- <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/login_signup.js"></script>-->