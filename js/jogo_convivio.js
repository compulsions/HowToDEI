 $(document).ready(function() {
    var actual = "zero";
    var audioElement = document.createElement('audio');
     audioElement.setAttribute("autoplay", true)
     
     
    //Define a música inicial
    audioElement.setAttribute('src', 'audio/audio.mp3');
    $('#musica_titulo').html("Natasha Bedingfield - Unwritten");;        
    $("#convivio_animacao").addClass(actual);

    $.get();

    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);

     
    //Botão Play
    $('#play').click(function() {
        audioElement.play();
        $('#musica_titulo').show();
        $("#convivio_animacao").addClass(actual);

    });

    //Botão Pausa
    $('#pause').click(function() {
        audioElement.pause();
        $('#musica_titulo').hide();
        $("#convivio_animacao").removeClass("zero um dois");
    });
            
     //Botão Avançar
    $('#advance').click(function() {
        audioElement.pause();
        if (actual == "zero"){
            audioElement.setAttribute('src', 'audio/audio2.mp3');
            $('#musica_titulo').html("Jimmy Eat World - The Middle");
            actual = "um";
            $("#convivio_animacao").addClass("um").removeClass("zero");
            
        } else if (actual == "um"){
            audioElement.setAttribute('src', 'audio/audio3.mp3');
            $('#musica_titulo').html("Natasha Bedingfield - Pocketful of Sunshine");
            $("#convivio_animacao").addClass("dois").removeClass("um");
            actual = "dois";
            
        } else if (actual == "dois"){
            audioElement.setAttribute('src', 'audio/audio.mp3');
            $('#musica_titulo').html("Natasha Bedingfield - Unwritten");
            $("#convivio_animacao").addClass("zero").removeClass("um");
            actual = "zero";
        }
        
    });
     
     
     //Botão Retroceder
    $('#backwards').click(function() {
        audioElement.pause();
        
        if (actual == "zero"){
            audioElement.setAttribute('src', 'audio/audio3.mp3');
            $('#musica_titulo').html("Natasha Bedingfield - Pocketful of Sunshine");
            $("#convivio_animacao").addClass("dois").removeClass("um");
            actual = "dois";
                    
        } else if (actual == "um"){
            audioElement.setAttribute('src', 'audio/audio.mp3');
            $('#musica_titulo').html("Natasha Bedingfield - Unwritten");
            $("#convivio_animacao").addClass("zero").removeClass("um");
            actual = "zero";
            
        } else if (actual == "dois"){
            audioElement.setAttribute('src', 'audio/audio2.mp3');
            $('#musica_titulo').html("Jimmy Eat World - The Middle");
            actual = "um";
            $("#convivio_animacao").addClass("um").removeClass("zero");
        }
            });
            
});