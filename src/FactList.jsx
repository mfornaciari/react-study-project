import { useEffect, useState } from 'react';
import Fact from './Fact';
import HideReadButton from './HideReadButton';

function FactList() {
  const [facts, setFacts] = useState([]);
  const [hideRead, setHideRead] = useState(false);

  const filteredFacts = hideRead ? facts.filter(fact => !fact.read) : facts;

  const handleChange = (readFactId) => {
    const updatedFacts = facts.map(fact => {
      return fact.id === readFactId ? { ...fact, read: !fact.read } : fact;
    });
    setFacts(updatedFacts);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://run.mocky.io/v3/20048106-9506-46bb-82ac-9465296402b2');
      const jsonResponse = await response.json();
      const data = jsonResponse.facts.map(fact => ({ ...fact, read: false }));
      setFacts(data);
    }
    fetchData();
  }, []);

  if (facts.length === 0) { return <p>Loading, please wait...</p> }
  return (
    <>
      <ul id='fact-list'>
        {filteredFacts.map(fact =>
          <Fact key={fact.id} fact={fact} onChange={handleChange} />
        )}
      </ul>
      <HideReadButton hideRead={hideRead} onClick={setHideRead} />
    </>
  );
}

export default FactList;
