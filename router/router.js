/* Informations : ShowMain(): anim de tab, ScrollForm(): anim de formulaire
    
    Situation initiale :
    L'étape 2 de la fonction 'tabHandler' nous fausse l'url envoyé par le href de add et list
    Cela nous redonne toujours un format 'tab/form' au lieu du 'tab' qui est le href des boutons add et list
    dixit <a href="add">add</a>. Mais nous voulons une URL 'root/add/event' lorsque nous cliquons sur ce bouton, pas une URL 'root/add'
    
    Sont encapsulé dessous 4 boutons, qui vont constituer le second niveau de l'URL.
    Lorsque cliqué nous optenons toujours 'add/:form' ou 'list/:form' où :form est le nom du formulaire.
    En fait ici j'envoie le href suivant si je clique sur 'event' dans le second niveau: <a href="add/event">add</a>.
    Cela va me rediriger vers formHandler, ceci est le comportement voulu.
    
    Problème :
    En faisant Back sur le browser : l'URL a la structure 'tab/form' que l'on clique sur un bouton de form ou de tab. 
    le routeur redirige sur la fonction formHandler lorsque Back est pressé car l'URL 'root/add' n'existe plus.
    L'URL est remplacé par notre structure voulue. (voir point 2, fonction tabHandler)
    Dans notre cas cela signifie qu'il va passer une transition de formulaire via le bouton Back du browser
    Hors il s'agit d'une transition de tab que nous souhaitons. Cela en raison de la structure 'tab/form' qui va capter cet structure d'URL


    Idée : Fonction formHandler boucle if-else (ajouté après)
    J'ai fais une condition: si il détecte un changement de tab via 2 variables stocké. 
    Elle doit faire l'animation de tab, sinon de form. C'est là que nous avons un bloquage.
*/

// Variables globales
// ==================
var LAST_FORM = 'event';
var activeTab = 'add';
var lastTab = '';

// Application router
// ==================
var AppRouter = Backbone.Router.extend({
        routes: {
        	'': 'index',
            'add/:form' : 'formHandler',
            'list/:form' : 'formHandler',
            ':list': 'tabHandler',
            ':add': 'tabHandler'
        },

  		index: function(){
  			console.log('default url -> add/'+LAST_FORM);
            // url : add/event
  			this.navigate('add/'+LAST_FORM);
  		},

        // exemple: tab = 'list'
        tabHandler: function(tab){
			console.log('route with tab '+tab);
            // 1. anim de la tab pour montrer 'list'
        	showMain(tab);
            // 2. url : list/event, on avait par défaut add/event
            this.navigate(tab+'/'+LAST_FORM, {replace:true});
            // 3. activeTab = 'add', lastTab devient 'add'
            lastTab = activeTab;
            // 4. on a clické sur 'list', alors activeTab devient 'list'
            activeTab = tab;
        },

        formHandler: function(form) {
                // 1. anim de tab, si la tab a changé
                if(activeTab != lastTab){
                    showMain(activeTab);
                    lastTab = activeTab;
                }else{
                // 2. anim de form
                scrollForm(form);
                LAST_FORM = form;              
            }

        }
    });