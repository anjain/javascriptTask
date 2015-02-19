$(document).ready(function(){
	
		$(".compose_btn").click(function(){
			$(".rht_btn_col").addClass("dis_none")
			
		})	
		$(".fr a").click(function(){
			$(".rht_btn_col").removeClass("dis_none")
					
		})
			$(".send_btn").click(function(){
			console.log("To:" + $('input[name="res"]').val());
			console.log("Subject:"+$('input[name="sub"]').val());
			console.log("Message:"+$('textarea[name="msg"]').val());
		})
		
})