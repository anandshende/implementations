$(document).ready(function () {

    // AIRPORT
    $('#demo').textShuffle({
        // custom characters
        chars: "________________",
        // animation speed
        animationSpeed: 10,
        // trigger element
        bindEvent: "click"
    });


    // COOL TYPE
    $('#coolTypeDemo').bind('click', function () {

        $('#coolTypeDemo').text('');
        var text = 'Just another jQuery plugin for simulating the typewriter typing effect that allows to print out your text character by character with lots of configuration settings Just another jQuery plugin for simulating the typewriter typing effect that allows to print out your text character by character with lots of configuration settings Just another jQuery plugin for simulating the typewriter typing effect that allows to print out your text character by character with lots of configuration settings';
        $('#coolTypeDemo').coolType(text, {
            typeSpeed: 10,
            delayBeforeType: 1000,
            delayAfterType: 3000,
            cursorChar: '&#9608;',
            cursorBlinkSpeed: 300,
            // is inline?
            inline: true,
            // callbacks
            onComplete: false,
            onBeforeType: false,
            onAfterType: false,
            // strings that should be typed as a single character.
            expansions: [
                '&nbsp;',
                '&gt;',
                '&lt;',
                '&quot;',
                '&amp;'
            ]
        });
    });

    // CURVY TEXT
    $('#curvyTextDemo').bind('click', function () {
        $('#curvyTextDemo').curvy({
            in: {
                effect: 'curveIn'
            },
            type: 'word'
        });
    });

    // DESCRAMBLE
    $('#descrambleDemo').bind('click', function () {
        var duration = 200;
        var interval = 5;
        var charset = 'alphabet'; // alphabet, numbers, alphanumeric, punctuation
        $("#descrambleDemo").scramble(duration, interval, charset);
    });

    // ANIMATE TEXT
    $("#animateText").bind('click', function () {
        $("#animateText").animatext();
    });
    $("#animateText2").bind('click', function () {
        $("#animateText2").animatext({
            mode: "words"
        });
    });
    $("#animateText3").bind('click', function () {
        $("#animateText3").animatext({
            effect: 'tada'
        });
    });
    $("#animateText4").bind('click', function () {
        $("#animateText4").animatext({
            reverse: true
        });
    });
    $("#animateText5").bind('click', function () {
        $("#animateText5").animatext({
            random: true,
            speed: 30,
            onBegin: function () { },
            onSuccess: function () { }
        });
    });

});
