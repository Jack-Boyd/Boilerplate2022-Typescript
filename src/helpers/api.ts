import axios from 'axios';

const api = axios.create({
  baseURL: '',
  //INSERT API URL HERE
  headers: {
    'Cache-Control': 'no-cache,no-store,must-revalidate,max-age=0',
    Pragma: 'no-cache',
    Expires: 0
  }
});

// Can insert API specific settings here. Look into axios docs.

api.defaults.headers.common.Accept = 'application/json';
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;
