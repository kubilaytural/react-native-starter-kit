import { Platform } from 'react-native';
import axios from 'axios';
import { constants } from 'resources';
import storage from './storage';
import serviceErrorHandler from './serviceErrorHandler';

const instance = axios.create({
  baseURL: constants.API_BASE_URL,
  timeout: constants.API_TIME_OUT,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.defaults.headers['X-PLAFTORM'] = Platform.OS;
storage.getAccessToken().then((accessToken) => {
  if (accessToken) instance.setToken(accessToken);
});

/* ********** FUNCTIONS  ********** */
instance.setToken = (accessToken) => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
};

/* ********** REQUEST INTERCEPTOR  ********** */
function onRequest(config) {
  return config;
}

function onRequestFailed(error) {
  return Promise.reject(error);
}

/* ********** RESPONSE INTERCEPTOR  ********** */
function onResponse(response) {
  return response;
}

function onResponseFailed(error) {
  return Promise.reject(error);
}

instance.interceptors.request.use(onRequest, onRequestFailed);
instance.interceptors.response.use(onResponse, serviceErrorHandler);

export default instance;
