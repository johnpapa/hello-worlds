(function ($) {
    var WorldModel = Backbone.Model.extend({
        defaults: {
            name: '',
        }
    });
    var world = new WorldModel({
        name: 'World.'
    });

    var Hello = Backbone.View.extend({
        el: '#app',

        render: function () {
            $(this.el).html(`Hello ${this.model.get('name')}`);
        }
    });

    var view = new Hello({model: world});
    view.render();
})(jQuery);
