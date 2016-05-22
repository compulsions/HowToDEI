$(function() {
    $(".texto_visita").hide();

    $("#visita_guiada").click( function(){
        $(".mapa").hide(800);
        $("#visita_guiada").hide(800);
        $(".texto_visita").show(800);

        //setTimeout("window.location.href = "guia.html"", 2000);
        setTimeout(function(){ window.location = "guia.html"; }, 5000);
    });
});


