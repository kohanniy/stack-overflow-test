import axios from 'axios';
import { BASE_URL, API_KEY, ACCESS_TOKEN_KEY, SITE } from '../utils/constants';

export const mainApiInitialConfig = {
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    site: SITE,
    access_token: localStorage.getItem(ACCESS_TOKEN_KEY),
  }
};

const mainApi = axios.create(mainApiInitialConfig);

export default mainApi;