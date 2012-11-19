// A view for rendering the list of contacts on the home page.
App.Views.ContactsList = App.Views.BaseView.extend({
    tagName: "ul",
    initialize: function() {
        _.bindAll( this );
        this.$el.attr( "data-role", "listview" );

        this.collection = new App.Collections.Contacts();
        this.collection.on( "reset", this.render );
        this.collection.fetch();

        App.Vent.on( "contacts.search", this.search );
    },
    render: function() {
        var lastLetter = this.collection.at( 0 )
            .get( "firstName" ).substr( 0, 1 );

        this.$el.append( $("<li data-role=\"list-divider\">" + lastLetter.toUpperCase() + "</h3>") );

        this.collection.each( _.bind(function( contact ) {
            var thisLetter = contact.get("firstName").substr(0, 1);

            if ( thisLetter !== lastLetter ) {
                lastLetter = thisLetter;
                this.$el.append( $("<li data-role=\"list-divider\">" + lastLetter.toUpperCase() + "</h3>") );
            }
            this.renderContact( contact );
        }, this));

        this.$el.listview( "refresh" );
    },
    renderContact: function( contact ) {
        var view = new App.Views.Contact({
            model: contact
        });
        
        view.$el.attr( "id", contact.get("id") );
        
        this.$el.append( view.$el );
    },
    search: function( env ) {
        var query = "",
            ids = [];

        if ( !env.data.length ) {
            this.$( "li" ).show();
            return;
        }

        query = env.data.toLowerCase();
        ids = this.collection.reduce(function( memo, contact ) {
            if (
                // Easy ones first
                ~contact.get( "firstName" ).toLowerCase().indexOf( query ) ||
                ~contact.get( "lastName" ).toLowerCase().indexOf( query ) ||
                ~contact.fullName().toLowerCase().indexOf( query ) ||
                
                contact.get( "phones" ).any(function( p ) {
                    return ~p.get( "number" ).indexOf(query); }) ||
                
                contact.get( "emails" ).any(function( email ) {
                    return ~email.get( "email" ).indexOf(query); })
            ) {
                memo.push( contact.get( "id" ) );
            }

                return memo;
        }, []);

        this.$( "li" ).hide();

        $.each( ids, function() {
            $( "#" + this ).show();
        });
    }
});