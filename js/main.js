/*
* Variables globales
*/

var whichForm = "eventForm";
var addButton = true;
var DEFAULT_SECTION = 'addEventForm';


$(function(){

	$(window).scroll(showAtScroll);

	$('body>nav ul li a').click(showMain);

	initHandler();
});

/*****
* Gestion de l'historique
******/

function initHandler(){
    $(window).on('popstate', historyHandler);

    //Premier changement d'url
    $(window).trigger('popstate');

    $('nav ul li a').on('click', function(e) {
    	scrollForm(e, $(this).attr('href'));
        menuClickHandler($(this));
    });

    $(window).on('popstate', function(e){
    	var href = location.pathname.split("/").pop();
    	goToElement(e, href);
    });
}


function menuClickHandler(menuElement) {
    var href = menuElement.attr('href');

    var actualhref = location.pathname.split("/").pop();
    if (href === actualhref) {
    	return;
	}
    history.pushState(null, null, href);
}


function historyHandler() {
    var href = location.pathname.split("/").pop();
    if (href === '') {
        href = DEFAULT_SECTION;
    }
}

function goToElement(e, href){
    if(href === 'add' && href === 'list'){
    	console.log('showMain');
    	console.log(href);
      	showMain(e);
    } else{
		console.log('scrollForm');
		console.log(href);
		scrollForm(e, href);
    }
}


/*******
* TODO
* - .htaccess
* - Bon formulaire s'affiche au back/previous
* - SwitchClass pour les animations
*/

/*********
* Code Animations Navigation
**********/


function showMain(e){

	if ($(this).attr('href') == "list") {
		if (addButton) {
			$('#addMain').addClass('posZero').animate({right: '100%'});
			$('#listMain').addClass('posMoins').animate({right: '0%'});
			//$('#addMain').switchClass('posZero','posPlus',100,'swing');
			//$('#listMain').switchClass('posMoins','posZero',100,'swing');
			addButton = false;
			console.log(addButton);
		};

	}else{

		if (!addButton) {
			$('#listMain').addClass('posZero').animate({right: '-100%'});
			$('#addMain').addClass('posPlus').animate({right: '0%'});
			//$('#listMain').switchClass('posZero','posMoins',100,'swing');
			//$('#addMain').switchClass('posPlus','posZero',100,'swing');
			addButton = true;
			console.log(addButton);
		}
	}
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




function scrollForm(e, href){

	//var href = $(menuElement).attr('href');
	console.log(href);

	if (href == "addEvent" || href == "listEvent") {
		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	
	};

	if (href == "addArtist" || href == "listArtist") {
		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});	
	};

	if (href == "addMusician" || href == "listMusician") {
		$('.event').animate({left: '-200%'});	
		$('.artist').animate({left: '-100%'});
		$('.musician').animate({left: '0%'});
		$('.stuff').animate({left: '100%'});
	};

	if (href == "addStuff" || href == "listStuff") {
		$('.event').animate({left: '-300%'});	
		$('.artist').animate({left: '-200%'});
		$('.musician').animate({left: '-100%'});
		$('.stuff').animate({left: '0%'});
	};

	e.preventDefault(); return false;
}