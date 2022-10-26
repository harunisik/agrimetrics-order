import './App.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder, getSchedule } from './services/orderService';

function App() {
  const titles = ['#', 'Time', 'Task', 'Recipient'];
  const queryClient = useQueryClient();
  const { data, isFetching } = useQuery(['getSchedule'], getSchedule);
  const mutation = useMutation(createOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getSchedule']);
    },
  });

  return (
    <div className="App">
      <h3>Agrimetrics Italian Caffè Shop</h3>
      <br />
      <Button onClick={() => mutation.mutate()} style={{ float: 'left' }}>
        Create New Order
      </Button>
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            {titles.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isFetching ? (
            <tr>
              <td colSpan={4}>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" />
                {' Loading...'}
              </td>
            </tr>
          ) : data?.length === 0 ? (
            <tr>
              <td colSpan={4}>No Data</td>
            </tr>
          ) : (
            data?.map(({ id, time, task, recipient }: any) => (
              <tr key={id}>
                <td>{id > 0 ? id : ''}</td>
                <td>{time}</td>
                <td>{task}</td>
                <td>{recipient}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
