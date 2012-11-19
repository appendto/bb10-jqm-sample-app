// A list of `App.Models.Contact` models.
App.Collections.Contacts = Backbone.Collection.extend({
    url: "contacts",
    model: App.Models.Contact,
    // Name of a property to sort the collection by.
    sortByProperty: "firstName",
    // Manually parse the response to return the array of contacts.
    parse: function( resp ) {
        return resp.contacts;
    },
    // Sort the collection.
    comparator: function( contact ) {
        return contact.get( this.sortByProperty );
    }
});