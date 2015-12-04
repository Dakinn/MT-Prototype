// JavaScript Document
$(function() {
	$('.menu-trigger').on('click', function() {
	  $(this).toggleClass('active');
	  $('.nav-contents, .type-wrapper').toggleClass('active');
	});
	
	$('.filter-button').on('click', function() {
	  $(this).toggleClass('active');
	  $('.filter-content').toggleClass('active');
	  return false;
	});
	
	$('.sort').on('click', function() {
	  $('.content-blocks img, .filter-content, .filter-button').toggleClass('active');
	  return false;
	});
	
	//logo sizing update on scroll
	$(window).scroll(function() {
		if ($(".filter")[0].getBoundingClientRect().bottom < 0){
			$('.logo').addClass('tiny');
		}else{
			$('.logo').removeClass('tiny');
		}
	});
	
	
	$('.content-blocks').on('click', function() {
		//pop up
		$('.pop-up-content').addClass('active');
		$("html, body").animate({ scrollTop: 0 }, "slow");
		setTimeout(function () {
			$('.content-blocks, .filter, .hero').css({'display': 'none'});
		}, 1000);
	});
	
	$('.pop-up-content').on('click', function() {
		$(this).removeClass('active');
		$('.content-blocks, .filter, .hero').css({'display': 'block'});

	});
	
	//hero video animation on screen
	$('.video-watch, .video-close').click(function(){
		$('.vimeo-vid-wrapper, .hero-type').toggleClass('active');	
	});
	
	//api for vimeo videos		
	var iframes = $('.vimeo-player'),
		status = $('.status');

	$('.video-close').bind('click', function () {
		iframes.each(function() {
		  var player=$f(this);
		  player.api("pause");
		});
		return false;
	});
	
	$('.video-watch').bind('click', function () {
		iframes.each(function() {
		  var player=$f(this);
		  player.api("play");
		});
		return false;
	});
	
});