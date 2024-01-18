/* Vetor para armazenar todos os emojis */
/* Dica - Teclas windows . abrem o teclado de emojis e gifs */
const emojis = [
  "🐶",
  "🐶",
  "🏀",
  "🏀",
  "😎",
  "😎",
  "🍔",
  "🍔",
  "🥓",
  "🥓",
  "🤓",
  "🤓",
  "🔥",
  "🔥",
  "💧",
  "💧",
];

/* Vetor para armazenar as cartas selecionadas */
let openCards = [];

/* Gerar aleatoriedade definindo vários elementos definidos por dois pesos diferentes */
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

/* Desenhar os elementos na tela */
for (let i = 0; i < emojis.length; i++) {
  /* Para cada elemento do vetor emoji, cria uma variável box que diz respeito à uma div */
  let box = document.createElement("div");

  /* Atribui essa div à classe item */
  box.className = "item";

  /* Atribui a essa div um emoji sorteado na posição do contador */
  box.innerHTML = shuffleEmojis[i];

  /* Evento de clique que chama a função handleClick */
  box.onclick = handleClick;

  /* Adiciona essa div como filha da div game */
  document.querySelector(".game").appendChild(box);
}

/* Função que verifica as cartas viradas para guardar no vetor openCards */
function handleClick() {
  /* Verifica se tem menos de duas cartas abertas */
  if (openCards.length < 2) {
    /* Adiciona a classe boxOpen na carta */
    this.classList.add("boxOpen");

    /* Adiciona a carta ao vetor openCards */
    openCards.push(this);
  }

  /* Compara se as cartas são iguais somente se tiver duas cartas no vetor openCards */
  if (openCards.length == 2) {
    /* Chama a função verificadora checkMatch no intervalo de 500ms */
    setTimeout(checkMatch, 500);
  }
}

/* Função que verifica se as duas cartas abertas são iguais */
function checkMatch() {
  /* Compara o innerHTML dos dois elementos do vetor openCards */
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    /* Adiciona em ambos os elementos a classe boxMatch */
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    /* Remove a classe boxOpen de ambos os elementos */
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  /* Zera o vetor openCards */
  openCards = [];

  /* Verifica a quantidade de cartas viradas com o tamanho do vetor emojis e define a vitória */
  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("🏆 Você venceu!! 🏆");
  }
}
