const entry1 = prompt("Insira um valor x: ");
const entry2 = prompt("Insira um valor y: ");
const x = parseFloat(entry1);
const y = parseFloat(entry2);
const sum = x + y;
const subtraction = x - y;
const multiplication = x * y;
const divide = x / y;

alert(`Operações dos valores x e y -
Soma: ${sum}
Subtração: ${subtraction}
Multiplicação: ${multiplication}
Divisão: ${divide}`);
