   function createMusician(){    
  var musicianName = $("#nameMusician").val()
     var musicianLastName = $("#lastNameMusician").val()
     var stageName = $('#stagename').val()
     var addedEvent = $('.addToEvent').val()
     var addToArtist = $('#addToArtist').val()

     var sourceArtists = new ArtistNestedCollServer()

  
     var musician = new Musician({first_name: musicianName, 
        stagename: stageName, last_name: musicianLastName})


      var artistNested = sourceArtists.get('artists').where({name: addToArtist});//nested coll
      //var artist = artistColl.where({name: addToArtist}) //simple coll


      if(( musician.get('first_name') != '' || artistNested.length != 0 )){ 
        
        if(musician.get('first_name') != ''){
             if (artistNestedList.length != 0 ){
                  //Add instruments
                  console.log('createMusician');
                  

                   instrumentsColl.each(function( model ) {

                      var instrument = new Instrument({name_de: model.attributes.name_de, 
                        instrument_id: model.attributes.instrument_id})
                         musician.get('artistInstruments').get('instruments').add(instrument)
                     
                     });
                    //Add to artist collections

                  var artistId = artistNestedList.get('artists').at(0).get('id')

                  
                  musician.get('artistInstruments').set({artist_id: artistId})
                 
                    console.log(musician.toJSON());
                    musician.save();

                    var added = $('#musicianSuccessfullyAdded')
                    $( "<div title='Add new musician'>").dialog({            
                              buttons: {
                                Close: function() {
                                  $(this).dialog( "close" );
                                    },
                              }
                            }).append(added.text());
             }else{//Artist not found
                $( "<div >").dialog({
                  title :'Attention!',
                  buttons: {
                    Close: function() {
                      $(this).dialog( "close" );
                        },
                  }
                }).append('Artist not found');}
       }else{// Musician not complete
         musician.isValid();
       }
      }else{
           $( "<div >").dialog({
                  title :'Attention!',
                  buttons: {
                    Close: function() {
                      $(this).dialog( "close" );
                        },
                  }
                }).append('Musician name and artist missing');
      }

   }


$(document).ready(function(){
 $("body").on('click',"#createNewMusician",createMusician)
 
})
 