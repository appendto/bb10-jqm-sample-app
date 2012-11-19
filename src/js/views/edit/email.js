// View for editing a single email address group.
App.Views.Email = Backbone.View.extend({
    bindings: {
        "#email": {
            "modelAttr": "email"
        },
        "#type": {
            modelAttr: "type",
            selectOptions: {
                collection: "App.ContactTypes",
                labelPath: "name",
                valuePath: "name"
            }
        }
    },
    events: {
        "click .delete-email": "onDeleteClick"
    },
    initialize: function( options ) {
        this.model.on( "destroy", this.removeEmail, this );

        this.$el.attr( "data-role", "fieldcontain" );
        
        this.render();
    },
    render: function() {
        this.$el.html( App.Templates.email( this.model.toJSON() ));
        this.stickit();
    },
    onDeleteClick: function( event ) {
        this.model.destroy();
    },
    removeEmail: function() {
        this.$el.remove();
    }
});