// Our overall **AppView** is the top-level piece of UI.
AppView = Backbone.View.extend({

  // Instead of generating a new element, bind to the existing skeleton of
  // the App already present in the HTML.
  el: '.todoapp',

  // Delegated events for creating new items, and clearing completed ones.
  events: {
    'keypress .new-todo': 'createOnEnter',
  },

  // At initialization we bind to the relevant events on the `Todos`
  // collection, when items are added or changed.
  initialize: function () {
    this.$input = this.$('.new-todo');
    this.$list = $('.todo-list');

    this.listenTo(todosCollection, 'add', this.addOne);
  },

  // Add a single todo item to the list by creating a view for it, and
  // appending its element to the `<ul>`.
  addOne: function (todo) {
    var view = new TodoView({ model: todo });
    this.$list.append(view.render().el);
  },

  // Generate the attributes for a new Todo item.
  newAttributes: function () {
    return {
      title: this.$input.val().trim(),
      completed: false
    };
  },

  createOnEnter: function (e) {
    // only submit on ENTER
    if (e.which === ENTER_KEY && this.$input.val().trim()) {
      todosCollection.add(this.newAttributes());
      this.$input.val('');
    }
  }
});