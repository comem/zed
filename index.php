<<<<<<< HEAD
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
=======
<!DOCTYPE html>
<html lang="fr">
    <head>
	   <title>ZED</title>
	   <meta charset="utf-8">
	   <link rel="stylesheet" type="text/css" href="css/style.css">
     <link rel="stylesheet" type="text/css" href="css/form.css"> 
     <link rel="stylesheet" type="text/css" href="css/uicss.css"> 
     <script src="js/jquery.js" type="text/javascript"></script>
    <script src="js/jquery-ui.js" type="text/javascript"></script> 

    <script src="js/underscore.js" type="text/javascript"></script> 
    <script src="js/backbone.js" type="text/javascript"></script>
    <script src="js/mustache.js" type="text/javascript"></script>         
    
    <script src ="js/jquery.timepicker.js"></script>      
       
    <script src="js/modernizr.js" type="text/javascript"></script>
    <script src="js/events.js"></script>
    <script src="templates/pack.php"></script>  
    
     
   

    <script src="models/genreModel.js"></script>   
    <script src="models/instrumentModel.js"></script>   
    <script src="models/musicianModel.js"></script>
    <script src="models/artistModel.js"></script>
    <script src="models/eventModel.js"></script>

    <script src="views/artistViews.js"></script>
    <script src="views/eventViews.js"></script>
    <script src="views/instrumentViews.js"></script>
    <script src="views/genreViews.js"></script>
    <script src="views/musicianViews.js"></script>
    
     <script src="js/testBackbone.js"></script> 
    
    <script src="js/main.js"></script>
    <script src="js/artistForm.js"></script>
    <script src="js/forms.js"></script>
    
    <script src="js/autocompleteGenre.js"></script>
    <script src="js/autocompleteInstrument.js"></script>

    <script src ="js/createMusician.js"></script>
    <script src ="js/createArtist.js"></script> 
    <script>
          $(function() {

            $('input[class="time"]').timepicker({'step': 5})
           $(".accordion").accordion({ collapsible: true, animate: 200, icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }});
          });

    </script>


         <script src="js/events.js"></script>
<style > .ui-autocomplete {
                max-height: 200px;
                overflow-y: auto
                /* prevent horizontal scrollbar */
                overflow-x: hidden;
                background-color: white;
              }

              .ui-autocomplete-category {
                font-weight: bold;
                font-size: 1em;
                padding: .2em .2em;
                margin: .4em 0 .2em;
                line-height: 1.5;
                color: #069;
                border-bottom: 2px solid #069;
            }  

            </style>

            
         
    </head>
    <body>
        
    </body>
>>>>>>> e9d1243fa083cbbd7f84621abad839bb6d3dbeb8
</html>