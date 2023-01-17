const nameAttacker = prompt("Insira o nome do personagem atacante: ");
const atkPower = parseFloat(prompt("Insira o poder de ataque do atacante: "));

const nameDefender = prompt("Insira o nome do defensor: ");
let lifePoints = parseFloat(
  prompt("Insira a quantidade de pontos de vida do defensor: ")
);
const defPower = parseFloat(
  prompt("Insira a quantidade de poder de Defesa do Defensor: ")
);
const hasShield = prompt("O defensor possui escudo? (Sim/Não)");

let damageTaken = 0;

if (atkPower > defPower && hasShield === "Não") {
  damageTaken = atkPower - defPower;
} else if (atkPower > defPower && hasShield === "Sim") {
  damageTaken = (atkPower - defPower) / 2;
}

lifePoints -= damageTaken;

alert(`${nameDefender} recebeu ${damageTaken} de dano de ${nameAttacker}.
Nome do atacante: ${nameAttacker}
    Poder de ataque: ${atkPower}

Nome do defensor: ${nameDefender}
    Poder de defesa: ${defPower}
    Pontos de vida: ${lifePoints}
`);
