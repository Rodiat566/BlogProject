import axios from 'axios';

const  baseURL = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-10-20&' +
          'sortBy=popularity&' +
          'apiKey=03ba1ac87e8a4d279fc84902aed1735e';

const getAllNews = async () => {
    return await axios.get(baseURL);
}

export{getAllNews}
    
