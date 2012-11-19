// Contact view for the home page.
App.Views.Contact = App.Views.BaseView.extend({
    tagName: "li",
    initialize: function() {
        this.render();
    },
    render: function() {
        var html = App.Templates.contact( this.model.toJSON() );
        this.$el.html( html );
    }
});