const totalCategores = document.querySelectorAll('.item')

console.log("Number of categories:", totalCategores.length);


totalCategores.forEach(item => {
  const header = item.querySelector('h2').textContent
  const items = item.querySelectorAll('ul li').length

  console.log("Category:", header);
  console.log("Elements:", items);
  
});