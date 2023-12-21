import axios from 'axios';

const API_KEY = '40268074-5c3ececf222fa6778734cace7';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safeSearch: 'true',
  per_page: 12,
};

async function fetchImage(inputData, page = 1) {
  try {
    const url = `?q=${inputData}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { fetchImage };