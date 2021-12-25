import { AxiosRequestConfig } from 'axios';
import mainApi from './config';

const handleRequestError = (err: any) => {
  if (err.response) {
    console.log(err.response);
    
    throw new Error(err.response.data.error_message);
  } else if (err.request) {
    console.log(err.request);
    throw new Error('Сервер не отвечает. Обновите страницу')
  } else {
    throw new Error('Что-то пошло не так. Обновите страницу')
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