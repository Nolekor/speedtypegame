import { useState, useRef, useEffect } from "react";

function useWordGame(startingTime = 10) {
  const [playerInput, setPlayerInput] = useState("");
  const [timeRemaining, setTimerRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => setTimerRemaining((time) => time - 1), 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
      setWordCount(calculateCountWords(playerInput));
    }
  }, [timeRemaining, isTimeRunning]);

  function handleChange(event) {
    setPlayerInput(event.target.value);
  }

  function calculateCountWords(text) {
    const arrWords = text.trim().split(" ");
    return arrWords.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function playAgain() {
    setWordCount(0);
    setTimerRemaining(startingTime);
    setPlayerInput("");
  }

  return {
    textBoxRef,
    handleChange,
    playerInput,
    isTimeRunning,
    timeRemaining,
    playAgain,
    startGame,
    wordCount,
  };
}
export default useWordGame;
