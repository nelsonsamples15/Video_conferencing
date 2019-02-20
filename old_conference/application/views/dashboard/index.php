


<script type="text/javascript" src="<?php echo base_url(); ?>assets/third/js/lib/adapter.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/third/js/meeting.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/third/js/room.js"></script>




<!--<script type="text/javascript" src="<?php echo base_url(); ?>assets/second/js/index.js"></script>

<script type="text/javascript" src="<?php echo base_url(); ?>assets/second/js/prettify.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/second/js/loadAndFilter.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/second/js/easyrtc.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/second/js/demo_multistream.js"></script>
-->
<div class="container">

	<div class="col-md-4">
		
		<div class="panel panel-primary">
		  	<div class="panel-heading">Chat Conference</div>
		  	<div class="panel-body">

		  		<div class="chat-contain"></div>

			    
			    <div class="col-sm-12">
			    	<div class="row" >
						<div class="col-sm-12" style="border-top: 2px solid #eee; padding-top: 10px;"></div>
						<div class="input-group">
						  <input type="text" class="form-control save-input-class" placeholder="Enter Chat Here" aria-describedby="basic-addon1">
						  <span class="input-group-addon" id="basic-addon1"><i class="fa fa-comments-o" aria-hidden="true"></i></span>
						</div>
						
						<input type="hidden" value="<?php echo $my_name; ?>" id="my_name">
					</div>

			    </div>
				
			</div>
		</div>

	</div>
	<div class="col-md-8">
		<div class="col-sm-12">

			<div class="col-sm-8">
				<div class="panel panel-primary">
				  <div class="panel-heading">Enter Room Name</div>
				  <div class="panel-body">
				    <div class="col-sm-10">
						<input class="form-control" type="text" id="room-name" placeholder="Room name"/>
					</div>
					<div class="col-sm-2">
						<?php if($type == 'Start'){ ?>
			            	<a href="javascript:void(0)" class="btn btn-primary" id="btn-video-start">Start</a>
			            	<a href="javascript:void(0)" class="btn btn-success hidden"  id="btn-video-join">Join</a>
			            <?php }else{ ?>
			            	<a href="javascript:void(0)" class="btn btn-primary hidden" id="btn-video-start">Start</a>	
			            	<a href="javascript:void(0)" class="btn btn-success"  id="btn-video-join">Join</a>
			            <?php } ?>
		            
		            	<a href="javascript:void(0)" class="btn btn-danger hidden"  disabled id="btn-video-stop">Stop</a>
					</div>
				  </div>
				</div>



			</div>

			
			

			
			<!-- <button class="btn custom-btn-primary" id="login">Start</button> -->
			
		</div>

		<div id="videos">
                <div id="videosWrapper">
				    <div id="localVideoWrap" class='videoWrap'>
					    <video class="videoBox" id="localVideo" autoplay></video>
					</div>
                </div>
			</div>


		<!-- <div class="col-sm-12">
			<div class="row videos">
	            <div class="remote-video">
	              <video width="0" height="0" autoplay="true" id="remote-video" style="border-radius: 20px"></video>
	            </div>
	            <div class="clearfix"></div>
					<div class="col-sm-12 " style="" id="remote-video-label">
						<h4><b>Video Link</b></h4>
					</div>
	            <div class="clearfix"></div>
	            <div class="local-video">
	              <video width="0" height="0" autoplay="true" id="local-video" style="border-radius: 20px" muted></video>
            	</div>
            	<div class="clearfix"></div>
				<div class="col-sm-12 " style="" id="local-video-label">
					<h4><b>Your Video Cam</b></h4>
				</div>
	        </div>
		</div> -->


		        <!--show-->
                <!-- <div id="demoContainer">
                    <div id="connectControls">
                        <button id="connectButton" onclick="connect()">Connect</button>
                        <button id="hangupButton" disabled="disabled" onclick="hangup()">Hangup</button>
                        <div id="iam">Not yet connected...</div>
                        <H3> Video sources</h3>
                        <div id="videoSrcBlk">
                            
                        </div>
                        
                        <br />
                        <strong>Connected users:</strong>
                        <div id="otherClients"></div>
                    </div>

                    <div id="videos">
                        <h3>Local media streams</h3>
                        <div autoplay="autoplay" id="localVideos"></div>
                        <h3>Remote media streams</h3>
                        <div autoplay="autoplay" id="remoteVideos"></div>
                        <div id="acceptCallBox"> 
                            <div id="acceptCallLabel"></div>
                            <button id="callAcceptButton" >Accept</button> <button id="callRejectButton">Reject</button>
                        </div>
                    </div>

                <br style="clear:both;" />
                <hr />
                 <h2>The Code</h2>
                <h3>HTML</h3>
                <pre  id="prettyHTML" class="prettyprint linenums:1">
                </pre>
                <h3>JavaScript</h3>
                <p>The contents of demo_audio_video.js:</p>
                <pre  id="prettyJS" class="prettyprint linenums:1">
                </pre> -->


	</div>

</div>



<style type="text/css">
.chat-contain {
	overflow: auto;
	height: 400px;
	background-color: #ECEFF1;
}

.chat-contain::-webkit-scrollbar {
    width: 5px;
}

.chat-contain::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    -moz-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

.chat-contain::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    -moz-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}

.class-my-chat {
	float: right;
	display: block;
	background-color: #00e64d;
	padding: 10px 10px 10px 5px;
	margin-left: 30px;
	text-align: right;
	margin-bottom: 10px;
	border-radius: 10px 0px 0px 10px;

}

.class-my-name {
	color: #fff;
	font-size: 12px;
	font-weight: bold;
	border-bottom: 1px solid #ddd;
}

.class-other-chat {
	float: left;
	display: block;
	background-color: #3399ff;
	padding: 10px 10px 10px 5px;
	margin-right: 30px;
	text-align: left;
	margin-bottom: 10px;
	border-radius: 0px 10px 10px 0px;
}

.class-other-name {
	color: #fff;
	font-size: 12px;
	font-weight: bold;
	border-bottom: 1px solid #ddd;
}

.save-input-class {
	border-radius: 0px;
	height: 35px;
}

.class-content-desc {
	font-size: 12px;
	color: #262626;
}

.input-group {
	margin: 5px;
}
</style>

<script type="text/javascript">
$("#btn-video-start").on("click", function(){
	var sRoom = $("#room-name");

	$.ajax();
});
</script>

 <!--<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/conference_chat.js"></script>