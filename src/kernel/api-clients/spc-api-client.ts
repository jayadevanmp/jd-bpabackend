import axios from 'axios';

const spcAPIClient = axios.create({
  baseURL: process.env.SPC_URL || 'https://azrnadlapp7a46d:1443',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { spcAPIClient };
