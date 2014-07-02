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
    <body id="login">

        <div class="header">
             <img id="logoLogin" src="img/logo.png">
        </div>

       <div class="formulaire">
            
            <form id ="login_form" action="index.php">
                <h1>Login</h1>
                <h2>to continue</h2>
                <div class="input">
                    <div class="blockinput">
                    <input type="text" placeholder="Username"> <br>
                     <input type="password" placeholder="Password">
                    </div>
                    <div class="roundedTwo">
                        <input class="css-checkbox" type="checkbox" value="" id="remember" name=""/>
                        <label class="css-label"for="remember">Remember me</label>
                    <div/>
                </div>
                <button>Login</button>
            </form>

       </div>
    </body>
</html>
