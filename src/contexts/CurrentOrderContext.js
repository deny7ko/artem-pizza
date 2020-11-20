import React from 'react'

const CurrentOrderContext = React.createContext({
  currentOrder: {},
  setCurrentOrder: () => {}
})


export default CurrentOrderContext
