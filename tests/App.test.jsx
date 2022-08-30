import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
  const mockResponse = Promise.resolve({
    json: () => Promise.resolve({
      facts: [
        { id: 0, text: 'Was first released in 2013' },
        { id: 1, text: 'Has well over 100K stars on Github' },
        { id: 2, text: 'Is maintained by Facebook' },
        { id: 3, text: 'Powers thousands of enterprise apps, including mobile apps' },
      ]
    })
  });
  global.fetch = jest.fn(() => mockResponse);

  const factsText = [
    'Was first released in 2013',
    'Has well over 100K stars on Github',
    'Is maintained by Facebook',
    'Powers thousands of enterprise apps, including mobile apps'
  ];

  it('renders correctly', async () => {
    render(<App />);
    const title = screen.getByRole('heading');

    waitForElementToBeRemoved(screen.getByText('Loading, please wait...'));

    expect(title.textContent).toBe('Fun facts about React');
    const facts = await screen.findAllByRole('listitem');
    const checkboxes = await screen.findAllByRole('checkbox');
    for (const [index, fact] of facts.entries()) {
      expect(fact).not.toHaveClass('read');
      expect(fact.textContent).toBe(factsText[index]);
      expect(fact).toContainElement(checkboxes[index]);
      expect(checkboxes[index]).toHaveClass('checkbox');
    }
    const hideReadButton = await screen.findByRole('button');
    expect(hideReadButton.textContent).toBe('Hide read facts');
  });

  it('puts line through fact text when checkbox is clicked', async () => {
    render(<App />);
    const facts = await screen.findAllByRole('listitem');
    const checkboxes = await screen.findAllByRole('checkbox');

    for (const checkbox of checkboxes) { fireEvent.click(checkbox) }

    for (const fact of facts) { expect(fact).toHaveClass('read') }
  });

  it('hides read facts and changes button text when button is clicked while read facts are shown', async () => {
    render(<App />);
    const hideReadButton = await screen.findByRole('button');

    for (const checkbox of await screen.findAllByRole('checkbox')) { fireEvent.click(checkbox) }
    fireEvent.click(hideReadButton);

    expect(hideReadButton.textContent).toBe('Show read facts');
    for (const text of factsText) { expect(screen.queryByText(text)).not.toBeInTheDocument() }
    for (const checkbox of screen.queryAllByRole('checkbox')) { expect(checkbox).not.toBeInTheDocument() }
  });

  it('shows read facts and resets button text when button is clicked while read facts are hidden', async () => {
    render(<App />);
    const hideReadButton = await screen.findByRole('button');

    for (const checkbox of await screen.findAllByRole('checkbox')) { fireEvent.click(checkbox) }
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
