
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
//*******************GENRE MODEL//*******************
        var Links = Backbone.Model.extend({

        });

        var LinksColl = Backbone.Collection.extend({
            model: Links
        });

        var linksCollection = new GenresColl();


        var GenresNestedColl = MyModelNestedCollection.extend({
        	nested: 'links',
        	defaults: function(){
                return{
                    links: new LinksColl()
                }
            }
        })
        var linksNestedColl = new GenresNestedColl();

