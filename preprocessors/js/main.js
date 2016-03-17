// запуск мохова
(function () {
    var $section = $('#postcss_bem'),
        $mokhov = $('#mokhov'),
        $body = $('body');

    $mokhov.appendTo($body);

    $section.attrchange({
        trackValues: true,
        callback: function (event) {
            if (event.attributeName !== 'class')
                return;

            if (/present/.test(event.newValue)) {
                $mokhov.show();
                $mokhov.css('animation-name', 'move_mokhov');
            } else {
                $mokhov.hide();
            }
        }
    });
}());