function ler(){
    console.log("oi");
    divStatus = document.getElementById("status");
    divStatus.innerHTML = "carregando...";
    tabela = document.getElementById("tblPessoa");

    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            obj = JSON.parse( this.responseText );
            obj.forEach( pess => {
                if( document.getElementById("p" + pess.id ) == null ){
                    index = tabela.rows.length;
                    row = tabela.insertRow(-1);
                    row.id = "p" + pess.id;
                    cellID = row.insertCell(0);
                    cellNOME = row.insertCell(1);
                    cellPRESENCA = row.insertCell(2);
                    cellFALTA = row.insertCell(3);
                    cellEXCLUIR = row.insertCell(4);
                    cellID.innerHTML = pess.id;
                    cellNOME.innerHTML = pess.nome;
                    cellPRESENCA.innerHTML = pess.presenca;
                    cellFALTA.innerHTML = pess.falta;
                    cellEXCLUIR.innerHTML = "<button onclick='excluir(" + pess.id +")' >EXCLUIR</button>";

                }
            });
            divStatus.innerHTML = "";
            
        }

        if( this.readyState = 4 && this.status != 200){
            divStatus.innerHTML = this.responseText;
        }

    };

    xhttp.open("GET", "http://localhost:8001/pessoa", true);
    xhttp.send();
}


function add(){
    xhttp = new XMLHttpRequest();
    var txtNome = document.getElementById("txtNome");
    var txtPresenca = document.getElementById("txtPresenca");
    var txtFalta = document.getElementById("txtFalta");

    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            ler();
            txtNome.value = "";
            txtPresenca.value = "";
            txtFalta.value = "";
        }
    };

    xhttp.open("POST", "http://localhost:8001/pessoa", true);
    xhttp.setRequestHeader( "Content-type" , "application/x-www-form-urlencoded" );
    var nome = txtNome.value;
    var presenca =  txtPresenca.value
    var falta = txtFalta.value 
    xhttp.send( "nome=" + nome + "&presenca=" + presenca + "&falta=" + falta );
}

function excluir(idPess){
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            ler();
        }
    };

    xhttp.open("DELETE", "http://localhost:8001/pessoa/" + idPess, true);
  
    xhttp.send( );
}