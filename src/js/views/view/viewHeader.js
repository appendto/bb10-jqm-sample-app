App.Views.ViewHeader = App.Views.EditViewHeader.extend({
    initialize: function( options ) {
        _.bindAll( this );
        this.setupBaseEvents();
        
        this.$el.attr({
            "data-role": "header",
            "data-theme": "c",
            "data-position": "fixed"
        });

        this.$el.html( App.Templates.viewHeader({
            id: options.id
        }));
    }
});