<!DOCTYPE html>
<html lang="fr">
    <head>
	   <title>ZED</title>
	   <meta charset="utf-8">

	   <link rel="stylesheet" type="text/css" href="css/style.css">  
     <link rel="stylesheet" type="text/css" href="css/form.css">        

	   <link rel="stylesheet" type="text/css" href="css/style.css">
     <link rel="stylesheet" type="text/css" href="css/form.css"> 
     <link rel="stylesheet" type="text/css" href="css/uicss.css"> 
             

        <script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/jquery-ui.js" type="text/javascript"></script>       

        <script src="js/modernizr.js" type="text/javascript"></script>
        <script src="js/main.js"></script>
         <script>
          $(function() {
            $(".accordion").accordion({ collapsible: true, animate: 200, icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }});
            

            

            });
        </script>
    </head>
    <body>
        <header>
            <img src="img/logo.png"> 
            <div  id="searchToBeSwitched" class="normalSearch">
                 <input id="searchInput" type="text" placeholder="search">
            </div>           

          
           <!--  <div id="minimizedSearchSection" >
                <div id="minimizedSearch">
                    <input type="text" placeholder="search">
                </div>
                <div id="searchButton">
                    <img src="img/icones/searchButton.png">
                </div>
            </div> -->

        </header>
        <nav class="normalNav">
            <ul>
                <li><a href="add" id="addLi">add</a></li>
                <li><a href="list" id="listLi">list</a></li>
            </ul>
        </nav>
        <div id="addMain" class="main">
            <nav class="normalSecondNav">
                <ul>
                    <li><a href="addEvent">add event</a></li>
                    <li><a href="addArtist">add artist</a></li>
                    <li><a href="addMusician">add musician</a></li>
                    <li><a href="addStuff">add stuff</a></li>
                </ul>
            </nav>
            <div id="forms">
                <div class="form event">
                    <form id="eventForm">
                        <p>
                           Name: <input type='text' name='Name' />
                           </p>
                           <p>
                           Email: <input type='text' name='Email' />
                           </p>

                           <p>
                           <input type='submit' name='Submit' value='Submit' />
                       </p>
                        
                    </form>
                </div>

                <!-- ARTIST FORM -->

                  <div class="form artist">

                      <div class="accordion">
                        <h1 class ="addArtistHeader">Create new artist</h1>
                        <div>
                          <form id="artistForm">
                            <div id="artistInfoDiv">
                                <h2 class ="addArtistHeader">Informations</h2>

                                    <label>Name*</label><input type="text" name="nameArtist" id="nameArtist" required placeholder="artist name"><br>
                                    <label>Lead</label><textarea name="lead" id="lead" maxlength="300" placeholder="artist lead"></textarea><br>
                                    <label>Description</label><textarea  placeholder="artist description" name="desc" id="desc"></textarea><br>
                              
                                        <div id="links"> 
                                          <h2 class ="addArtistHeader">Links</h2>
                                          <label>Title</label><input type="text" name="title" id="titleLink" ><br>
                                          <label>Name</label><input type="text" name="nameLink" id="nameLink" ><br>
                                          <label>URL</label><input type="url" name="url" id="url" ><br>
                                        </div> 
                              
                                        <div id="artistImageDiv">
                                              <h2 class ="addArtistHeader">Image</h2>
                                              <label>Browse existing image</label><input type="file" name="img" multiple id="artistImgBrowse">
                                              <label>Upload new image</label><input id="artistImgUpload" type="file" name="img" multiple>
                                              <br>
                                        </div>  

                              </div>

                              <div  id="genreSelect">
                                    <h2 class ="addArtistHeader">Genre</h2>
                                    <label>Genre</label><input type="text" name="genre" id="genre"/>
                              </div>


                              <div id= "musicianSelect">
                                    <h2 class ="addArtistHeader">Musician</h2>
                                    <label>Musician</label><input type="text" name="musician" id="musician" placeholder="start typing a name"/>
                                    <button id="createNewMusicianButton" class="noResult add">Create</button>    
                                    <button id="showAll">show all</button>
                                    <fieldset id="musiciansPlaying">
                                        <legend>Musicians playing</legend>
                                    </fieldset>
                                    <div>
                                    <h3 id = 'noResultsInfo'>pas de resultat, vous pouvez creer un nouvel artiste</h3> 
                                    </div>
                              </div>


                              <div id= "addToEvent">
                                   <h2 class ="addArtistHeader">Event</h2>
                                   <label>Add to event</label><input type="text" name="eventName" id="eventName"/>
                                   <label>Arrival hour</label><input type="time" name="arrivalHour" id="arrivalHour">
                 
                              </div>
 
                              <!-- <button id="createNewArtistButton">CREATE NEW ARTIST</button> -->
                          </form>
                        </div>
                      </div>

                      <div class= "accordion">
                        <h1 class ="addArtistHeader">Musician 1</h1>
                          <div>
                            <form  class="musicianForm">
                              <h2 class ="headerMusicianForm"> </h2>
                                <div class="musicianInfoForm">
                                  <label>Name* </label><input type="text" name="nameMusician"  class ="nameMusician" required/><br>
                                  <label>Last name</label><input type="text" name="lastNameMusician" id="lastNameMusician" /><br>
                                  <label>Stagename </label><input type="text" name="stagename" id="stagename" /><br>
                                </div>
                                <div class="musicianInstruForm">
                                  <label>Instrument</label><input type="text" name="instrument" class="instrument" placeholder="start typing"/>
                                  <fieldset class="instrumentsPlayed">
                                      <legend>Instruments played</legend>
                                  </fieldset>
                                </div>
                            </form>
                          </div>
                      </div>
                    
                  </div> <!--Fin class=form artist-->
                  
                
                
                

                <div class="form musician">
                    <form id="musicianForm">
                        dasdasdasdasdsadasdas
                    </form>
                </div>
                <div class="form stuff">
                    <form id="stuffForm">
                      
                    </form>
                </div>
                
            </div>
        </div>
        <div id="listMain" class=" main">
            <nav class="normalSecondNav">
                <ul>
                    <li><a href="listEvent">list event</a></li>
                    <li><a href="listArtist">list artist</a></li>
                    <li><a href="listMusician">list musician</a></li>
                    <li><a href="listStuff">list stuff</a></li>
                </ul>
            </nav>
            <div id="forms">
                <div class="form event">
                    <form id="eventForm">
                        <p>
                           Ici il y aura une LISSSTE!
                       </p>
                    </form>
                </div>
                <div class="form artist">
                    <form id="artistForm">
                        
                    </form>
                </div>
                <div class="form musician">
                    <form id="musicianForm">
                        
                    </form>
                </div>
                <div class="form stuff">
                    <form id="stuffForm">
                      
                    </form>
                </div>
                
            </div>
        </main>
    </body>
</html>