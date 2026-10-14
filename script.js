const personagem = document.querySelector("#personagem");
const obstaculo = document.querySelector("#obstaculo");

const pulo = () => {
  personagem.classList.add("pulo");

  setTimeout(() => {
    personagem.classList.remove("pulo");
  }, 900);
};

const posicoesLoop = setInterval(() => {
  const posicaoObstaculo = obstaculo.offsetLeft;
  console.log(posicaoObstaculo);
  const posicaoPersonagemY = window
    .getComputedStyle(personagem)
    .bottom.replace("px", "");

  if (
    posicaoObstaculo >= -30 &&
    posicaoObstaculo <= 85 &&
    posicaoPersonagemY <= 67
  ) {
    obstaculo.style.animation = "none";
    obstaculo.style.left = `${posicaoObstaculo}px`;

    personagem.style.animation = "none";
  }
}, 1);

document.addEventListener(`keydown`, pulo);
