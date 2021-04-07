//   EXO 1

//   1) Je veux que tu me recuperes les datas de ce endpoint : https://jsonplaceholder.typicode.com/users
//   2) Ensuite que tu gardes la data mais modifie le "name" pour ne garder que le prenom : "Leanne Graham" ==> "Leanne"
//   3) Enfin tu devras stocker le tout dans le localStorage et le nom de la cle sera : "mappedUsers"

const FIRST_link = "https://jsonplaceholder.typicode.com/users";

function toLocalStorage() {
  fetch(FIRST_link)
    .then((res) => res.json())
    .then((data) =>
      data.map((person) => {
        return {
          ...person,
          name: person.name.split(" ")[0],
        };
      })
    )
    .then((newData) => {
      console.log(newData);
      localStorage.setItem("mappedUsers", JSON.stringify(newData));
    });
}

//    EXO 2

//   1) Je veux que tu me recuperes les datas de ce endpoint : https://jsonplaceholder.typicode.com/users
//   2) Ensuite que tu ne gardes que l'adresse email des users et leur username
//   3) Enfin tu devras afficher les adresses a la suite, dans le DOM comme ca :
//      Bret: Sincere@april.biz
//      Antonette: Shanna@melissa.tv

// création d'un container <ul> dans le html
const container = document.querySelector(".container");

const SECOND_link = "https://jsonplaceholder.typicode.com/users";

function displayItems() {
  fetch(SECOND_link)
    .then((res) => res.json())
    .then((data) =>
      data.map((user) => {
        return { username: user.name, email: user.email };
      })
    )
    .then((newData) => {
      console.log(newData);
      container.innerHTML = newData
        .map((user) => `<li>${user.username}: ${user.email}</li>`)
        .join("");
    });
}

//   EXO 3

//   1) Je veux que tu me recuperes les datas de ce endpoint : https://gorest.co.in/public-api/users
//   2) Ensuite que tu ne gardes que l'adresse email des users, leur username et leur gender
//   3) Enfin que tu refactor ton code pour utiliser async/await plutot que .then

// 1) then way

// const thirdLink = "https://gorest.co.in/public-api/users";
// fetch(thirdLink)
//   .then((res) => res.json())
//   .then((data) => data["data"])
//   .then((newData) =>
//     newData.map((user) => {
//       return {
//         username: user.name,
//         email: user.email,
//         gender: user.gender,
//       };
//     })
//   )
//   .then((filteredArr) => console.log(filteredArr));

// 2) async/await way

async function f() {
  const res = await fetch("https://gorest.co.in/public-api/users");
  const data = await res.json();
  const filteredData = data["data"];
  const filteredArray = filteredData.map((user) => {
    return {
      username: user.name,
      email: user.email,
      gender: user.gender,
    };
  });
  console.log(filteredArray);
}

f();

//   EXO 4

//   Creer 2 boutons et lorsqu'on clique sur le bouton, executer respectivement les fonctions des exos 1 et 2
//   je clique sur le premier bouton --> je dois retrouver dans le localStorage la data mappedUsers
//   je clique sur le deuxieme bouton je dois voir afficher username + email dans le dom

const FIRST_btn = document.querySelector(".btn-first");
const SECOND_btn = document.querySelector(".btn-second");

FIRST_btn.addEventListener("click", toLocalStorage);
SECOND_btn.addEventListener("click", displayItems);

//   EXO 5
//   Creer dynamiquement 10 boutons en JS et les displays dans le DOM. Leur ajouter un attribut unique data-btn="btn1" data-btn="btn2" ... data-btn="btn10"

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const div = document.querySelector("div");

div.innerHTML = arr
  .map((item) => {
    return `<button data-btn="btn${item}">button ${item}</button>`;
  })
  .join("");

console.log(div);
