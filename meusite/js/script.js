const btn = document.querySelector("#btn")

const usuario = document.querySelector(".usuario").value;

const senha = document.querySelector(".senha").value;


function send(){

const usuario = document.querySelector(".usuario").value;

const senha = document.querySelector(".senha").value;

const preencha = document.querySelector("#preencha")

const sucesso = document.querySelector("#sucesso")


if(usuario.length <1 || senha.length <1){

    preencha.style.display = ('inline')

    setTimeout(() => {

        preencha.style.display = ('none')

        }, 1000);

    return false;
}

if(usuario == "ryan" && senha == "1405" 
|| usuario == "ryan" && senha == "1234"
|| usuario == "ryan" && senha == "4321"
|| usuario == "ryan" && senha == "ryanlindo"
|| usuario == "Ryan" && senha == "wendylinda"
|| usuario == "ryan" && senha == "ryantotoso"){

    sucesso.style.display = ('inline')

    setTimeout(() => {

    location.href = "http://127.0.0.1:5500/home/home.html";

    }, 500);

} else{

    negado.style.display = ('inline')

    setTimeout(() => {

        location.href = "http://127.0.0.1:5500/error/erro.html";

        }, 500);

};


};