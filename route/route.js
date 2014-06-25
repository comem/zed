var LAST_TAB = 'event';

// Application router
// ==================
var AppRouter = Backbone.Router.extend({
        routes: {
        	'': 'index',
            'add/:form' : 'addHandler',
            'list/:form' : 'listHandler',
            'list': 'list',
            'add': 'add'
        },
  		index: function(){
  			console.log('default url -> add/'+LAST_TAB);
  			//this.navigate('add/'+LAST_TAB);
  		},
        addHandler: function(form) {
        	//console.log(form);
            scrollForm(form);
            LAST_TAB = form;
        },
        listHandler: function(form){
        	scrollForm(form);
        	LAST_TAB = form;
        },
        list: function(){
			console.log('router list');
        	showMain();
        },
        add: function(){
        	console.log('router add');
        	showMain();
        }
    });