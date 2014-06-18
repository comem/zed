var whichForm = "eventForm";
var addButton = true;
var DEFAULT_SECTION = 'addEventForm';


$(function(){

	$('.main nav ul li a').click(function(){
		menuElement =$(this).attr('href')
		scrollForm(menuElement);
	});
	$(window).scroll(showAtScroll);

	$('body>nav ul li a').click(showMain);

	iniHandler();

	$(function(){
		$('nav ul li a').on('click', function(e){
			console.log($(this).attr('href'));
	});

});

/*****
* Gestion de l'historique
******/

function iniHandler(){
	// gestion des boutons "back" et "forward" du browser
    $(window).on('popstate', historyHandler);
    // simule un premier changement d'url
    $(window).trigger('popstate');
    console.log('initok');

    // Gestion du menu (en affichant la <section> approriée)
    $('nav ul li a').on('click', function(e) {
        menuClickHandler($(this));
        e.preventDefault();
        return false;
    });
}


function menuClickHandler(menuElement) {
    var href = menuElement.attr('href');
    var actualhref = location.pathname.split("/").pop();
    if (href === actualhref) {
    	return;
	}
	// Simule le changement d'url ver cette section
    history.pushState(null, null, href);
}


function historyHandler() {
    var href = location.pathname.split("/").pop();
    if (href === '') {
        href = DEFAULT_SECTION;
    }
    goToMenuElement(href);
    console.log(href);
}


function goToMenuElement(menuElement){
	//var nodeIdToShow = '#' + menuElement;
	//$(nodeIdToShow).show();
	scrollForm(menuElement);
}

/*******
* TODO
* - .htaccess
* - Bon formulaire s'affiche au back/previous
*/

/*********
* Code Animations Navigation
**********/


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




function scrollForm(menuElement){

	//var href = $(this).attr('href');
	var href = menuElement;


	if (href == "addEvent") {
		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	
	};

	if (href == "addArtist") {
		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});	
	};

	if (href == "addMusician") {
		$('.event').animate({left: '-200%'});	
		$('.artist').animate({left: '-100%'});
		$('.musician').animate({left: '0%'});
		$('.stuff').animate({left: '100%'});
	};

	if (href == "addStuff") {
		$('.event').animate({left: '-300%'});	
		$('.artist').animate({left: '-200%'});
		$('.musician').animate({left: '-100%'});
		$('.stuff').animate({left: '0%'});
	};

	if (href == "listEvent") {
		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	
	};

	if (href == "listArtist") {
		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});
	};

	if (href == "listMusician") {
		$('.event').animate({left: '-200%'});	
		$('.artist').animate({left: '-100%'});
		$('.musician').animate({left: '0%'});
		$('.stuff').animate({left: '100%'});
	};

	if (href == "listStuff") {
		$('.event').animate({left: '-300%'});	
		$('.artist').animate({left: '-200%'});
		$('.musician').animate({left: '-100%'});
		$('.stuff').animate({left: '0%'});
	};

	//e.preventDefault(); return false;
}