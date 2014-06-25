

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

//*******************INSTRUMENT MODEL//*******************
        var Instrument = Backbone.Model.extend({
            urlRoot: 'http://chabloz.eu/ws/api/v1/posts',
            initialize: function(){
            },
            defaults: function(){
                return {
                    name_de:''
                }
            }
        });

        var InstrumentsColl = Backbone.Collection.extend({

            model: Instrument,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                console.log(response);
                return response;

            }
        });
       var instrumentsColl = new InstrumentsColl();


        var InstrumentsNestedColl = MyModelNestedCollection.extend({
            nested:'instruments',
            defaults: function(){
                return {
                    instruments : new InstrumentsColl() 
                }
            }
        });
        var instrumentsNestedColl = new InstrumentsNestedColl();

//*******************//**********SERVER*********//**************
     
        var InstrumentsCollServer = Backbone.Collection.extend({
            url: 'http://chabloz.eu/ws/api/v1/posts',
            model: Instrument,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
               console.log(response[0].comments[53].text);
                return response;
            }
        });
        var instrumentsCollServer = new InstrumentsCollServer();


        var InstrumentsNestedCollServer = MyModelNestedCollection.extend({
            url: 'http://chabloz.eu/ws/api/v1/posts/',
            nested:'instruments',
            defaults: function(){
                return {
                    instruments : new InstrumentsCollServer()
                }
            },
            parse: function (response) {
            if (typeof response.data != "undefined") {
                response = response.data;
            }
            response.comments = new Instrument();
            //console.log(response.comments);
          
            return response;
        }
        });
        var instrumentsNestedCollServer = new InstrumentsNestedCollServer();


//*******************//*******************//**************
//test


        instrumentsCollServer.fetch({ success: function(){
            console.log('istrumentsCollServer');
           console.log(instrumentsCollServer.toJSON())
        }})


             

$(document).ready(function(){
   

  
})
    
  //  instrumentsCollServer.add(hej)
   // instrumentsCollServer.save()
