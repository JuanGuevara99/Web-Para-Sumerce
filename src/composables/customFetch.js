import { ref } from 'vue';
import axios from 'axios';
import { getCookie, checkTokenExpiration } from './';


export function useFetch(url , method = 'GET', requestBody ) {
  const data = ref(null)
  const error = ref(null)

  const config = {
    method, // Adjust the HTTP method as needed
    url,
    responseType: 'stream', 
    data: requestBody,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', 
    }
  };
  const token = getCookie('usersession');
  
  if ( token && !checkTokenExpiration(token) ){
    config['headers']['Authorization'] = `Bearer ${token}`;
  }
  return new Promise((resolve, reject) => {
    axios(config)
      .then((res) => {
        data.value = res.data;
        resolve({ data: data.value});
      })
      .catch((err) => {
        if ( err.response.data ) resolve({error: err.response.data});

        resolve({error: err});
      });
  })
}