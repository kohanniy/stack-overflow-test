import { AxiosRequestConfig } from 'axios';
import { t } from 'i18next';
import mainApi from './config';

const handleRequestError = (err: any) => {
  if (err.response) {
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