

// Calculos com Botão //
//--------------------//

//var entrada = parseInt(prompt("Digite um numero: ", ""), 10);
//var entrada2 = parseInt(prompt("Digite um numero: ", ""), 10);
var result = 0;

function soma (entrada, entrada2){
    result = Number(entrada + entrada2);
    return calcular();
}

function mult (entrada, entrada2){
    result = entrada * entrada2;
    return calcular();
}

function divid (entrada, entrada2){
    result = entrada / entrada2;
    return calcular();
}

function subt (entrada, entrada2){
    result = entrada - entrada2;
    return calcular();
}

function calcular(){
    document.getElementById("resultado").innerHTML = "Valor da operação é: " +result;
    //alert("Valor da operação é: " +result);
}


// Função para validar Idade //
//---------------------------//

/*
let validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }    
        return validar;
}

let idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
/*

// Basico de Variavel, Date, Lista e Push/Pop //
// -------------------------------------------//

/*
//var nome = prompt("Qual o seu nome?");
var idade = 32;
var idade2 = 100;
var d = new Date();

alert("Data completa: "+d);
alert("Dia do Mes: "+d.getDate());
alert("Mes: "+(d.getMonth()+1));
alert("Dia da semana: "+d.getDay());
alert("Horas: "+d.getHours());
alert("Minutos: "+d.getMinutes());
alert("Segundos: "+d.getSeconds());
//alert("Bem vindo(a) " +nome);
//console.log(nome);
//console.log(idade + idade2);

var lista = ["Alemanha", "Inglaterra", "Escócia"]
lista.push("Polonia");
lista.pop("Inglaterra");

alert(lista);
*/

// Function de Soma e Replace //
// -------------------------- //

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
}


console.log(soma(3, 4));
console.log(setReplace("Vai Japão", "Japão", "Brasil"));
*/