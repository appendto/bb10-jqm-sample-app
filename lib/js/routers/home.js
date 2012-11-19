// The application's main router.
App.Routers.Home = Backbone.Router.extend({
    routes: {
        "":"home",
        "view/:id":"view",
        "edit/:id":"edit",
        "create": "create",
        "search": "search"
    },
    home: function () {
        App.Vent.trigger( "render.view", {
            data: {
                name: "Home"
            }
        });
    },
 
    view: function ( id ) {
        if ( !id ) {
            return;
        }
        App.Vent.trigger( "render.view", {
            data: {
                name: "View",
                id: id
            }
        });
    },
 
    edit: function ( id ) {
        if ( !id ) {
            return;
        }

        App.Vent.trigger( "render.view", {
            data: {
                name: "Edit",
                id: id
            }
        });
    },
    create: function() {
        App.Vent.trigger( "render.view", {
            data: {
                name: "Edit"
            }
        });
    },
    search: function() {
        App.Vent.trigger( "render.view", {
            data: {
                name: "Home",
                search: true
            }
        });
    }
});