// The main homepage view.
App.Views.Home = App.Views.BaseView.extend({
    initialize: function( options ) {
        this.buildPage( "home", App.Templates.home() );

        if ( options.search ) {
            this.footer.toggleSearch();
        }
        this.render();
    },
    render: function() {
        this.contacts = new App.Views.ContactsList();
        this.$el.find( ".home" )
            .append( this.contacts.$el );
    }
});