let nomeDoArray = [
  "Maçã", "Banana", "Uva", "Laranja", "Pera",
  "Manga", "Abacaxi", "Melancia", "Kiwi", "Morango",
  "Limão", "Caju", "Acerola", "Goiaba", "Mamão",
  "Pitaya", "Coco", "Amora", "Jabuticaba", "Graviola"];

// A
console.log("Posição 0:", nomeDoArray[0]);
console.log("Posição 7:", nomeDoArray[7]);
console.log("Posição 11:", nomeDoArray[11]);
console.log("Posição 15:", nomeDoArray[15]);
console.log("Posição 18:", nomeDoArray[18]);
console.log("Posição 19:", nomeDoArray[19]); // última válida

// B
console.log("Penúltimo:", nomeDoArray[nomeDoArray.length - 2]);
console.log("Último:", nomeDoArray[nomeDoArray.length - 1]);

// C
console.log("Quantidade:", nomeDoArray.length);

// D
nomeDoArray.push("Carambola");

// E
for (let i = 0; i < nomeDoArray.length; i++) {
  console.log(nomeDoArray[i]);}