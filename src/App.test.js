import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { OrderProvider } from "./contexts/OrderContext"

const renderApplication = () => {
  act(() => {
    render(
      <OrderProvider>
        <App />
      </OrderProvider>
    );
  })
}

describe('when user clicks on `Select Pizza`', () => {
  it('renders pizza constructor', () => {
    renderApplication()

    act(() => {
      userEvent.click(screen.getByText('Select Pizza'))
    })

    expect(screen.getByText('Конструктор Пицы')).toBeInTheDocument()
  })

  it('calculates price on each click', () => {
    renderApplication()

    act(() => {
      userEvent.click(screen.getByText('Select Pizza'))
      userEvent.click(screen.getByText('35cm'))
    })

    expect(screen.getByText('Заказать за 250$')).toBeInTheDocument()

    act(() => {
      userEvent.click(screen.getByText('пышное'))
      userEvent.click(screen.getByText('белый'))
      userEvent.click(screen.getByText('моцарелла'))
      userEvent.click(screen.getByText('чеддар'))
      userEvent.click(screen.getByText('перец'))
      userEvent.click(screen.getByText('бекон'))
    })

    expect(screen.getByText('Заказать за 424$')).toBeInTheDocument()
  })

  it('proceeds to the summary page with order summary', () => {
    renderApplication()

    act(() => {
      userEvent.click(screen.getByText('Select Pizza'))
      userEvent.click(screen.getByText('35cm'))
    })

    act(() => {
      userEvent.click(screen.getByText('Заказать за 250$'))
    })

    expect(screen.getByText('Checkout')).toBeInTheDocument()
  })
})

describe('navigation', () => {
  describe('when user clicks on `Login`', () => {
    it.skip('goes to login page', () => {
      renderApplication()

      act(() => {
        userEvent.click(screen.getByText('Login'))
      })

      expect(screen.getByTestId('login-page-submit')).toBeInTheDocument()
    })
  })

  describe('when user clicks on `Register`', () => {
    it.skip('goes to register page', () => {
      renderApplication()
      act(() => {
        userEvent.click(screen.getByText('Register'))
      })

      expect(screen.getByTestId('registration-page-submit')).toBeInTheDocument()
    })
  })
})
