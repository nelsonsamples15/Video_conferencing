<div class="container">

	<div class="col-sm-12 text-center">
		<h1>Welcome to Video Conferencing</h1>
		<button class="btn custom-btn-primary" id="login">Login</button>
		<button class="btn custom-btn-primary" id="signup">Create Account</button>
	</div>

	<div class="row">
		<div class="col-sm-12">
			<div class="col-md-offset-4 col-md-4 form-container hide-me" id="login-container" style="display:none;">
				<div class="col-sm-12">
					<div class="alert alert-danger login-error-msg hidden" role="alert"></div>
				</div>
				<div class="col-sm-12 padtop10">
					<label>Username</label>
					<input type="text" name="username" class="form-control login-username form-input" placeholder="Enter Username">
				</div>
				<div class="col-sm-12 padtop10">
					<label>Password</label>
					<input type="password" name="password" class="form-control login-password form-input" placeholder="Enter Password">
				</div>
				<div class="col-sm-12 padtop10 text-right">
					<button class="btn btn-primary" id="login-save">Login</button>
					<button class="btn btn-danger" id="login-clear">Clear</button>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="col-md-offset-4 col-md-4 form-container hide-me" id="signup-container" style="display:none;">
				<div class="col-sm-12 padtop10">
					<label>Fullname</label>
					<input type="text" name="fullname" class="form-control signup-fullname form-input" placeholder="Enter Username">
				</div>
				<div class="col-sm-12 padtop10">
					<label>Username</label>
					<input type="text" name="username" class="form-control signup-username form-input" placeholder="Enter Username">
				</div>
				<div class="col-sm-12 padtop10">
					<label>Password</label>
					<input type="password" name="password" class="form-control signup-password form-input" placeholder="Enter Password">
				</div>
				<div class="col-sm-12 padtop10 text-right">
					<button class="btn btn-primary" id="signup-save">SignUp</button>
					<button class="btn btn-danger" id="signup-clear">Clear</button>
				</div>
			</div>
		</div>
	</div>

</div>

<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/login_signup.js"></script>