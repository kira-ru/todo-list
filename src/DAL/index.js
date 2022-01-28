import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

const API = {
    getFolder () {
        return instance.get('lists?_expand=color')
            .then(response => response.data)
    },

    getColors () {
        return instance.get('colors')
            .then(response => response.data)
    }
}

export default API;