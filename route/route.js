// Application router
// ==================
var AppRouter = Backbone.Router.extend({
        routes: {
        	'': 'index',
            'add/:form' : 'urlHandler',
            'list': 'list'
        },
        initialize: function(){
        	console.log('init router');
        },
  		index: function(){
  			console.log('router home');
  		},
        urlHandler: function(form) {
            scrollForm(form);
        },
        list: function(){
			console.log('router list');
        	showMain();
        }
    });

var router = new AppRouter ();
		
Backbone.history.start({
    pushState: false,
    root: "/zed/"
});
