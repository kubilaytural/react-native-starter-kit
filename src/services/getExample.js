import { axios } from 'utils';
import { constants } from 'resources';

export default async function getExampleApi() {
  try {
    const params = {};
    const headers = {};

    const { data: response } = await axios(`${constants.API_BASE_URL}${constants.BASE_PATH}`, {
      method: 'GET',
      headers,
      params,
    });

    const { code, message } = response.result;

    return {
      code,
      message,
    };
  } catch (error) {
    console.log(`getExampleApi.get ${constants.API_BASE_URL} Error`, error);
    return error;
  }
}
