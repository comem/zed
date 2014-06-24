   function createArtist(){
     var artistName = $("#nameArtist").val()
     var lead = $("#lead").val()
     var description = $('#artistDescription').val()
     var linkTitle = $('#titleLink').val()
     var linkName = $('#nameLink').val()
     var linkUrl = $('#linkUrl').val()
     var arrivalHour = $('#arrivalHour').val();
     console.log(description);

     var artist = new Artist({name: artistName, 
        lead: lead, description: description,linkURL: linkUrl, 
        linkTitle: linkTitle, linkName: linkName })


      var musicianNested = aMusiciansList.get('musicians').where({name: addToArtist});//nested coll
      var musician = allMusicians.where({name: addToArtist}) //simple coll

       if(artist.get('name') != ''){
         if (allMusicians.length != 0 ){
          if(linkUrl.length != 0){
              //Add musicians
               allMusicians.each(function( model ) {
                  var musician = new Musician({name: model.attributes.name})
                  artist.get('musicians').add(musician)
                 });
               //Add genres
               genresCollection.each(function( model ) {
                  var genre = new Genre({genre: model.attributes.genre})
                  artist.get('genres').add(genre)
                 });
               //add to event
              

               //arrival hour
               artist.set({arrivalHour: arrivalHour})
                var render = new ArtistView({model: artist})
                //console.log($(render.$el[0]).next());
               // $(render.render().$el[0].children[0]).accordion({collapsible: true, active: false,heightStyle: "content"})

              $(render.render().$el[0].children[0]).appendTo('#eventForm');

               console.log(artist.toJSON());
                 $( "<div title='Add new artist'>").dialog({            
                          buttons: {
                            Close: function() {
                              $(this).dialog( "close" );
                                },
                          }
                        }).append('The artist has been successfully added');
                 }else{
                   $( "<div>").dialog({    
                   title: 'Attention!'      ,  
                          buttons: {
                            Close: function() {
                              $(this).dialog( "close" );
                                },
                          }
                        }).append('URL link missing');
                 }
          }else{//Artist not found
            $( "<div title='Attention!'>").dialog({
                              
                              buttons: {
                                Close: function() {
                                  $(this).dialog( "close" );
                                    },
                              }
                            }).append('Musician not found');}
        }else{// Musician not complete
            artist.isValid();
         }
   }

$(document).ready(function(){

  $('#createNewArtistButton').on('click',createArtist)
  $('.artistTemplate').accordion({collapsible: true, active: false,heightStyle: "content"})

})