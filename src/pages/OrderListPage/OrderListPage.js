import React from "react";
import { useQuery } from 'react-query'
import { getOrders } from 'api'

const OrderListPage = () => {
  const { isLoading, isError, data, error } = useQuery('todos', getOrders)

  if (isError) {
    return <>Error: {JSON.stringify(error)}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return <>{JSON.stringify(data)}</>;
}

export default OrderListPage
