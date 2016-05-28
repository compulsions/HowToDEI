$(function() {
    $('[data-toggle="tooltip"]').tooltip();  

//Começar com as Localizações escondidas
    $('.pontos').removeClass('pontos_visivel');
    
    ///////////////////////////////////////////////////////////
    
//Alterar localizações conforme categoria
    $("#InfoImportantes").click( function(){
        $('.pontos_visivel').removeClass('pontos_visivel');
        
        $("#floor1").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#locaisImportantes_pontosP1').addClass('pontos_visivel');
       });
        
       $("#floor4").click( function(){
           $('.pontos_visivel').removeClass('pontos_visivel');
            $('#locaisImportantes_pontosP4').addClass('pontos_visivel');
       });
        
       $("#floor5").click( function(){
           $('.pontos_visivel').removeClass('pontos_visivel');
       });
        
        $("#floor6").click( function(){ 
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#locaisImportantes_pontosP6').addClass('pontos_visivel');
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
        $('.pontos_visivel').removeClass('pontos_visivel');
        
        
        $("#floor1").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
       });

        
       $("#floor4").click( function(){
           $('.pontos_visivel').removeClass('pontos_visivel');
           $('#locaisEstudo_PontosP4').addClass('pontos_visivel');
        });
        
       $("#floor5").click( function(){ 
           $('.pontos_visivel').removeClass('pontos_visivel');
           $('#locaisEstudo_PontosP5').addClass('pontos_visivel');
 
       });
        
        $("#floor6").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
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
        $('.pontos_visivel').removeClass('pontos_visivel');
        
        $("#floor1").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
        });
        
       $("#floor4").click( function(){
           $('.pontos_visivel').removeClass('pontos_visivel');
           $('#locaisConvivio_pontos').addClass('pontos_visivel');

       });
        
       $("#floor5").click( function(){ 
           $('.pontos_visivel').removeClass('pontos_visivel');
       });
        
        $("#floor6").click( function(){ 
            $('.pontos_visivel').removeClass('pontos_visivel');
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
        $('.pontos_visivel').removeClass('pontos_visivel');
        
        $("#floor1").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
        });
        
        $("#floor4").click( function(){
           $('.pontos_visivel').removeClass('pontos_visivel');
           $('#wcs_pontosP4').addClass('pontos_visivel');
        });
        
       $("#floor5").click( function(){ 
           $('.pontos_visivel').removeClass('pontos_visivel');
           $('#wcs_pontosP5').addClass('pontos_visivel');
        });
        
        $("#floor6").click( function(){ 
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#wcs_pontosP5').addClass('pontos_visivel');
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
        
        $("#InfoImportantes").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#locaisImportantes_pontosP1').addClass('pontos_visivel');

        });
        
        
        $("#LocaisEstudo").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
        });
        
        $("#LocaisConvivio").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
        });
        $("#InfoWC").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
        });
    });
    
    $("#floor4").click( function(){
        $('.mapa_guiacategorias').css("background-image", "url(/img/m2.png)");
        
        $("#InfoImportantes").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#locaisImportantes_pontosP4').addClass('pontos_visivel');
          });
        $("#LocaisEstudo").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#locaisEstudo_pontosP4').addClass('pontos_visivel');
          });
        
        $("#LocaisConvivio").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#locaisConvivio_pontos').addClass('pontos_visivel');
          });
        $("#InfoWC").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#wcs_pontosP4').addClass('pontos_visivel');
          });
    });
    
    $("#floor5").click( function(){
        $('.mapa_guiacategorias').css("background-image", "url(/img/m3.png)");
        
        $("#InfoImportantes").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
          });
        $("#LocaisEstudo").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#locaisEstudo_pontosP5').addClass('pontos_visivel');
          });
        
        $("#LocaisConvivio").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
          });
        
        $("#InfoWC").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#wcs_pontosP5').addClass('pontos_visivel');
          });
    });
    
    $("#floor6").click( function(){
        $('.mapa_guiacategorias').css("background-image", "url(/img/m3.png)");
        
        $("#InfoImportantes").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#locaisImportantes_pontosP6').addClass('pontos_visivel');
          });
        
        $("#LocaisEstudo").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
          });
        
        $("#LocaisConvivio").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
          });
        
        $("#InfoWC").click( function(){
            $('.pontos_visivel').removeClass('pontos_visivel');
            $('#wcs_pontosP5').addClass('pontos_visivel');
          });
    });
});
