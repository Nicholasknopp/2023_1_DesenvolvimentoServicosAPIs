function ler(){
    console.log("oi");
    divStatus = document.getElementById("status");
    divStatus.innerHTML = "carregando...";
    tabela = document.getElementById("tblChamada");

    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            obj = JSON.parse( this.responseText );
            obj.forEach( cham => {
                if( document.getElementById("c" + cham.id ) == null ){
                    index = tabela.rows.length;
                    row = tabela.insertRow(-1);
                    row.id = "p" + cham.id;
                    cellID = row.insertCell(0);
                    cellNOME = row.insertCell(1);
                    cellIdade = row.insertCell(2);
                    cellPresente = row.insertCell(2);
                    cellFalta = row.insertCell(2);
                    cellEXCLUIR = row.insertCell(3);
                    cellID.innerHTML = cham.id;
                    cellNOME.innerHTML = cham.nome;
                    cellIDADE.innerHTML = cham.idade;
                    cellPRESENTE.innerHTML = cham.presente;
                    cellFALTA.innerHTML = cham.Falta;
                    cellEXCLUIR.innerHTML = "<button onclick='excluir(" + cham.id +")' >EXCLUIR</button>";

                }
            });
            divStatus.innerHTML = "";
            
        }

        if( this.readyState = 4 && this.status != 200){
            divStatus.innerHTML = this.responseText;
        }

    };

    xhttp.open("GET", "http://localhost:8001/chamada", true);
    xhttp.send();
}


function add(){
    xhttp = new XMLHttpRequest();
    var txtNome = document.getElementById("txtNome");
    var txtIdade = document.getElementById("txtIdade");
    var txtPresente = document.getElementById("txtPresente");
    var txtFalta = document.getElementById("txtFalta");

    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            ler();
            txtNome.value = "";
            txtIdade.value = "";
            txtPresente.value = "";
            txtFalta.value = "";
        }
    };

    xhttp.open("POST", "http://localhost:8001/chamada", true);
    xhttp.setRequestHeader( "Content-type" , "application/x-www-form-urlencoded" );
    var nome = txtNome.value;
    var idade = txtIdade.value;
    var presente =  txtPresente.value
    var falta = txtFalta.value 
    xhttp.send( "nome=" + nome + "&idade=" + idade + "&presente" + presente + "&falta" + falta );
}

function excluir(idProd){
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            ler();
        }
    };

    xhttp.open("DELETE", "http://localhost:8001/chamada/" + idcham, true);
  
    xhttp.send( );
}