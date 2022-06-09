import {User} from './redux/slices/authentication.slice';
import {sleep} from './utils';

export interface LoginForm {
  login: string;
  password: string;
}

class Api {
  async connect(loginForm: LoginForm): Promise<User> {
    //await sleep(2000);
    const response = await fetch('http://10.0.2.2:3000/api/connect', {
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
}

export const api = new Api();

export default api;
