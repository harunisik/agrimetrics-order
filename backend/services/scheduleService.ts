import { getOrders } from './orderService';
import moment from 'moment';

interface Schedule {
  id: number;
  time: string;
  task: string;
  recipient: string;
}

const getScheduleList = (): Schedule[] => {
  const orders = getOrders();
  const scheduleList: Schedule[] = [];
  const startTime = moment().set('minute', 0).set('second', 0);
  const timeFormat = 'mm:ss';

  orders.forEach(({ id, recipient }) => {
    scheduleList.push({ id, time: startTime.format(timeFormat), task: 'Make Sandwich', recipient });
    scheduleList.push({
      id,
      time: startTime.add(2.5, 'minutes').format(timeFormat),
      task: 'Serve Sandwich',
      recipient,
    });
    startTime.add(1, 'minutes');
  });

  scheduleList.push({ id: 0, time: startTime.format(timeFormat), task: 'Take a break', recipient: '' });
  return scheduleList;
};

export { getScheduleList };
