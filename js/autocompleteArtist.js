
var artists = new Array();
var sourceArtists = new ArtistNestedCollServer()

$.when( sourceArtists.get('artists').fetch({
		success: function(){	
			$.each(sourceArtists.toJSON().artists, function(i, val){
				artists[i] = val.name		
						})	
		}
	}) //fetch
	 ).done(autocompleteArtist);
	

function autocompleteArtist(){


//var noResultClass = "noResultGenre";
var listToBeFilled = $("#musicianAddedToArtist");
var noResButtAppTo = $("#showAllArtistInMusician");

$('#addToArtist').autocomplete({
		source: artists,
		 messages: {
		        noResults: function(){
		        	//if the create new artist button doesnt exist, add it once
		        	$('#noArtistResultInfo').slideDown();
		        	$('.noResult addArtist').insertAfter(noResButtAppTo).slideDown()
		        }, 
		        results: function(result) {   
		        	//$(noResultButton).slideUp()
		        	$('#musicianAddedToArtist').slideUp()
		        	$("#noArtistResultInfo").slideUp()
		        	$('.noResult addArtist').slideUp('fast',function(){
		        		$('.noResult addArtist').remove()
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
					}).append('The artist <b>'+selectedObj.value + '</b> (id'+selectedObj.id+') is already in the list!');

				}else{
					//$(listToBeFilled).show() //show the div we will append to
					sourceArtists.get('artists').fetch({
						success:function(model, response){
						
						 var elArtista = sourceArtists.get('artists').where({name: $(selectedObj).data('originalLabel')})
							$.each(elArtista, function(i, val){
								//console.log(elArtista);
								//console.log(val.attributes);
								var artistList = new ArtistNestedColl();
								console.log(artistList.toJSON());
								var artist = val.attributes
								artistList.add(artist)
								console.log(artistList.at(0));

								artistField = new ArtistFieldInMusician({model :artistList})
								var renderArtist = artistField.render().$el
								$(renderArtist[0]).appendTo(listToBeFilled)
								
							})
						}
					})
					
					
					
					//genresNestedColl.get('genres').add(genre);


					//var render = genresAddedToArtist.render().$el
					//$(render[0]).appendTo(listToBeFilled)
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

	$("#noArtistResultInfo").hide();
	$(".deleteArtist").hide();
	//$("#createNewGenreButton").hide();
	$("#musicianAddedToArtist").hide();
	$('#chuj').hide()

	autocompleteArtist();
	
	$('#showAllArtistInMusician').click(function() {
	   $('#addToArtist').val('')
	   $('#addToArtist').trigger("focus")
	   .autocomplete("search"); 
	})
	   
	  
});

	//$('body').on('click',"#showAllGenres",autocompleteShowAll)



