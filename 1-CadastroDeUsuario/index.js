const name = prompt("Insira o seu primeiro nome: ");
const lastName = prompt("Insira o seu sobrenome:");
const studyingField = prompt("Insira o seu campo de estudo: ");
const yearOfBirth = prompt("Insira o seu ano de nascimento: ");

const age = 2023 - yearOfBirth;

alert(`Nome: ${name}
Sobrenome: ${lastName}
Campo de estudo: ${studyingField}
Idade: ${age}`);
