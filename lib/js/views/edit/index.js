// The main edit contact view.
App.Views.Edit = App.Views.BaseView.extend({
    bindings: {
        "#firstName": {
            modelAttr: "firstName"
        },
        "#lastName": {
            modelAttr: "lastName"
        },
        "#company": {
            modelAttr: "company"
        },
        "#street": {
            modelAttr: "street"
        },
        "#city": {
            modelAttr: "city"
        },
        "#zip": {
            modelAttr: "ZIP"
        },
        "#twitter": {
            modelAttr: "twitter"
        },
        "#state": {
            modelAttr: "state",
            selectOptions: {
                  collection: "App.States",
                  labelPath: "name",
                  valuePath: "abbrev"
            }
        }
    },
    events: {
        "click .add-phone": "onAddPhone",
        "click .add-email": "onAddEmail"
    },
    initialize: function( options ) {
        _.bindAll( this );

        this.model = new App.Models.Contact();

        options.id && this.model.set( "id", options.id, {
            silent: true
        });

        App.Vent.off( "contact.save" );
        App.Vent.on( "contact.save", this.saveContact, this );

        this.buildPage( "contact-edit", "", new App.Views.EditHeader({
            id: options.id,
            model: this.model
        }));

        this.render();
    },
    render: function( done ) {
        if ( !this.model.get("id") ) {
            this.renderContact();
            return;
        }

        this.model.fetch({
            success: _.bind(function() {
                this.renderContact();
            }, this)
        });
    },
    renderContact: function() {
        var phoneList = new App.Views.PhoneList({
            collection: this.model.get( "phones" )
        }),
        emailList = new App.Views.EmailList({
            collection: this.model.get( "emails" )
        });

        this.$( ".contact-edit" )
            .append( App.Templates.editContact(this.model.toJSON()) )
            .find( ".contact-phones" ).prepend( phoneList.el ).end()
            .find( ".contact-emails" ).prepend( emailList.el );
        
        this.stickit();

        this.ready();
    },
    saveContact: function() {
        if ( $(".bb-text-invalid" ).length ) {
            return;
        }
        this.model.save( this.model.attributes, {
            wait: true,
            success: function() {
                App.Vent.trigger( "contact.saved", {
                    data: {
                        saved: true
                    }
                });
            }
        });
    },
    onAddEmail: function() {
        this.model.get( "emails" ).add( new App.Models.Email() );
    },
    onAddPhone: function() {
        this.model.get( "phones" ).add( new App.Models.Phone() );
    }
});