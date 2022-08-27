import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
  it('renders correctly.', () => {
    render(<App />);

    expect(screen.getByRole('button')).toBeInTheDocument;
    expect(screen.getByRole('list')).toBeInTheDocument;
    expect(screen.getByRole('heading').textContent).toBe('Fun facts about React');
  });


  it('hides all read facts when button is clicked while they are shown', () => {
    render(<App />);
    const hideReadButton = screen.getByRole('button');

    for (const checkbox of screen.getAllByRole('checkbox')) { fireEvent.click(checkbox) }
    fireEvent.click(hideReadButton);

    expect(hideReadButton.textContent).toBe('Show read facts');
    for (const fact of screen.queryAllByRole('listitem')) { expect(fact).not.toBeInTheDocument() }
  });

  it('show all read facts when button is clicked while they are hidden', () => {
    render(<App />);
    const hideReadButton = screen.getByRole('button');

    for (const checkbox of screen.getAllByRole('checkbox')) { fireEvent.click(checkbox) }
    fireEvent.click(hideReadButton); // Hides read facts
    fireEvent.click(hideReadButton); // Shows read facts

    expect(hideReadButton.textContent).toBe('Hide read facts');
    for (const fact of screen.getAllByRole('listitem')) { expect(fact).toBeInTheDocument() }
    for (const checkbox of screen.getAllByRole('checkbox')) { expect(checkbox).toBeChecked() }
  });
});
