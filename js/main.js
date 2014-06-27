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


 // Create a modal view class
var Modal = Backbone.Modal.extend({
    template: _.template(templates.add_uploadImage),
    cancelEl: '.bbm-button'
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
    },
    events:{
        "click  .popup-with-form" : 'popup' 
    },  
    popup: function (e) {
         e.preventDefault();
         console.log("yeah");
         $('.popup-with-form').magnificPopup({
              disableOn: 700,
              type: 'inline',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
         });
      }
    
    
});

var ArtistAdd = MyView.extend({
    template: _.template(templates.add_addArtist),
    render:function(){
        this.$el.html(this.template());
        return this;
    },
    events:{
        "keyup input[name='nameLink']" : 'checkLinkName',
        "keyup input[name='url']" :'checkURL',
        "keyup input[name='nameArtist']" : 'checkName',
    },
    checkName : function(){
        var input = this.$el.find("input[name='nameArtist']");
        var artistName = this.$el.find("input[name='nameArtist']").val()
        if(artistName =='') {
            input.css('border', 'solid 2px red')
        }else{
            input.css('border', 'none')
        }  
    },
    checkURL: function(){
        var input =this.$el.find("input[name='url']")
        var url  =this.$el.find("input[name='url']").val()
        if(url ==''){
            input.css('border', 'solid 2px red')
        }else{
            input.css('border', 'none')
        }  
    },
    checkLinkName: function(){
        var input = this.$el.find("input[name='nameLink']")
        var linkNake  =this.$el.find("input[name='nameLink']").val()
        if(linkNake.length == 0){
             input.css('border', 'solid 2px red')
        }else{  
             input.css('border', 'none')
        }
    }
});

var MusicianAdd = MyView.extend({
    template: _.template(templates.add_addMusician),
    render:function(){
        this.$el.html(this.template());
        return this;
    },
    events:{
        "keyup input[name='nameMusician']" : 'checkFirstname',
        "keyup input[name='stagename']" :'checkStagename',
        "keyup input[name='lastNameMusician']" : 'checkLastname',
    },
    checkFirstname : function(){
        var input = this.$el.find("input[class='nameMusician']");
        var musicianFirstName = this.$el.find("input[class='nameMusician']").val()
        if(musicianFirstName =='') {
            input.css('border', 'solid 2px red')
        }else{
            input.css('border', 'none')
        }  
    },
    checkStagename: function(){
        var input =this.$el.find("input[name='stagename']")
        var stagename  =this.$el.find("input[name='stagename']").val()
        if(stagename !=''){
            //tick
        } 
    },
    checkLastname: function(){
        var input = this.$el.find("input[name='lastNameMusician']")
        var musicianLastName  =this.$el.find("input[name='lastNameMusician']").val()
        if(musicianLastName.length == 0){
             input.css('border', 'solid 2px red')
        }else{  
             input.css('border', 'none')
        }
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

var addMusician = new MusicianAdd();



$(function(){
    
    header.render().$el.appendTo('body');    
    nav.render().$el.appendTo('body');
    add.render().$el.insertAfter('.normalNav');
    list.render().$el.insertAfter('#addMain');
    addSecondNav.render().$el.insertBefore('#formsAdd');
    listSecondNav.render().$el.appendTo('#listMain');

    eventList.render().$el.appendTo('#formsList');
    artistList.render().$el.appendTo('#formsList');
    musicianList.render().$el.appendTo('#formsList');
    stuffList.render().$el.appendTo('#formsList');

    addEvent.render().$el.appendTo('#formsAdd');
    addArtist.render().$el.appendTo('#formsAdd');
    addMusician.render().$el.appendTo('#formsAdd');

artistNestedCollServer.get('artists').fetch({
    success:function(){
        render = ArtistMultipleView({model:artistNestedCollServer})
        render.render().$el.appendTo('#artistList')
    }
})
//single musician render
/*
musician1view.render().$el.appendTo('#eventForm')
musician2view.render().$el.appendTo('#eventForm')
musician3view.render().$el.appendTo('#eventForm')
*/
//single artist render
/*
 rammsteinView.render().$el.appendTo('#eventForm');
 chopintView.render().$el.appendTo('#eventForm');
 starWarsBandView.render().$el.appendTo('#eventForm');

//single event render
/*
starWarsView.render().$el.appendTo('#eventForm')
lastEventView.render().$el.appendTo('#eventForm')
montreuxView.render().$el.appendTo('#eventForm')
*/
//multiple render

multipleArtists.render().$el.appendTo('#artistList');
multipleEvents.render().$el.appendTo('#eventList');
multipleMusicians.render().$el.appendTo('#musicianList')

//var chuj = new ArtistFieldInMusician({model: artistNestedList})
//chuj.render().$el.appendTo('#eventList')



$('.myAccordion').accordion({collapsible: true, active: false,heightStyle: "content"})

 genresList.render().$el.appendTo('#stufflist');
 instrumentsList.render().$el.appendTo('#stufflist');

 $('.open').on('click', function(){

        // Render an instance of your modal
        var modalView = new Modal();
       
        $('.app').html(modalView.render().el);

      });

     


$(".buttonsListMusician").click(function(event){
    event.stopPropagation();
});



});
