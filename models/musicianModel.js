
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

        //Model Musician
        var Musician = Backbone.Model.extend({
           // nested:'instruments',
            defaults: function(){
                return {
                    instruments:'',
                    lastName:'',
                    stageName:''
                }
            },
            initialize: function(){
               console.log(JSON.stringify(this));
             },
            validate: function(){
                if(attributes.name == '' || attributes.name.length ==0){
                    alert('fill the musician name');
                }
             },
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                return response;
            }
        });

        //la collection de tous les musiciens
        var AllMusiciansCollection = Backbone.Collection.extend({
            url: 'http://ws.chabloz.eu/api/v1/tasks/',
            model: Musician,
            compare: function(model, model2){
              return model.get('name').localeCompare(model2.get('name'));
             },
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                return response;
                  }
                  
            });
        var allMusicians = new AllMusiciansCollection();


        //Model qui est une collection des musiciens
       var MusiciansList = MyModelNestedCollection.extend({
            nested: 'musicians',
            defaults: function(){
                return{
                    musicians: new AllMusiciansCollection()
                }
            }
       });
       var aMusiciansList = new MusiciansList();
    
       var MusicianView = Backbone.View.extend({
            initialize: function(attrs, options){
                 this.listenTo(this.model, 'all', this.render);
            },
           template : _.template(templates.add_addArtist_musiciansPlayingField),
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            events: {
                'click .deleteMusician': 'delete'
            },  
            delete: function (event) {
              var len = aMusiciansList.toJSON().musicians.length;
              if (len == 1)  $('#musiciansPlaying').fadeOut("slow");
                
             var musicianIndex = $(event.target).attr('data-indice');
             var musicianDelete = this.model.get('musicians').at(musicianIndex);
              this.model.get('musicians').remove(musicianDelete);
              console.log(aMusiciansList.toJSON())
            }
        });

       var viewMusiciansPlaying = new MusicianView({model: aMusiciansList})

        var NewMusicianFormView = Backbone.View.extend({
            initialize: function(){
              this.render()
            },

           template : _.template(templates.add_addArtist_templateMusicien),
            render: function() {
                this.$el.html(this.template(this));
                return this;
            }
        });
     var createNewMusicianForm = new NewMusicianFormView();
   
