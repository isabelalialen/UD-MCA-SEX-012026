let carros = [{ nome: "Onix", preco: 75000, estoque: 5 },
  { nome: "HB20", preco: 80000, estoque: 3 },
  { nome: "Corolla", preco: 130000, estoque: 7 },
  { nome: "Civic", preco: 145000, estoque: 2 },
  { nome: "Gol", preco: 65000, estoque: 10 },
  { nome: "Polo", preco: 90000, estoque: 4 },
  { nome: "Jetta", preco: 120000, estoque: 6 },
  { nome: "Cruze", preco: 110000, estoque: 1 },
  { nome: "Argo", preco: 70000, estoque: 8 },
  { nome: "Tracker", preco: 150000, estoque: 9 }];

// A
console.log("Preço do segundo:", carros[1].preco);

// B
console.log("Nome do terceiro:", carros[2].nome);

// C
console.log("Quantidade:", carros.length);

// D
for (let i = 0; i < carros.length; i++) {console.log(carros[i].nome);}

// E
let soma = 0;
for (let i = 0; i < carros.length; i++) {soma += carros[i].estoque;}
console.log("Total estoque:", soma);

// F
let maior = carros[0];

for (let i = 1; i < carros.length; i++) {if (carros[i].estoque > maior.estoque) {maior = carros[i];}}

console.log("Maior estoque:", maior.nome)