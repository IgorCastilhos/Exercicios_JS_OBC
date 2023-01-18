const nameOfTourist = prompt("Digite o nome do turista: ");
// Pega o nome do turista
let cities = "";
// Cria uma variável que armazena as cidades
let count = 0;
// Cria uma variável que faz a contagem de cidades
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)? ");
// Variável que define se o 'while' deve continuar ou não~

while (continuar === "Sim") {
  // Enquanto o continue for "Sim"
  let city = prompt("Insira o nome da cidade visitada: ");
  // cidades = cidades + cidade
  cities += " - " + city + "\n";
  count++;
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)? ");
}

alert(`${nameOfTourist} visitou ${count}, sendo elas:
${cities}`);
