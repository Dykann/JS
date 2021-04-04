export { dykann, toJSON, toJS };

// Stocker des données

const dykann = {
  firstName: "Titi",
  name: "Khaov",
  age: 22,
  isHuman: true,
  hobbies: ["coding", "football", "league of legends"],
};

const toJSON = localStorage.setItem("Dykann", JSON.stringify(dykann));

// Recevoir des données

const toJS = JSON.parse(localStorage.getItem("Dykann"));
