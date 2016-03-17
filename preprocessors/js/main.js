// запуск мохова
(function() {
    var $section = $('#postcss-bem'),
        $mokhov = $('#mokhov'),
        $body = $('body');

    $mokhov.appendTo($body);

    $section.attrchange({
        trackValues: true,
        callback: function(event) {
            if (event.attributeName !== 'class') {
                return;
            }

            if (!/present/.test(event.newValue)) {
                $mokhov.hide();
                $mokhov.css('animation-name', 'null');
                return;
            }

            $mokhov.show();
            $mokhov.css('animation-name', 'move_mokhov');
        }
    });
}());

// запуск видео с котом-героем
(function() {
    var $section = $('#supercat'),
        $video = $('#supercat-video'),
        video = $video[0],
        $body = $('body');

    $video.appendTo($body);

    $section.attrchange({
        trackValues: true,
        callback: function(event) {
            if (event.attributeName !== 'class') {
                return;
            }

            if (!/present/.test(event.newValue)) {
                video.pause();
                video.currentTime = 0;
                $video.hide();
                return;
            }

            $video.show();
            // запускаем видео
            video.play();
        }
    });
}());

// запуск видео с кокаином
(function() {
    var $section = $('#cocaine'),
        $video = $('#cocaine-video'),
        video = $video[0],
        $body = $('body');

    $video.appendTo($body);

    $section.attrchange({
        trackValues: true,
        callback: function(event) {
            if (event.attributeName !== 'class') {
                return;
            }

            if (!/present/.test(event.newValue)) {
                video.pause();
                video.currentTime = 0;
                $video.hide();
                return;
            }

            $video.show();
            // запускаем видео
            video.play();
        }
    });
}());