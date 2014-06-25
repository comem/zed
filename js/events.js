//var ACTIVE_TAB = 'add';
//var ACTIVE_FORM = "addEvent";
var whichForm = "eventForm";
var addButton = true;


$(function(){
	var router = new AppRouter ();
	Backbone.history.start({
    pushState: true,
    root: "/zed/"
	});

	// Scrolling
	$(window).scroll(showAtScroll);

	$('a').click(function () {
    router.navigate($(this).attr('href')); 
    Backbone.history.loadUrl($(this).attr('href'));
    return false;
	});
});


function showMain(){

	if ($(this).attr('id') == "listLi") {
		if (addButton) {
			$('#addMain').css({right: '0%'}).animate({right: '100%'});
			$('#listMain').css({right: '-100%'}).animate({right: '0%'});
			addButton = false;
		};
		
	}else{

		if (!addButton) {
			$('#listMain').css({right: '0%'}).animate({right: '-100%'});
			$('#addMain').css({right: '100%'}).animate({right: '0%'});
			addButton = true;
		};
		
		
	};
	//e.preventDefault(); return false;
}


function showAtScroll(){
	var heightLimit = $(document).scrollTop();
	//console.log(heightLimit);

	if (heightLimit > "350") {

		$('header>div').removeClass('normalSearch');
		$('header>div').addClass('minimalizeSearch');

		$('header>div').switchClass('minimalizeSearch','downSearch',800,'easeOutBounce');

		$('body>nav').removeClass('normalNav');
		$('body>nav').addClass('minimalizeNav');

		$('body>nav').switchClass('minimalizeNav','downNav',800,'easeOutBounce');

	}else{

		$('header>div').removeClass('minimalizeSearch');
		$('header>div').addClass('normalSearch');

		$('header>div').switchClass('downSearch','normalSearch',0,'linear');

		$('body>nav').removeClass('minimalizeNav');
		$('body>nav').addClass('normalNav');

		$('body>nav').switchClass('downNav','normalNav',0,'linear');	

	};
}


function scrollForm(href){
	console.log('dans form '+href);

	isFocus(href);

	if (href == "event") {
		
		$('.main nav ul li ').css('background-color','#7A664C');
		$('.liEvent').css('background-color','#B39C7F');
		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	
	};

	if (href == "artist") {

		$('.main nav ul li ').css('background-color','#7A664C');
		$('.liArtist ').css('background-color','#B39C7F');
		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});	
	};

	if (href == "musician") {

		$('.main nav ul li ').css('background-color','#7A664C');
		$('.liMusician').css('background-color','#B39C7F');
		$('.event').animate({left: '-200%'});	
		$('.artist').animate({left: '-100%'});
		$('.musician').animate({left: '0%'});
		$('.stuff').animate({left: '100%'});
	};

	if (href == "stuff") {
		$('.main nav ul li ').css('background-color','#7A664C');
		$('.liStuff').css('background-color','#B39C7F');
		$('.event').animate({left: '-300%'});	
		$('.artist').animate({left: '-200%'});
		$('.musician').animate({left: '-100%'});
		$('.stuff').animate({left: '0%'});
	};

	//e.preventDefault(); return false;
}


function isFocus(href){
	var clicked = false;

	if (href == 'artist') {
		$('.addArtist a').css('backgroud-color','red');
	};
	console.log('isFocus');
}