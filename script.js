function marcar(elementoClicado){
    
    console.log(elementoClicado)
    
    const pratoselecionado = document.querySelector(".prato.selec");
    

    if (pratoselecionado !== null  && elementoClicado.classList.contains("prato")){
    
        
        pratoselecionado.classList.remove("selec") 
        pratoselecionado.querySelector("ion-icon").classList.remove("icon-selec")
       
        
    
    
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

    const bebidaselecionada = document.querySelector(".bebida.selec");
    

    if (bebidaselecionada !== null  && elementoClicado.classList.contains("bebida")){
    
        
        bebidaselecionada.classList.remove("selec")
        
    
    
    } 


    elementoClicado.classList.add("selec"); 
    
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


    }

    elementoClicado.classList.add("selec")



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
