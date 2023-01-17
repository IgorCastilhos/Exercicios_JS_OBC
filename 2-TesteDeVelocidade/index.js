const vehicle1 = prompt("Insira o nome do veículo 1: ");
const velocityVehicle1 = prompt("Insira a velocidade do veículo 1: ");
const velocity1 = parseFloat(velocityVehicle1);

const vehicle2 = prompt("Insira o nome do veículo 2: ");
const velocityVehicle2 = prompt("Insira a velocidade do veículo 2: ");
const velocity2 = parseFloat(velocityVehicle2);

if (velocity1 > velocity2) {
  alert(`${vehicle1} é mais rápido do que o ${vehicle2}`);
} else if (velocity2 > velocity1) {
  alert(`${vehicle2} é mais rápido do que o ${vehicle1}`);
} else {
  alert(`${vehicle1} tem a mesma velocidade que o ${vehicle2}`);
}
