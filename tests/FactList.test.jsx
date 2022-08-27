import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FactList from '../src/FactList';


describe('FactList', () => {
  it('renders correctly', () => {
    render(<FactList />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(4);
  });

  it('marks fact as read when checkbox is clicked', () => {
    render(<FactList />);
    const fact = screen.getAllByRole('listitem')[0];
    const checkbox = fact.firstChild;

    fireEvent.click(checkbox);

    expect(fact).toHaveClass('read');
  });
});
