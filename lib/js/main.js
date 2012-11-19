//### App
(function( global ) {
    var App = {},
        _views = {};

    // Setup some namespaces for storing constructors.
    $.extend( App, {
        Collections: {},
        ContactTypes: [{
                name: "Home"
            }, {
                name: "Work"
            }, {
                name: "Other"
            }],
        Models: {},
        Routers: {},
        States: [{"name":"Alabama","abbrev":"AL"},{"name":"Alaska","abbrev":"AK"},{"name":"Arizona","abbrev":"AZ"},{"name":"Arkansas","abbrev":"AR"},{"name":"California","abbrev":"CA"},{"name":"Colorado","abbrev":"CO"},{"name":"Connecticut","abbrev":"CT"},{"name":"Delaware","abbrev":"DE"},{"name":"District of Columbia","abbrev":"DC"},{"name":"Florida","abbrev":"FL"},{"name":"Georgia","abbrev":"GA"},{"name":"Hawaii","abbrev":"HI"},{"name":"Idaho","abbrev":"ID"},{"name":"Illinois","abbrev":"IL"},{"name":"Indiana","abbrev":"IN"},{"name":"Iowa","abbrev":"IA"},{"name":"Kansas","abbrev":"KS"},{"name":"Kentucky","abbrev":"KY"},{"name":"Louisiana","abbrev":"LA"},{"name":"Maine","abbrev":"ME"},{"name":"Maryland","abbrev":"MD"},{"name":"Massachusetts","abbrev":"MA"},{"name":"Michigan","abbrev":"MI"},{"name":"Minnesota","abbrev":"MN"},{"name":"Mississippi","abbrev":"MS"},{"name":"Missouri","abbrev":"MO"},{"name":"Montana","abbrev":"MT"},{"name":"Nebraska","abbrev":"NE"},{"name":"Nevada","abbrev":"NV"},{"name":"New Hampshire","abbrev":"NH"},{"name":"New Jersey","abbrev":"NJ"},{"name":"New Mexico","abbrev":"NM"},{"name":"New York","abbrev":"NY"},{"name":"North Carolina","abbrev":"NC"},{"name":"North Dakota","abbrev":"ND"},{"name":"Ohio","abbrev":"OH"},{"name":"Oklahoma","abbrev":"OK"},{"name":"Oregon","abbrev":"OR"},{"name":"Pennsylvania","abbrev":"PA"},{"name":"Rhode Island","abbrev":"RI"},{"name":"South Carolina","abbrev":"SC"},{"name":"South Dakota","abbrev":"SD"},{"name":"Tennessee","abbrev":"TN"},{"name":"Texas","abbrev":"TX"},{"name":"Utah","abbrev":"UT"},{"name":"Vermont","abbrev":"VT"},{"name":"Virginia","abbrev":"VA"},{"name":"Washington","abbrev":"WA"},{"name":"West Virginia","abbrev":"WV"},{"name":"Wisconsin","abbrev":"WI"},{"name":"Wyoming","abbrev":"WY"}],
        Templates: {},
        // Setup an event system.
        Vent: $.extend( {}, Backbone.Events ),
        Views: {}
    });

    // Initialize the app.
    App.init = function() {
        App.Rendor.init();
        this.homeRouter = new App.Routers.Home();
        Backbone.history.start();
    };

    // Export the app onto the window.
    global.App = App;
}( window ));

$(function() {
    App.init();

    // Handle back button throughout the application
    $( document ).on( "click", ".back", function(event) {
        window.history.back();
        return false;
    });
});
