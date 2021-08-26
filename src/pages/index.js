import * as React from "react"
import Board from '../components/Board.jsx'
import '../style.css';

function App() {
  return (
    <div>
      <h1 className="align-center">
        Settlers of Catan
      </h1>
      <Board />
    </div>
  );
}

export default App;
