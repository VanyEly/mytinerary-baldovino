import axios from 'axios';

const cities = axios.create({
    baseURL: 'http://localhost:3000',
});
export const getAllCities = async () => {
    try {
        const {data} = await cities('/api/cities')
        return data.cities
    } catch (error) {
 return[]
    }
}

export const getCity = async () => {
    try {
        const{data} = await cities('/api/cities'+id)
        return data.cities
    } catch (error) {
        return []
    }
}