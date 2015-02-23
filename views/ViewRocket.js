
var RocketView = Backbone.View.extend({

    tagName: 'tr',

    events: {
        'click .changeSize': 'changeSize',
        'click .deleteRow':  'deleteRow',
        'blur .desc, .name, .size': 'editValue'
    },

    initialize: function () {
        this.template = _.template($('#viewRocket').html());
        this.listenTo(this.model,'change', this.render);
        this.listenTo(this.model,'destroy', this.remove);
    },

    render: function () {
        var view = this.template(this.model.toJSON());
        this.$el.html(view);
        return this.$el;
    },

    deleteRow: function() {
        this.model.destroy();
    },

    editValue: function () {
        var res = this.model.set({
            name: this.$('.name').text(),
            description: this.$('.desc').text(),
            size: parseInt(this.$('input.size').attr('value'))
        },{validate: true});
        if (!res) this.render();
    },

    changeSize: function(ev) {
        var diff = parseInt($(ev.target).attr('data-rel'));
        var size = this.model.get('size');
        var res = this.model.set({
            size: size+diff
        },{validate: true});
        if (!res) this.render();
    }
});
