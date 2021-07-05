$(function(){
	$('.clients__slider').slick({
		dots:true,
		infinite: true,
		arrows:true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow:"<div class='slider-arrows slider-arrows__left pull-left'><i class='fa fa-angle-left arrows arrow-left' aria-hidden='true'></i></div>",
		nextArrow:"<div class='slider-arrows slider-arrows__right pull-right'><i class='fa fa-angle-right arrows arrow-right' aria-hidden='true'></i></div>",
		responsive: [
			{
		breakpoint: 760,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
					}
			}
				]
	});
	$('.header__burger').click(function(event){
		$('.header__menu').addClass('active');
		$('body').addClass('lock');
	});
	$('.header__back').click(function(event){
		$('.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
	$('.header__msg').click(function(event){
		$('.header__msg').toggleClass('active');
		$('.header__form').toggleClass('active');
		$('.header__msg-text').toggleClass('active');
		$('.header').toggleClass('active');
		$('body').toggleClass('lock');
	});
});