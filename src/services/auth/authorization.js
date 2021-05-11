import { axios } from 'utils';
import { constants } from 'resources';

export default async function authorization(email, password) {
  const headers = {};

  const params = {
    email,
    password,
  };

  const response = await axios.post(constants.API_LOGIN, params, { headers });
  console.log('AUTH RESPONSE', response);
  return response;
}
