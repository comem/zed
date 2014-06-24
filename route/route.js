// Application router
// ==================
var AppRouter = Backbone.Router.extend({
  routes: {
  	'': 'index', //url: root
  	'add': 'navfirstlevel', //url: add/
  	'list': 'navfirstlevel', //url: list/
  	':branch/:form': 'nav', //url: add/artist,list/event, etc
  	'search/:query': 'search'
  },
  initialize: function(){
  	console.log('init router');
  },
  index: function(){
  	console.log('home');
  },
  navfirstlevel: function(){
  	console.log('add/list');
  	showMain();
  },
  nav: function(branch, form){
  	console.log('nav');
  	showMain();
  	scrollForm(form);
  },
  search: function(query){
  	console.log('search');
  }
});





	// Artist router
	// ==================

	var ArtistRouter = Backbone.Router.extend({
	  routes: {
	    'artist':     'allArtistScreen',
	    'artist/:id': 'artistScreen'
	  },

	  allArtistScreen: function() {
	    // Fetch all books and render a list with them.
	  },

	  artistScreen: function(id) {
	    // Fetch book with `id` and render it.
	  }
	});
	