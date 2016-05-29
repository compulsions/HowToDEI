$(function() {
    
    $( "#jogo_nei_peca1" ).draggable({
        containment: $('.jogo_nei'),
        revert: "invalid"
                
    });
    
    $( "#jogo_nei_peca2" ).draggable({
        containment: $('.jogo_nei'),
        revert: "invalid"
    });  
    
    $( "#jogo_nei_peca3" ).draggable({
        containment: $('.jogo_nei'),
        revert: "invalid"
    });  
    
    $( "#jogo_nei_peca4" ).draggable({
        containment: $('.jogo_nei'),
        revert: "invalid"
    });  
           
    $("#jogo_nei_objectivo1").droppable( {
        drop: handleDropEvent,
        accept: '#jogo_nei_peca1',
    });
              
    $("#jogo_nei_objectivo2").droppable( {
        drop: handleDropEvent,
        accept: '#jogo_nei_peca2'
     });
    
    $("#jogo_nei_objectivo3").droppable( {
        drop: handleDropEvent,
        accept: '#jogo_nei_peca3'
     });
    
    $("#jogo_nei_objectivo4").droppable( {
        drop: handleDropEvent,
        accept: '#jogo_nei_peca4'
     });

    function handleDropEvent( event, ui ) {
        $(this).addClass("goal");
    }
    
});
