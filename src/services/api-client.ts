import axios from "axios";
import {API_KEY} from '../internal_settings'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: API_KEY
    }
})  