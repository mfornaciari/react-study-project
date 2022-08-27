import { useState } from 'react';
import '../style/style.css';
import Fact from './Fact';

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

  const filteredFacts = hideRead ? facts.filter(item => !item.read) : facts;

  const handleFactChange = (itemId) => {
    const newFacts = facts.map(oldItem => {
      if (oldItem.id === itemId) {
        return { ...oldItem, read: !oldItem.read };
      } else {
        return oldItem;
      }
    });
    setFacts(newFacts);
  }

  return (
    <>
      <button onClick={() => setHideRead(!hideRead)}>
        {hideRead ? 'Show read facts' : 'Hide read facts'}
      </button>

      <ul>
        {filteredFacts.map(item =>
          <Fact
            key={item.id}
            content={item}
            onChange={() => handleFactChange(item.id)}
          />
        )}
      </ul>
    </>
  );
}

export default FactList;
