import axios from 'axios';
import CONFIG from '../../../config';

export const API_URL = CONFIG.API.url;
const METHOD_NAME = "Bearer";
export const TOKEN_NAME_LOCALSTORAGE = METHOD_NAME + "_token";

export class API {
    constructor(){
        //Instance of axios 
        //Allow us to buil a pre-request
        this._axios = this.createInstance();
        //Issue on axios
        //If no data provided the POST is set as a GET
        this.defaultParams = { data : {} };
        console.log(API_URL);
    }

    createInstance(token = this.getToken()){

        return axios.create({
            baseURL: API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': METHOD_NAME + ' ' + token
            }
        });
    }

    getToken(){
        return localStorage.getItem(TOKEN_NAME_LOCALSTORAGE) || null;
    }

    get(url, params = this.defaultParams){
        return this._axios.get(url, params);
    }

    post(url, params = this.defaultParams){
        return this._axios.post(url, params);
    }

    put(url, params = this.defaultParams){
        return this._axios.put(url, params); 
    }

    delete(url, params = this.defaultParams){
        return this._axios.delete(url, params);
    }
}

export default new API();