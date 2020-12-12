import React from "react";
import { useQuery } from 'react-query'
import { getOrders } from 'api'

const OrderListPage = () => {
  const { isLoading, isError, data: orderList, error } = useQuery('orders', getOrders)

  if (isError) {
    return <>Error: {JSON.stringify(error)}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return <>{orderList.map((order, orderIndex) => (
    <details>
      <summary>Order #{orderIndex}</summary>
      {JSON.stringify(order.ingredients)}
    </details>

  ))}</>;
}

export default OrderListPage
