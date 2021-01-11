// OPERADORES LÓGICOS //

// Operador E (and) representado por &&
//------ true se OS 2 operandos forem true ------//

let maiorIdade = true;
let possuiCarteiraTrabalho = true;
let aplicaProva = maiorIdade || possuiCarteiraTrabalho;
console.log(aplicaProva);


// Operador OU (or) representado por ||
//------ true se um dos 2 operandos forem true ------//

let menorIdade = true;
let possuiCarro = false;
let podePreso = menorIdade && possuiCarro;
console.log(podePreso);


// Operador não (not) representado por !
//------ contrario do outro ------//

let precoPao = true;
let precoLeite = false;
let caro = !precoPao
console.log(caro);

let caroTwo = !precoLeite
console.log(caroTwo);
