
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
            urlRoot: '',
            initialize: function(){
                
            }
        });

        var InstrumentsColl = Backbone.Collection.extend({
            model: Instrument,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                //console.log(response);
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
            },
            parse: function (response) {
            if (typeof response.data != "undefined") {
                response = response.data;
            }
            response = new Instrument(response);
          
            return response;

        }
        });
        var instrumentsNestedColl = new InstrumentsNestedColl();

//*******************//**********SERVER*********//**************
     
        var InstrumentsCollServer = Backbone.Collection.extend({
            url: '',
            model: Instrument,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                //console.log(response);
                return response;

            }
        });
        var instrumentsCollServer = new InstrumentsCollServer();


        var InstrumentsNestedCollServer = MyModelNestedCollection.extend({
            url: '/projInt/php/allInstruments.php',
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
            response = new Instrument(response);
            console.log(response);
          
            return response;
        }
        });
        var instrumentsNestedCollServer = new InstrumentsNestedCollServer();



    
//*******************//*******************//**************
//test

  
        instrumentsCollServer.fetch({success: function(){
            console.log('istrumentsCollServer');
           console.log(instrumentsCollServer.toJSON())
        }})

              instrumentsNestedCollServer.get('instruments').fetch({success: function(){
            console.log('istrumentsNestedCollServer');
            console.log(instrumentsNestedCollServer.toJSON())
        }})

$(document).ready(function(){
    var hej = new Instrument({name: 'CHUJ!'})
    hej.save();
  
})
    
  //  instrumentsCollServer.add(hej)
   // instrumentsCollServer.save()
