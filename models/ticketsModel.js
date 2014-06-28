

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
        var Ticket = Backbone.Model.extend({
           // urlRoot: 'http://pingouin.heig-vd.ch/gof/instruments',
            initialize: function(){
            },
            defaults: function(){
                return {
                    name_de:''
                }
            }
        });

        var TicketsColl = Backbone.Collection.extend({

            model: Ticket
        });

       var ticketsColl = new TicketsColl();


        var TicketsNestedColl = MyModelNestedCollection.extend({
            nested:'tickets',
            defaults: function(){
                return {
                    instruments : new TicketsColl() 
                }
            }
        });
        var ticketsNestedColl = new TicketsNestedColl();
