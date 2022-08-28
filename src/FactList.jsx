import Fact from './Fact';

function FactList({ facts, onCheckboxChange }) {
  return (
    <ul>
      {facts.map(fact =>
        <Fact key={fact.id} fact={fact} onCheckboxChange={onCheckboxChange} />
      )}
    </ul>
  );
}

export default FactList;
