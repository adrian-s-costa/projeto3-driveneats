function marcar(elementoClicado){
    const prato = document.querySelector(".selec");
    
    if (prato !== null){
    
        
        prato.classList.remove("selec") 
        
    
    
    } 
    
    elementoClicado.classList.add("selec"); 
    
    
}

