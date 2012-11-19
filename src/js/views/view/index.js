// View for viewing a single contact.
App.Views.View = App.Views.BaseView.extend({
    initialize: function( options ) {
        _.bindAll( this );

        this.model = new App.Models.Contact({
            id: options.id
        });
        
        this.buildPage( "contact-view", "", new App.Views.ViewHeader({
            id: options.id,
            model: this.model
        }));
        
        this.render();
    },
    render: function() {
        this.model.fetch({
            success: this.renderContact,
            error: function() {
                Backbone.history.navigate( "/", true );
            }
        });
    },
    renderContact: function() {
        this.$( ".contact-view" )
            .append( App.Templates.viewContact(this.model.toJSON()) );
    }
});