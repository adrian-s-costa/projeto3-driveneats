function marcar(elementoClicado){
    
    console.log(elementoClicado)
    
    const pratoSelecionado = document.querySelector(".prato.selec");
    

    if (pratoSelecionado !== null  && elementoClicado.classList.contains("prato")){
    
        
        pratoSelecionado.classList.remove("selec") 
        pratoSelecionado.querySelector("ion-icon").classList.remove("icon-selec")
       
        
    
    
    } 

    

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

    console.log(elementoClicado)

    const bebidaSelecionada = document.querySelector(".bebida.selec");
    

    if (bebidaSelecionada !== null  && elementoClicado.classList.contains("bebida")){
    
        
        bebidaSelecionada.classList.remove("selec")
        bebidaSelecionada.querySelector("ion-icon").classList.remove("icon-selec")
    
    
    } 


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
}

function fecharalert(){
    const fecha = document.querySelector(".alert")
    fecha.classList.add("hidden")
}
