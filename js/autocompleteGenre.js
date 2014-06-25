
function autocompleteGenre(){
var noResultClass = "noResultGenre";
var listToBeFilled = $("#genresSelected");
var noResButtAppTo = $("#showAllGenres");

$('#genre').autocomplete({
		source: function(request, response) {
		    $.getJSON('http://pingouin.heig-vd.ch/gof/genres', 
		    	{ genre: request.term }, //change GET name
		    	response);
		  },
		 messages: {
		        noResults: function(){
		        	//if the create new artist button doesnt exist, add it once
		        	$('#noGenreResultInfo').slideDown();
		        	$('#createNewGenreButton').insertAfter(noResButtAppTo).slideDown()
		        }, 
		        results: function(result) {   
		        	//$(noResultButton).slideUp()
		        	$('#createNewGenreButton').slideUp()
		        	$("#noGenreResultInfo").slideUp()
		        	$('.noResult addGenre').slideUp('fast',function(){
		        		$('.noResult addGenre').remove()
		        	});
		        }
		    },
		minLength: 0, // must be 0 if you want to show all
		dataType : "json",
		select: function(event,ui){
				var selectedObj = ui.item;  
			
				//if we have already selected a musician, dont add it twice, dialog box
				if($().length==1){
					$( "<div>").dialog({
						title: 'Attention!',
				      modal: true,
				      buttons: {
				        Ok: function() {
				          $(this).dialog( "close" );
				      		}
				      }
					}).append('The genre <b>'+selectedObj.value + '</b> (id'+selectedObj.id+') is already in the list!');

				}else{
					$(listToBeFilled).show() //show the div we will append to
					var genre = new Genre({name_de: $(selectedObj).data('originalLabel'), id: selectedObj.id})
					
					genresCollection.add(genre);
					genresNestedColl.get('genres').add(genre);

					console.log(genresNestedColl.toJSON());

					var render = genresAddedToArtist.render().$el
					$(render[0]).appendTo(listToBeFilled)
					//console.log(aMusiciansList.toJSON())
					
				}
		    }//end select
});//end autocomplete

		$.ui.autocomplete.prototype._renderItem = function (ul, item) {
					//save data in a dom element 
					$(item).data('originalLabel', item.label);
		            item.label = item.label.replace(new RegExp("(^"+$.ui.autocomplete.escapeRegex(this.term) 
		            	+')', "gi"), 
		            "<b style='color:red;'>$1</b>");

		            return $("<li></li>")
		                    .data("item.autocomplete", item)
		                    .append("<a>" + item.label + "</a>")
		                    .appendTo(ul);
		        };
		$.ui.autocomplete.prototype._renderMenu=function( ul, items ) {
		      var that = this,
		        currentCategory = "";
		      $.each( items, function( index, item ) {
		        if ( item.category != currentCategory ) {
		          ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
		          currentCategory = item.category;
		        }
		        that._renderItemData( ul, item );
		      });
		    };
		//********************************
		//////// END AUTOCOMPLETE
		//************************
}


$(document).ready(function() { 

	$("#noGenreResultInfo").hide();
	$(".deleteGenre").hide();
	$("#createNewGenreButton").hide();
	$("#genresSelected").hide();
	autocompleteGenre();
	autocompleteShowAll();

	$('body').on('click',"#showAllGenres",autocompleteShowAll)




});

function autocompleteShowAll(){

	//show all on click autocomplete
	$('#showAllGenres').click(function() {
	   $('#genre').val('')
	   $('#genre').trigger("focus")
	   .autocomplete("search"); 
	   alert('ads')
});
}
