jQuery(document).ready(function($) {

	$("#select-all").click(function(){
		
		var a = $("#select-all").prop('checked')
		
		if (a == true){
			$("#walpaper-rights ul li input").prop('checked',true)
		} else if(a == false){
			$("#walpaper-rights ul li input").prop('checked',false)
		}
	})

	$("#button-link").click(function(){
		
		var right_sum = 0;
		var a = 0;
		var i = 0;
		
		while (true){
			a = $("#walpaper-rights ul li input:eq("+i+")").attr('bit')
			b = $("#walpaper-rights ul li input:eq("+i+")").prop('checked')
			if (a != undefined){
				if (b)
					right_sum += Number(a)
				i++
			} else {
				break
			}
		}
		
		href = "https://oauth.vk.com/authorize?client_id=6640373&scope="+right_sum+"&redirect_uri=https://api.vk.com/blank.html&display=page&response_type=token&revoke=1"
		window.open(href)
	})

});