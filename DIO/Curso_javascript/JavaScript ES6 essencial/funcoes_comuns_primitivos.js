// STRINGS //

// Declara string
const text = 'Texto';
console.log(`Declarando uma variável: ${text}`);

// Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um Array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('Array com as posições separadas pelo delimitador: ', splittedText);

// Busca por u valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('Substituição de um valor: ', replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('Última letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('Valor da primeira letra até a penúltima: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('Valor da segunda letra até a última: ', secondToEnd);

// Retorna N caracteres a partir de uma posição.
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('As duas letras primeiras são: ', twoCharsBeforeFirstPos);


// NUMEROS //

const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('Numero com duas casas decimais: ', fixedTwoDecimals);

// Transforma uma string em float
console.log('String paseada para float: ', parseFloat('13.22'));

// Transforma uma string em int
console.log('String parseada em int: ', parseInt('13.20'));