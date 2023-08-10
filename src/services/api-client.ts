import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'ba6b065c119d4805bb3ada41e1832d02',
    }
})