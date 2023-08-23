import axios from 'axios';

const cities = axios.create({
    baseURL: 'http://localhost:3000',
});
export const getAllCountry = async () => {
    try {
      const {data} = await cities.get('/api/cities')
         return data  
       } catch (error) {
 
 return[]
    }
}

export const getCountry = async (id) => {
    try {
       const{data} = await cities.get('/api/city'+id)
   
       return data
  } catch (error) {
       return []
    }
}

