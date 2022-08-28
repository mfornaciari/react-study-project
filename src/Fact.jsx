import '../style/style.css';

function Fact({ fact, onChange }) {
  return (
    <li className={fact.read ? 'read' : null}>
      <input
        type='checkbox'
        className='checkbox'
        checked={fact.read}
        onChange={() => onChange(fact.id)}
      />
      {fact.text}
    </li>
  );
}

export default Fact;
