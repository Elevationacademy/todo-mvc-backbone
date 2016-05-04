// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
var TodoModel = Backbone.Model.extend({
  // Default attributes for the todo
  // and ensure that each todo created has `title` and `completed` keys.
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the `completed` state of this todo item.
  toggle: function () {
    this.set('completed', !this.get('completed'));
  }
});

