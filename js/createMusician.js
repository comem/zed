   function createMusician(){    
  var musicianName = $("#nameMusician").val()
     var musicianLastName = $("#lastNameMusician").val()
     var stageName = $('#stagename').val()
    
     var addToArtist = $('#addToArtist').val()

    
   

      if(( musicianName != '' || artistNestedList.toJSON().length != 0 )){ 
        
        if(musicianName != ''){
             if (artistNestedList.toJSON().length != 0 ){
                 //new musician
                    var musician = new Musician({first_name: musicianName, 
                    stagename: stageName, last_name: musicianLastName})
                
                  //add the artist id
                    var artistId = artistNestedList.get('artists').at(0).get('id');
                    var artistInstruments = new ArtistInstruments({artist_id: artistId})
                   //Add instruments to the artist from this musician
                    instrumentsColl.each(function( model ) {
                      var instrument = new Instrument({ instrument_id: model.attributes.instrument_id})
                         artistInstruments.get('instruments').add(instrument)
                     });

                    //Add to artist collections

                  var artistId = artistNestedList.get('artists').at(0).get('id')

                  console.log(artistNestedList.toJSON());
                  musician.get('artistInstruments').set({artist_id: artistId})
                 
                    console.log(musician.toJSON());
                    //musician.save();

                    //add the data to musician (must fit to what the application needs to receive)
                    musician.get('artistsInstruments').add(artistInstruments)
                  

                    console.log(JSON.stringify(musician));
                    musician.save();
                    // put the inputs to nothing
                    $("#nameMusician").val('')
                    $("#lastNameMusician").val('')
                    $("#addToArtist").val('')
                    $("#stagename").val('')
                    //empty the lists
                    artistNestedList.get('artists').reset()
                    instrumentsColl.reset()
                    console.log(instrumentsColl.toJSON());


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
 