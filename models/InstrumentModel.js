

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
            urlRoot: 'http://pingouin.heig-vd.ch/gof/api/v1/instruments',
            initialize: function(){
            },
            defaults: function(){
                return {
                    name_de:'',
                    instrument_id: '44'
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
           url: 'http://pingouin.heig-vd.ch/gof/api/v1/instruments',
            model: Instrument,
            initialize:function(){
                Backbone.sync('create', this);
            },
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
          url: 'http://pingouin.heig-vd.ch/gof/api/v1/instruments',
            nested:'instruments',
             initialize:function(){
                Backbone.sync('create', this);
            },
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
          
            return {
                name_de : name_de
            };
        }
        });
        var instrumentsNestedCollServer = new InstrumentsNestedCollServer();
            instrumentsCollServer.fetch({
                success:function(){
                console.log(instrumentsNestedColl.toJSON());
            }
        })


//*******************//*******************//**************
//test
/*

        instrumentsCollServer.fetch({ success: function(){
            console.log('istrumentsCollServer');
           console.log(instrumentsCollServer.toJSON())
        }})
*/

        


             

$(document).ready(function(){
   

  
})
    
  //  instrumentsCollServer.add(hej)
   // instrumentsCollServer.save()
