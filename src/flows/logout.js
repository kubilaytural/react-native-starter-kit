import axios from '../utils/axios';
import storage from '../utils/storage';
import { startFromLogin } from '../index';

export default async function userLogout() {
  await storage.setAccessToken('');
  axios.setToken('');

  startFromLogin();
}
