// Manage the list of emails on the edit page.
App.Views.EmailList = Backbone.View.extend({
    className: "edit-contact-emails",
    initialize: function( options ) {
        _.bindAll( this );

        this.collection.on( "add", this.renderEmail, this );
        
        this.render();
    },
    render: function() {
        this.$el.empty();

        // Render each email as its own view.
        this.collection.each( this.renderEmail );
    },
    renderEmail: function( model ) {
        var email = new App.Views.Email({
            model: model
        });
        this.$el.append( email.el );

        // Make sure that all of the elements are properly configured since these elements are added after the page renders.
        email.$el.fieldcontain();
        email.$el.find( "input" ).textinput();
        email.$el.find( "select" )
            .filter( ":not(':hidden')" )
            .selectmenu();
    }
});