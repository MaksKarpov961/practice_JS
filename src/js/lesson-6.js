console.log("task-1");


const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


/////////////////////////////////////////////////////
///////////////////////////////////////////////////////

console.log('');
console.log("task-2");


class Storage {

  #items;

  constructor(array) {
    this.#items = array

  }

  getItems() {
    return this.#items
  }

  addItem(newItem) {
    this.#items.push(newItem)
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(element => element !== itemToRemove)
  }

}






const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Nanitoids");
console.log(storage.getItems()); 

storage.removeItem("Antigravitator");
console.log(storage.getItems()); 



console.log('');
console.log("task-3");


class StringBuilder {

  #value

  constructor(initialValue) {
    this.#value = initialValue
    
  }

  getValue() {
    return this.#value
  }

  padEnd(str) {
    this.#value = this.#value + str
  }

  padStart(str) {
    this.#value = str + this.#value
  }

  padBoth(str) {
    this.#value = str + this.#value + str
  }
}




const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
