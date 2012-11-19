// Header for the Edit page.
App.Views.EditHeader = App.Views.EditViewHeader.extend({
    events: {
        "click .save": "onClickSave"
    },
    initialize: function( options ) {
        this.setupBaseEvents();
        
        // Setup some jQuery mobile attributes.
        this.$el.attr({
            "data-role": "header",
            "data-theme": "c",
            "data-position": "fixed"
        });

        this.$el.html( App.Templates.editHeader({
            id: options.id
        }));

        // Don't double up on listeners, so remove event than setup again.
        App.Vent.off( "contact.saved" );
        App.Vent.on( "contact.saved", function( env ) {
            if ( env.data.saved ) {
                $( "#saveDialog" ).popup( "open" );
            }
        }, this);

        // Setup a popup dialog.
        $( "#saveDialog" ).popup();
    },
    onClickSave: function( event ) {
        App.Vent.trigger( "contact.save" );

        event.preventDefault();
    }
});