import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CheckoutPage from "./"

const arrangeTest = ({order = {}, updateOrderContext = jest.fn() } = {}) => {
  return render(<CheckoutPage order={order} updateOrderContext={updateOrderContext}/>);
}

describe('CheckoutPage', () => {
  it('groups numbers in groups of 4s: 0000 0000 0000 0000', () => {
    arrangeTest()

    const findNameInput = () => screen.getByLabelText('Number', { selector: 'input' })

    act(() => {
      userEvent.click(screen.getByLabelText('Card'))
    })

    act(() => {
      userEvent.type(findNameInput(), '1234567890123456')
    })

    expect(findNameInput()).toHaveValue('1234 5678 9012 3456')
  })
})
