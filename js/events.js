var ACTIVE_TAB = 'add';
var ACTIVE_FORM = "addEvent";
var whichForm = "eventForm";
var addButton = true;


$(function(){

	console.log('DOM loaded');

	var appRouter = new AppRouter();
	// Backbone.history.start({
 //       pushState: true,
 //       root: "/zed/",
 //       silent: 'false'
	// });

	// Navigation de premier niveau (Add/List)
	$('.normalNav ul li a').click(showMain);
	$('.normalNav ul li a').on('click', function(){
		//showMain(e, cible);
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
	//$('.main nav ul li a').click(scrollForm);
	$('.main nav ul li a').on('click', function(e){
		var href = $(this).attr('href');
		scrollForm(e, href);

		//console.log('href click: '+ACTIVE_TAB +'/'+href);
		appRouter.navigate(ACTIVE_TAB +'/'+href);
		ACTIVE_FORM = href;
	});

	$(window).scroll(showAtScroll);
});


function showMain(e){

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




function scrollForm(e, cible){
	//var cible = $(this).attr('href');
	//console.log('dans form '+href);

	if (cible == "addEvent" || cible == "listEvent") {
		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	
	};

	if (cible == "addArtist" || cible == "listArtist") {
		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});	
	};

	if (cible == "addMusician" || cible == "listMusician") {
		$('.event').animate({left: '-200%'});	
		$('.artist').animate({left: '-100%'});
		$('.musician').animate({left: '0%'});
		$('.stuff').animate({left: '100%'});
	};

	if (cible == "addStuff" || cible == "listStuff") {
		$('.event').animate({left: '-300%'});	
		$('.artist').animate({left: '-200%'});
		$('.musician').animate({left: '-100%'});
		$('.stuff').animate({left: '0%'});
	};

	e.preventDefault(); return false;
}