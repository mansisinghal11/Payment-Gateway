$('.Count').each(function (_, self) {
    jQuery({
        Counter: 0
    }).animate({
        Counter: $(self).text()
    }, {
        duration: 15000,
        easing: 'swing',
        step: function () {
            $(self).text(Math.ceil(this.Counter));
        }
    });
});
