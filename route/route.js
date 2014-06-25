// Application router
// ==================
var AppRouter = Backbone.Router.extend({
  routes: {
  	'': 'index', //url: root
  },
  initialize: function(){
  	console.log('init router');
  },
  index: function(){
  	//console.log('home');
  }
});
