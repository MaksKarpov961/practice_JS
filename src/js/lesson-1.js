console.log('First task');


const makeTransaction = (quantity, pricePerDroid) => {
  const totalPrice = quantity * pricePerDroid

  return `You ordered ${quantity} droids worth ${totalPrice} credits!`
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


console.log(''); // пробіл

////////////////////////////////////////



console.log('Second Task');
// Робимо окрему функцію для підрахунку 
const summPrice = (price, deliveryFee) => {
    return price + deliveryFee
}

// Функція для створення рядка
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = summPrice(price, deliveryFee)

  return `Shipping to ${country} will cost ${totalPrice} credits`
}



console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"


console.log(''); // пробіл

////////////////////////////////////////

console.log('Task Three');

function getElementWidth( ...param) {
  const [ content, padding, boreder, ...otherParams ] = param;
  
  // Перетворюємо в число для подальшого додавання
  const withContent = parseFloat(content)
  const withPadding = parseFloat(padding)
  const withBoreder = parseFloat(boreder)

  

  const totalWith = withContent + ((withPadding  + withBoreder) * 2);


  return totalWith

  // Також можна повернути рядком
  // return `${totalWith}px`
}



console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200