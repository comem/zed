
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



       

//*******************//**********SERVER*********//**************
        
        var MusicianCollServer = Backbone.Collection.extend({
            url: 'http://pingouin.heig-vd.ch/gof/api/v1/images',
            model: Musician,
            parse: function (response) {
                if (typeof response.data != "undefined") {
                    response = response.data;
                }
                musician = new Musician(response)
                return response;
            }
        });
        var musicianCollServer = new MusicianCollServer();


        var MusicianNestedCollServer = MyModelNestedCollection.extend({
            url: 'http://pingouin.heig-vd.ch/gof/api/v1/musicians',
            nested:'musicians',
            defaults: function(){
                return {
                    musicians : new MusicianCollServer()
                }
            },
            parse: function (response) {
            if (typeof response.data != "undefined") {
                response = response.data;

            }
            musician = new Musician(response)
            return musician;
        }
        });
        var musicianNestedCollServer = new MusicianNestedCollServer();