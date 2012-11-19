App.Views.Footer = Backbone.View.extend({
    events: {
        "click .search": "onClickSearch",
        "keyup .search-field": "onSearch",
        "click .addNew": "onAddNew"
    },
    initialize: function() {
        this.$el.attr({
            "data-role": "footer"
        });

        this.$el.html( App.Templates.footer() );
    },
    toggleSearch: function() {
        this.$( ".search-field" ).fadeToggle();
    },
    onClickSearch: function( event ) {
        if ( !(App.Rendor.getCurrentView() instanceof App.Views.Home) ) {
            Backbone.history.navigate( "/search", true );
            return;
        }
        this.toggleSearch();
    },
    onSearch: function( event ) {
        App.Vent.trigger( "contacts.search", {
            data: $( event.target ).val()
        });
    },
    onAddNew: function( event ) {
        Backbone.history.navigate( "create", true );
    }
});