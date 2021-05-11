// import axios from './axios';
// import storage from './storage';
// import refreshToken from '../services/auth/refreshToken';
import alertModal from './alertModal';

function handle401(error) {
  const { message } = error.response.data;

  if (message == 'Token has been expired!') {
    // Refresh token logic
    const originalRequest = error.config;

    if (!originalRequest._retry) {
      originalRequest._retry = true;

      // return refreshToken()
      //   .then(token => {
      //     storage.setAccessToken(token);
      //     axios.setToken(token);
      //
      //     originalRequest.headers['Authorization'] = 'Bearer ' + token;
      //
      //     return axios(originalRequest);
      //   })
      //   .catch(() => {
      //     // LOGOUT
      //   });
    }
  }

  return Promise.reject(error);
}
/* *************** */

async function handleServiceErrorByCode(error) {
  const { code, config } = error;

  switch (code) {
    case 'ECONNABORTED':
      // Connection Timeout
      break;

    default:
      break;
  }

  return Promise.reject(error);
}

function handleServiceErrorByStatusCode(error) {
  const { response } = error;
  if (response.config.url === 'app_users_with_google') {
    alertModal.show({
      type: 'error',
      text: 'Hata oluştu. Lütfen normal girişi kullanınız.',
    });
    return;
  }
  switch (response.status) {
    case 400:
      alertModal.show({
        type: 'error',
        title: 'error',
        text: response.data['hydra:description'],
      });
    case 401:
      if (response.data.message) {
        alertModal.show({
          type: 'error',
          title: 'error',
          text: response.data.message,
        });
      }
      break;
    case 403:
      if (response.data.message) {
        alertModal.show({
          type: 'error',
          title: 'error',
          text: response.data.message,
        });
      }
      // Connection Timeout
      break;
    case 404:
      alertModal.show({
        type: 'error',
        title: 'error',
        text: response.data['hydra:description'],
      });
      // Connection Timeout
      break;
    default:
      break;
  }

  return Promise.reject(error);
}

// Main Handler
export default function serviceError(error) {
  console.log('serviceError', error);
  const { code, response } = error;
  console.log('code', code);
  console.log('response', response);
  if (code) {
    // If network or device based error occurs
    return handleServiceErrorByCode(error);
  } else if (response) {
    // If server responds
    return handleServiceErrorByStatusCode(error);
  }

  // Just in case...
  return Promise.reject(error);
}
