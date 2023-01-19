let money = parseFloat(prompt(`Informe a quantidade de dinheiro inicial:`));
let option = "";
do {
  option = prompt(`
    Saldo disponível: ${money}
    1 - Adicionar dinheiro
    2 - Remover dinheiro
    3 - Sair`);
  switch (option) {
    case "1":
      money += parseFloat(prompt(`Quanto você deseja adicionar?`));
      break;
    case "2":
      money -= parseFloat(prompt(`Remover dinheiro`));
      break;
    case "3":
      alert(`Saindo...`);
      break;
    default:
      alert(`Opção Inválida!`);
  }
} while (option !== "3");
