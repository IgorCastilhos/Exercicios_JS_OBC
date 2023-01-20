let deck = [];
let option = "";

do {
  let cards = "";
  for (let i = 0; i < deck.length; i++) {
    cards += i + 1 + "º - " + deck[i] + "\n";
  }

  option = prompt(
    `Quantidade de cartas no baralho: ${deck.length}
    1. Adicionar uma carta
    2. Puxar uma carta
    3. Sair`
  );

  switch (option) {
    case "1":
      const newCard = prompt(
        `Digite o nome da carta que você deseja adicionar`
      );
      deck.unshift(newCard);
      break;
    case "2":
      const pullCard = deck.shift();
      if (!pullCard) {
        alert(`Não há cartas no baralho!`);
      } else {
        alert(`Carta puxada: ${pullCard}`);
      }
      break;
    case "3":
      alert(`Saindo...`);
      break;
    default:
      alert(`Opção Inválida!`);
  }
} while (option !== "3");
