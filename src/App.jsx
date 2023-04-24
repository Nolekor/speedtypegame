import useWordGame from "./useWordGame";

function App() {
  const {
    textBoxRef,
    handleChange,
    playerInput,
    isTimeRunning,
    timeRemaining,
    playAgain,
    startGame,
    wordCount,
  } = useWordGame();

  return (
    <div>
      <h1>Speed Typing game</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        name="game-area"
        id="game-area"
        value={playerInput}
        disabled={!isTimeRunning}
      ></textarea>
      <h4>Time remaining: {timeRemaining}</h4>
      {timeRemaining === 0 ? (
        <button onClick={playAgain}>Play Again</button>
      ) : (
        <button onClick={startGame} disabled={isTimeRunning}>
          Start!
        </button>
      )}

      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
