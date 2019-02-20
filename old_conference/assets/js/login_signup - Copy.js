$(document).ready(function(){

	var baseUrl = $(".baseUrl").val();

	$("#login").off("click").on("click", function(){
		var uiLogin = $("#login-container"),
			uiSignup = $("#signup-container");

			if(uiLogin.hasClass('hide-me')){
				uiSignup.addClass('hide-me');
				uiSignup.hide();

				uiLogin.removeClass('hide-me');

				uiLogin.addClass("animated zoomIn");
				uiLogin.show();
			}

			tiggerLogin();
	});

	function tiggerLogin(){
	
		var	btnLogin = $("#login-save"),
			btnCancel = $("#login-clear");


		btnLogin.off('click').on('click', function(){
			var username = $(".login-username").val().trim(),
				password = $(".login-password").val().trim(),
				oError = [];

				if(username == ''){
					oError.push("Username is Required!");
				}
				if(password == ''){
					oError.push("Password is Required!");
				}

				if(username != '' && password != ''){
					$.ajax({
						url : baseUrl+'account/login',
						type : 'POST',
						data : {username:username, password:password},
						dataType: 'json',
						beforeSend : function(){
							btnLogin.html('<i class="fa fa-spinner fa-pulse "></i>');
							btnLogin.attr('disabled', true);
						},
						success : function(oRes){
							btnLogin.html('Login');
							btnLogin.attr('disabled', false);

							if(oRes.status =='success'){

								window.location.href = baseUrl+'dashboard/index';
								
							}else{
								$(".login-error-msg").html(oRes.data.join('<br/>'));
								$(".login-error-msg").removeClass('hidden');
								$(".login-error-msg").css({"margin-bottom":"0px"});
							}

						}
					});
				}else{
					$(".login-error-msg").html(oError.join('<br/>'));
					$(".login-error-msg").removeClass('hidden');
					$(".login-error-msg").css({"margin-bottom":"0px"});
				}
		});

		btnCancel.off('click').on('click', function(){
			$(".login-username").val('');
			$(".login-password").val('');
		});

		
	}

	$("#signup").off("click").on("click", function(){
		var uiLogin = $("#login-container"),
			uiSignup = $("#signup-container");

			if(uiSignup.hasClass('hide-me')){
				uiLogin.addClass('hide-me');
				uiLogin.hide();

				uiSignup.removeClass('hide-me');

				uiSignup.addClass("animated zoomIn");
				uiSignup.show();
			}

			tiggerSignup();
	});

	function tiggerSignup(){
		var btnSignup = $("#signup-save"),
			btnSignupClear = $("#signup-clear");


		btnSignup.off('click').on('click', function(){
			var sName = $(".signup-fullname").val().trim(),
				sUsername = $(".signup-username").val().trim(),
				sPassword = $(".signup-password").val().trim();

				
		});

	}

	

});