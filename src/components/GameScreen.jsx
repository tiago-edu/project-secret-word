import React, { useState, useRef } from "react";
import "./GameScreen.css";

const GameScreen = ({
  game,
  pickedCategory,
  wrongPickedLetters,
  guessedPickedLetters,
  letters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState();
  const refLetter = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    game(letter);
    setLetter("");
    refLetter.current.focus();
  };
  return (
    <div className="white-container">
      <div className="game">
        <h1>Secret Word</h1>
        <h4 className="points">Pontos: {score}</h4>

        {pickedCategory === "Computador" && (
          <h3 className="tip">Dica: {pickedCategory} 💻</h3>
        )}
        {pickedCategory === "Carro" && (
          <h3 className="tip">Dica: {pickedCategory} 🚘</h3>
        )}
        {pickedCategory === "Fruta" && (
          <h3 className="tip">Dica: {pickedCategory} 🍉</h3>
        )}
        {pickedCategory === "Programação" && (
          <h3 className="tip">Dica: {pickedCategory} 👨‍💻</h3>
        )}
        {pickedCategory === "Alimento" && (
          <h3 className="tip">Dica: {pickedCategory} 🥗</h3>
        )}
        {pickedCategory === "Corpo" && (
          <h3 className="tip">Dica: {pickedCategory} 💪</h3>
        )}

        {guesses === 1 ? (
          <p>Lhe resta {guesses} tentativa</p>
        ) : (
          <p>Lhe restam {guesses} tentativas</p>
        )}

        <div className="wordContainer">
          {/*|  letters é uma lista de letras que queremos mostrar de alguma forma. */}
          {/*|  map() é uma função que vai percorrer cada elemento da lista letters e realizar uma ação para cada um. */}
          {/*|  letter é uma variável que representa cada elemento da lista letters enquanto o map() vai percorrendo. */}
          {/*|  i é uma variável que representa a posição de cada elemento na lista letters */}
          {/*|  guessedPickedLetters é outra lista que contém algumas letras que já foram escolhidas ou adivinhadas. */}
          {/*|  includes() é uma função que verifica se um elemento está presente na lista em que ela é chamada */}
          {/*|  O código verifica se a lista guessedPickedLetters inclui a letter atual (a letra atual que o map() está percorrendo). */}
          {/*|  Se a letter estiver presente em guessedPickedLetters, isso significa que ela foi adivinhada ou escolhida. */}
          {/*|  Nesse caso, é criado um elemento <span> com a classe "letter" e o conteúdo é a própria letter. */}
          {/*|  Caso contrário, ou seja, se a letter não estiver presente em guessedPickedLetters, é criado um elemento <span> com a classe "blankSquare", que representa um espaço em branco. */}
          {/*↓  Resumindo, esse código percorre cada elemento da lista letters. Se uma letra já foi adivinhada e está presente na lista guessedPickedLetters, ela é mostrada com um estilo especial dentro de um elemento <span>. Caso contrário, é mostrado um espaço em branco dentro de um elemento <span>. */}

          {/* Nessa, você olha cada letra da lista uma por uma. Se a letra estiver em outra lista chamada "letrasAdivinhadas", você mostra essa letra com uma cor especial. Caso contrário, você mostra um espaço em branco.*/}
          {letters.map((letter, i) =>
            guessedPickedLetters.includes(letter) ? (
              <span key={i} className="letter">
                {letter}
              </span>
            ) : (
              <span key={i} className="blankSquare"></span>
            )
          )}
          {/* Nessa, você faz a mesma coisa. Olha cada letra da lista uma por uma. Se a letra estiver na lista "letrasAdivinhadas", você mostra a letra com uma cor especial. Caso contrário, você também mostra a letra, mas sem cor especial. */}
          {/* {letters.map((letter, i) => (guessedPickedLetters.includes(letter) ? (<span key={i} className="letter">{letter}</span>):(<span key={i} className="blankSquare"></span>)))} */}

          {/*  */}
        </div>
        <div className="letterContainer">
          <p>Advinhe a letra da palavra: </p>
          <form onSubmit={handleSubmit}>
            <input
              className="formLetter"
              type="text"
              name="letter"
              maxLength="1"
              required
              onChange={(e) => setLetter(e.target.value)}
              pattern="[A-Za-z + ç + ê + é + ã + ô]"
              value={letter || ""}
              ref={refLetter}
            />

            <button className="btn">
              <span>Advinhar!</span>
            </button>
          </form>
        </div>
        <div className="wrongLettersContainer">
          {wrongPickedLetters.length >= 1 && <span>Letras erradas: </span>}
          {wrongPickedLetters.map((letters, i) => (
            <>
            
            <span key={i} className="wrongPickedLetters">
              {letters},
            </span>
            
            </>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
