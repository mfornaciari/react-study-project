import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Fact from '../src/Fact';

describe('Fact', () => {
  it('has the correct text and styles', () => {
    const item = { text: 'Was first released in 2013' };

    const { getByRole } = render(<Fact content={item} />);
    const span = getByRole('listitem').lastChild;
    const checkbox = getByRole('checkbox');

    expect(span).toHaveTextContent('Was first released in 2013');
    expect(checkbox).toHaveClass('checkbox');
  });

  it('has checked box and line through text when read', () => {
    const item = { read: true };

    const { getByRole } = render(<Fact content={item} />);
    const checkbox = getByRole('checkbox');
    const span = getByRole('listitem').lastChild;

    expect(span).toHaveClass('read');
    expect(checkbox).toBeChecked();
  });

  it('has unchecked box and regular text when not read', () => {
    const item = { read: false };

    const { getByRole } = render(<Fact content={item} />);
    const checkbox = getByRole('checkbox');
    const span = getByRole('listitem').lastChild;

    expect(span).not.toHaveClass('read');
    expect(checkbox).not.toBeChecked();
  });
});
