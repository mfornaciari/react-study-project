import '../style/style.css';

function Fact({ fact, onCheckboxChange }) {
  return (
    <li className={fact.read ? 'read' : null}>
      <input
        type='checkbox'
        className='checkbox'
        checked={fact.read}
        onChange={() => onCheckboxChange(fact.id)}
      />
      {fact.text}
    </li>
  );
}

export default Fact;
