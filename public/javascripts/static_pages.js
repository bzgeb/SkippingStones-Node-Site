var audio = {};

$(document).ready(function() {
//    audio.element = document.createElement('audio');
//    audio.element.src = Modernizr.audio.ogg ? "/assets/" + audio_id + ".ogg" :
//                        Modernizr.audio.mp3 ? "/assets/" + audio_id + ".mp3" :
//                                              "/assets/" + audio+id + ".m4a";
//
    $("#stones img").mouseenter(function() {
        $(this).addClass("hover");
        console.log(this);
        audio_id = jQuery.attr(this, "data-sound")
        e = $("#"+ audio_id)[0];
        if(Modernizr.audio && e != undefined) {
            e.src = Modernizr.audio.ogg ? "/sounds/" + audio_id + ".ogg" :
                    Modernizr.audio.mp3 ? "/sounds/" + audio_id + ".mp3" :
                                          "/sounds/" + audio+id + ".m4a";
            e.play();
        }
    });

    $("#stones img").mouseleave(function() {
        $(this).removeClass("hover");
    });

    $("#stones img").click(function() {
        audio_id = jQuery.attr(this, "data-sound")
        e = $("#"+ audio_id)[0];
        if(Modernizr.audio && e != undefined) {
            e.src = Modernizr.audio.ogg ? "/sounds/" + audio_id + ".ogg" :
                    Modernizr.audio.mp3 ? "/sounds/" + audio_id + ".mp3" :
                                          "/sounds/" + audio+id + ".m4a";
            e.play();
        }
    });
});
