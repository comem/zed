<!DOCTYPE html>
<html lang="fr">
    <head>
	   <title>ZED</title>
	   <meta charset="utf-8">
	   <link rel="stylesheet" type="text/css" href="css/style.css">        
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
                        Artist
                    </form>
                </div>
                <div class="form musician">
                    <form id="musicianForm">
                        Musician
                    </form>
                </div>
                <div class="form stuff">
                    <form id="stuffForm">
                       Stuff
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
                        Artist
                    </form>
                </div>
                <div class="form musician">
                    <form id="musicianForm">
                        Musician
                    </form>
                </div>
                <div class="form stuff">
                    <form id="stuffForm">
                       Stuff
                    </form>
                </div>
                
            </div>
        </main>
    </body>
</html>