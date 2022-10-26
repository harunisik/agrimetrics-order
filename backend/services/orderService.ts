const orders: Order[] = [];

interface Order {
  id: number;
  recipient: string;
}

const saveOrder = (order: Order): Order => {
  orders.push(order);
  return order;
};

const getOrders = (): Order[] => {
  return orders;
};

const getOrderLength = (): number => {
  return orders.length;
};

export { saveOrder, getOrders, getOrderLength, Order };
