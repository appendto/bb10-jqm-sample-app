# jQuery Mobile/Backbone Demo
jQuery Mobile is one of the most popular frameworks to build mobile applications. With the Blackberry 10 device supporting apps written in nothing but HTML5, CSS, and JavaScript, jQuery Mobile and Blackberry work together very well. Blackberry hosts a [github project](https://github.com/blackberry/jQueryMobile-BB10-Theme) which is a jQuery Mobile theme designed specifically for the BB10 device. This coupled up with Backbone.js, one of the web's most popular frameworks makes for a well designed, maintainable web application.


Checkout the [Boilerplate](https://github.com/appendto/bb10-jqm-boilerplate) as a sarting point to create BB10 jQuery Mobile apps.

The boilerplate is broken down into the following structure...

```
src\collections\
src\models\
src\routers\
src\utils\
src\vendor\
src\views\
src\index.html
```

## backbone.js
[Backbone.js](http://backbonejs.org) is an MV* framework with many great features for building applications. It has 4 main components, models, collections, views, and routers. The models and collections represent data, the views contain the UI logic, and the routers route urls to JS functions. The constructors for `Backbone.View`, `Backbone.Model`, `Backbone.Collection`, and `Backbone.Router` all have an `extend` method to extend onto your own objects. This basically takes the existing constructor's from Backbone, and creates a new custom constructor. For example, the basic Backbone [model](http://backbonejs.org/#Model) looks like...

```js
var Contact = Backbone.Model.extend({
    initialize: function() {
        // Do something to initialize the model if needed.
    },
    url: "contact"
});
var jim = new Contact({
    name: "Jim Halpert",
    position: "sales"
});
jim.set( "married", true );
```

Every object that you extend will have some basic inhertited functions available on them. And the constructors created, can then themselves be extended also. If an `initialize` funciton is present, in the `extend` options, it will fire just after an object's construction, and a `constructor` would override the default constructor. Also, models have `get` and `set` functions to set model attributes.  

And a [collection](http://backbonejs.org/#Collection) of `Contact` models would look like...

```js
var Contacts = Backbone.Collection.extend({
    model: Contact,
    url: "contacts"
});
var sales = new Contacts();
sales.add( jim );
```


Since [underscore.js](http://underscorere.org) is a requirement of Backbone.js, collections are given many of the underscore utitlity functions. This allows you to do things like filtering, searching, mapping, and much more.

```js
var office = new Contacts( [{
    name: "Jim Halpert",
    position: "sales"
}, {
    name: "Dwight Schrute",
    position: "sales"
}, {
    name: "Michael Scott",
    position: "manager"
}]);

var sales = someContacts.filter(function( contact ) {
    return contact.position === "sales" ;
});
```

Models and collections also have built in REST style functions. The functions are `Collection.fetch`, and `Model.save, Model.destory, Model.fetch`.
A collection's fetch method will retrieve a list of data from the `url` and automatically add new Models to the collection. Similar with the Model.fetch, a **GET** request will be made to the `url`, and the data retrieved will be `set` on the model. The save method will either **POST** or **PUT** depending on whether or not the model has an `id` set. Lastly the `destroy` method will send a **DELETE**.

Be sure and checkout the docs about models for more info.

Views in Backbone are for manipulating the UI.

```js
var Home = Backbone.View.extend({
    // A hash of events to delegate.
    events: {
        "click button": "onClickButton"
    },
    // Specify an element to attach this view. 
    el: "#someElement",
    // The constructor function.
    initialize: function() {
        // Do something with this.$el
    },
    onClickButton: function( event ) {
        // A button somewhere inside this.$el was clicked.
    }
});

var home = new Home({
    model: new Contact({
        name: "Pam Halpert",
        position: "reception"
    });
});

```

The above code defines a `Home` view and then creates an instance of it. The `model` passed into the constructor will be available on the instance via `this.model`. The same is true for 'model', 'collection', 'el', '$el', 'id', 'attributes', 'className', and 'tagName'. If no element is specified via `el`, then either a **div** or an element specified by a `tagName` option will be created. The events is a hash of `eventType element: callback`, and will delegate the the `callback` of `eventType` to an `element` located inside of `this.$el`.

A basic router looks like...

```js
var Router = Backbone.Router.extend({
    routes: {
        // Default route
        "": "main",
        // view/1234
        "view/:id": "view"
    },
    main: function() {
        // Trigger some code for this route.
    },
    view: function( id ) {
        // Trigger some code, also has the id from the url param.
    }
});
```

Routers respond to changes in the Url. The `routes` is a collection of the route and callback function. The default route is specified with `""`. There are also Url parameters such as `:id` which will be available in the arguments passed to the route's callback function.

One more very useful feature of Backbone.js is `Backbone.Events`. Extending it on to another object gives that new object `on`, `off`, and `trigger` pub/sub functions. The `Backbone.Model` already has Backbone.Events built into it. You can extend Backbone.Events onto any object to give it these functions...

```js
var Vent = _.extend( {}, Backbone.Events );
Vent.on( "someEvent", function( x, y ) {
    console.log( x + y );
});
Vent.trigger( "someEvent", 2, 4 ); // logs: 6
Vent.off( "someEvent" );
```

That covers most of Backbone.js's feature set. Refer to the [docs](http://backbonejs.org) for any further help.

## jQuery Mobile
[jQuery Mobile](http://jquerymobile.com) is a framework for building mobile HTML5 applications. It operates around the idea of simple HTML5 data attributes to configure the application. It's built on top of jQuery and jQuery UI. A simple jQuery Mobile page would look like...

```html
<div data-role="page">
    <div data-role="header">
        Header
    </div>
    <div data-role="content">
        <a href="#page">Link</a>
    </div>
    <div data-role="footer">
        Footer
    </div>
</div>
```

And, a form in jQuery Mobile would look like...

```html
<div data-role="page">
    <div data-role="header">
        Header
    </div>
    <div data-role="content">
        <div data-role="fieldcontain">
             <label for="name">Text Input:</label>
             <input type="text" name="name" id="name" value=""  />
        </div>

        <div data-role="fieldcontain">
            <label for="textarea">Textarea:</label>
            <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
        </div>

        <fieldset class="ui-grid-a">
                <div class="ui-block-a"><button type="submit" data-theme="d">Cancel</button></div>
                <div class="ui-block-b"><button type="submit" data-theme="a">Submit</button></div>
        </fieldset>
    </div>
    <div data-role="footer">
        Footer
    </div>
</div>
```

There are many different components in jQuery Mobile such as toolbars, dialogs, popups, listviews, all kinds of form elements, basic content formatting, buttons and more, so be sure and check out their [docs](http://jquerymobile.com/demos/1.2.0/). 

### jQuery Mobile Blackberry 10 Theme
The jQuery Mobile [theme](https://github.com/blackberry/jQueryMobile-BB10-Theme) for Blackberry 10 devices gives some additional jQuery Mobile components and stying. To check out all of the available components and check out the theme, do the following...

```
git clone https://github.com/blackberry/jQueryMobile-BB10-Theme
```

Then you can open up the `kitchenSink` directory and see all of the awesomesauce. 

### Ripple emulator
The [Ripple Emulator](https://developer.blackberry.com/html5/download/) is a way to see how your app will run on an actual device. It runs as a chrome extension so go grab it and you can run any url inside the emulator. It's all in browser too! It can test more than just Blackerry devices too, so be sure and download it.

## anvil.js

[Anvil.js](http://github.com/appendto/anvil.js) is a convention over configuration build system. By convention it expects the source of the application to be located in the `src` directory. Anvil.js is not required to build a BB10 app, but it does assist in hosting, concating, minifying, linting, deploying, etc.  

To get anvil.js up and running, please ensure the latest version of **node.js** is running and then run...

```
npm install -g anvil.js
```

Then to build the applation run the following...

```
anvil // Basic build
anvil --ci --host // Watches files, and hosts the application at localhost:3080
```

Running `anvil` will take the code from the source directory, process the code and run any plugins or tasks, and output it into a `lib` directory. There are many plugins for anvil that can be installed via...

```
anvil install anvil.pluginName
```

So for instance to make anvil run jslint on your code, simply run `anvil install anvil.jslint`. Then the next time you run `anvil` you will see the results of **jslint** on your code.


The anvil build process can be configured by adding a `build.json` file to the root where anvil is running. For example to customize where anvil is hosting your site...

```json
{
    "anvil.http": {
        "port": 3000,
        "host": "./examples"
    }
}
```

## Architecture
It's a good practice in JS to have an `App` object which acts as a namespace to organize your app. A `src/js/main.js` file will hold the App code that will do the app setup.

```js
(function( win ) {
var App = win.App || {};

$.extend( App, {
    Collections: {},
    Models: {},
    Routers: {},
    Vent: $.extend( {}, Backbone.Events ),
    Views: {}
});

App.init = function() {
    // Do some initializing!  
};

}( window ));
```
This pattern avoids exposing globals and thereby eliminates naming collisions, and adds to the maintainability of the app. The `App.Vent` extends `Backbone.Events`. The Vent then becomes a mediator for all of the app's events. This allows for code such as...

    App.Vent.on( "contact.add", function( env ) {
        // Somewhere a contact was added, now do something with it.
        console.log( env.data.contact );
    });

    App.Vent.trigger( "contact.add", {
        data: { 
            contact: {
                firstName: "Mike",
                lastName: "Jones",
                company: "Blackberry"
            }
        }
    });

    App.Vent.off( "contact.add" ); // Disables the event.

The `trigger` function by convention is using an `envelope pattern`. Any data passed from the `trigger` will be in the `data`. This is again merely a convention and not required, but it helps maintainability by creating a standard pattern of event triggering. It's good when using pattern's like this to only publish information that can be serialized w/ `JSON.stringify` so publishing a function is usually not a great idea.

The main principle of jQuery Mobile is having divs on the page with HTML5 data attributes on them. But, the beauty of backbone is in it's rendering views based off of model data after the page has been loaded. In order to accomplish this, a little plumbing has to be taken care of first.

Thanks to Christophe Coenraets, he has a repository called [backbone-jqueryMobile](https://github.com/ccoenraets/backbone-jquerymobile) where some of the ideas of rendering jQuery Mobile with Backbone come from. jQuery Mobile pretty much harnesses the entire page, so adding things to the page after it loads can cause some difficulty. So in the [boilerplate](https://github.com/appendto/bb10-jqm-boilerplate) mentioned earlier there's some code that helps render backbone views correctly with jQuery Mobile.

To get started, a few settings in jQuery Mobile need to be adjusted...

```js
$( document ).bind( "mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;

    // Blackberry jQM Configs
    $.mobile.buttonMarkup.hoverDelay = 0;

    // Use the simultaneous transitions handler for slide transitions
    $.mobile.transitionHandlers.cover = $.mobile.transitionHandlers.simultaneous;
   
    // Set the slide transitions's fallback to "fade"
    $.mobile.transitionFallbacks.cover = "fade";
    $.mobile.listview.prototype.options.icon = false;
    $.mobile.selectmenu.prototype.options.nativeMenu = false;

    // Remove page from DOM when it's being replaced
    $( document ).on( "pagehide", "div[data-role='page']", function ( event, ui ) {
        $( event.currentTarget ).remove();
    });
});
```

This disables some of the default ajax functionallity of jQuery Mobile so that Backbone can take over. It does all this by attaching to the `mobileinit` event which jQuery Mobile fires when it's ready. Then there's the `pagehide` event which ensures that when a page is loaded, the current page is removed from the DOM. The jQuery Mobile team recently added a page to their docs on writing jQuery Mobile with BackBone.js, you can [read more here](http://jquerymobile.com/test/docs/pages/backbone-require.html).

The above code disables much of jQuery Mobile's Ajax functionallity to allow Backbone's Router to work.

Next is the [$.mobile.changePage](http://jquerymobile.com/test/docs/api/methods.html) function...

```js
var changePage = function ( view ) {
    // Grab the default transition from jQuery Mobile.
    var transition = $.mobile.defaultPageTransition;

    // The views will be the `page`.
    view.$el.attr( "data-role", "page" );

    $( "body" ).append( view.$el );
    
    // We don't want to slide the first page
    if ( view instanceof App.Views.Home ) {
        transition = "none";
        this.firstPage = false;
    }

    // Call jQuery Mobile's manual change page function.
    $.mobile.changePage( view.$el, {
        changeHash: false,
        transition: transition
    });
};
```

 The above code takes a view instance as a parameters, and applies the correct data-attribute to it's DOM element. It then appends the view's element to the body of the DOM, and then calls the `$.mobile.changePage` by passing in the `view.$el`. A good approach to take is to have at least one view per, "page" you need in your app, which is what the `view.$el.attr( "data-role", "page" );` accomplishes. So you might have a Home, About, or Contact views which will be rendered into `<div data-role="page" class="home"></div>` via the $el. This function can be called like...

```js
var view = new Home();
changePage( view );
```

One way of accomplishing the rendering is by using a Router to render different Backbone views depending on the current route. In order to keep the router de-coupled from the rendering, an `App.Utils.Rendor` object can be created. This object will have utility functions for rendering views. One approach to use in this rendering is triggering events. In the `App.Rendor.init` there is a listener...

```js
// Initialize `Rendor`.
App.Utils.Rendor = (function() {
    var currentView;

    var init = function() {
        App.Vent.on( "render.view", render );
    };

    // Create a new instance of the view being rendered.
    var render = function( env ) {
        if ( !App.Views[ env.data.name ] ) {
            return;
        }

        changePage( currentView = new views[ env.data.name ]( env.data ) );
    };

    var changePage = function() { ... };

    return {
        init: init
    };
}());
```

And in the Router you would have...

```js
routes: {
    // Default route
    "": "main",
    // view/1234
    "view/:id": "view"
},
main: function() {
    // Trigger some code for this route.
    App.Vent.trigger( "render.view", {
        data: {
            name: "Home"
        }
    });
},
```

This prevents the router from directly having a reference to the rendering and adds some maintainability. Basically, the `trigger` passes an envelope containing the name of the View to render. Then `Rendor` takes the view name and grabs the constructor out of `App.Views[ env.data.name ]`, and creates a new instance of the view. Finally, the change page function is called passing in the instance of that view.

#### Views
In order to propertly render the views, a little bit of base code is neccessary. Since everything in Backbone can be extended as mentioned previously, a `BaseView` can be created. This view can setup some reusable functions that other views can use.

Having this base view allows abstracting out a few other jQuery Mobile rendering pieces...

```js
buildPage: function( className, content, header, footer ) {
    // Header and footer can either be false, null, or pass a constructor name.
    if ( header === false ) {
        this.header = null;
    }
    else if ( typeof header === "undefined" ) {
        this.header = new App.Views.Header();
    }
    else {
        this.header = header;
    }

    if ( footer === false ) {
        this.footer = null;
    }
    else if ( typeof footer === "undefined" ) {
        this.footer = new App.Views.Footer();
    }
    else {
        this.footer = footer;
    }
    
    this.header && this.$el.append( this.header.$el );
    
    this.$el.empty().append( $( "<div />", {
        html: content || "",
        "class": className || "",
        "data-role": "content"
    }));
    
    this.footer && this.$el.append( this.footer.$el );
},
ready: function() {
    this.$el.closest( ".ui-page" ).trigger( "pagecreate" );
}
```

The above has 2 base functions for page rendering. The first is `buildPage`. It accepts a className, content, header, and footer. The code then allows for a couple of scenarios for a header and footer. If the header or footer is strictly equal to false, meaning that someone had to pass in a `false`. If no header or footer is passed in, a default will be instantiated, or lastsly, a header can be directly passed in. Then a div with a role of `data-role="content"` is appended to the view with optional `content` being passed in. The `App.Views.Header` and `App.Views.Footer` views would follow a similar pattern of rendering the `<div data-role="header" />`.A simple home view might look like...

```js
App.Views.Home = App.Views.BaseView.extend({
    initialize: function( options ) {
        // Build the page and set the content div's class to `home`.
        this.buildPage( "home" );
        this.render();
    },
    render: function() {
        this.$( ".home" ).html( "Hello World" );
    }
});
```

The `App.Views.Home = App.Views.BaseView.extend` is how the functionallity of the BaseView is extended on to the Home view. So, the following code would be appended to the DOM when visiting `localhost`...

```html

<div data-role="page">
    <div data-role="header"></div>
    <div data-role="content">
        Hello World
    </div>
    <div data-role="footer"></div>
</div>
```

#### Data Binding
There are a number of 2-Way binding frameworks out there, one such framework is [Backbone.Stickit](https://github.com/NYTimes/backbone.stickit). Backbone.Stickit adds a `stickit` function to `Backbone.View`. Stickit allows you to bind a model to a view by a simple `bindings` option when creating a view constructor...

```js
bindings: {
    "#firstName": {
        "modelAttr": "firstname"
    },
    "#lastName": {
        "modelAttr": "lastname"
    },
    "#title": {
        modelAttr: "type",
        selectOptions: {
            collection: "App.Titles", // Refers to an array of titles in App.Titles [{ name: "Mr," }, { name: "Mrs."}, ... ]
            labelPath: "name",
            valuePath: "name"
        }
    }
},
render: function() {
    this.stickit();
}
```

The key in the `bindings` attribute is a selector for the DOM element being bound to. The `modelAttr` is the attribute to bind the DOM element to. 

So, in review, the request for `/` would trigger the `main` function in `App.Routers.Home` to fire. This would trigger the `render.view` event which `App.Utils.Rendor` is listenting for. Rendor then creates an instance of the view, grabs it's `$el`, calls `$.mobile.changePage`, and BAM, the page is rendered. Once all of the plumbing work is done, it's simple to create additional views. The idea is to get the plumbing setup and then let Backbone.js handle the rest for you.

Don't forget to checkout the [Boilerplate](https://github.com/appendto/bb10-jqm-boilerplate), as most of the plumbing work has already been taken care of.