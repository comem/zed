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

            nested:'artists',
            defaults: function(){
                return{
                    artists: new ArtistColl(),
                    name:'',
                    startDate:'',
                    startHour: '',
                    openingDoors: '',
                    endingDate : '',
                    endingHour :'',
                    nbVeganMeals:'',
                    nbNormalMeals:'',
                    mealsNote:'',
                    compNote:'',
                    nbPlaces :'',
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

var EventsNestedColl = MyModelNestedCollection.extend({
    nested: 'events',
    defaults: function(){
        return {
            events : new EventColl()
        }
    }
})



