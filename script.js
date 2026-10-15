const personagem = document.querySelector("#personagem");
const obstaculo = document.querySelector("#obstaculo");

const pulo = () => {
  personagem.classList.add("pulo");

  setTimeout(() => {
    personagem.classList.remove("pulo");
  }, 1000);
};

const posicoesLoop = setInterval(() => {
  const posicaoObstaculo = obstaculo.offsetLeft;
  console.log(posicaoObstaculo);
  const posicaoPersonagemY = window
    .getComputedStyle(personagem)
    .bottom.replace("px", "");

  if (
    posicaoObstaculo >= -50 &&
    posicaoObstaculo <= 155 &&
    posicaoPersonagemY < 134
  ) {
    obstaculo.style.animation = "none";
    obstaculo.style.left = `${posicaoObstaculo}px`;

    personagem.style.animation = "none";
    personagem.style.bottom = `${posicaoPersonagemY}`;
  }
}, 1);

document.addEventListener(`keydown`, pulo);
