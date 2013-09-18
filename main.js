// создаем объект
var app = app || {};

$(function () {

    $.fn.rocket = function(cmd) {
        if (!window._rocket) {
            window._rocket = {};
        }
        if (cmd == 'create') {
            var id = Math.random();
            $(this).attr('data-rocket-id',id);
            window._rocket[id] = new RocketsView({
                el: this
            });

        } if (cmd == 'json') {
            var id = $(this).attr('data-rocket-id');
            return window._rocket[id].coll.toJSON();
        }
    }

    $('#rockets').rocket('create');

});
