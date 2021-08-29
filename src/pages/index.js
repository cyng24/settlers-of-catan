import * as React from "react"
import Board from '../components/Board.jsx'
import Pieces from '../components/Pieces.jsx'
import '../style.css';

function App() {
  return (
    <div>
      <Board />
      <Pieces />
    </div>
  );
}

export default App;
