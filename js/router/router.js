App.Router.map(function() {
  this.route("review")
  this.resource("author", function(){
    this.route("book", {path: "/:book_id"});
  });
});

App.AuthorRoute = Ember.Route.extend({
  model: function() {
    return.this.store.find('book')
  }
});
