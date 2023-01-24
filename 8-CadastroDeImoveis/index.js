let imoveis = [];
let option = "";

do {
  option = prompt(`Bem-Vindo(a) ao Cadastro de Imóveis! 
  Quantidade de imoveis: ${imoveis.length}
  Escolha uma opção:
  1. Salvar um novo imóvel
  2. Mostrar todos os imóveis
  3. Sair`);

  switch (option) {
    case "1":
      const imovel = {};
      imovel.owner = prompt(`Digite o nome do proprietário: `);
      imovel.bedrooms = prompt(`Digite a quantidade de quartos no imóvel: `);
      imovel.bathrooms = prompt(`Digite a quantidade de banheiros no imóvel: `);
      imovel.garage = prompt(`O imóvel possui garagem? (Sim/Não) `);

      const confirmation = confirm(`Salvar este imóvel?
      Proprietário: ${imovel.owner}
      Quartos: ${imovel.bedrooms}
      Banheiros: ${imovel.bathrooms}
      Possui garagem? ${imovel.garage}`);
      if (confirmation) {
        imoveis.push(imovel);
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(`Imóvel ${i + 1}
        Proprietário: ${imoveis[i].owner}
        Quartos: ${imoveis[i].bedrooms}
        Banheiros: ${imoveis[i].bathrooms}
        Possui garagem? ${imoveis[i].garage}`);
      }
      break;
    case "3":
      alert(`Saindo...`);
      break;
    default:
      alert(`Opção Inválida!`);
  }
} while (option !== "3");
