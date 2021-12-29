import { t } from 'i18next';

export const pathnames = {
  home: '/',
  login: '/login'
};

export const requestPathNames = (id?: string | number) => ({
  questions: '/questions',
  question: `/questions/${id}`,
  answers: `questions/${id}/answers`,
  add_answer: `/questions/${id}/answers/render`
});

export const PAGE_SIZE_KEY = 'pagesize';
export const ACCESS_TOKEN_KEY = 'access_token';
export const API_KEY = 'MYJqto3gcdV8nyRvHQz*rQ((';
export const AUTH_URL = 'https://stackoverflow.com/oauth/dialog';
export const REDIRECT_URI = `http://localhost:3000/${pathnames.login}`;
export const BASE_URL = 'https://api.stackexchange.com/2.3';
export const SITE = 'stackoverflow';
export const CLIENT_ID = '22525';
export const RES_TYPE = 'token';
export const SCOPE = 'write_access';
export const QUESTIONS_FILTER = '!LaSRLv)Ii5)p4ZTu7f4*n2';
export const ANSWERS_FILTER = '!szz-qBaE3f(gpgZ_yc4sKqxSXj(yO1b';
export const QUESTION_FILTER = '!17mFf6QJCC)Z--yt7B).KO2ctBm9uKX6Tocennz)AbpkFz';
export const ADD_ANSWER_FILTER = '!Fc7.YG-_eN5gA3FVZ2ggUN_zVH';

export const pageSizes = [
  {
    id: 1,
    value: 15,
    label: 15,
  },
  {
    id: 2,
    value: 30,
    label: 30,
  },
  {
    id: 3,
    value: 50,
    label: 50,
  },
];

export const sortingQuestionsOptions = [
  {
    id: 1,
    value: 'creation',
    label: t('newest'),
  },
  {
    id: 2,
    value: 'activity',
    label: t('activity'),
  },
  {
    id: 3,
    value: 'votes',
    label: t('votes'),
  },
  {
    id: 4,
    value: 'week',
    label: t('week'),
  },
  {
    id: 5,
    value: 'month',
    label: t('month'),
  },
];