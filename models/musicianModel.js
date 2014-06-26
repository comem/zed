

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
        var Musician = MyModelNestedCollection.extend({
          
            initialize: function(){
                 //this.listenTo(this.model, 'all', this.render);
            },
            nested:'instruments',
         
            defaults: function(){
                return {
                    first_name :'',
                    instruments : new InstrumentsColl(),
                
                    last_name:'',
                    stagename:''
                }
            },
            validate: function(attributes, options){
                if(attributes.first_name == '' || attributes.first_name.length ==0){
                    $( "<div title='Attention!'>").dialog({
                      
                      buttons: {
                        Close: function() {
                          $(this).dialog( "close" );
                            },
                      }
                    }).append('Fill the musician name');
                }
             },
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;

                }
                response.comments = new InstrumentsColl(response.comments);
     
                return response;
            }
        });


        //la collection de tous les musiciens
        var MusiciansColl = Backbone.Collection.extend({
            model: Musician,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                response.comments = new InstrumentsColl(response.comments);
                console.log(response);
                return response;

                  }
            });

        var allMusicians = new MusiciansColl();
    
        //Model qui est une collection des musiciens
       var MusicianNestedColl = MyModelNestedCollection.extend({
            nested: 'musicians',
            defaults: function(){
                return{
                    musicians: new MusiciansColl()
                }
            }
       });
       
     var aMusiciansList = new MusicianNestedColl();


     //*******************//**********SERVER*********//**************
     
        var MusicianCollServer = Backbone.Collection.extend({
            url: '/projInt/php/urlTest.php',
            model: Musician,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                //console.log(response);
                return response;
            }
        });
        var musicianCollServer = new MusicianCollServer();


        var MusicianNestedCollServer = MyModelNestedCollection.extend({
            url: '/projInt/php/urlTest.php',
            nested:'musicians',
            defaults: function(){
                return {
                    musicians : new MusicianCollServer()
                }
            },
            parse: function (response) {
            if (typeof response.data != "undefined") {
                response = response.data;
            }
            
            console.log(response);
          
            return response;
        }
        });
        var musicianNestedCollServer = new MusicianNestedCollServer();



   