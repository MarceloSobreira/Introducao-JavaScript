var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000){
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";   
    }
    if(altura <= 0 || altura >= 3.5){
        alturaValida = false;
        tdImc.textContent = "Altura Inválida!";    
    }

    if(pesoValido && alturaValida){
        tdImc.textContent = calculaImc(peso, altura);
    }else {
        tdImc.textContent = "Altura e/ou Peso inválidos";
        paciente.classList.add("paciente-invalido");
    }
}

function calculaImc (peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}





