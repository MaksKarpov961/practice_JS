

export function getPhotos(query) {
  const BASE_URL = 'https://pixabay.com/api/?';
  const API_KEY = '45713433-433c1b648e48abad27090f3cc';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,  
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
    per_page: '20'
  });

  return fetch(`${BASE_URL}${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.log('Помилка при завантаженні фото:', error);
    });
}
