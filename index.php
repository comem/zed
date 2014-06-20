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
    <script src="js/forms.js" type="text/javascript"></script>
    <script src="js/modernizr.js" type="text/javascript"></script>
    <script src="js/events.js"></script>
    <script src="views/pack.php"></script>  
    <script src="models/musicianModel.js"></script>   
    
    

    <script src="js/forms.js"></script>
    
    <script src="js/main.js"></script>
    <script src="js/artistForm.js"></script>
    <script>
          $(function() {

            $('input[class="time"]').timepicker({'step': 5})
           $(".accordion").accordion({ collapsible: true, animate: 200, icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }});
          });

        </script>


         <script src="js/events.js"></script>
<style > .ui-autocomplete {
                max-height: 200px;
                overflow-y: auto;
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