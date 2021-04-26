const form = document.querySelector(".form");
const wrapper = document.querySelector(".text-wrapper");
const input = document.querySelector("input");
const items = JSON.parse(localStorage.getItem("listItems")) || [];

function addItem(e) {
  e.preventDefault();
  if (input.value === "") return;
  const item = {
    name: input.value,
    id: Date.now(),
  };
  items.push(item);
  localStorage.setItem("listItems", JSON.stringify(items));
  populateList();
  this.reset();
}

function deleteItem(e) {
  const id = e.target.parentElement.dataset.atr;
  const index = items.findIndex((item) => item.id === parseInt(id));
  items.splice(index, 1);
  localStorage.setItem("listItems", JSON.stringify(items));
  populateList();
}

function populateList() {
  wrapper.innerHTML = items
    .map((item) => {
      return `<div class="text" data-atr=${item.id}>
          <span>${item.name}</span>
          <button class="delete">X</button>
          </div>`;
    })
    .join("");

  console.log(items);
  const buttons = document.querySelectorAll(".delete");
  buttons.forEach((btn) => btn.addEventListener("click", deleteItem));
}

form.addEventListener("submit", addItem);
populateList();
