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