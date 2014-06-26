var whichForm = "eventForm";
var addButton = true;
var one = "1";

$(function(){

	console.log('loaded');
	$('.normalNav ul li a').click(showMain);
	$('.main nav ul li a').click(scrollForm);

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
	var positionElementInPage = '300';
	if ($(window).scrollTop() > positionElementInPage) {

				
           
           
           			
           			$(this).switchClass('downNav','normalNav',800,'easeOutBounce');
       		
        } else {
    
           $('body>nav').switchClass('normalNav','downNav',0,'easeOutBounce');
        };



	
	


	
}




function scrollForm(e){
	//console.log('clickedsdsd');
	var href = $(this).attr('href');
	//console.log(href);

	isFocus(href);

	

	if (href == "addEvent" || href=="listEvent") {
		
		$('.main nav ul li ').css('background-color','#7A664C');
		$('.liEvent').css('background-color','#B39C7F');

		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	

	};

	if (href == "addArtist" || href=="listArtist") {

		$('.main nav ul li ').css('background-color','#7A664C');
		$('.liArtist ').css('background-color','#B39C7F');

		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});
		
	};

	if (href == "addMusician" || href=="listMusician") {

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

	if (href == 'addArtist' || href=="listArtist") {

		$('.addArtist a').css('backgroud-color','red');
	};
	//console.log('isFocus');


}