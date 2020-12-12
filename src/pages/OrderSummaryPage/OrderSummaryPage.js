import React from "react";
import Summary from "./Summary";

const OrderSummaryPage = ({ order }) => {
  return (
    <>
      <h2>Order Summary</h2>
      {order && <Summary order={order} />}
    </>
  );
};

export default OrderSummaryPage;
