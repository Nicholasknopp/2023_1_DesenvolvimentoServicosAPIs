function validar(){
    var valor = document.getElementById("txtValor").value;
    var pinfo = document.getElementById("info");
    if( valor == ""){
        pinfo.innerHTML = "O campo valor deve ser preeenchido!"
        return false;
    }else{
         if( isNaN(valor) ){
            pinfo.innerHTML = "O valor deve ser um número!"
            return false;
        }else{
            if( valor > 0 && valor < 11){
                return true;
            }else{
                pinfo.innerHTML = "Valor não permitido!"
                return false;
            }
        }
    }
}


function lerObjeto(){
    var carro = { modelo : "Doblo" , ano : 2006 };

    var pessoa = {
        nome : "Maria" ,
        idade : 25 ,
        altura : 1.8 ,
        temFilhos : true ,
        endereco : null ,
        veiculo : carro , 
        filhos : [ 
            { nome : "Carlos" , idade : 10 } ,
            { nome : "Júlia" , idade : 8 } ,
        ] ,
        formação : [ 2006 , 2013 , 2017 ] ,
        imprimir : function(){
            texto = this.nome + " - idade: " + this.idade + " - Carro: " + this.veiculo.modelo;
            return texto;
        }
    }
    
    divdocument.getElementById("divObjeto").innerHTML = pessoa.imprimir();
    divObjeto.innerHTML = pessoa.imprimir();

}

function calcular(){
    var retangulo = {
        largura : document.getElementById("txtLargura").value ,
        altura : document.getElementById("txtAltura").value ,
        calcularArea : function(){
            return this.largura * this.altura;
        }
    };
    var pResultado = document.getElementById("pResultado");
    pResultado.innerHTML = "Área: " + retangulo.calcularArea();

}




