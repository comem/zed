
 var MyModelNestedCollection = Backbone.Model.extend({
            nested: 'collection',
            initialize: function (attrs, options) {
                this.get(this.nested).on('all', function(eventName) {
                    this.trigger(eventName, this);
                }, this);
            },
            toJSON: function() {
                var colObj = {};
                colObj[this.nested] = this.get(this.nested).toJSON();
                return _.extend(
                    Backbone.Model.prototype.toJSON.apply(this, arguments),
                    colObj
                );
            }
        });
//*******************GENRE MODEL//*******************
        var Genre = Backbone.Model.extend({
        	defaults: function (){
        		return{
        			genre:''
        		}
        	}
        });

        var GenresColl = Backbone.Collection.extend({
            model: Genre
        });

        var genresCollection = new GenresColl();


        var GenresNestedColl = MyModelNestedCollection.extend({
        	nested: 'genres',
        	defaults: function(){
                return{
                    genres: new GenresColl()
                }
            }
        })
        var genresNestedColl = new GenresNestedColl();


//*******************//*******************//**************

//*******************//**********SERVER*********//**************
     
        var GenreCollServer = Backbone.Collection.extend({
            url: '/projInt/php/allGenres.php',
            model: Genre,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                //console.log(response);
                return response;

            }
        });
        var genreCollServer = new GenreCollServer();


        var GenreNestedCollServer = MyModelNestedCollection.extend({
            url: '/projInt/php/allGenres.php',
            nested:'genres',
            defaults: function(){
                return {
                    genres : new GenreCollServer()
                }
            },
            parse: function (response) {
            if (typeof response.data != "undefined") {
                response = response.data;
            }
            response = new Genre(response.genre);
            console.log(response);
          
            return response;
        }
        });
        var genreNestedCollServer = new GenreNestedCollServer();


     genreCollServer.fetch({success: function(){
            console.log('genreNestedCollServer');
           console.log(genreNestedCollServer.toJSON())
        }})

             genreNestedCollServer.get('genres').fetch({success: function(){
            console.log('genreNestedCollServer');
            console.log(genreNestedCollServer.toJSON())
        }})

