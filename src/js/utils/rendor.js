// ### App.Rendor
// Responsible for rendering the views and ensuring proper jQuery Mobile markup.
App.Rendor = (function() {
    var currentView;

    // Initialize `Rendor`.
    var init = function() {
        App.Vent.on( "render.view", render );
    };

    // Create a new instance of the view being rendered.
    var render = function( env ) {
        if ( !App.Views[ env.data.name ] ) {
            return;
        }

        changePage( currentView = new App.Views[ env.data.name ]( env.data ) );
    };

    // Change the page to a different Backbone view.
    var changePage = function ( view ) {
        var transition = $.mobile.defaultPageTransition;

        // The views will be the `page`.
        view.$el.attr( "data-role", "page" );

        $( "body" ).append( view.$el );
        
        // We don't want to slide the first page
        if ( view instanceof App.Views.Home ) {
            transition = "none";
            this.firstPage = true;
        }

        // Call jQuery Mobile's manual change page function.
        $.mobile.changePage( view.$el, {
            changeHash: false,
            transition: transition
        });
    };

    // Only expose the `init`, and `getCurrentView` methods.
    return {
        init: init,
        // Get the currently active view.
        getCurrentView: function() {
            return currentView;
        }
    };

}());