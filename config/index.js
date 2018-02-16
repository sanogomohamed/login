import apiConfig from './api';

const ENV = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod' ;
const CONFIG_GLOBAL = "global";
console.log(ENV, apiConfig[CONFIG_GLOBAL], apiConfig[ENV], { ...apiConfig[CONFIG_GLOBAL], ...apiConfig[ENV] })
export default {
    ENV: ENV,
    API: { ...apiConfig[CONFIG_GLOBAL], ...apiConfig[ENV] }
}