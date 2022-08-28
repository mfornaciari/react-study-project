import { useState } from 'react';
import Fact from './Fact';
import HideReadButton from './HideReadButton';

function FactList() {
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

  const handleChange = (readFactId) => {
    const updatedFacts = facts.map(fact => {
      return fact.id === readFactId ? { ...fact, read: !fact.read } : fact;
    });
    setFacts(updatedFacts);
  }

  return (
    <>
      <ul>
        {filteredFacts.map(fact =>
          <Fact key={fact.id} fact={fact} onChange={handleChange} />
        )}
      </ul>
      <HideReadButton hideRead={hideRead} onClick={setHideRead} />
    </>
  );
}

export default FactList;
