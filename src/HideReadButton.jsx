function HideReadButton({ hideRead, onClick }) {
  return (
    <button onClick={() => onClick(!hideRead)}>
      {hideRead ? 'Show read facts' : 'Hide read facts'}
    </button>
  );
}

export default HideReadButton;
