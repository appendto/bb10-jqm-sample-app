// A model for each individual contact.
App.Models.Contact = Backbone.Model.extend({
    // Setup some default values when a new model is created.
    defaults: {
        firstName: "",
        lastName: "",
        company: "",
        street: "",
        city: "",
        state: "",
        ZIP: "",
        twitter: ""
    },
    initialize: function() {
        // If no phones or emails are setup, initialize to empty collection. For the create contact.
        !this.get( "phones" ) && this.set( "phones", new App.Collections.Phones(), {
            silent: true
        });

        !this.get( "emails" ) && this.set( "emails", new App.Collections.Emails(), {
            silent: true
        });
    },
    urlRoot: "contact",
    fullName: function() {
        return this.get( "firstName" ) + " " + this.get( "lastName" );
    },
    // Parse the incoming ajax response to ensure the data is setup correctly.
    parse: function( resp ) {
        if ( !resp ) {
            console.log( "no resp:", resp );
            return;
        }
        if ( resp.phones ) {
            resp.phones = new App.Collections.Phones( resp.phones );
        }

        if ( resp.emails ) {
            resp.emails = new App.Collections.Emails( resp.emails );
        }

        return resp;
    },
    // Override toJSON because of the collections.
    toJSON: function() {
        var phones, emails,
            attrs = _.clone( this.attributes );
        
        if ( this.attributes.phones ) {
            phones = this.attributes.phones.toJSON();
            attrs.phones = phones;
        }
        if ( this.attributes.emails ) {
            emails = this.attributes.emails.toJSON();
            attrs.emails = emails;
        }

        return attrs;
    }
});
