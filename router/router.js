var LAST_FORM = 'event';

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
  			console.log('default url -> add/'+LAST_FORM);
  			this.navigate('add/'+LAST_FORM);
  		},
        formHandler: function(form) {
        	//console.log(form);
            scrollForm(form);
            LAST_FORM = form;
        },
        tab: function(tab){
			console.log('route with tab fct');
        	showMain(tab);
            this.navigate(tab+'/'+LAST_FORM, {replace:true});
        },
    });