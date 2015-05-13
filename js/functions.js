$(window).ready(function(){

	$('.full-page-panel').height($(window).height());

	$("a[href='#header']").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
});

});


$(window).resize(function() {

	$('.full-page-panel').height($(window).height());

});


$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	});

	$('.ruler').css({

		'transform' : 'translate(0px, '+ wScroll /7.5 +'%)'

	});

	$('.pencil').css({

		'transform' : 'translate(0px, -'+ wScroll /12 +'%)'

	});

	

});

