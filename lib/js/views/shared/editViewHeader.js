App.Views.EditViewHeader = Backbone.View.extend({
    baseEvents: {
        "click .contact-delete-open": "onDeleteOpen"
    },
    onDeleteOpen: function( event ) {
        event.preventDefault();

        $( "#popupDialog" )
            .popup( "open" );

        $( ".contact-delete-confirm" )
            .off( "click" )
            .on( "click", $.proxy(this.onDeleteConfirm, this) );
    },
    onDeleteConfirm: function( event ) {
        event.preventDefault();

        this.model.destroy({
            success: function() {
                this.$( "#popupDialog" ).popup( "close" );
                Backbone.history.navigate( "/", true );
            }
        });
        return;
    },
    setupBaseEvents: function() {
        $( "#popupDialog" )
            .popup();
            
        this.events = this.events || {};
        _.extend( this.events, this.baseEvents );
        this.delegateEvents();
    }
});