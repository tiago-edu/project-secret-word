import React from "react";
import "./StartScreen.css";
const StartScreen = ({ startGame }) => {
  return (
    <>
    <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="start-screen">
      {/* background */}
      
      {/* main */}
      <h1>Seja Bem-vindo! 😉</h1>
      <h3>Olá a todos! Hoje vou apresentar um jogo emocionante chamado Secret Word. Talvez alguns de vocês já tenham ouvido falar, mas para aqueles que não conhecem, vou explicar tudo em detalhes.
O Secret Word é um jogo online viciante que desafia suas habilidades de adivinhação de palavras. É um jogo simples, mas muito divertido! Nele, você tem a oportunidade de testar seu vocabulário e dedução para descobrir uma palavra secreta.</h3>
      <h4>Agora, vamos às regras do jogo:</h4>
      <ul>
        <li>No início, uma palavra é selecionada aleatoriamente pelo jogo.</li>
        <li>Você terá 3 tentativas para adivinhar a palavra correta.</li>
        <li>Cada vez que você fizer uma tentativa, o jogo fornecerá um feedback sobre a sua adivinhação.</li>
        <li>O feedback é dado em duas partes: letras corretas serão preenchidas no espaços disponíveis, enquanto as letras erradas estarão visíveis para saber quais você já tentou.</li>
        <li>Com base nesse feedback, você deve analisar e ajustar suas próximas tentativas para chegar mais perto da palavra secreta.</li>
        <li>Lembre-se de que você tem um número limitado de tentativas para acertar a palavra. Portanto, use sua estratégia com sabedoria!</li>
        <li>O objetivo final é adivinhar corretamente a palavra oculta usando o menor número possível de tentativas.</li>
      </ul>
      
      <div class="container">
    <div class="center">
      <button class="btn" onClick={startGame}>
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Jogar!</span>
      </button>
    </div>
    </div>
    
  </div>
    </>
      
  );
};

export default StartScreen;
