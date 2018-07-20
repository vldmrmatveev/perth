$(document).ready(function() {

	var date = new Date();
    $('.date').text(date.getFullYear());

	$(".search").click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.hidemenu').fadeOut('slow');
			$('body, html').css('overflow', 'auto');
		} else {
			$(this).addClass('active');
			$('.hidemenu').fadeIn('slow').css('display', 'flex');
			$('body, html').css('overflow', 'hidden').css('height', '100%');
		}
	});
	$(".hidemenu a").click(function(event) { 
		event.preventDefault();    //отмена стаднартной обработки нажатия по ссылке
		var id = $(this).attr("href"),  //забираем индефикатор блока с атрибутом href
		top = $(id).offset().top;   //узнаем высоту от начала страницы до блока
		$("body,html").animate({scrollTop: top}, 800);
		$('.hidemenu').fadeOut('slow');
		$('.search').removeClass('active');
		$('body, html').css('overflow', 'auto');
	});
	$(".upperbutton a, .contact a, footer a").click(function(event) { 
		event.preventDefault();    //отмена стаднартной обработки нажатия по ссылке
		var id = $(this).attr("href"),  //забираем индефикатор блока с атрибутом href
		top = $(id).offset().top;   //узнаем высоту от начала страницы до блока
		$("body,html").animate({scrollTop: top}, 800);
	});

});