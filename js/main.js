//*** extending Backbone classes

var MyModel = Backbone.Model.extend();
var MyCollection = Backbone.Collection.extend();
var MyView = Backbone.View.extend();
var MyModelNestedCollection = Backbone.Model.extend({
    nested: 'collection',
    initialize: function (attrs, options) {
        this.get(this.nested).on('change', function() {
            this.trigger('change', this);
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



var Header = MyView.extend({
    template: _.template(templates.main_header),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var Home = MyView.extend({
    template: _.template(templates.main_home),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var Nav = MyView.extend({
    template: _.template(templates.main_nav),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var Add = MyView.extend({
    template: _.template(templates.main_add),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var AddNav = MyView.extend({
    template: _.template(templates.main_addSecondNav),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var List = MyView.extend({
    template: _.template(templates.main_list),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var ListNav = MyView.extend({
    template: _.template(templates.main_listSecondNav),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var EventList = MyView.extend({
    template: _.template(templates.lists_listEvent),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var ArtistList = MyView.extend({
    template: _.template(templates.lists_listArtist),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var MusicianList = MyView.extend({
    template: _.template(templates.lists_listMusician),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var StuffList = MyView.extend({
    template: _.template(templates.lists_listStuff),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});


var EventAdd = MyView.extend({
    template: _.template(templates.add_addEvent),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});

var ArtistAdd = MyView.extend({
    template: _.template(templates.add_addArtist),
    render:function(){
        this.$el.html(this.template());
        return this;
    }
});



var header = new Header();
var home = new Home();
var nav = new Nav();
var add = new Add();
var list = new List();

var addSecondNav = new AddNav();
var listSecondNav = new ListNav();

var eventList = new EventList();
var artistList = new ArtistList();
var musicianList = new MusicianList();
var stuffList = new StuffList();

var addEvent = new EventAdd();
var addArtist = new ArtistAdd();




$(function(){
    
    header.render().$el.appendTo('body');    
    nav.render().$el.appendTo('body');
    add.render().$el.insertAfter('.normalNav');
    list.render().$el.insertAfter('#addMain');
    addSecondNav.render().$el.insertBefore('#forms');
    listSecondNav.render().$el.appendTo('#listMain');

    eventList.render().$el.appendTo('#listMain>#forms');
    artistList.render().$el.appendTo('#listMain>#forms');
    musicianList.render().$el.appendTo('#listMain>#forms');
    stuffList.render().$el.appendTo('#listMain>#forms');

    addEvent.render().$el.appendTo('#addMain #forms');
    addArtist.render().$el.appendTo('#addMain #forms');




});
