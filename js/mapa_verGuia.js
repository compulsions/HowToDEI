$(function() {
    
//Começar com as Localizações escondidas
    document.getElementById("locaisImportantes_pontos").style.display = "none";
    document.getElementById("locaisEstudo_pontos").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    document.getElementById("wcs_pontos").style.display = "none";
    
//Alterar localizações conforme categoria
    $("#InfoImportantes").click( function(){
        document.getElementById("locaisImportantes_pontos").style.display = "block";
    document.getElementById("locaisEstudo_pontos").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    document.getElementById("wcs_pontos").style.display = "none";
    
//Mudar o estilo dos botoes        
    document.getElementById("InfoImportantes").style.color = "#6f6f6f";
    document.getElementById("LocaisEstudo").style.color = "#333";
        
    document.getElementById("LocaisConvivio").style.color = "#333";
        
    document.getElementById("InfoWC").style.color = "#333";
    
    });
    
//Alterar localizações conforme categoria
    $("#LocaisEstudo").click( function(){
        document.getElementById("locaisImportantes_pontos").style.display = "none";
    document.getElementById("locaisEstudo_pontos").style.display = "block";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    document.getElementById("wcs_pontos").style.display = "none";

    //Mudar o estilo dos botoes        
    document.getElementById("InfoImportantes").style.color = "#333";
    document.getElementById("LocaisEstudo").style.color = "#6f6f6f";
        
    document.getElementById("LocaisConvivio").style.color = "#333";
        
    document.getElementById("InfoWC").style.color = "#333";
    });

//Alterar localizações conforme categoria
    $("#LocaisConvivio").click( function(){
        document.getElementById("locaisImportantes_pontos").style.display = "none";
    document.getElementById("locaisEstudo_pontos").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "block";
    document.getElementById("wcs_pontos").style.display = "none";
    
    //Mudar o estilo dos botoes        
    document.getElementById("InfoImportantes").style.color = "#333";
    document.getElementById("LocaisEstudo").style.color = "#333";
        
    document.getElementById("LocaisConvivio").style.color = "#6f6f6f";
        
    document.getElementById("InfoWC").style.color = "#333";
    });
    
//Alterar localizações conforme categoria
    $("#InfoWC").click( function(){
        document.getElementById("locaisImportantes_pontos").style.display = "none";
    document.getElementById("locaisEstudo_pontos").style.display = "none";
    document.getElementById("locaisConvivio_pontos").style.display = "none";
    document.getElementById("wcs_pontos").style.display = "block";
        
   //Mudar o estilo dos botoes        
    document.getElementById("InfoImportantes").style.color = "#333";
    document.getElementById("LocaisEstudo").style.color = "#333";
        
    document.getElementById("LocaisConvivio").style.color = "#333";
        
    document.getElementById("InfoWC").style.color = "#6f6f6f";
   
   
    });
    
});
