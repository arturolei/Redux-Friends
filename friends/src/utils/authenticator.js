import axios from 'axios';

export const authenticator = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: 'http://localhost:5000/api'
  });
};