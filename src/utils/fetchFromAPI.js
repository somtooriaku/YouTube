import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '7ff3cfe543msh896d1e64034e13bp1fca45jsne38e9cc5d8ab',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
};