import logo from './logo.svg';
import './App.css';

function App() {

  let goblin = { cr: .25, xp: 50 };

  let enemies = [goblin];

  return (
    <div className="App">
      <header>
        <h1>Build-a-Battle</h1>
        <h2>for Dungeons and Dragons Fifth Edition</h2>
      </header>
      <div id="input"></div>
    </div>
  );
}

export default App;
