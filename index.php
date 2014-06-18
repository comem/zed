<!DOCTYPE html>
<html lang="fr">
    <head>
	   <title>ZED</title>
	   <meta charset="utf-8">
	   <link rel="stylesheet" type="text/css" href="css/style.css">  
     <link rel="stylesheet" type="text/css" href="css/form.css">        
        <script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/jquery-ui.js" type="text/javascript"></script>       

        <script src="js/modernizr.js" type="text/javascript"></script>
        <script src="js/main.js"></script>
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
                <div class="form artist">
                    <form id="artistForm">
                        <h1 class ="addArtistHeader">Create new artist</h1>

                        <div id="artistInfoDiv">
                          
                          <h2 class ="addArtistHeader">Informations</h2>

                            <label>Name*</label><input type="text" name="nameArtist" id="nameArtist" required placeholder="artist name"><br>
                            <label>Lead </label><textarea name="lead" id="lead" maxlength="300" placeholder="artist lead"></textarea><br>
                            <label>Description</label><textarea  placeholder="artist description" name="desc" id="desc"></textarea><br>
                        </div>

      <div  id="genreSelect">
              Genre<input type="text" name="genre" id="genre"/>
      </div>


      <div id= "musicianSelect">
          Musician    
              <input type="text" name="musician" id="musician" placeholder="start typing a name"/>   
          <button id="showAll">show all</button>
            <button id="createNewMusicianButton" class="noResult add">Create new musician</button>

             <fieldset id="musiciansPlaying">
                <legend>Musicians playing</legend>
            </fieldset>
            <div><h3 id = 'noResultsInfo' >pas de resultat, vous pouvez creer un nouvel artiste</h3> </div>
      </div>


      <div id= "addToEvent">
        <h2 class ="addArtistHeader">Event</h2>
        Add to event 
              <input type="text" name="eventName" id="eventName"/>
           Arrival hour <input type="time" name="arrivalHour" id="arrivalHour">
           
    </div>


      <div id="links">
        <h2 class ="addArtistHeader">Links</h2>
        Title <input type="text" name="title" id="titleLink" ><br>
        Name <input type="text" name="nameLink" id="nameLink" ><br>
        URL <input type="url" name="url" id="url" ><br>
      </div>
        
 <div id="artistImageDiv">
      <h2 class ="addArtistHeader">Image</h2>
      Browse existing image <input type="file" name="img" multiple id="artistImgBrowse">
        Upload new image <input id="artistImgUpload" type="file" name="img" multiple>
        <br>
</div>
        <button id="createNewArtistButton">CREATE NEW ARTIST</button>


                    </form>
                </div>
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