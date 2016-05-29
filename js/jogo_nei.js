$(function() {
    $("#alerta_1").hide();
    
    $( "#jogo_nei_peca1" ).draggable({
        containment: $('.jogo_nei'),
        revert: "invalid"
                
    });
    
    $( "#jogo_nei_peca2" ).draggable({
        containment: $('.jogo_nei'),
        revert: "invalid"
    });  
           
    $("#jogo_nei_objectivo1").droppable( {
        drop: handleDropEvent1,
        accept: '#jogo_nei_peca1',
    });
              
    $("#jogo_nei_objectivo2").droppable( {
        drop: handleDropEvent,
        accept: '#jogo_nei_peca2'
     });

    function handleDropEvent1( event, ui ) {
        $(this).addClass("goal");
        $("#alerta_1").show();
    }
    
});
