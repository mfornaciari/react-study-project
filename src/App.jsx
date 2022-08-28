import { useState } from 'react';
import '../style/style.css';
import logo from '../assets/react-logo.png';
import FactList from './FactList';
import HideReadButton from './HideReadButton';

function App() {
  const [facts, setFacts] = useState(
    [
      { id: 0, text: 'Was first released in 2013', read: false },
      { id: 1, text: 'Has well over 100K stars on Github', read: false },
      { id: 2, text: 'Is maintained by Facebook', read: false },
      { id: 3, text: 'Powers thousands of enterprise apps, including mobile apps', read: false }
    ]
  );
  const [hideRead, setHideRead] = useState(false);

  const filteredFacts = hideRead ? facts.filter(fact => !fact.read) : facts;

  const handleCheckboxChange = (factId) => {
    const newFacts = facts.map(oldFact => {
      return oldFact.id === factId ? { ...oldFact, read: !oldFact.read } : oldFact;
    });
    setFacts(newFacts);
  }

  return (
    <main id='app'>
      <img src={logo} id='logo' />
      <h1>Fun facts about React</h1>
      <FactList facts={filteredFacts} onCheckboxChange={handleCheckboxChange} />
      <HideReadButton hideRead={hideRead} onClick={setHideRead} />
    </main>
  );
}

export default App;
