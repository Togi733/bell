jQuery(document).ready(function($) {
	
	
	scroll = function () {
		wScroll = $(this).scrollTop();
		console.log(wScroll)
		if ( wScroll <= 400) {
			$('.scroll-top').css('opacity', 0)
		}
		else {
			$('.scroll-top').css('opacity', 1)
		}
	}
	scroll();
	$(window).scroll(scroll);

    $('.scroll-top').click(function(event) {
   		document.documentElement.scrollTop = 0;
	});


})

