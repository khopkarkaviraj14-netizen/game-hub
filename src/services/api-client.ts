import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5c4cedf382ec482db6ab79dbf8a37a33'
    }
})