import { User } from "./redux/slices/authentication.slice";
import { sleep } from "./utils";

export interface LoginForm {
    login: string;
    password: string;
}

class Api {
   async connect(loginForm: LoginForm): Promise<User> {
       await sleep(2000);
       const response = await fetch('http://localhost:300/api/connect', {method: 'POST', body: JSON.stringify(loginForm), headers: {'Content-Type': 'application/json'}});
       
       if(response.status !== 200){
           throw new Error('oups ...')
       } else {
           return await response.json();
       }
   }
}

export const api = new Api();

export default api;