import axios from 'axios';

const api = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v2/censos'
});

export default api;