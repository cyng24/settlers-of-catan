import Board from './components/Board.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        Game Components
• 6 sea frame pieces
• 9 harbor pieces
• 95 resource cards (bearing the symbols for the brick, 
grain, lumber, ore, and wool resources)
• 25 development cards (14 knight cards,  
6 progress cards, 5 victory point cards)
• 4 “Building Costs” cards
• 2 special cards: “Longest Road” & “Largest Army”
• 16 cities (4 of each color, shaped like churches)
• 20 settlements (5 of each color, shaped like houses)
• 60 roads (15 of each color, shaped like bars)
• 2 dice (1 yellow, 1 red)
• 1 robber
      </header>
      <Board />
    </div>
  );
}

export default App;
