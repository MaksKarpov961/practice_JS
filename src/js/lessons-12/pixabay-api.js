import axios from "axios";

export async function getPhotos(query, page) {
  const BASE_URL = 'https://pixabay.com/api/?';
  const API_KEY = '45713433-433c1b648e48abad27090f3cc';


  try {
    const responce = await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: false,
        per_page: '15',
        page,
      }
    })
    return responce.data
  } catch (error) {
    console.log('Помилка при завантаженні фото:', error)
  }
}
