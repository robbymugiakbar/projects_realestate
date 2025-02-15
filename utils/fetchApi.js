import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'aa67842a5emsh7de2f2d177a94c9p15caa4jsn6ee1795151c6',
    },
  });
    
  return data;
}