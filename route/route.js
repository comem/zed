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





//	Artist router
//	==================

	var ArtistRouter = Backbone.Router.extend({
	  routes: {
	    'artist/all': 'allArtistScreen',
	    'artist/:id': 'artistScreen'
	  },

	  allArtistScreen: function() {
	  },

	  artistScreen: function(id) {
	  }
	});
	