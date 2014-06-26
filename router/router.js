var LAST_FORM = 'event';
var LAST_TAB = 'add';
var ACTIVE_TAB = 'add';

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
            console.log('route with form fct');
            // ACT: List --- Last: Add
            if(ACTIVE_TAB != LAST_TAB){
                showMain(LAST_TAB);
                ACTIVE_TAB = 'add';
                LAST_TAB = 'list';
            }
            scrollForm(form);
            LAST_FORM = form;
        },
        tab: function(tab){
			console.log('route with tab '+tab);
        	showMain(tab);
            this.navigate(tab+'/'+LAST_FORM, {replace:true});
            ACTIVE_TAB = tab;
        },
    });