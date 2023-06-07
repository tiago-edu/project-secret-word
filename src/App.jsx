import { useCallback, useEffect, useState } from "react";
import "./App.css";
import EndScreen from "./components/EndScreen";
import GameScreen from "./components/GameScreen";
import StartScreen from "./components/StartScreen";
import { wordsList } from "./data/words";

const guessedQtd = 3;
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name); // array pra mudanca de telas
  const [words] = useState(wordsList); //array de palavras do word.js

  const [pickedWord, setPickedWord] = useState(""); // array de palavra selecionada após a randomização
  const [pickedCategory, setPickedCategory] = useState(""); // array de categoria selecionada após a randomização
  const [letters, setLetters] = useState([]); // array de letras
  const [guesses, setGuesses] = useState(guessedQtd); //Array de tentativas
  const [wrongPickedLetters, setWrongPickedLetters] = useState([]); // array de letras erradas (q o usuario ja tentou)
  const [guessedPickedLetters, setGuessedPickedLetters] = useState([]); //array de letras corretas
  const [score, setScore] = useState(0);
  const pickWordAndCategory = useCallback(() => {
    // Crio uma constante "categories" que pega a key do array de words (words.js) obs: essa constante CRIA um array com as keys
    const categories = Object.keys(words);
    // Crio uma constante "category" que randomiza as keys. // (transformo o "categories" em um array que randomiza as Object.keys)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Nesta linha, é criada uma constante chamada word que obtém uma palavra aleatória do array correspondente à categoria selecionada anteriormente.  -> Acesso ao array de palavras usando words[category]
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
        
    // retorno o resultado das constantes.
      
    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    clearLetterStates();
    
    const { word, category } = pickWordAndCategory();

    // Criando o array de letras da palavra randomizada
    let arrayLetter = word.split("");
    // Botando o array em lowerCase pra o programa reconhecer e n dar interferencia caso o usuario digite maiúsculo
    arrayLetter = arrayLetter.map((l) => l.toLowerCase());
    // o "l" nessa funcao tem a funcao de representar cada elemento do array .map. com ele a gente vai poder acessar cada letra individualmente posteriormente

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(arrayLetter);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);
  const game = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // Checando se a letra ja foi utilizada

    if (
      guessedPickedLetters.includes(normalizedLetter) ||
      wrongPickedLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // Botar a letra no quadrado branco ou perder uma chance (acertar x errar)

    if (letters.includes(normalizedLetter)) {
      //aqui a letra ta certa
      setGuessedPickedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      // aqui a letra ta errada
      setWrongPickedLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const endGame = () => {
    setScore(0);
    setGuesses(guessedQtd);
    setGameStage(stages[0].name);
  };

  const clearLetterStates = () => {
    setGuessedPickedLetters([]);
    setWrongPickedLetters([]);
  };
  // se as tentativas acabarem
  useEffect(() => {
    if (guesses === 0) {
      clearLetterStates();
      setGameStage(stages[2].name);

      // resetar todos os estados do game
      // setGuessedPickedLetters([]);
      // setWrongPickedLetters([]);
      // setGuesses(3);
      // setPickedWord("");
      // setPickedCategory("");
      // setLetters([]);
    }
  }, [guesses]);

  // checar Condicao de vitoria
  const uniqueLetters = [...new Set(letters)];
  
  
  useEffect(() => {
    
    
    
    // condicao de vitoria

    


      if (uniqueLetters.length > 0 && guessedPickedLetters.length === uniqueLetters.length) {
      // add pontuacao
      
      setScore((actualScore) => (
        actualScore += 100
      ));


      // start game com nova palavra
      
      startGame()
    }
    

    

    // if(guessedPickedLetters.length <= 0){
    //   setScore(0)
    // } else {
      
    // }
  }, [guessedPickedLetters, letters, startGame]);

  

  return (
    <>
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <GameScreen
          game={game}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedPickedLetters={guessedPickedLetters}
          wrongPickedLetters={wrongPickedLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <EndScreen endGame={endGame} score={score} pickedWord={pickedWord} />}
    </div>
    </>
  );
}

export default App;
