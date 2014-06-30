   function createArtist(){
     var artistName = $("#nameArtist").val()
     var lead = $("#lead").val()
     var description = $('#artistDescription').val()

     var linkTitle = $('#titleLink').val()
     var linkName = $('#nameLink').val()
     var linkUrl = $('#linkUrl').val()
     var arrivalHour = $('#arrivalHour').val();
     var order = $('#order').val();
     var support = $('#support').val();

     //create new Artist
     var artist = new Artist({name: artistName, 
        short_description: lead, complete_description: description })
     //add the links info to the artist
     artist.get('links').set({url :linkUrl, title_de: linkTitle, name_de: linkName})



       if(artist.get('first_name') != ''){
         if (allMusicians.length != 0 ){
          if(linkUrl.length != 0){


          

            //mus.get('instruments').add([ins,ins2])

            musIns2 = new MusicianInstruments({musician_id: 03003, instrument_id:69})
            // img = new Images({id:23})
            //img2 = new Images({id:22992})
            // artist.get('images').add([img, img2])
            if (support == "Yes") {
                  artist.get('night').set({isSupport: 1})
            }else{
              artist.get('night').set({isSupport: 0})
            }

            artist.get('night').set({artist_hour_arrival: arrivalHour, order: order})
            
           // 
           // artist.get('musicianInstruments').add([musIns,musIns2])
          
            

              //Add musicians
               allMusicians.each(function( model ) {
                  var musicianInst = new MusicianInstruments({musician_id: model.attributes.id
                    ,instrument_id:'1' })
                  artist.get('musicianInstruments').add(musicianInst)
                 });


               //Add genres
               genresCollection.each(function( model ) {
                  var genre = new Genre({id: model.attributes.id})
                  
                  artist.get('genres').add(genre)
                });
              
               eventColl.each(function(model){
                console.log(model);
                  artist.get('night').set({id:model.attributes.id})
               })

               console.log(JSON.stringify(artist));
               artist.save()
 
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
