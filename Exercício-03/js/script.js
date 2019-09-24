const primeiraSection = document.getElementById("primeira-section");
const sedundaSection = document.getElementById("segunda-section");
const terceiraSection = document.getElementById("terceira-section")

document.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 200){
        primeiraSection.classList.add("vermelha")
    }

    if(document.documentElement.scrollTop >250){
        sedundaSection.classList.add("azul")
    
    }
    if(document.documentElement.scrollTop > 400){
        terceiraSection.classList.add("verde")
    }

});


