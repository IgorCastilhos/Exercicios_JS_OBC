async function imc(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    return Promise.reject("Algum dos parâmetros não é do tipo Number!");
  }
  return weight / (height * height);
}

async function showImc(weight, height) {
  try {
    console.log(`Calculando o IMC para peso ${weight} e altura ${height}`);
    const result = await imc(weight, height);
    console.log(`O resultado do IMC foi de ${result}.`);

    if (result < 18.5) console.log("Situação: Magreza");
    else if (result < 25) console.log("Situação: Normal");
    else if (result < 30) console.log("Situação: Sobrepeso");
    else if (result < 40) console.log("Situação: Obesidade");
    else console.log("Situação: Obesidade grave");
  } catch (error) {
    console.log(error);
  }
}

showImc(92, 1.84);
showImc(45, 1.6);
showImc(45, "text");
