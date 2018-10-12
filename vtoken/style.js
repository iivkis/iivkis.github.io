jQuery(document).ready(function($) {
	$('.popup').width($("#container").width() - 20);
	var popup_width = $('.popup').width();
	var popup_height = $('.popup').height();
	var c_width = $("#container-popup").width()
	$(".popup").css("margin-left",(c_width/2)-(popup_width/2));

	$("#container-popup").click(function(){
		$("#container-popup").hide()
	})

	$("#question").click(function(){
		$("#container-popup").show()
	})

});

jQuery(document).ready(function($) {
	var c_width = $("#container").width();
	var b_width = $('body').width();
	$("#container").css("margin-left",(b_width/2)-(c_width/2));
});