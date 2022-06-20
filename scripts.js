let howMany = prompt(
  "Com quantas cartas você quer jogar? Escolha um numero entre 4 e 14"
);
let gifs = [
  "bobrossparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "metalparrot.gif",
  "revertitparrot.gif",
  "tripletsparrot.gif",
  "unicornparrot.gif",
];
const container = document.querySelector(".allCards");
function comparador() {
  return Math.random() - 0.5;
}
// Right number of cards verification
function verify(howMany) {
  if (Number(howMany) >= 4 && Number(howMany) <= 14) {
    return true;
  }
  false;
}

function isEven(howMany) {
  if (Number(howMany) % 2 === 0) {
    return true;
  }
  return false;
}

function cartasCorretas(howMany) {
  return verify(howMany) && isEven(howMany);
}

function playCards() {
  let cardsFace = [];
  for (let i = 0; i < howMany / 2; i++) {
    cardsFace.push(gifs[i]);
  }
  cardsFace.sort(comparador);

  for (let i = 0; i < cardsFace.length; i++) {
    const card = document.createElement("div");
    const frontCard = document.createElement("img");
    const backCard = document.createElement("img");

    card.classList.add("memoryCard");
    card.onclick = function () {
      turnAround(this);
    };

    frontCard.classList.add("frontCard");
    frontCard.src = "./gifs/front.png";

    backCard.classList.add("backCard");
    backCard.src = `./gifs/${gifs[i]}`;

    card.appendChild(frontCard);
    card.appendChild(backCard);
    container.append(card);
    card.classList.toggle("flip");
  }
}
playCards();

function showCards() {
  while (howMany === null || !cartasCorretas(howMany)) {
    howMany = prompt("Algo deu errado!Digite um numero entre 4 e 14");
  }
  playCards();
}
showCards();

// cards checking
let cardFlip = 0;
let cardOne, cardTwo;

function turnAround(card) {
  card.classList.toggle("flip");
  cardFlip += 1;
}
function beginAgain() {
  cardOne = null;
  cardTwo = null;
}
