import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('when user clicks on `Select Pizza`', () => {
  const visitPizzaConstructorPage = () => {
    render(<App />);
    userEvent.click(screen.getByText('Select Pizza'))
  }

  it('renders pizza constructor', () => {
    visitPizzaConstructorPage()

    expect(screen.getByText('Конструктор Пицы')).toBeInTheDocument()
  })

  it('calculates price on each click', () => {
    visitPizzaConstructorPage()

    userEvent.click(screen.getByText('35cm'))
    userEvent.click(screen.getByText('пышное'))
    userEvent.click(screen.getByText('белый'))
    userEvent.click(screen.getByText('моцарелла'))
    userEvent.click(screen.getByText('чеддар'))
    userEvent.click(screen.getByText('перец'))
    userEvent.click(screen.getByText('бекон'))

    expect(screen.getByText('Заказать за 424$')).toBeInTheDocument()
  })

  it('proceeds to the summary page with order summary', () => {
    visitPizzaConstructorPage()

    userEvent.click(screen.getByText('35cm'))
    userEvent.click(screen.getByText('моцарелла'))
    userEvent.click(screen.getByText('чеддар'))

    userEvent.click(screen.getByText('Заказать за 308$'))

    expect(screen.getByText('Checkout')).toBeInTheDocument()
  })
})

describe('when user clicks on `Login`', () => {
  it('goes to login page', () => {
    render(<App />);
    userEvent.click(screen.getByText('Login'))

    expect(screen.getByTestId('login-page-submit')).toBeInTheDocument()
  })
})

describe('when user clicks on `Register`', () => {
  it('goes to register page', () => {
    render(<App />);
    userEvent.click(screen.getByText('Register'))

    expect(screen.getByTestId('registration-page-submit')).toBeInTheDocument()
  })
})
