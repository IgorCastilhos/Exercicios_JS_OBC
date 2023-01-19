const number = prompt(`Digite um número que você deseja calcular a tabuada: `);
let result = "";
for (let factor = 1; factor <= 20; factor++) {
  // Começa em 1 pq a tabuada deve ser de 1 a 20
  result += `-> ${number} * ${factor} = ${number * factor}\n`;
}
alert(`O resultado da tabuada de número ${number} é:

${result}`);
