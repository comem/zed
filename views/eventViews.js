var EventView = Backbone.View.extend({
    initialize: function(attrs, options) {
       this.listenTo(this.model, 'all', this.render);
    },
   template : _.template(templates.add_eventViewTemplate),
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var EventMultipleView = Backbone.View.extend({
    initialize: function(attrs, options) {
       this.listenTo(this.model, 'all', this.render);
    },
   template : _.template(templates.add_multipleEventsTemplate),
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});


var EventFieldArtist = Backbone.View.extend({
            initialize: function(attrs, options){
                 this.listenTo(this.model, 'all', this.render);
                 //this.listenTo(this.model, 'remove', this.logDelete);
                 //this.listenTo(this.model, 'add' ,this.logAdd)
            },
           template : _.template(templates.add_artistToEventField),
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            events: {
                'click .deleteEvent': 'delete'
            },  
            delete: function (event) {
              var len = eventsNestedColl.toJSON().events.length;
              if (len == 1)  $('#artistToEvent').fadeOut("slow");
   
             var eventIndex = $(event.target).attr('data-indice');
             var eventDelete = this.model.get('events').at(eventIndex);
             //remove from nested model
              this.model.get('events').remove(eventDelete);
              console.log(eventsNestedColl.toJSON());
             
            },
            logDelete: function(){
              console.log('deleted from aMusician list nested =')
              console.log(aMusiciansList.toJSON())
              console.log('deleted from all musicians coll = ');
              console.log(allMusicians.toJSON())
            },
            logAdd: function(){
              console.log('added to allMusicians coll=')
              console.log(allMusicians.toJSON());
              console.log('added to musiciansList nested= '+aMusiciansList.toJSON())

            }
        });

var artistToEvent = new EventFieldArtist({model : eventsNestedColl})
