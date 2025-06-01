import axios from "axios";
import {API_KEY} from '../internal_settings.ts'

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: API_KEY
    }
})  