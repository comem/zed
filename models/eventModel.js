
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

var Image = Backbone.Model.extend({
    defaults: function(){
                return{
               
                 id:''
                 }
            }

})
var ImagesColl = Backbone.Collection.extend({
    model: Image
})


var EventModel = Backbone.Model.extend({
    urlRoot:'http://pingouin.heig-vd.ch/gof/api/v1/nights',


            defaults: function(){
                return{
                    artists: new ArtistColl(),
                    ticketcategories: new TicketsColl(),
                    title_de:'',
                    image: new ImagesColl(),
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
    url:'http://pingouin.heig-vd.ch/gof/api/v1/nights',

    model:EventModel,
    parse: function (response) {
        if (typeof response.data != "undefined") {
            response = response.data;
        }
       
        return response;
    }
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


 musicianNestedCollServer.get('musicians').fetch({
        success:function(){

           musicianList = new MusicianMultipleView({model:musicianNestedCollServer})
           musicianList.render().$el.appendTo('#musicianList')
            $('.myAccordion').accordion({collapsible: true, active: false,heightStyle: "content"})

           
        }
    })


   


eventsNestedColl.get('events').fetch({
    success: function(){

        listEvent = new EventMultipleView({model:eventsNestedColl})
        listEvent.render().$el.appendTo("#eventList")
        $('.myAccordion').accordion({collapsible: true, active: false,heightStyle: "content"})

        console.log(eventsNestedColl.toJSON());
    }
})


