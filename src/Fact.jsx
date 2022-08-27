import '../style/style.css';

function Fact({ content, onChange }) {
  return (
    <li>
      <input
        type='checkbox'
        id='factCheckbox'
        onChange={() => onChange()}
        checked={content.read ? true : false}
        className='checkbox'
      />
      <span className={content.read ? 'read' : null}>
        {content.text}
      </span>
    </li>
  );
}

export default Fact;
