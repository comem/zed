var whichForm = "eventForm";
var DEFAULT_SECTION = 'addEventForm';


$(function(){

	$('.main nav ul li a').click(function(){
		menuElement =$(this).attr('href')
		scrollForm(menuElement);
	});
	$(window).scroll(showAtScroll);

	$('body>nav ul li a').click(showMain);

	iniHandler();
	
	$('nav ul li a').on('click', function(e){
		console.log($(this).attr('href'));
	})

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
* Code Matthieu
**********/


function showMain(e){

	if ($(this).attr('id') == "listLi") {
		//console.log('djsao');
		$('#addMain').hide();
		$('#listMain').show();
	}else{
		$('#listMain').hide();
		$('#addMain').show();
	};
	e.preventDefault(); return false;
}


function showAtScroll(){
	var heightLimit = $(document).scrollTop();
	//console.log(heightLimit);
	
	if (heightLimit > "350") {
		
		$('#searchToBeSwitched').removeClass('normalSearch');
		$('#searchToBeSwitched').addClass('minimalizeSearch');

		$('#searchToBeSwitched').switchClass('minimalizeSearch','downSearch',800,'easeOutBounce');

		$('body>nav').removeClass('normalNav');
		$('body>nav').addClass('minimalizeNav');

		$('body>nav').switchClass('minimalizeNav','downNav',800,'easeOutBounce');
	}else{

		$('#searchToBeSwitched').removeClass('minimalizeSearch');
		$('#searchToBeSwitched').addClass('normalSearch');

		$('#searchToBeSwitched').switchClass('downSearch','normalSearch',0,'linear');

		$('body>nav').removeClass('minimalizeNav');
		$('body>nav').addClass('normalNav');

		$('body>nav').switchClass('downNav','normalNav',0,'linear');
	};
}




function scrollForm(menuElement){
	//console.log('clicked');
	//var href = $(this).attr('href');
	var href = menuElement;
	//console.log(href);

	

	if (href == "addEventForm") {
		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	
	};

	if (href == "addArtistForm") {
		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});	
	};

	if (href == "addMusicianForm") {
		$('.event').animate({left: '-200%'});	
		$('.artist').animate({left: '-100%'});
		$('.musician').animate({left: '0%'});
		$('.stuff').animate({left: '100%'});
	};

	if (href == "addStuffForm") {
		$('.event').animate({left: '-300%'});	
		$('.artist').animate({left: '-200%'});
		$('.musician').animate({left: '-100%'});
		$('.stuff').animate({left: '0%'});
	};

	if (href == "listEventForm") {
		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	
	};

	if (href == "listArtistForm") {
		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});
	};

	if (href == "listMusicianForm") {
		$('.event').animate({left: '-200%'});	
		$('.artist').animate({left: '-100%'});
		$('.musician').animate({left: '0%'});
		$('.stuff').animate({left: '100%'});
	};

	if (href == "listStuffForm") {
		$('.event').animate({left: '-300%'});	
		$('.artist').animate({left: '-200%'});
		$('.musician').animate({left: '-100%'});
		$('.stuff').animate({left: '0%'});
	};

	//e.preventDefault(); return false;
}