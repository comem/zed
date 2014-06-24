<<<<<<< HEAD
var whichForm = "eventForm";
var addButton = true;
$(function(){

	$('.main nav ul li a').click(scrollForm);
	$(window).one().scroll(showAtScroll);

	$('body>nav ul li a').click(showMain);




	
		
			

});


function showMain(e){

	if ($(this).attr('id') == "listLi") {
		if (addButton) {
			$('#addMain').css({right: '0%'}).animate({right: '100%'});
			$('#listMain').css({right: '-100%'}).animate({right: '0%'});
			addButton = false;
		};
		
	}else{

		if (!addButton) {
			$('#listMain').css({right: '0%'}).animate({right: '-100%'});
			$('#addMain').css({right: '100%'}).animate({right: '0%'});
			addButton = true;
		};
		

	};
	e.preventDefault(); return false;
}


function showAtScroll(){
	var heightLimit = $(document).scrollTop();
	console.log(heightLimit);
	
	

	if (heightLimit > "350") {

		$('header>div').removeClass('normalSearch');
		$('header>div').addClass('minimalizeSearch');

		$('header>div').switchClass('minimalizeSearch','downSearch',800,'easeOutBounce');

		$('body>nav').removeClass('normalNav');
		$('body>nav').addClass('minimalizeNav');

		$('body>nav').switchClass('minimalizeNav','downNav',800,'easeOutBounce');

		
		



	}else{

		$('header>div').removeClass('minimalizeSearch');
		$('header>div').addClass('normalSearch');

		$('header>div').switchClass('downSearch','normalSearch',0,'linear');

		$('body>nav').removeClass('minimalizeNav');
		$('body>nav').addClass('normalNav');

		$('body>nav').switchClass('downNav','normalNav',0,'linear');

		

		


	};

	


	
}




function scrollForm(e){
	console.log('clicked');
	var href = $(this).attr('href');
	console.log(href);

	

	if (href == "addEvent") {
		
		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	

	};

	if (href == "addArtist") {
		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});
		
	};

	if (href == "addMusician") {
		$('.event').animate({left: '-200%'});	
		$('.artist').animate({left: '-100%'});
		$('.musician').animate({left: '0%'});
		$('.stuff').animate({left: '100%'});
		
	};

	if (href == "addStuff") {
		$('.event').animate({left: '-300%'});	
		$('.artist').animate({left: '-200%'});
		$('.musician').animate({left: '-100%'});
		$('.stuff').animate({left: '0%'});
		
	};

	if (href == "listEvent") {
		
		$('.event').animate({left: '0%'});	
		$('.artist').animate({left: '100%'});
		$('.musician').animate({left: '200%'});
		$('.stuff').animate({left: '300%'});	

	};

	if (href == "listArtist") {
		$('.event').animate({left: '-100%'});	
		$('.artist').animate({left: '0%'});
		$('.musician').animate({left: '100%'});
		$('.stuff').animate({left: '200%'});
		
	};

	if (href == "listMusician") {
		$('.event').animate({left: '-200%'});	
		$('.artist').animate({left: '-100%'});
		$('.musician').animate({left: '0%'});
		$('.stuff').animate({left: '100%'});
		
	};

	if (href == "listStuff") {
		$('.event').animate({left: '-300%'});	
		$('.artist').animate({left: '-200%'});
		$('.musician').animate({left: '-100%'});
		$('.stuff').animate({left: '0%'});
		
	};

	e.preventDefault(); return false;
}
=======
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

var MusicianAdd = MyView.extend({
    template: _.template(templates.add_addMusician),
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

var addMusician = new MusicianAdd();



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
    addMusician.render().$el.appendTo('#addMain #forms');


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
multipleArtists.render().$el.appendTo('#eventForm');
multipleEvents.render().$el.appendTo('#eventForm')
multipleMusicians.render().$el.appendTo('#eventForm')


$('.allArtistMusicians').accordion({collapsible: true, active: false,heightStyle: "content"})
$('.musicianTemplate').accordion({collapsible: true, active: false,heightStyle: "content"})
$('.artistTemplate').accordion({collapsible: true, active: false,heightStyle: "content"})
$('.eventTemplate').accordion({collapsible: true, active: false,heightStyle: "content"})
$('.eventArtists').accordion({collapsible: true, active: false, heightStyle: "content"})
$('.theArtist').accordion({collapsible: true, active: false, heightStyle: "content"})
$('.infoEventTemp').accordion({collapsible: true, active: false, heightStyle: "content"})

 genresList.render().$el.appendTo('#stuffForm');
 instrumentsList.render().$el.appendTo('body');





});
>>>>>>> e9d1243fa083cbbd7f84621abad839bb6d3dbeb8
