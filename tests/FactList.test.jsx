import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FactList from '../src/FactList';


describe('FactList', () => {
  it('has the correct text and list items', () => {
    render(<FactList />);

    expect(screen.getByRole('button')).toHaveTextContent('Hide read facts');
    expect(screen.getByRole('list').children.length).toBe(4);
  });

  it('marks fact as read when checkbox is clicked', () => {
    render(<FactList />);
    const fact = screen.getByRole('list').firstChild;
    const checkbox = fact.firstChild;

    fireEvent.click(checkbox);

    expect(fact).toHaveClass('read');
  });

  it('hides all read facts when button is clicked while they are shown', () => {
    render(<FactList />);
    const hideReadButton = screen.getByRole('button');
    const facts = screen.getAllByRole('listitem');
    const factCheckboxes = screen.getAllByRole('checkbox');

    for (const checkbox of factCheckboxes) { fireEvent.click(checkbox) }
    fireEvent.click(hideReadButton);

    expect(hideReadButton.textContent).toBe('Show read facts');
    for (const fact of facts) { expect(fact).not.toBeInTheDocument() }
  });

  it('show all read facts when button is clicked while they are hidden', () => {
    render(<FactList />);
    const hideReadButton = screen.getByRole('button');
    const factCheckboxes = screen.getAllByRole('checkbox');

    for (const checkbox of factCheckboxes) { fireEvent.click(checkbox) }
    fireEvent.click(hideReadButton); // Hides read facts
    fireEvent.click(hideReadButton); // Shows read facts

    expect(hideReadButton.textContent).toBe('Hide read facts');
    for (const fact of screen.getAllByRole('listitem')) { expect(fact).toBeInTheDocument() }
    for (const checkbox of screen.getAllByRole('checkbox')) { expect(checkbox).toBeChecked() }
  });
});
