import {backendUrl} from './env';
import {User} from './redux/slices/authentication.slice';
import {sleep} from './utils';

export interface LoginForm {
  login: string;
  password: string;
}

class Api {
  async connect(loginForm: LoginForm): Promise<User> {
    const response = await fetch(backendUrl + '/api/connect', {
      method: 'POST',
      body: JSON.stringify(loginForm),
      headers: {'Content-Type': 'application/json'},
    });
    console.log('status:', response.status);
    if (response.status !== 200) {
      throw new Error('oups ...');
    }
    return await response.json();
  }

  async disconnect() {
    const response = await fetch(backendUrl + '/api/disconnect', {
      method: 'POST',
    });
    const status = response.status;
    console.log('disconnect status: ', status);
  }

  async isConnected(): Promise<User | undefined> {
    console.log('api is');
    const response = await fetch(backendUrl + '/api/is-connected', {
      method: 'GET',
    });
    const status = response.status;
    console.log('check status', status);
    if (status !== 200) {
      return undefined;
    }
    const user = await response.json();
    return user;
  }
}

export const api = new Api();

export default api;
