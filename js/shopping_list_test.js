class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    return `<li class="completed_${this.is_done}"><span>${
      this.name
    }</span><span>${this.description}</span></li>`;
  }
}

class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    if (item) {
      const index = this.items.map(i => i.name).indexOf(item);
      console.log("index: ", index);
      if (index === -1) {
        throw new TypeError("Item does not exist!");
      } else if (index === 0) {
        this.items.shift();
      } else {
        this.items.splice(index - 1, 1);
      }
    } else {
      if (this.items.length >= 1) {
        this.items.pop();
      } else {
        this.items = [];
      }
    }
    return this.items;
  }

  render() {
    const itemsArr = this.items.map(i => i.render());
    console.log(this.items.map(i => i.render()));
    return `<ul>${itemsArr}</ul>`;
  }
}
