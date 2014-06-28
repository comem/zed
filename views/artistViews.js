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

        var multipleArtists = new ArtistMultipleView()
       