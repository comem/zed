
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

//*******************ARTIST MODEL//*******************
        var Artist = MyModelNestedCollection.extend({
            initialize:function(){
             },
             nested: 'links',
            nested:'musicians',
            nested:'genres',

            defaults: function(){
                return{
                    name:'',
                    short_description_de :'',
                    complete_description_de: '',
                    genres: new GenresColl(),
                    musicians: new MusiciansColl(),
                    links : new GenresColl()
                }
            },

            validate: function(attrs, options){
                if(attrs.lead > 300){
                    $( "<div>").dialog({    
                   title: 'Attention!'      ,  
                          buttons: {
                            Close: function() {
                              $(this).dialog( "close" );
                                },
                          }
                        }).append('Lead is too long');
                 
                }
                if(attrs.first_name ==0){
                    $( "<div>").dialog({    
                   title: 'Attention!'      ,  
                          buttons: {
                            Close: function() {
                              $(this).dialog( "close" );
                                },
                          }
                        }).append('Artist name missing');
                 
                }
                if(attrs.linkName==0){
                    $( "<div>").dialog({    
                   title: 'Attention!'      ,  
                          buttons: {
                            Close: function() {
                              $(this).dialog( "close" );
                                },
                          }
                        }).append('Link name missing');
                 
                }
                if(attrs.linkURL==0){
                   $( "<div>").dialog({    
                   title: 'Attention!'      ,  
                          buttons: {
                            Close: function() {
                              $(this).dialog( "close" );
                                },
                          }
                        }).append('URL link missing');
                 
                }
                
            }

        });
        var ArtistColl = Backbone.Collection.extend({
            model:Artist
        }) 
        var artistList = new ArtistColl();


        var ArtistNestedColl = MyModelNestedCollection.extend({
            initialize:function(){
                //this.listenTo(this.model, 'add', this.render);
              },
            nested: 'artists',
            defaults: function(){
                return{
                    artists: new ArtistColl()
                }
            }
        })
        var artistNestedList = new ArtistNestedColl();
 
       

   
//*******************//*******************//**************
//*******************//**********SERVER*********//**************
     
        var ArtistCollServer = Backbone.Collection.extend({
            url: '/projInt/php/urlTest.php',
            model: Genre,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                //console.log(response);
                return response;

            }
        });
        var artistCollServer = new ArtistCollServer();


        var ArtistNestedCollServer = MyModelNestedCollection.extend({
            url: '/projInt/php/urlTest.php',
            nested:'artists',
            defaults: function(){
                return {
                    artists : new ArtistCollServer()
                }
            },
            parse: function (response) {
            if (typeof response.data != "undefined") {
                response = response.data;
            }
            response = new Artist(response);
            console.log(response);
          
            return response;
        }
        });
        var artistNestedCollServer = new ArtistNestedCollServer();

