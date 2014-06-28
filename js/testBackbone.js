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

        //GENRES
        var genre = new Genre ({genre  :'rock'})
        var genre2 = new Genre ({genre : 'metal'})
        var genre3 = new Genre ({genre : 'classic'})
        var genre4 = new Genre ({genre : 'hip-hop'})
        genreList = new GenresColl();
        genreList.add(genre, genre2, genre3, genre4);

        //INSTRUMENTS
        var instrument = new Instrument({name: 'guitar'});
        var instrument2  = new Instrument({name:'piano'})
        var instrument3 = new Instrument({name :'vocal'})
        var instrument4  = new Instrument({name:'ukulele'})
        var instrument5  = new Instrument({name:'drums'})
        instrumentList = new InstrumentsColl();
        instrumentList.add(instrument, instrument2, instrument3, instrument4,instrument5);

        //MUSICIANS
        var musician = new Musician ({name: 'Stefan', stageName: 'lolipop'})
        musician.get('instruments').add([instrument2, instrument])
        var musician2 = new Musician ({lastName: 'noName!', name: 'Albert' ,stageName:'dirty cocksucker'})
        musician2.get('instruments').add([instrument, instrument3])
        var musician3 = new Musician ({name: 'Adam', stageName:'theBestGuy'})
        musician3.get('instruments').add([instrument2, instrument5])
        var musician4 = new Musician ({name: 'Ginold'})
        musician4.get('instruments').add([instrument3, instrument4,instrument2,instrument])
        var musician5 = new Musician ({name: 'Chubaka', stageName: 'fuck me', lastName:"i have no last name"})
        musician5.get('instruments').add([instrument, instrument5])


        //ARTISTS
        var rammstein = new Artist({ header :' The artist!', name: 'Rammstein', description:'best metal band ever!', lead: "are you ready to headbang?"})
        rammstein.get('musicians').add([musician, musician2])
        rammstein.get('genres').add([genre,genre2])
        //console.log(rammstein.toJSON());

        var chopin = new Artist({ header: 'this is chopin!', name: 'Chopin'})
        chopin.get('musicians').add([musician3, musician4])
        chopin.get('genres').add([genre3, genre4,genre,genre2
            ])

        var starWars = new Artist({name:'Star Wars', linkURL : 'www.bite.ch'})
        starWars.get('musicians').add([musician5,musician,musician3,musician2])
        
        //EVENTS
        var montreuxJazz = new EventModel({name:'montreux jazz', startHour: 20, ticketPrice: '20$',publishing:"facebook",
        ticketQt:'limited to 100 tickets!', nbPlaces: 1000,  header:"my first event!"})
        montreuxJazz.get('artists').add([chopin,rammstein,starWars])

        var lastEvent = new EventModel ({name:'the last event!!', startHour: 20, ticketPrice: '20$',publishing:"facebook",
        ticketQt:'limited to 3232 tickets!', nbPlaces: 69,  header:'thisIs the last event :((', nbVeganMeals:300})
        lastEvent.get('artists').add(rammstein)

        var starWarsEvent = new EventModel({header: 'j\'en ai marre', name:'Star Wars event', startHour: 20, ticketPrice: '100$',publishing:"facebook",
        ticketQt: 283928, nbPlaces: 69, nbVeganMeals:'0 because fuck you'})
        starWarsEvent.get('artists').add([chopin])
        
        //add  to Collections
        var musicianList = new MusicianNestedColl()
        musicianList.get('musicians').add([musician2,musician4,musician5])

        var artistListNested = new ArtistNestedColl();
        artistListNested.get('artists').add([rammstein,chopin,starWars])

        var artistColl = new ArtistColl()
        artistColl.add([rammstein,chopin,starWars])
        console.log(artistColl.toJSON());
        console.log(artistListNested.toJSON())

        var eventsList= new EventsNestedColl();
        eventsList.get('events').add([montreuxJazz, lastEvent,starWarsEvent])
        console.log(eventsList.toJSON());

        var eventColl = new EventColl();
        eventColl.add([montreuxJazz, lastEvent,starWarsEvent])
        
        
        //Views single
       
        var musician1view = new MusicianSingleView({model : musician})
        var musician2view = new MusicianSingleView({model : musician5})
        var musician3view = new MusicianSingleView({model : musician3})

        var rammsteinView = new ArtistView({model : rammstein})
        var chopintView = new ArtistView({model: chopin})
        var starWarsBandView = new ArtistView({model:starWars})

       var lastEventView = new EventView({model: lastEvent})
       var montreuxView = new EventView({model : montreuxJazz})
       var starWarsView = new EventView({model: starWarsEvent})

       //View Multiple
       var multipleEvents = new EventMultipleView({model : eventsList})
       var multipleArtists = new ArtistMultipleView({model : artistListNested})
       var multipleMusicians = new MusicianMultipleView({model: musicianList})

   

$(function () {
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
/*
multipleArtists.render().$el.appendTo('#eventForm');
multipleEvents.render().$el.appendTo('#eventForm')
multipleMusicians.render().$el.appendTo('#eventForm')
 */

/*
$('.allArtistMusicians').accordion({collapsible: true, active: false,heightStyle: "content"})
$('.musicianTemplate').accordion({collapsible: true, active: false,heightStyle: "content"})
$('.artistTemplate').accordion({collapsible: true, active: false,heightStyle: "content"})
$('.eventTemplate').accordion({collapsible: true, active: false,heightStyle: "content"})
$('.eventArtists').accordion({collapsible: true, active: false, heightStyle: "content"})
$('.theArtist').accordion({collapsible: true, active: false, heightStyle: "content"})
$('.infoEventTemp').accordion({collapsible: true, active: false, heightStyle: "content"})
*/
})