function App() {
  return (
    <>
      <h1>Speed Typing game</h1>
      <textarea
        name="game-area"
        id="game-area"
        cols="30"
        rows="10"
        value=""
      ></textarea>
      <h4>Time remaining</h4>
      <button>Start!</button>
      <h1>Word Count</h1>
    </>
  );
}

export default App;
