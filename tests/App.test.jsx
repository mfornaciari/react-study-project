import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
  const factsText = [
    'Was first released in 2013',
    'Has well over 100K stars on Github',
    'Is maintained by Facebook',
    'Powers thousands of enterprise apps, including mobile apps'
  ];

  beforeEach(() => {
    render(<App />);
  });

  it('renders correctly', () => {
    const title = screen.getByRole('heading');
    const hideReadButton = screen.getByRole('button');
    const facts = screen.getAllByRole('listitem');
    const checkboxes = screen.getAllByRole('checkbox');

    expect(title.textContent).toBe('Fun facts about React');
    expect(hideReadButton.textContent).toBe('Hide read facts');
    for (const [index, fact] of facts.entries()) {
      expect(fact).not.toHaveClass('read');
      expect(fact.textContent).toBe(factsText[index]);
      expect(fact).toContainElement(checkboxes[index]);
      expect(checkboxes[index]).toHaveClass('checkbox');
    }
  });

  it('puts line through fact text when checkbox is clicked', () => {
    const facts = screen.getAllByRole('listitem');
    const checkboxes = screen.getAllByRole('checkbox');

    for (const checkbox of checkboxes) { fireEvent.click(checkbox) }

    for (const fact of facts) { expect(fact).toHaveClass('read') }
  });

  it('hides all read facts and changes button text when button is clicked while read facts are shown', () => {
    const hideReadButton = screen.getByRole('button');

    for (const checkbox of screen.getAllByRole('checkbox')) { fireEvent.click(checkbox) }
    fireEvent.click(hideReadButton);

    expect(hideReadButton.textContent).toBe('Show read facts');
    for (const text of factsText) { expect(screen.queryByText(text)).not.toBeInTheDocument() }
    for (const checkbox of screen.queryAllByRole('checkbox')) { expect(checkbox).not.toBeInTheDocument() }
  });

  it('shows all read facts and resets button text when button is clicked while read facts are hidden', () => {
    const hideReadButton = screen.getByRole('button');

    for (const checkbox of screen.getAllByRole('checkbox')) { fireEvent.click(checkbox) }
    fireEvent.click(hideReadButton); // Hides read facts
    fireEvent.click(hideReadButton); // Shows read facts

    expect(hideReadButton.textContent).toBe('Hide read facts');
    for (const text of factsText) { expect(screen.queryByText(text)).toBeInTheDocument() }
    const rerenderedFacts = screen.getAllByRole('listitem');
    for (const fact of rerenderedFacts) { expect(fact).toHaveClass('read') }
    const rerenderedCheckboxes = screen.getAllByRole('checkbox');
    for (const checkbox of rerenderedCheckboxes) { expect(checkbox).toBeChecked() }
  });
});
