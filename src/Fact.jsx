import '../style/style.css';

function Fact({ content, onChange }) {
  return (
    <li className={content.read ? 'read' : null}>
      <input
        type='checkbox'
        onChange={() => onChange()}
        checked={content.read ? true : false}
        className='checkbox'
      />
      {content.text}
    </li>
  );
}

export default Fact;
