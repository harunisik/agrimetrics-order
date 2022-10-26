export function handleResponse(response: any) {
  return response.data;
}

export function handleError(error: any) {
  throw new Error('Unable to perform this action, if the problem persists please raise a ticket on the Service Desk');
}
