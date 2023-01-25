function addPlayer() {
  /* 
    Seleciona os elementos do documento HTML (position, name e number)
  */
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  /* 
    Confirm pergunta ao usuário se ele deseja escalar o jogador
  */
  const confirmation = confirm(`Escalar ${name} como ${position}?`);

  /*
    Verifica SE a confirmação for True, cria um elemento 'li', que recebe:
    id 'player- ${number}',
    innerText '${position}: ${name} (${number})' 
    e então acrescenta o elemento Child 'playerItem' à teamList. 
    Ao final, limpamos todos os valores dos inputs 'position, name e number'.
  */
  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const playerItem = document.createElement("li");
    playerItem.id = `player- ${number}`;
    playerItem.innerText = `${position}: ${name} (${number})`;
    teamList.appendChild(playerItem);

    document.getElementById(`position`).value = "";
    document.getElementById(`name`).value = "";
    document.getElementById(`number`).value = "";
  }
}

function removePlayer() {
  /*
    Seleciona o nº do jogador que deseja remover 'numberToRemove'.
    Seleciona o elemento li usando a variável playerToRemove com o id do elemento 'li' 'player- ${number}'.
    Pede uma confirmação. Se for True, o elemento 'li' em playerToRemove utiliza o método remove() 
    e ao final apagamos os valores nos inputs.
  */
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById(`player- ${number}`);

  const confirmation = confirm(
    `Remover o jogador ${playerToRemove.innerText}?`
  );

  if (confirmation) {
    playerToRemove.remove();
    document.getElementById("numberToRemove").value = "";
  }
}
