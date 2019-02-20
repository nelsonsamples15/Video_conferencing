$(document).ready(function(){
	var baseUrl = $("#baseUrl").val(),
		enrollID = $("#the_enroll_id").val(),
		uiThis = $(".save-input-class"),
		uiName = $("#my_name").val();

		$(".chat-contain").animate({scrollTop : 4000},800);

	uiThis.off('keypress').on('keypress', function(e){
		var type = e.which,
			uiContain = $(this).val().trim();

		if(type == 13){

			$.ajax({
				url : baseUrl+'class_schedule/save_class_chat',
				type: 'POST',
				data: {enroll_id:enrollID, content:uiContain},
				success: function(res){
					if(res.trim() == 'success'){

						var oData = {
							"enroll_id":enrollID,
							"created":uiName,
							'my_id':$("#my_id").val(),
							"content":JSON.stringify(uiContain)
						}
						socket.emit("display_class_chat", oData);


					}

					$(".save-input-class").val('');
				}
			});
		}
	});

	// For nodejs connections
	socket.on("display_class_chat", function(oData){

		
		if(parseInt(enrollID) == parseInt(oData['enroll_id']))
		{
			var uiContainer = $(".chat-contain"),
				content = JSON.parse(oData['content']);

			if(oData['created'] == uiName){
				var sHtml = '<div class="class-my-chat">'+
							'	<div class="class-my-name">'+oData['created']+'</div>'+
							'	<span class="class-content-desc">'+content+'</span>'+
							'</div>';
					uiContainer.append(sHtml);
			}else{
				var sHtml = '<div class="class-other-chat">'+
							'	<div class="class-other-name">'+oData['created']+'</div>'+
							'	<span class="class-content-desc">'+content+'</span>'+
							'</div>';
					uiContainer.append(sHtml);
			}

			 uiContainer.animate({scrollTop : 4000},800);
		}

	});

});