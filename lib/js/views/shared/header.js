App.Views.Header = Backbone.View.extend({
    initialize: function() {
        this.$el.attr({
            "data-role": "header",
            "data-position": "fixed"
        });

        this.$el.html( App.Templates.header() );
    }
});