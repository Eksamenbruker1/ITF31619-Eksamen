import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.BASE_URL}${process.env.API_VERSION}`,
});

export default http;
