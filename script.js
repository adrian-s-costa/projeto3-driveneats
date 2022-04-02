function marcar(elementoClicado){
    
    console.log(elementoClicado)
    
    const pratoselecionado = document.querySelector(".selec");
    
    if (pratoselecionado !== null  && elementoClicado.classList.contains("prato")){
    
        
        pratoselecionado.classList.remove("selec") 
        
    
    
    } 

    elementoClicado.classList.add("selec"); 

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



