import axios from "axios";

// const fetchUsers = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response.data; // Повертаємо весь масив користувачів
// };

// fetchUsers()
//   .then(users => {
//     users.forEach(user => {
//       console.log(user.name); // Виводимо ім'я кожного користувача
//     });
//   })
//   .catch(error => console.log(error));


// console.log("Before try...catch");

// try {
//   const result = 10 / 0;
//   console.log(result); // Цей рядок не виконається через помилку
// } catch (error) {
//   // Обробимо помилку
//   console.error(error.message);
// }

// console.log("After try...catch");



// const fetchPosts = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return response.data; // Повертаємо масив постів
// };

// fetchPosts()
//   .then(posts => {
//     posts.forEach(post => {
//       console.log(post.title); // Виводимо заголовок кожного поста
//     });
//   })
//   .catch(error => console.log(error));