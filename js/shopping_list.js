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
    const itemsArr = this.items.map(i => i.render()).join("");

    return `<ul>${itemsArr}</ul>`;
  }
}
