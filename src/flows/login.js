import axios from '../utils/axios';
import storage from '../utils/storage';
import { startFromHome } from '../index';

export default async function login(token, refreshToken) {
  await storage.setAccessToken(token);
  await storage.setRefreshToken(refreshToken);
  axios.setToken(token);

  startFromHome();
}
