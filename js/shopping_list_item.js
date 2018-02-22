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
    return `<li class="completed_${
      this.is_done
    }"><span><strong>Item: </strong>${
      this.name
    }</span><br><span> <strong>Description:</strong> <em>${
      this.description
    }</em></span></li>`;
  }
}
