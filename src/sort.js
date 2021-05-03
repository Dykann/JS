const people = ["Luc", "Pierre", "Mystic", "Hew", "Mak"];
const ages = [23, 54, 44, 21, 18];
const locations = ["Paris", "Trappes", "Bangkok", "Tokyo", "Seoul"];
const container = document.querySelector(".container");

// avoir tout ca en 1 seul array
// {
//   name: “Luc”,
//   age: 23,
//   location: “Paris”
// }

const persons = people.map((person, index) => {
  return {
    name: person,
    age: ages[index],
    location: locations[index],
  };
});

console.log(persons);

// l’injecter dans le DOM et l'afficher de cette maniere : Luc - 23 ans - Paris

container.innerHTML = persons
  .map((person) => {
    return `<li>${person.name} - ${person.age} - ${person.location}</li>`;
  })
  .join("");

// creer 3 boutons qui va trier l’array et l’afficher dans le DOM par :

// 1) ordre decroissant age

const btnAge = document.querySelector(".btn-age");

btnAge.addEventListener("click", function () {
  const sortedByDescAge = [...persons].sort((firstPerson, secondPerson) => {
    if (firstPerson.age > secondPerson.age) {
      return -1;
    } else {
      return 1;
    }
  });

  console.table(sortedByDescAge);
  container.innerHTML = sortedByDescAge
    .map((person) => {
      return `<li>${person.name} - ${person.age} - ${person.location}</li>`;
    })
    .join("");
});

// 2) ordre croissant alphabetique ville

const btnCity = document.querySelector(".btn-city");

btnCity.addEventListener("click", function () {
  const sortedByAscCity = [...persons].sort((firstPerson, secondPerson) => {
    if (firstPerson.location > secondPerson.location) {
      return 1;
    } else {
      return -1;
    }
  });

  console.table(sortedByAscCity);
  container.innerHTML = sortedByAscCity
    .map((person) => {
      return `<li>${person.name} - ${person.age} - ${person.location}</li>`;
    })
    .join("");
});

// 3) ordre decroissant alphabetique name

const btnName = document.querySelector(".btn-name");

btnName.addEventListener("click", function () {
  const sortedByDescName = persons.sort((firstPerson, secondPerson) => {
    if (firstPerson.name > secondPerson.name) {
      return -1;
    } else {
      return 1;
    }
  });

  console.table(sortedByDescName);
  container.innerHTML = [...sortedByDescName]
    .map((person) => {
      return `<li>${person.name} - ${person.age} - ${person.location}</li>`;
    })
    .join("");
});
