import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it } from '@testing-library/jest-dom';
import Fact from '../src/Fact';

describe('Fact', () => {
  const item = { id: 0, text: 'Was first released in 2013', read: false };
  const { container } = render(<Fact content={item} />);

  it('should render correctly', () => {
    expect(container.textContent).toEqual(item.text)
  });
});