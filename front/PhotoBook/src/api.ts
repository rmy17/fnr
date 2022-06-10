import {backendUrl} from './env';
import {authFetch} from './fetch';
import {Article} from './redux/slices/articles.slice';
import {User} from './redux/slices/authentication.slice';

export interface LoginForm {
  login: string;
  password: string;
}

const apiUrl = backendUrl + '/api';

class Api {
  async addNewArticle(article: Article) {
    const url = apiUrl + '/articles';
    console.log('url: ', url);

    const response = await authFetch(url, {
      method: 'POST',
      body: JSON.stringify(article),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status !== 201) {
      throw new Error('cannot add article');
    }
    return await response.json();
  }

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
    const response = await authFetch(backendUrl + '/api/disconnect', {
      method: 'POST',
    });
    const status = response.status;
    console.log('disconnect status: ', status);
  }

  async isConnected(): Promise<User | undefined> {
    console.log('api is');
    const response = await authFetch(backendUrl + '/api/is-connected', {
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

  async getArticles(): Promise<Article[]> {
    const response = await authFetch(apiUrl + '/articles');
    return await response.json();
  }
}

export const api = new Api();

export default api;
