import '../style/style.css';
import logo from '../assets/react-logo.png';
import FactList from './FactList';

function App() {
  return (
    <main id='app'>
      <img src={logo} id='logo' />
      <h1>Fun facts about React</h1>
      <FactList />
    </main>
  );
}

export default App;
