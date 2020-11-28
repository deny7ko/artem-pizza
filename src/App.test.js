import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { OrderProvider } from "./contexts/OrderContext"
import App from './App';

const arrangeTest = () => {
  act(() => {
    render(
      <OrderProvider>
        <App />
      </OrderProvider>
    );
  })

  describe('navigation', () => {
    describe('when user clicks on `Select Pizza`', () => {
      it('goes to Constructor page', () => {
        arrangeTest()

        act(() => {
          userEvent.click(screen.getByText('Select Pizza'))
        })

        expect(screen.getByText('Конструктор Пицы')).toBeInTheDocument()
      })
    })

    describe('when user clicks on `Login`', () => {
      it('goes to login page', () => {
        arrangeTest()

        act(() => {
          userEvent.click(screen.getByText('Login'))
        })

        expect(screen.getByTestId('login-page-submit')).toBeInTheDocument()
      })
    })

    describe('when user clicks on `Register`', () => {
      it('goes to register page', () => {
        arrangeTest()
        act(() => {
          userEvent.click(screen.getByText('Register'))
        })

        expect(screen.getByTestId('registration-page-submit')).toBeInTheDocument()
      })
    })
  })
}
