var LAST_TAB = 'event';

// Application router
// ==================
var AppRouter = Backbone.Router.extend({
        routes: {
        	'': 'index',
            'add/:form' : 'formHandler',
            'list/:form' : 'formHandler',
            ':list': 'tab',
            ':add': 'tab'
        },
  		index: function(){
  			console.log('default url -> add/'+LAST_TAB);
  			//this.navigate('add/'+LAST_TAB);
  		},
        formHandler: function(form) {
        	//console.log(form);
            scrollForm(form);
            LAST_TAB = form;
        },
        tab: function(tab){
			console.log('route with tab fct');
        	showMain(tab);
            //this.navigate(tab+'/'+LAST_TAB, {replace:true});
        },
    });