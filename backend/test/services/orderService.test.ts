import { getOrderLength, getOrders, saveOrder } from '../../services/orderService';

describe('Order service test', () => {
  it('should get order length is zero when the list is empty', () => {
    expect(getOrderLength()).toBe(0);
  });

  it('should get order length is 1 when the list contains one item', () => {
    saveOrder({ id: 1, recipient: 'test user' });
    expect(getOrderLength()).toBe(1);
  });

  it('should save the given order correctly', () => {
    const order = { id: 1, recipient: 'test user' };
    const returnedOrder = saveOrder(order);

    expect(getOrders()[0]).toEqual(returnedOrder);
  });

  it('should get the order list correctly', () => {
    saveOrder({ id: 1, recipient: 'test user 1' });
    saveOrder({ id: 2, recipient: 'test user 2' });
    saveOrder({ id: 3, recipient: 'test user 3' });
    saveOrder({ id: 4, recipient: 'test user 4' });
    saveOrder({ id: 5, recipient: 'test user 5' });

    const orders = getOrders();

    expect(orders.length).toBe(7);
  });
});
