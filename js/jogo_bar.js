//JOGO BAR
var lista = "";
var num, ativo;
        
        //$(".peca_jogo_bar").click(verificar);
        $("#croissant").hide();
        $("#baguette").hide();
        $("#drink").hide();
        $("#apple").hide();

        
        $('.peca_jogo_bar').click(function(e) {
            var cobaia = $(e.target).closest('.peca_jogo_bar');
            num = cobaia.attr("id");
            lista = lista + num;
            $('.clicado').removeClass('clicado');
            $(cobaia).addClass('clicado');
            verificar();
        });
        
       
        
        function verificar() {
            if (lista.length == 20){
                if (lista == "jogo_bar_1jogo_bar_6" || lista == "jogo_bar_6jogo_bar_1"){
                    console.log("és bué fixe, fizeste um par"); 
                    $("#jogo_bar_1").addClass("apagado");
                    $("#jogo_bar_6").addClass("apagado"); 
                    $("#croissant").show();
                } 
                
                else if (lista == "jogo_bar_2jogo_bar_8" || lista == "jogo_bar_8jogo_bar_2"){
                    console.log("és bué fixe, fizeste um par"); 
                    $("#jogo_bar_2").addClass("apagado");
                    $("#jogo_bar_8").addClass("apagado");
                    $("#baguette").show();
                }
                
                else if (lista == "jogo_bar_3jogo_bar_4" || lista == "jogo_bar_4jogo_bar_3"){
                    console.log("és bué fixe, fizeste um par"); 
                    $("#jogo_bar_3").addClass("apagado");
                    $("#jogo_bar_4").addClass("apagado");
                    $("#drink").show();
                }
                
                else if (lista == "jogo_bar_5jogo_bar_7" || lista == "jogo_bar_7jogo_bar_5"){
                    console.log("és bué fixe, fizeste um par"); 
                    $("#jogo_bar_5").addClass("apagado");
                    $("#jogo_bar_7").addClass("apagado");
                    $("#apple").show();
                }
                
            } else if (lista.length > 20) {
                lista = "";
                console.log("apagando");
            }
         };

