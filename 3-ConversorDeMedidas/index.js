let valueInMeters = parseFloat(prompt("Insira um valor em metros: "));

const unitOfMeasurement = prompt(`
Para qual unidade de medida deseja converter?
1 - milímetros (mm)
2 - centímetros (cm)
3 - decímetros (dm)
4 - decâmetros (dam)
5 - hectômetro (hm)
6 - quilômetro (km)`);

switch (unitOfMeasurement) {
  case "1":
    alert(`Resultado: ${(valueInMeters *= 1000)} mm`);
    break;
  case "2":
    alert(`Resultado: ${(valueInMeters *= 100)} cm`);
    break;
  case "3":
    alert(`Resultado: ${(valueInMeters *= 10)} dm`);
    break;
  case "4":
    alert(`Resultado: ${(valueInMeters /= 10)} dam`);
    break;
  case "5":
    alert(`Resultado: ${(valueInMeters /= 100)} hm`);
    break;
  case "6":
    alert(`Resultado: ${(valueInMeters /= 1000)} km`);
    break;
  default:
    alert("Opção inválida!");
}
