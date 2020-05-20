var test = "var romulo global";
let testeLet = "let romulo global";

(() => {
    var test = "var Romulo funcao";
    console.log(`Valor dentro da função "${test}"`);

    if(true) {
        var test = 'var romulo if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();

(() => {
    let testeLet = "let romulo funcao";
    console.log(`Valor dentro da função com Let "${testeLet}"`);

    if (true) {
        let testeLet = 'let romulo IF';   
        console.log(`Valor dentro do if com let "${testeLet}"`);     
    }

    console.log(`Valor após execução do if com let "${testeLet}"`);
})();