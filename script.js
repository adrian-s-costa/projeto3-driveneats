let nomePrato
let precoPrato
let nomeBebida
let precoBebida
let nomeSobremesa
let precoSobremesa
let precoPedido

function marcar(elementoClicado){
    
    
    const pratoSelecionado = document.querySelector(".prato.selec");
    

    if (pratoSelecionado !== null && elementoClicado.classList.contains("prato")){
    
        
        pratoSelecionado.classList.remove("selec") 
        pratoSelecionado.querySelector("ion-icon").classList.remove("icon-selec")
       
    
    } 

    
    nomePrato = elementoClicado.querySelector(".nome-item").innerHTML
    precoPrato = elementoClicado.querySelector(".preco-item").innerHTML.replace("R$" , "").replace(",",".")
    elementoClicado.classList.add("selec"); 
    elementoClicado.querySelector("ion-icon").classList.add("icon-selec")

    if (document.querySelector(".prato.selec") !== null && document.querySelector(".bebida.selec") !== null && document.querySelector(".sobremesa.selec") !== null ){
    
        const botao = document.querySelector(".pedir")
        const selec = document.querySelector(".selecione")
    
    
        botao.classList.remove("hidden")
        selec.classList.add("hidden")
    }
}


function marcar2(elementoClicado){


    const bebidaSelecionada = document.querySelector(".bebida.selec");
    

    if (bebidaSelecionada !== null  && elementoClicado.classList.contains("bebida")){
    
        
        bebidaSelecionada.classList.remove("selec")
        bebidaSelecionada.querySelector("ion-icon").classList.remove("icon-selec")
    
    
    } 


    nomeBebida = elementoClicado.querySelector(".nome-item").innerHTML
    precoBebida = elementoClicado.querySelector(".preco-item").innerHTML.replace("R$" , "").replace(",",".")
    elementoClicado.classList.add("selec"); 
    elementoClicado.querySelector("ion-icon").classList.add("icon-selec")
    
    if (document.querySelector(".prato.selec") !== null && document.querySelector(".bebida.selec") !== null && document.querySelector(".sobremesa.selec") !== null ){
    
        const botao = document.querySelector(".pedir")
        const selec = document.querySelector(".selecione")
    
    
        botao.classList.remove("hidden")
        selec.classList.add("hidden")
    }
    
}

function marcar3(elementoClicado){

    const sobremesaSelecionada = document.querySelector(".sobremesa.selec");

    if(sobremesaSelecionada !== null && elementoClicado.classList.contains("sobremesa")){

        sobremesaSelecionada.classList.remove("selec")
        sobremesaSelecionada.querySelector("ion-icon").classList.remove("icon-selec")

    }


    nomeSobremesa = elementoClicado.querySelector(".nome-item").innerHTML
    precoSobremesa = elementoClicado.querySelector(".preco-item").innerHTML.replace("R$" , "").replace(",",".")
    elementoClicado.classList.add("selec")
    elementoClicado.querySelector("ion-icon").classList.add("icon-selec")


    if (document.querySelector(".prato.selec") !== null && document.querySelector(".bebida.selec") !== null && document.querySelector(".sobremesa.selec") !== null ){
    
        const botao = document.querySelector(".pedir")
        const selec = document.querySelector(".selecione")
    
    
        botao.classList.remove("hidden")
        selec.classList.add("hidden")
    }
}

function confirmacao(){
    const alert = document.querySelector(".alert.hidden")
    alert.classList.remove("hidden")
    alert.classList.add("animacao")

    let nomePratoFinal = document.querySelector(".nome-prato-final")
    const precoPratoFinal = document.querySelector(".preco-prato-final")
    const nomeBebidaFinal = document.querySelector(".nome-bebida-final")
    const precoBebidaFinal = document.querySelector(".preco-bebida-final")
    const nomeSobremesaFinal = document.querySelector(".nome-sobremesa-final")
    const precoSobremesaFinal = document.querySelector(".preco-sobremesa-final")
    const totalPedido = document.querySelector(".total-pedido")


    nomePratoFinal.innerHTML = nomePrato
    precoPratoFinal.innerHTML = precoPrato
    nomeBebidaFinal.innerHTML = nomeBebida
    precoBebidaFinal.innerHTML = precoBebida
    nomeSobremesaFinal.innerHTML = nomeSobremesa
    precoSobremesaFinal.innerHTML = precoSobremesa
    totalPedido.innerHTML = ("R$ ") + (parseFloat(precoPrato) + parseFloat(precoBebida) + parseFloat(precoSobremesa)).toFixed(2)

    precoPedido = totalPedido.innerHTML

}

function fecharalert(){
    const fecha = document.querySelector(".alert")
    fecha.classList.remove("animacao")
    fecha.classList.add("hidden")
}


function fazerPedido(){
    
    const nome = prompt("Qual seu nome?")
    const endereco = prompt("Qual o endereço de entrega?")

    const celular = "5567992214009"
      
    const texto = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: ${precoPedido}\n\nNome: ${nome}\nEndereço: ${endereco} `
      
    texto = window.encodeURIComponent(texto)
    
    window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank")
        

}