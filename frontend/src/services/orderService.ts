import axios from 'axios';
import { handleError, handleResponse } from '../utils/serviceUtil';

function getSchedule() {
  return axios.get('/schedule').then(handleResponse).catch(handleError);
}

function createOrder() {
  return axios.post('/createOrder').then(handleResponse).catch(handleError);
}

export { getSchedule, createOrder };
