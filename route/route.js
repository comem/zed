// Application router
// ==================
var AppRouter = Backbone.Router.extend({
  routes: {
  	'': 'index', //url: root
    'add/': 'index',
    'list/': 'index'
  },
  initialize: function(){
  	console.log('init router');
  },
  index: function(){
  	console.log('home');
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
	