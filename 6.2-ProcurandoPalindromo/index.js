// Iterando metade da string e verificando se o caractere é diferente da outra metade, caso seja True, ele retorna false e encerra o loop for

// function checkPalindrome(string) {
//   const len = string.length;
//   // loop through half of the string
//   for (let i = 0; i < len / 2; i++) {
//     // check if first and last string are same
//     if (string[i] !== string[len - 1 - i]) {
//       return `Não é um Palíndromo`;
//     }
//   }
//   return `É um Palíndromo`;
// }
// const string = prompt(`Insira uma string: `);
// const word = checkPalindrome(string);
// console.log(word);

const word = prompt("Informe uma palavra: ");
let invertedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  // macarrao = o a r r a c a m (-1 pra começar do final da string)
  // até chegar em 0
  // i-- pq eu quero diminuir 1 do índice, começando do 7, indo pro 6 até o 0
  // o[7], a[6], r[5], r[4], a[3], c[2], a[1], m[0]
  invertedWord += word[i];
}
if (word === invertedWord) {
  alert(`${word} é um palíndromo!`);
  // ovo === ovo
} else {
  alert(`${word} não é um palíndromo!\n\n ${word} !== ${invertedWord}`);
  // macarrao !== oarracam
}
