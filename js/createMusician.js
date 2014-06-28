   function createMusician(){
  
     var musicianName = $("#nameMusician").val()
     var musicianLastName = $("#lastNameMusician").val()
     var stageName = $('#stagename').val()
     var addedEvent = $('.addToEvent').val()
     var addToArtist = $('#addToArtist').val()

     var musician = new Musician({name: musicianName, 
        stageName: stageName, lastName: musicianLastName})

      var artistNested = artistListNested.get('artists').where({name: addToArtist});//nested coll
      var artist = artistColl.where({name: addToArtist}) //simple coll


      if(( musician.get('name') != '' || artist.length != 0 )){ 
        
       if(musician.get('name') != ''){
             if (artist.length != 0 ){
                  //Add instruments
                   instrumentsColl.each(function( model ) {
                      var instrument = new Instrument({name: model.attributes.name})
                      musician.get('instruments').add(instrument)
                     });
                    //Add to artist collections
                    artist[0].attributes.musicians.add(musician) //simple coll
                    artistNested[0].attributes.musicians.add(musician)//nested coll

                    musician.set({addedToArtist: addToArtist})//set additional attribute (optional)

                     console.log('Addedto nested collection artist');
                     console.log(artistNested[0].attributes.musicians.toJSON());
                     $( "<div title='Add new musician'>").dialog({            
                              buttons: {
                                Close: function() {
                                  $(this).dialog( "close" );
                                    },
                              }
                            }).append('The musician has been successfully added');

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
 $(".musicianForm").on('click',"#createNewMusicianButton",createMusician)
 
})
 