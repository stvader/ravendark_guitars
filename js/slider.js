$(document).ready(function(){
	var slider = $('.js-slid');
	var autoplay = true;

    slider.slick({
    	autoplay: true,
    	autoplaySpeed: 5000,
    	arrows: false
    });

   

    $('.main-nav__toggle').click(function(){
    	if (autoplay) {
    		slider.slick('slickPause');
    		autoplay = false;
    	}else {
    		slider.slick('slickPlay');
    		autoplay = true;
    	}
    });
});