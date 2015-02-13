App.Router.map(function() {
  this.route("review");
  this.resource("authors", function(){
    this.route("show", {path: "/:author_id"});
  });
  this.resource("books", function(){
    this.route("show", {path: "/:show_id"})
  })
});
