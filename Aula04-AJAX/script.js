function ler(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if( this.readyState == 1){
            $("#divResposta").html("solicitação enviada");
        }
        if( this.readyState == 4 ) {
            if( this.status == 200){
                texto = $("#divResposta").html()
                $("#divResposta").html( texto + "<br>"
                                        + this.responseText);
            }
            if( this.status == 404){
                $("#divResposta").html("Página não encontrada");
            } 
        }   
    };
    xhttp.open("GET", "informacao.txt", true);
    xhttp.send();
}




function gerar(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if( this.readyState == 1){
            $("#divNumeros").html("solicitação enviada");
        }
        if( this.readyState == 4 ) {
            if( this.status == 200){
                texto = $("#divNumeros").html()
                $("#divNumeros").html(this.responseText);
            }
            if( this.status == 404){
                $("#divNumeros").html("Página não encontrada");
            } 
        } 

    };

    url = "numeros.php?numero=" + $("#txtNumero").val();
    xhttp.open("GET", url , true);
    xhttp.send();

}