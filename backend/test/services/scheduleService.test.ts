import { saveOrder } from '../../services/orderService';
import { getScheduleList } from '../../services/scheduleService';

describe('Schedule service test', () => {
  it('should get schedule list when there is no order', () => {
    const scheduleList = getScheduleList();

    expect(scheduleList.length).toBe(1);
    expect(scheduleList[0].time).toBe('00:00');
    expect(scheduleList[0].task).toBe('Take a break');
  });

  it('should get schedule list when there is one order', () => {
    saveOrder({ id: 1, recipient: 'test user 1' });
    const scheduleList = getScheduleList();

    expect(scheduleList.length).toBe(3);
    expect(scheduleList[0].time).toBe('00:00');
    expect(scheduleList[0].task).toBe('Make Sandwich');
    expect(scheduleList[0].recipient).toBe('test user 1');

    expect(scheduleList[1].time).toBe('02:30');
    expect(scheduleList[1].task).toBe('Serve Sandwich');
    expect(scheduleList[1].recipient).toBe('test user 1');

    expect(scheduleList[2].time).toBe('03:30');
    expect(scheduleList[2].task).toBe('Take a break');
  });

  it('should get schedule list when there is two order', () => {
    saveOrder({ id: 1, recipient: 'test user 2' });
    const scheduleList = getScheduleList();

    expect(scheduleList.length).toBe(5);
    expect(scheduleList[0].time).toBe('00:00');
    expect(scheduleList[0].task).toBe('Make Sandwich');
    expect(scheduleList[0].recipient).toBe('test user 1');

    expect(scheduleList[1].time).toBe('02:30');
    expect(scheduleList[1].task).toBe('Serve Sandwich');
    expect(scheduleList[1].recipient).toBe('test user 1');

    expect(scheduleList[2].time).toBe('03:30');
    expect(scheduleList[2].task).toBe('Make Sandwich');
    expect(scheduleList[2].recipient).toBe('test user 2');

    expect(scheduleList[3].time).toBe('06:00');
    expect(scheduleList[3].task).toBe('Serve Sandwich');
    expect(scheduleList[3].recipient).toBe('test user 2');

    expect(scheduleList[4].time).toBe('07:00');
    expect(scheduleList[4].task).toBe('Take a break');
  });
});
