import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

it('calculates price on each click', () => {
  render(<App />);

  userEvent.click(screen.getByText('35cm'))
  userEvent.click(screen.getByText('пышное'))
  userEvent.click(screen.getByText('белый'))
  userEvent.click(screen.getByText('моцарелла'))
  userEvent.click(screen.getByText('чеддар'))
  userEvent.click(screen.getByText('перец'))
  userEvent.click(screen.getByText('бекон'))

  expect(screen.getByText('Заказать за 424$')).toBeInTheDocument()
})

describe('submit order', () => {
  it('proceeds to the summary page with order summary', () => {
    render(<App />);

    userEvent.click(screen.getByText('35cm'))
    userEvent.click(screen.getByText('моцарелла'))
    userEvent.click(screen.getByText('чеддар'))

    userEvent.click(screen.getByText('Заказать за 308$'))

    expect(screen.getByText('Цена: 308$')).toBeInTheDocument()
    expect(screen.getByText('35cm')).toBeInTheDocument()
    expect(screen.getByText('моцарелла')).toBeInTheDocument()
    expect(screen.getByText('чеддар')).toBeInTheDocument()
  })
})
