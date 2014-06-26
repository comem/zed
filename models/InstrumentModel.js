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
            urlRoot: 'http://pingouin.heig-vd.ch/gof/instruments',
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
           url: 'http://pingouin.heig-vd.ch/gof/instruments',
            model: Instrument,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
               //console.log(respone);
                return response;
            }
        });
        var instrumentsCollServer = new InstrumentsCollServer();


        var InstrumentsNestedCollServer = MyModelNestedCollection.extend({
          url: 'http://pingouin.heig-vd.ch/gof/instruments',
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
            response = new Instrument();
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
