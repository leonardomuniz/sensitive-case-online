function caixa_alta(){
    
    const valor = document.getElementById("conteudo");
    
    valor.classList.add("caixa_alta");
    valor.classList.remove("caixa_baixa", "capitalizado" );
};


function caixa_baixa(){
    
    const valor = document.getElementById("conteudo");

    valor.classList.add("caixa_baixa");
    valor.classList.remove("caixa_alta", "capitalizado");
};


function capitalizado(){
    
    const valor = document.getElementById("conteudo");

    valor.classList.add("capitalizado");
    valor.classList.remove("caixa_alta", "caixa_baixa");    
};


function desfazer(){
    
    const valor = document.getElementById("conteudo");

    valor.classList.remove("capitalizado", "caixa_alta", "caixa_baixa");    
};

function copiar(){
    const valor = document.getElementById("conteudo");

    valor.select()
    valor.setSelectionRange(0,9999);
    document.execCommand("copy");
    alert(`Texto copiado !`);
};

function baixar(){
    const ancora = document.getElementById("baixar");
    const valor = document.getElementById("conteudo").value;
    const blob = new Blob([valor], {type:"text/plain"});

    ancora.href = URL.createObjectURL(blob);
};

function tema_escuro(){
    const corpo = document.querySelector("body");
    const icone = document.getElementById("icone");
    const titulo = document.querySelector("h1");
    const sub_titulo = document.querySelector("span");

    if(icone.className === "fas fa-moon"){
        corpo.classList.add("corpo_azul");
        icone.classList.remove("fa-moon");
        icone.classList.add("fa-sun");
        titulo.classList.remove("letra_laranja");
        titulo.classList.add("letra_branca");
        sub_titulo.classList.add("letra_laranja");
 
    } else if (icone.className === "fas fa-sun"){
        corpo.classList.remove("corpo_azul");
        icone.classList.remove("fa-sun");
        icone.classList.add("fa-moon");
        titulo.classList.remove("letra_branca");
        titulo.classList.add("letra_laranja");
        sub_titulo.classList.remove("letra_laranja");
    };

};