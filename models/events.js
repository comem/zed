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



var Event = MyModelNestedCollection.extend({
    nested: 'artists',
    defaults: function(){
        return{
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
            publishing:'',
            artits: new artistList()
         }
    }
});


//*******************//**********SERVER*********//**************
     
        var EventCollServer = Backbone.Collection.extend({
            url: '/projInt/php/urlTest.php',
            model: Event,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                //console.log(response);
                return response;
            }
        });
        var eventCollServer = new EventCollServer();


        var EventNestedCollServer = MyModelNestedCollection.extend({
            url: '/projInt/php/urlTest.php',
            nested:'events',
            defaults: function(){
                return {
                    events : new EventCollServer()
                }
            },
            parse: function (response) {
            if (typeof response.data != "undefined") {
                response = response.data;
            }
            response = new Event(response);
            console.log(response);
          
            return response;
        }
        });
        var eventNestedCollServer = new EventNestedCollServer();


var montreuxJazz = new Event({name:'montreux jazz', startHour: 20, ticketPrice: '20$',publishing:"facebook",
ticketQt:'limited to 100 tickets!', nbPlaces: 1000})
console.log('asdas')
console.log(montreuxJazz.toJSON());

($function(){

})