let option = "";
do {
  option = prompt(`
    Seja bem-vindo(a)!
    Escolha uma das opções abaixo:
    1 - Opção Um
    2 - Opção Dois
    3 - Opção Três
    4 - Opção Quatro
    5 - Encerrar.`);
  switch (option) {
    case "1":
      alert(`Você escolheu a Opção 1`);
      break;
    case "2":
      alert(`Você escolheu a Opção 2`);
      break;
    case "3":
      alert(`Você escolheu a Opção 3`);
      break;
    case "4":
      alert(`Você escolheu a Opção 4`);
      break;
    case "5":
      alert(`Você escolheu encerrar.`);
      alert(`Encerrando`);
      break;
    default:
      alert(`Opção Inválida!`);
  }
} while (option !== "5");
