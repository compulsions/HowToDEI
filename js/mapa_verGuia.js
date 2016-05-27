$(function() {
    $('[data-toggle="tooltip"]').tooltip();  

//Começar com as Localizações escondidas
                    document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    
    document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    
    ///////////////////////////////////////////////////////////
    
//Alterar localizações conforme categoria
    $("#InfoImportantes").click( function(){
        
        document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    
    document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
        
         $("#floor1").click( function(){
             document.getElementById("locaisImportantes_pontosP1").style.display = "block";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
             document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
       });
        
       $("#floor4").click( function(){ document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "block";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
                                      document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });
        
       $("#floor5").click( function(){ document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
                                      document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });
        
        $("#floor6").click( function(){ document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "block";
                                       document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });
       
//Mudar o estilo dos botoes        
    document.getElementById("InfoImportantes").style.color = "#6f6f6f";
    document.getElementById("LocaisEstudo").style.color = "#333";
        
    document.getElementById("LocaisConvivio").style.color = "#333";
        
    document.getElementById("InfoWC").style.color = "#333";
    
    });
    
    ////////////////////////////////////////////////////////
    
//Alterar localizações conforme categoria
    $("#LocaisEstudo").click( function(){
        
        document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    
    document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
        
       $("#floor1").click( function(){
           document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
           document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });
        
       $("#floor4").click( function(){
           document.getElementById("locaisEstudo_pontosP4").style.display = "block";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
           document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });
        
       $("#floor5").click( function(){ 
           document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "block";
           document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });
        
        $("#floor6").click( function(){ 
            document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
            document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });

    //Mudar o estilo dos botoes        
    document.getElementById("InfoImportantes").style.color = "#333";
    document.getElementById("LocaisEstudo").style.color = "#6f6f6f";
        
    document.getElementById("LocaisConvivio").style.color = "#333";
        
    document.getElementById("InfoWC").style.color = "#333";
    });

    ///////////////////////////////////////////////////////////
    
//Alterar localizações conforme categoria
    $("#LocaisConvivio").click( function(){
     
        document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    
    document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
        
        
       $("#floor1").click( function(){
           document.getElementById("locaisConvivio_pontos").style.display = "none";
           document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    
    document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });
        
       $("#floor4").click( function(){
           document.getElementById("locaisConvivio_pontos").style.display = "block";
           document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    
    document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });
        
       $("#floor5").click( function(){ 
           document.getElementById("locaisConvivio_pontos").style.display = "none";
           document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    
    document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });
        
        $("#floor6").click( function(){ 
            document.getElementById("locaisConvivio_pontos").style.display = "none";
            document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    
    document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
    });
    
    //Mudar o estilo dos botoes        
    document.getElementById("InfoImportantes").style.color = "#333";
    document.getElementById("LocaisEstudo").style.color = "#333";
        
    document.getElementById("LocaisConvivio").style.color = "#6f6f6f";
        
    document.getElementById("InfoWC").style.color = "#333";
    });
    
    
    //////////////////////////////////////////////////////////
    
//Alterar localizações conforme categoria
    $("#InfoWC").click( function(){   
        
        document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";
    
    document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    
    document.getElementById("wcs_pontosP4").style.display = "none";
    document.getElementById("wcs_pontosP5").style.display = "none";
        
       $("#floor1").click( function(){
           document.getElementById("wcs_pontosP4").style.display = "none";
           document.getElementById("wcs_pontosP5").style.display = "none";
           document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";

        document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
        document.getElementById("locaisConvivio_pontos").style.display = "none";
    });
        
       $("#floor4").click( function(){
           document.getElementById("wcs_pontosP4").style.display = "block";
           document.getElementById("wcs_pontosP5").style.display = "none";  
           document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";

        document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
        document.getElementById("locaisConvivio_pontos").style.display = "none";
    });
        
       $("#floor5").click( function(){ 
            document.getElementById("wcs_pontosP4").style.display = "none";
            document.getElementById("wcs_pontosP5").style.display = "block";
           document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";

        document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
        document.getElementById("locaisConvivio_pontos").style.display = "none";
    });
        
        $("#floor6").click( function(){ 
            document.getElementById("wcs_pontosP4").style.display = "none";
            document.getElementById("wcs_pontosP5").style.display = "block";
            document.getElementById("locaisImportantes_pontosP1").style.display = "none";
document.getElementById("locaisImportantes_pontosP4").style.display = "none";
document.getElementById("locaisImportantes_pontosP6").style.display = "none";

        document.getElementById("locaisEstudo_pontosP4").style.display = "none";
 document.getElementById("locaisEstudo_pontosP5").style.display = "none";
        document.getElementById("locaisConvivio_pontos").style.display = "none";
    });
        
   //Mudar o estilo dos botoes        
    document.getElementById("InfoImportantes").style.color = "#333";
    document.getElementById("LocaisEstudo").style.color = "#333";
        
    document.getElementById("LocaisConvivio").style.color = "#333";
        
    document.getElementById("InfoWC").style.color = "#6f6f6f";
   
   
    });
    
    /////////////// Alteração entre os mapas //////////////
    
//Alterar o mapa conforme o que for escolhido
    $("#floor1").click( function(){
        $('.mapa_guiacategorias').css("background-image", "url(/img/m1.png)");
    });
    
    $("#floor4").click( function(){
         $('.mapa_guiacategorias').css("background-image", "url(/img/m2.png)");
    });
    
    $("#floor5").click( function(){
        $('.mapa_guiacategorias').css("background-image", "url(/img/m3.png)");
    });
    
    $("#floor6").click( function(){
        $('.mapa_guiacategorias').css("background-image", "url(/img/m3.png)");
    });
});
