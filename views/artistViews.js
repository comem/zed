 var ArtistView = Backbone.View.extend({
            initialize: function(attrs, options) {
              this.listenTo(this.model, 'all', this.render);
             },
           template : _.template(templates.add_artistViewTemplate),
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

var ArtistMultipleView = Backbone.View.extend({
            

           template : _.template(templates.add_multipleArtistsTemplate),
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

var multipleArtists = new ArtistMultipleView({model:artistNestedCollServer});


        var ArtistFieldInMusician = Backbone.View.extend({
          initialize: function(attrs, options) {
              this.listenTo(this.model, 'all', this.render);
             },
           template : _.template(templates.add_artistsSelectedFieldMusician),
            render: function() {
            this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            events: {
                'click .deleteArtist': 'delete'
            }, 
            delete: function (event) {
              
              var len = artistNestedList.toJSON().artists.length;
              if (len == 1)  $('#musicianAddedToArtist').fadeOut("slow");
            
             var artistIndex = $(event.target).attr('data-indice');
             
             var artistDelete = this.model.get('artists').at(artistIndex);
             //remove from nested model
              this.model.get('artists').remove(artistDelete);
              
               console.log(artistNestedList.toJSON());
            }
        });

        artistField = new ArtistFieldInMusician({model :artistNestedList})


       