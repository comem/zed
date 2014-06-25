var ACTIVE_TAB = 'add';
var ACTIVE_FORM = "addEvent";
var whichForm = "eventForm";
var addButton = true;


$(function(){

	console.log('DOM loaded');

	var appRouter = new AppRouter();
	Backbone.history.start({
       pushState: true,
       root: "/zed/"
	});

	// Navigation de premier niveau (Add/List)
	$('.normalNav ul li a').click(showMain);
	$('.normalNav ul li a').on('click', function(){
		
		var lastTab = ACTIVE_TAB;
		
		ACTIVE_TAB = ($(this).attr('id') == "addLi") ? 'add' : 'list';

		// Gestion du changement URL de la tab+form
		if(lastTab != ACTIVE_TAB){

			if(ACTIVE_FORM.indexOf('add') > -1){
				var newURL = ACTIVE_FORM.replace('add', 'list');
			}else{
				var newURL = ACTIVE_FORM.replace("list", "add");
			}
			//console.log('edited URL: '+ACTIVE_TAB+'/'+newURL);
			appRouter.navigate(ACTIVE_TAB+'/'+newURL);
			ACTIVE_FORM = newURL;
		}
	});

	// Navigation de second niveau (Formulaires)
	$('.main nav ul li a').click(scrollForm);
	$('.main nav ul li a').on('click', function(){
		var href = $(this).attr('href');
		//console.log('href click: '+ACTIVE_TAB +'/'+href);
		appRouter.navigate(ACTIVE_TAB +'/'+href);
		ACTIVE_FORM = href;
	});

	$(window).scroll(showAtScroll);
});


function showMain(e){

	if ($(this).attr('id') == "listLi") {
		if (addButton) {

			// $('#listLi').css('text-shadow','2px 1px 14px rgba(150, 150, 150, 0)');
			// $('#addLi').css('text-shadow','2px 1px 14px rgba(150, 150, 150, 1)');

			$('#addMain').css({right: '0%'}).animate({right: '100%'});
			$('#listMain').css({right: '-100%'}).animate({right: '0%'});
			addButton = false;
		};
		
	}else{

		if (!addButton) {

			// $('#listLi').css('text-shadow','2px 1px 14px rgba(150, 150, 150, 0)');
			// $('#addLi').css('text-shadow','2px 1px 14px rgba(150, 150, 150, 1list)');

			$('#listMain').css({right: '0%'}).animate({right: '-100%'});
			$('#addMain').css({right: '100%'}).animate({right: '0%'});
			addButton = true;
		};
		
		
	};
	e.preventDefault(); return false;
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




function scrollForm(e){
	var href = $(this).attr('href');
	//console.log('dans form '+href);

	isFocus(href);

	

	if (href == "addEvent" || href == "listEvent") {
		
		$('.main nav ul li ').css('background-color','#7A664C');
		$('.liEvent').css('background-color','#B39C7F');
		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	
	};

	if (href == "addArtist" || href == "listArtist") {

		$('.main nav ul li ').css('background-color','#7A664C');
		$('.liArtist ').css('background-color','#B39C7F');
		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});	
	};

	if (href == "addMusician" || href == "listMusician") {

		$('.main nav ul li ').css('background-color','#7A664C');
		$('.liMusician').css('background-color','#B39C7F');
		$('.event').animate({left: '-200%'});	
		$('.artist').animate({left: '-100%'});
		$('.musician').animate({left: '0%'});
		$('.stuff').animate({left: '100%'});
	};

	if (href == "addStuff" || href == "listStuff") {
		$('.main nav ul li ').css('background-color','#7A664C');
		$('.liStuff').css('background-color','#B39C7F');
		$('.event').animate({left: '-300%'});	
		$('.artist').animate({left: '-200%'});
		$('.musician').animate({left: '-100%'});
		$('.stuff').animate({left: '0%'});
	};

	

	e.preventDefault(); return false;
}


function isFocus(href){
	var clicked = false;
	
	if (href == 'addArtist' || href == "listArtist") {
		$('.addArtist a').css('backgroud-color','red');
	};
	console.log('isFocus');
}