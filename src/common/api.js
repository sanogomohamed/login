import axios from 'axios';

export const API_URL = process.env.NODE_ENV === 'dev' ? "http://localhost:5000" : "http://api.event.ynov.com" ;

class api {
    constructor(){
        console.log('api')
        this.instance = this.createInstance();
        this.defaultParams = { data : {} };
    }

    getToken(){
        return localStorage.getItem('jwtToken') || null;
    }

    setToken(){
        localStorage.setItem('jwtToken');
    }

    /*getUserId(){
        return localStorage.getItem('user_id') || 0;
    }

    setUserId(){
        localStorage.setItem('user_id');
    }*/

    createInstance(){

        return axios.create({
            baseURL: API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'jwt ' + this.getToken()
            }
        });
    }

    auth(username, password){
        this.instance.defaults.headers.common['Authorization'] = username + this.hash(password);
        
        return this.instance.post('/auth').then((res) => {
            this.setToken(res.data.token);

            this.instance = this.createInstance();
        }).catch((res) => this.instance.defaults.headers.common['Authorization'] = "")
    }

    hash(password) {
        return password;
    }

    get(url, params = this.defaultParams){
        return this.instance.get(url, params);
    }

    post(url, params = this.defaultParams){
        return this.instance.post(url, params);
    }

    put(url, params = this.defaultParams){
        return this.instance.put(url, params); 
    }

    delete(url, params = this.defaultParams){
        return this.instance.delete(url, params);
    }
}

export default new api();