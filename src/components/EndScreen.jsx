import React from 'react'
import './EndScreen.css'

const EndScreen = ({endGame, score}) => {
  return (
    <div className='white-container'>
      <h1>Game Over</h1>
      <h4 className="points">Sua pontuação foi de: {score} pontos </h4>

      {score === 0 && <p>Às vezes, o Secret Word pode ser realmente desafiador. Nem sempre conseguimos acertar a palavra secreta dentro do limite de tentativas. Mas não se preocupe, você pode jogar novamente! O Secret Word é uma ótima maneira de expandir seu vocabulário e exercitar seu pensamento lógico. Continue jogando, aproveite cada partida e verá sua habilidade melhorando gradualmente. Estou torcendo por você!</p>}
      {(score >= 100 && score <= 500) && <p>Não se preocupe, o Secret Word é um jogo desafiador que requer prática e persistência. Mesmo que sua pontuação não tenha sido alta desta vez, não desanime. Cada partida é uma oportunidade de aprendizado. Analise suas estratégias, expanda seu vocabulário e tente novamente. Estou confiante de que com dedicação, você alcançará resultados melhores. Continue se divertindo e aprimorando suas habilidades no Secret Word!</p>}
      {(score >= 600 && score <= 1000) && <p>Parabéns! Você conquistou uma pontuação respeitável no Secret Word. Sua dedicação e habilidade em decifrar as palavras ocultas estão evidentes. Continue praticando e explorando diferentes estratégias para aperfeiçoar suas habilidades no jogo. Com determinação e um pouco mais de prática, você certamente alcançará pontuações ainda melhores. Continue se divertindo e superando seus próprios recordes no Secret Word!</p>}
      {score > 1000 && <p>Incrível! Você mostrou um incrível domínio das palavras. Sua pontuação alta no Secret Word é um verdadeiro testemunho das suas habilidades linguísticas e sua capacidade de dedução. Continue assim e desafie-se ainda mais para alcançar pontuações ainda mais altas. Você é um verdadeiro mestre do Secret Word!</p>}

      <button className="btn" onClick={endGame}>Jogar novamente!</button>
    </div>
  )
}

export default EndScreen