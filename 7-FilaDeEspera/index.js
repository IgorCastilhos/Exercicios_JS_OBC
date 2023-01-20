let row = [];
let option = "";

do {
  let pacients = "";
  for (let i = 0; i < row.length; i++) {
    pacients += i + 1 + "º - " + row[i] + "\n";
  }

  option = prompt(`Pacientes na fila: ${pacients}
  1. Novo Paciente
  2. Consultar paciente
  3. Sair
  `);

  switch (option) {
    case "1":
      let newPacient = prompt(
        `Digite o nome do paciente que você deseja adicionar: `
      );
      row.push(newPacient);
      alert(`Paciente adicionado na fila: ${newPacient}`);
      break;
    case "2":
      const consultedPacient = row.shift();
      if (consultedPacient) {
        alert(`Paciente consultado: ${consultedPacient} foi removido da fila`);
      } else {
        alert(`Não há pacientes na fila!`);
      }
      break;
    case "3":
      alert(`Saindo...`);
      break;
    default:
      alert(`Opção Inválida!`);
  }
} while (option !== "3");
