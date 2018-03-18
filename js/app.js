const avocado = new ShoppingListItem("avocado", "Must eat right away!");

avocado.render();
console.log(avocado.render());

const content = document.getElementById("content");
const new_shopping_list_div = document.createElement("div");
const new_shopping_list = new ShoppingList();
new_shopping_list_div.innerHTML = new_shopping_list.render();
content.appendChild(new_shopping_list_div);

function add_to_shopping_list() {
  const item = document.getElementById("item").value;
  const description = document.getElementById("description").value;

  const new_shopping_list_item = new ShoppingListItem(item, description);
  new_shopping_list.addItem(new_shopping_list_item);
  new_shopping_list_div.innerHTML = new_shopping_list.render();
  console.log("render: ", new_shopping_list.render().replace(",", " "));
}
