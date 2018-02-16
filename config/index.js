import apiConfig from './api';

const ENV = process.env.NODE_ENV === 'dev' ? "http://localhost:5000" : "http://api.event.ynov.com" ;
const CONFIG_GLOBAL = "global";

export default {
    ENV: env,
    CONFIG_API: { ...apiConfig[CONFIG_GLOBAL], ...apiConfig[ENV] }
}