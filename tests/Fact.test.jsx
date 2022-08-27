import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Fact from '../src/Fact';

describe('Fact', () => {
  it('renders correctly', () => {
    const item = { text: 'Was first released in 2013', read: false };

    render(<Fact content={item} />);
    const fact = screen.getByRole('listitem');
    const checkbox = screen.getByRole('checkbox');

    expect(fact.textContent).toBe('Was first released in 2013');
    expect(fact).not.toHaveClass('read');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toHaveClass('checkbox');
  });

  it('has checked box and line through text when read', () => {
    const item = { text: 'Was first released in 2013', read: true };

    render(<Fact content={item} />);

    expect(screen.getByRole('listitem')).toHaveClass('read');
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
