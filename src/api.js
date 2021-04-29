const container = document.querySelector(".container");
const btnGetData = document.querySelector(".btn-get-data");
const clearDOM = document.querySelector(".empty");

// const functionsContainer = [getItemsFIRST, getItemsSECOND, getItemsTHIRD];

// const FIRSTlink = "https://jsonplaceholder.typicode.com/users";
// const SECONDlink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
// const THIRDlink = "https://cat-fact.herokuapp.com/facts";

// function getItemsFIRST() {
//   fetch(FIRSTlink)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("fetch n°1");
//       container.innerHTML = JSON.stringify(data);
//     });
// }

// function getItemsSECOND() {
//   fetch(SECONDlink)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("fetch n°2");
//       container.innerHTML = JSON.stringify(data);
//     });
// }

// function getItemsTHIRD() {
//   fetch(THIRDlink)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("fetch n°3");
//       container.innerHTML = JSON.stringify(data);
//     });
// }

// btnGetData.addEventListener("click", function () {
//   functionsContainer[Math.floor(Math.random() * functionsContainer.length)]();
// });

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  "https://cat-fact.herokuapp.com/facts",
];

function displayItems() {
  const ramdomUrl = urls[Math.floor(Math.random() * urls.length)];
  console.log(ramdomUrl);
  fetch(ramdomUrl)
    .then((res) => res.json())
    .then((data) => (container.innerHTML = JSON.stringify(data)));
}

btnGetData.addEventListener("click", displayItems);
clearDOM.addEventListener("click", function () {
  container.innerHTML = "";
});
