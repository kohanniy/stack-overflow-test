import axios from 'axios';
import { BASE_URL, API_KEY, ACCESS_TOKEN_KEY, SITE, REQ_FILTER } from '../utils/constants';

export const mainApiInitialConfig = {
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    site: SITE,
    access_token: localStorage.getItem(ACCESS_TOKEN_KEY),
    filter: REQ_FILTER,
    impose_throttling: true
  }
};

const mainApi = axios.create(mainApiInitialConfig);

export default mainApi;