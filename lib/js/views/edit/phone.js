App.Views.Phone = Backbone.View.extend({
    bindings: {
        "#phone": {
            "modelAttr": "number"
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
        "click .delete-phone": "onDeleteClick"
    },
    initialize: function() {
        this.model.on( "destroy", this.removePhone, this );

        this.$el.attr( "data-role", "fieldcontain" );
        
        this.render();
    },
    render: function() {
        this.$el.html( App.Templates.phone($.extend( {}, this.model.toJSON(), {
            types: [ "Home", "Work", "Other" ]
        })));
        this.stickit();
    },
    onDeleteClick: function( event ) {
        this.model.destroy();
    },
    removePhone: function() {
        this.$el.remove();
    }
});