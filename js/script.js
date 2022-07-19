const shoppingList = ["Uova", "Pane", "Latte", "Biscotti", "Pasta", "Affettati", "Formaggio", "Verdura", "Frutta"]

const listItemContainer = document.getElementById("list");

let i = 0;
while (i < shoppingList.length) {
  const listItem = document.createElement("li");
  listItem.innerText = shoppingList[i];
  console.log(listItem);
  listItemContainer.append(listItem);
  i++
}



