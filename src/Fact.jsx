import '../style/style.css';

function Fact ({content, onChange}) {
  return (
    <li>
      <input
        type='checkbox'
        id='factCheckbox'
        onChange={() => onChange()}
        checked={content.read ? true : false}
        className='checkbox'
      />
      <label htmlFor='factCheckbox' className={content.read ? 'read' : null}>
        {content.text}
      </label>
    </li>
  );
}

export default Fact;
