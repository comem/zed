var whichForm = "eventForm";
$(function(){

	$('.main nav ul li a').click(scrollForm);
	$(window).scroll(showAtScroll);

	$('body>nav ul li a').click(showMain);


	
		
			

});


function showMain(e){

	if ($(this).attr('id') == "listLi") {
		console.log('djsao');
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
	console.log(heightLimit);
	
	

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




function scrollForm(e){
	console.log('clicked');
	var href = $(this).attr('href');
	console.log(href);

	

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

	e.preventDefault(); return false;
}