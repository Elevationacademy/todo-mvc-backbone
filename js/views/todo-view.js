// The DOM element for a todo item...
TodoView = Backbone.View.extend({
  //... is a list tag.
  tagName:  'li',

  // Cache the template function for a single item.
  template: Handlebars.compile($('#item-template').html()),

  // The DOM events specific to an item.
  events: {
    'click .toggle': 'toggleCompleted',
    'click .destroy': 'clear',
  },

  // The TodoView listens for changes to its model, re-rendering. Since
  // there's a one-to-one correspondence between a **Todo** and a
  // **TodoView** in this app, we set a direct reference on the model for
  // convenience.
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  // Re-render the titles of the todo item.
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  // Toggle the `"completed"` state of the model.
  toggleCompleted: function () {
    this.model.toggle();
  },

  // Remove the item, destroy the model from *localStorage* and delete its view.
  clear: function () {
    this.model.destroy();
  }
});
