App.Views.PhoneList = Backbone.View.extend({
    className: "edit-contact-phones",
    initialize: function() {
        _.bindAll( this );
        
        this.collection.on( "add", this.renderPhone, this );
        
        this.render();
    },
    render: function() {
        this.$el.empty();
        
        this.collection.each( this.renderPhone );
    },
    renderPhone: function( model ) {
        var phone = new App.Views.Phone({
            model: model
        });
        this.$el.append( phone.el );
        
        phone.$el.fieldcontain();
        phone.$el.find( "input" ).textinput();
        phone.$el.find( "select" )
            .filter( ":not(':hidden')" )
            .selectmenu();
    }
});