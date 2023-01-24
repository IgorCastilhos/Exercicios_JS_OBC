let option = "";

do {
  option = prompt(`
  Bem-vindo(a) à Calculadora Geométrica!
  Insira qual área você deseja descobrir:

  1. Área do Triângulo (base * altura / 2)
  2. Área do Retângulo (base * altura)
  3. Área do Quadrado (lado²)
  4. Área do Trapézio ((base maior + base menor) * altura / 2)
  5. Área do círculo (pi * raio² (pi = 3.14))
  6. Sair`);

  switch (option) {
    case "1":
      function triangleArea() {
        let base = prompt(`Insira o valor da Base: `);
        let height = prompt(`Insira o valor da Altura: `);
        return (base * height) / 2;
      }
      alert(`A Área do Triângulo é ${triangleArea()}`);
      break;
    case "2":
      function rectangleArea() {
        let base = prompt(`Insira o valor da Base: `);
        let height = prompt(`Insira o valor da Altura: `);
        return base * height;
      }
      alert(`A Área do Retângulo é ${rectangleArea()}`);
      break;
    case "3":
      function squareArea() {
        let side = prompt(`Insira o valor do Lado: `);
        return side * side;
      }
      alert(`A Área do Quadrado é ${squareArea()}`);
      break;
    case "4":
      function trapezeArea() {
        let biggerBase = prompt(`Insira o valor da Base Maior: `);
        let minorBase = prompt(`Insira o valor da Base Menor: `);
        let height = prompt(`Insira o valor da Altura: `);
        return (biggerBase * minorBase * height) / 2;
      }
      alert(`A Área do Trapézio é ${trapezeArea()}`);
      break;
    case "5":
      function circleArea() {
        const pi = 3.14;
        let radius = prompt(`Insira o valor do Raio: `);
        return pi * (radius * radius);
      }
      alert(`A Área do Círculo é ${circleArea()}`);
      break;
    case "6":
      alert(`Saindo...`);
      break;
    default:
      alert(`Opção Inválida!`);
  }
} while (option !== "6");
