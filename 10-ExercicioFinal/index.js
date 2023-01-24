const vagas = [];

function listOffers() {
  // Utilizando o método reduce, cada elemento do array "vagas" é passado através da função callBack que adiciona ao parâmetro "finalText" o índice, o nome da vaga e o "(" + tamanho do array de candidatos + " candidatos\n"
  const offerInText = vagas.reduce(function (finalText, offer, index) {
    // 1. nome da vaga, (x candidatos)
    finalText += index + ". ";
    finalText += offer.name;
    finalText += " (" + offer.candidates.length + " candidatos)\n";
    return finalText;
  }, "");
  // Importante notar que o segundo parâmetro indica que o acumulador "finaltext" começa com uma String vazia.
  alert(offerInText);
}

function novaVaga() {
  const name = prompt(`Insira o nome da vaga: `);
  const description = prompt(`Insira a descrição da vaga: `);
  const limitDate = prompt(`Informe a data limite da vaga (dd/mm/aaaa): `);

  const confirmation = confirm(`
  Deseja criar uma nova vaga com essas informações?
  Nome: ${name}
  Descrição: ${description}
  Data Limite: ${limitDate}`);

  if (confirmation) {
    const newOffer = { name, description, limitDate, candidates: [] };
    vagas.push(newOffer);
    alert(`Vaga criada.`);
  }
}

function displayOffer() {
  const index = prompt(`Informe o índice da vaga que deseja exibir: `);
  // Informar o índice para exibir a vaga correspondente
  const offer = vagas[index];
  // Variável para manipular a vaga. Agora tem como referenciar as propriedades da vaga através dessa variável

  if (index >= vagas.length || index < 0) {
    alert(`Índice inválido`);
    return;
  }
  // Verificação para ver se o índice informado está incluído na lista de vagas

  const candidatesInText = offer.candidates.reduce(function (
    finalText,
    candidate
  ) {
    return finalText + `\n - ${candidate}`;
  },
  "");
  // Variável percorre todo o array de candidatos, inicializa o finalText como uma string vazia e exibe o nome do candidato com "- ${candidate}"

  alert(`Vaga nº ${index}
  Nome: ${offer.name}
  Descrição: ${offer.description}
  Data Limite: ${offer.limitDate}
  Quantidades de candidatos: ${offer.candidates.length}
  Candidatos inscritos: ${candidatesInText}`);
}

function subscribeCandidateToOffer() {
  const name = prompt(`Informe o nome do(a) candidato(a): `);
  // INSERIR O NOME DO CANDIDATO
  const index = prompt(
    `Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever: `
  );
  // INSERIR O ÍNDICE DA VAGA
  const offer = vagas[index];
  // PEGA A OFERTA CERTA DE DENTRO DO ARRAY VAGAS, A PARTIR DO ÍNDICE
  const confirmation = confirm(
    `Deseja inscrever o candidato ${name} na vaga nº ${index}?
    Nome: ${offer.name}
    Descrição: ${offer.description}
    Data Limite: ${offer.limitDate}`
  );
  // PEDE A CONFIRMAÇÃO DA INSCRIÇÃO DO CANDIDATO, PASSANDO O NOME DO CANDIDATO EM SI, O NOME DA VAGA, DESCRIÇÃO E DATA LIMITE.

  if (confirmation) {
    offer.candidates.push(name);
    alert(`Inscrição realizada!`);
  }
  // VERIFICA SE CONFIRMAÇÃO FOR TRUE, DA UM PUSH NO ARRAY CANDIDATOS DENTRO DE VAGAS COM O NOME DO CANDIDATO E EXIBE A MSG;
}

function removeOffer() {
  const index = prompt(`Informe o índice da vaga que deseja excluir: `);
  const offer = vagas[index];

  const confirmation = confirm(
    `Tem certeza que deseja excluir a vaga ${index}?
    Nome: ${offer.name}
    Descrição: ${offer.description}
    Data Limite: ${offer.limitDate}`
  );

  if (confirmation) {
    vagas.splice(index, 1);
    alert(`Vaga excluída!`);
  }
}

function displayMenu() {
  const option = prompt(`Bem-vindo(a) ao Sistema de Vagas de Emprego!
  1. Listar vagas disponíveis
  2. Criar uma nova vaga
  3. Visualizar uma vaga
  4. Inscrever um candidato em uma vaga
  5. Excluir uma vaga
  6. Sair`);
  return option;
}

function execute() {
  let option = "";

  do {
    option = displayMenu();

    switch (option) {
      case "1":
        listOffers();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        displayOffer();
        break;
      case "4":
        subscribeCandidateToOffer();
        break;
      case "5":
        removeOffer();
        break;
      case "6":
        alert(`Saindo...`);
        break;
      default:
        alert(`Opção Inválida!`);
    }
  } while (option !== "6");
}

execute();
