import logo from '../assets/react-logo.png';
import '../style/style.css';
import FactList from './FactList';

function App() {
  return (
    <div id='app'>
      <img src={logo} id='logo' />

      <h1>Fun facts about React</h1>

      <FactList />
    </div>
  );
}

export default App;
