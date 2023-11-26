import './App.css';
import { Management } from './components/Management';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Management/>
        {/* <Tasks/> */}
      </header>
    </div>
  );
}

export default App;
