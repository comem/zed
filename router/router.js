var LAST_FORM = 'event';

// Application router
// ==================
var AppRouter = Backbone.Router.extend({
        routes: {
        	'': 'index',
          'add/:form' : 'formHandler',
          'list/:form' : 'formHandler',
          ':tab': 'tabHandler'
        },
  		index: function(){
  			console.log('default url -> add/'+LAST_FORM);
  			this.navigate('add/'+LAST_FORM);
  		},
        formHandler: function(form) {
            scrollForm(form);
            LAST_FORM = form;
        },
        tabHandler: function(tab){
			console.log('route with tab '+tab);
        	showMain(tab);
            this.navigate(tab+'/'+LAST_FORM, {replace:true});
        }
    });