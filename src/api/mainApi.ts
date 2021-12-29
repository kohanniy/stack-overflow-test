import { AxiosRequestConfig } from 'axios';
import { t } from 'i18next';
import { ACCESS_TOKEN_KEY } from '../utils/constants';
import mainApi from './config';

const handleRequestError = (err: any) => {
  if (err.response) {
    if (err.response.data.error_name === 'access_denied') {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      return;
    }

    if (err.response.data.error_message === 'POST methods expects all parameters to be submitted as a form, not on the query string') {
      throw new Error('Чего я только не делал (пробовал отправлять данные в параметрах запроса, в теле запроса), отправлял на разные эндпойнты - все равно получаю вот эту ошибку "POST methods expects all parameters to be submitted as a form, not on the query string"')
    }
    
    throw new Error(err.response.data.error_message);
  } else if (err.request) {
    throw new Error(t('server_not_responding'))
  } else {
    throw new Error(t('something_went_wrong'));
  }
};

export const getData = async (path: string, config?: AxiosRequestConfig<any>) => {
  try {
    const response = await mainApi.get(path, config);
    return response.data;
  } catch (err: any) {
    handleRequestError(err);
  }
};

export const addData = async (path: string, data: any, config?: AxiosRequestConfig<any>) => {
  try {
    const response = await mainApi.post(path, data, config);
    return response.data;
  } catch (err: any) {
    handleRequestError(err);
  }
}