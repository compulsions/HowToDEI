$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();  
    
        
//Começar com as Localizações escondidas
    document.getElementById("locaisImportantes_exp").style.display = "none";
    document.getElementById("locaisEstudo_exp").style.display = "none";
    document.getElementById("locaisConvivio_exp").style.display = "none";
    document.getElementById("wcs_exp").style.display = "none";
    
//Alterar localizações conforme categoria
    $("#ExpInfoImportantes").click( function(){
        document.getElementById("locaisImportantes_exp").style.display = "block";
    document.getElementById("locaisEstudo_exp").style.display = "none";
    document.getElementById("locaisConvivio_exp").style.display = "none";
    document.getElementById("wcs_exp").style.display = "none";
    
//Mudar o estilo dos botoes        
    document.getElementById("ExpInfoImportantes").style.color = "#6f6f6f";
    document.getElementById("ExpLocaisEstudo").style.color = "#333";
        
    document.getElementById("ExpLocaisConvivio").style.color = "#333";
        
    document.getElementById("ExpInfoWC").style.color = "#333";
    
    });
    
//Alterar localizações conforme categoria
    $("#ExpLocaisEstudo").click( function(){
        document.getElementById("locaisImportantes_exp").style.display = "none";
    document.getElementById("locaisEstudo_exp").style.display = "block";
    document.getElementById("locaisConvivio_exp").style.display = "none";
    document.getElementById("wcs_exp").style.display = "none";

    //Mudar o estilo dos botoes        
    document.getElementById("ExpInfoImportantes").style.color = "#333";
    document.getElementById("ExpLocaisEstudo").style.color = "#6f6f6f";
        
    document.getElementById("ExpLocaisConvivio").style.color = "#333";
        
    document.getElementById("ExpInfoWC").style.color = "#333";
    });

//Alterar localizações conforme categoria
    $("#ExpLocaisConvivio").click( function(){
        document.getElementById("locaisImportantes_exp").style.display = "none";
    document.getElementById("locaisEstudo_exp").style.display = "none";
    document.getElementById("locaisConvivio_exp").style.display = "block";
    document.getElementById("wcs_exp").style.display = "none";
    
    //Mudar o estilo dos botoes        
    document.getElementById("ExpInfoImportantes").style.color = "#333";
    document.getElementById("ExpLocaisEstudo").style.color = "#333";
        
    document.getElementById("ExpLocaisConvivio").style.color = "#6f6f6f";
        
    document.getElementById("ExpInfoWC").style.color = "#333";
    });
    
//Alterar localizações conforme categoria
    $("#ExpInfoWC").click( function(){
        document.getElementById("locaisImportantes_exp").style.display = "none";
    document.getElementById("locaisEstudo_exp").style.display = "none";
    document.getElementById("locaisConvivio_exp").style.display = "none";
    document.getElementById("wcs_exp").style.display = "block";
        
   //Mudar o estilo dos botoes        
    document.getElementById("ExpInfoImportantes").style.color = "#333";
    document.getElementById("ExpLocaisEstudo").style.color = "#333";
        
    document.getElementById("ExpLocaisConvivio").style.color = "#333";
        
    document.getElementById("ExpInfoWC").style.color = "#6f6f6f";
   
   
    });
    
});