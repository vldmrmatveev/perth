$(document).ready(function() {

	$("#search").click(function(){
		$("#hidemenu").fadeIn(600);
		$(this).css("visibility", "hidden");
	});
	
	$("#closelink, #hidemenu1 a").click(function() {
		$(".hidemenu").fadeOut(600);
		$("#search").css("visibility", "visible");
	});

	$("#hidemenu a").click(function(event) { 
		event.preventDefault();    //отмена стаднартной обработки нажатия по ссылке
		var id = $(this).attr("href"),  //забираем индефикатор блока с атрибутом href
		top = $(id).offset().top;   //узнаем высоту от начала страницы до блока
		$("body,html").animate({scrollTop: top}, 800);
	});
	$(".upperbutton a").click(function(event) { 
		event.preventDefault();    //отмена стаднартной обработки нажатия по ссылке
		var id = $(this).attr("href"),  //забираем индефикатор блока с атрибутом href
		top = $(id).offset().top;   //узнаем высоту от начала страницы до блока
		$("body,html").animate({scrollTop: top}, 800);
	});

});