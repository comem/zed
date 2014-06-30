
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



var EventModel = MyModelNestedCollection.extend({
    urlRoot:'http://pingouin.heig-vd.ch/gof/nights',

            nested:'artists',
            nested:'ticketcategories',
            defaults: function(){
                return{
                    artists: new ArtistColl(),
                    ticketcategories: new TicketsColl(),
                    title_de:'',
                    start_date_hour:'',
                    opening_doors: '',
                    ending_date_hour : '',
                    nb_vegan_meals:'',
                    nb_meals:'',
                    meal_notes:'',
                    notes:'',
                    nb_places :'',
                    followed:'',
                    ticketType:'',
                    ticketPrice :'',
                    ticketQt :'',
                    ticketNote:'',
                    eventType:'',
                    publishing:''
                }
            },
        validate: function(attrs, options){
            if (!_.isDate(attrs.startDate) || attrs.startDate =='') {
                alert('event start date has to be a date!')
            }
            if(!_.isNumber(attrs.ticketPrice)){
                alert('ticket price has to be a number!')
            }
             if(!_.isNumber(attrs.ticketQt)){
                alert('ticket quantity has to be a number!')
            }
             if(!_.isNumber(attrs.nbPlaces)){
                alert('number of places has to be a number!')
            }
             if(!_.isNumber(attrs.nbNormalMeals)){
                alert('number of normal meals has to be a number!')
            }
             if(!_.isNumber(attrs.nbVeganMeals)){
                alert('number of vegan meals has to be a number!')
            }
        }

        });

var EventColl = Backbone.Collection.extend({
    model:EventModel
}) 

var eventColl = new EventColl()

var EventsNestedColl = MyModelNestedCollection.extend({
    nested: 'events',
    defaults: function(){
        return {
            events : new EventColl()
        }
    }
})

eventsNestedColl = new EventsNestedColl()
