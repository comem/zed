   function createArtist(){
     var artistName = $("#nameArtist").val()
     var lead = $("#lead").val()
     var description = $('#artistDescription').val()
     console.log(description);
     var linkTitle = $('#titleLink').val()
     var linkName = $('#nameLink').val()
     var linkUrl = $('#linkUrl').val()
     var arrivalHour = $('#arrivalHour').val();
     console.log(description);

     var artist = new Artist({name: artistName, 
        short_description: lead, complete_description: description,linkURL: linkUrl, 
        linkTitle: linkTitle, linkName: linkName })

     music=allMusicians.where({first_name: addToArtist})
     console.log(music);

     var musicianList = musicianCollServer.fetch({
        success:function(){
          music = musicianList.where({first_name: addToArtist})
          console.log(music);
        }
     })

     where({first_name: addToArtist}) //simple coll

       if(artist.get('first_name') != ''){
         if (allMusicians.length != 0 ){
          if(linkUrl.length != 0){
              //Add musicians
               allMusicians.each(function( model ) {
                  var musician = new Musician({first_name: model.attributes.first_name})
                  artist.get('musicians').add(musician)
                 });
               //Add genres
               genresCollection.each(function( model ) {
                  var genre = new Genre({name_de: model.attributes.name_de})
                  artist.get('genres').add(genre)
                 });
              
               console.log(artist.toJSON());
                
              //console.log($(render.$el[0]).next());
              // $(render.render().$el[0].children[0]).accordion({collapsible: true, active: false,heightStyle: "content"})

             // $(render.render().$el[0].children[0]).appendTo('#eventForm');

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
