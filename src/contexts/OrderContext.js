import React, { useState, useContext } from "react";

export const OrderContext = React.createContext({
  order: {},
});

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({});

  const updateOrder = (newOrder) => {
    setOrder({ ...order, ...newOrder });
  };

  return (
    <OrderContext.Provider value={{ order, updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
