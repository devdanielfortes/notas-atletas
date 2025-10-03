let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMedias(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b); // Ordena sem alterar as notas originais
    
    let notasComputadas = notasOrdenadas.slice(1, 4); // Remove a menor e a maior nota

    let soma = 0;
    notasComputadas.forEach(function(nota) {
      soma += nota;
    });

    let media = soma / notasComputadas.length;

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${media.toFixed(5)}\n`);
  }
}

calcularMedias(atletas);
