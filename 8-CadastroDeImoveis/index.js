let imoveis = [];
let option = "";

do {
  let imovel = "";
  for (let i = 0; i < imoveis.length; i++) {
    imovel += i + 1 + "º - " + imoveis[i] + "\n";
  }

  option = prompt(
    `Quantidade de imoveis: ${imoveis.length}
    1. Salvar um novo imóvel
    2. Mostrar todos os imóveis
    3. Sair`
  );

  switch (option) {
    case "1":
      const newImovel = prompt(
        `Digite o nome da carta que você deseja adicionar`
      );
      imoveis.unshift(newImovel);
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
