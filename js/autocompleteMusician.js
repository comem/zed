

/*
function autocomplete(){
var noResultClass = "noResultInstrument";
var listToBeFilled = $("#instrumentsPlayedMusician");
var noResButtAppTo = $("#showAllInstruments");

$('#musician').autocomplete({
	
		source: function(request,response){

			$.ajax({
				url:'http://pingouin.heig-vd.ch/gof/api/v1/musicians',
				dataType : "json",
				data:{first_name:request.term},

				success:function(data){
					
					response($.map(data.data, function(item){
					
						return{
							label:item.first_name,
							value: item.first_name,
							id: item.id,
						}
					}))
				},
				error: function(result,error) {
				
                    alert("Data musicians not found"+error);
                }
			})
		},
		 messages: {
		        noResults: function(){
		        	//if the create new artist button doesnt exist, add it once
		        	$('#noInstrumentResultInfo').slideDown();
		        	$('#createNewInstrumentButton').insertAfter(noResButtAppTo).slideDown()
		        }, 
		        results: function(result) {   
		        	//$(noResultButton).slideUp()
		        	$('#createNewInstrumentButton').slideUp()
		        	$("#noInstrumentResultInfo").slideUp()
		        	$('#createNewInstrumentButton').slideUp('fast',function(){
		        		//$('#createNewInstrumentButton').remove()
		        	});
		        }
		    },
		minLength: 0, // must be 0 if you want to show all
		dataType : "json",
		select: function(event,ui){
				var selectedObj = ui.item;  
			
				//if we have already selected a musician, dont add it twice, dialog box
				if($().length==1){
					$( "<div title='Attention!'>").dialog({
				      modal: true,
				      buttons: {
				        Ok: function() {
				          $(this).dialog( "close" );
				      		}
				      }
					}).append('The musician <b>'+selectedObj.value + '</b> (id'+selectedObj.id+') is already in the list!');

				}else{
					$(listToBeFilled).show() //show the div we will append to

					var musician  = new Musician({first_name: selectedObj.value})
					
					aMusiciansList.get(',').add(musician)
					console.log(allMusicians.toJSON());
					

				
					var render = viewMusiciansPlaying.render().$el
					$(render[0]).appendTo(listToBeFilled)
					//console.log(aMusiciansList.toJSON())
					
				}
		    }//end select
		});//end autocomplete

		$.ui.autocomplete.prototype._renderItem = function (ul, item) {
					//save data in a dom element 
				
				

					$(item.label).data('originalLabel', item);
		           item = item.label.replace(new RegExp("(^"+$.ui.autocomplete.escapeRegex(this.term) 
		            	+')', "gi"), 
		            "<b style='color:red;'>$1</b>");

		            return $("<li></li>")
		                    .data("item.autocomplete", item )
		                    .append("<a>" + item + "</a>")
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

$("#noInstrumentResultInfo").hide();
$(".deleteInstrument").hide();
$("#createNewInstrumentButton").hide();
$("#instrumentsPlayedMusician").hide();


	$('#showAllMusicians').click(function() {
	   $('#musician').val('')
	   $('#musician').trigger("focus")
	   .autocomplete("search"); 
});
autocomplete();

});
*/