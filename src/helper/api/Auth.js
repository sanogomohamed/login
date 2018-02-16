import { API, TOKEN_NAME_LOCALSTORAGE } from './Api';

export class Auth extends API {

    constructor(){
        super();
    }

    user(login, password){
        
        return this._axios.post('/auth', { login, password }).then((res) => {
            const TOKEN = res.data.token;
            this.setToken(TOKEN);

            this._axios = this.createInstance(TOKEN);
        }).catch((res) => this._axios.defaults.headers.common['Authorization'] = "")
    }

    setToken(token){
        localStorage.setItem(TOKEN_NAME_LOCALSTORAGE, token);
    }
}

export default new Auth();