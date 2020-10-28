import { Method } from './index';

const httpColors = {
  post: '#00e676',
  get: '#00b0ff',
  put: '#ffea00',
  delete: '#f50057',
};

export function methodColor(method: Method) {
  switch (method) {
    case 'DELETE':
      return httpColors.delete;
    case 'GET':
      return httpColors.get;
    case 'POST':
      return httpColors.post;
    case 'PUT':
      return httpColors.put;
    default:
      return '#000';
  }
}
