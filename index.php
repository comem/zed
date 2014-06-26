<!DOCTYPE html>
<html lang="fr">
    <head>
	   <title>ZED</title>
	   <meta charset="utf-8">
	   <link rel="stylesheet" type="text/css" href="css/style.css">
     <link rel="stylesheet" type="text/css" href="css/form.css"> 
     <link rel="stylesheet" type="text/css" href="css/uicss.css"> 
     <!-- <link rel="stylesheet" type="text/css" href="css/list.css">  -->
     <script src="js/jquery.js" type="text/javascript"></script>
    <script src="js/jquery-ui.js" type="text/javascript"></script> 
    <script type="text/javascript" src="/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
    <script src="js/underscore.js" type="text/javascript"></script> 
    <script src="js/backbone.js" type="text/javascript"></script>
    <script src="js/mustache.js" type="text/javascript"></script>         
    <link rel="stylesheet" href="lib/fancyBox-master/source/jquery.fancybox.css" type="text/css" media="screen" />
    <script type="text/javascript" src="lib/fancyBox-master/source/jquery.fancybox.pack.js"></script>
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
    <script src="js/autocompleteArtist.js"></script>


    <script src ="js/createMusician.js"></script>
    <script src ="js/createArtist.js"></script> 
    <script src ="lang/jquery.localisation.js"></script> 
    <script src ="js/langChange.js"></script> 

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
</html>