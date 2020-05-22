// OBJECT //

let user = {
    name: 'Guilherme'
};

// Alterando a propriedade de um objeto
console.log(user);

user.name = 'Outro nome 1';
console.log(user);

user['name'] = 'Outro nome 2';
console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

// Criando uma propriedade
user.lastName = "Cabrini da Silva";
console.log(user);

//Deletando uma propriedade
delete user.name;
console.log(user);

const newUser = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
}

// Recupera as chaves do objeto
console.log('\n Propriedades do objeto user: ', Object.keys(newUser));

// Recupera os valores das chaves do objeto
console.log('Valores das propriedades do objeto user: ', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('Lista de propriedades e valores: ', Object.defineProperties(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Guilherme Cabrini da Sila'});

console.log('Adiciona a propriedade fullName no objeto user', user);
console.log('Retorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age:26}));

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;

console.log('Variável newObj após as alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Guilherme' };
Object.seal(person);

person.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('Variável person após as alterações:', person);