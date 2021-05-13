const search = document.querySelector("input");
const container = document.querySelector(".container");

const namesOne = [
  "Lorie",
  "Lulu",
  "Faustino",
  "Sandi",
  "Dong",
  "Chanda",
  "Rosalia",
  "Kazuko",
  "Whitley",
  "Eulalia",
  "Talia",
  "Natividad",
  "Tiana",
  "Leonel",
  "Alberta",
  "Felisha",
  "Catalina",
  "Arlean",
  "Sid",
  "Sherill",
  "Yoshie",
  "Chase",
  "Gaynell",
  "Mohammed",
  "Daniell",
  "Hosea",
  "Joe",
  "Buck",
  "Melonie",
  "Lean",
  "Tamiko",
  "Inez",
  "Elwanda",
  "Dallas",
  "Shery",
  "Natashia",
  "Robt",
  "Wilda",
  "Imogene",
  "Casie",
  "Frida",
  "Jeanna",
  "Gertrudis",
  "Mel",
  "Dominga",
  "Odell",
  "Yetta",
  "Audry",
  "Fredda",
  "Giuseppe",
  "Wally",
  "Katrina",
  "Kayleigh",
  "Jeannie",
  "Tracy",
  "Randell",
  "Carie",
  "Silas",
  "Brook",
];

const namesTwo = [
  "Greta",
  "Arlean",
  "Chase",
  "Aide",
  "Jeni",
  "Azalee",
  "Josephina",
  "Kindra",
  "Wally",
  "Kemberly",
  "Ronnie",
  "Elicia",
  "Albertina",
  "Sumiko",
  "Vanesa",
  "Earl",
  "Manual",
  "Kiara",
  "Joe",
  "Adriana",
  "Deshawn",
  "Shirely",
  "Linda",
  "Buck",
  "Majorie",
  "Danuta",
  "Eliz",
  "Alberta",
  "Twila",
  "Isreal",
  "Nedra",
  "Antonietta",
  "Dominga",
  "Lorie",
  "Alicia",
  "Elliot",
  "Assunta",
  "Aileen",
  "Daniell",
  "Juanita",
  "Tawnya",
  "Stephania",
  "Alene",
  "Jimmy",
  "Caroll",
  "Randall",
  "Janel",
  "Russel",
  "Emery",
  "Lauri",
];

const fusionNames = [...namesOne, ...namesTwo];

const names = [...new Set(fusionNames)];

const option = document.querySelector("select");
option.addEventListener("change", displayMatches);

function displayMatches() {
  const sortBy = document.querySelector("select").value;

  switch (sortBy) {
    case "start": {
      const namesSortedByStart = names.filter((name) =>
        name.toLowerCase().startsWith(search.value.toLowerCase())
      );
      if (namesSortedByStart.length === 0) {
        container.innerHTML = `Aucun prénom ne correspond a ce que vous avez rentré pour : ${search.value}`;
      } else {
        container.innerHTML = namesSortedByStart
          .map((name) => `<li>${name}</li>`)
          .join("");
      }
      console.log("start");
      break;
    }

    case "end": {
      const namesSortedByEnd = names.filter((name) =>
        name.toLowerCase().endsWith(search.value.toLowerCase())
      );
      if (namesSortedByEnd.length === 0) {
        container.innerHTML = `Aucun prénom ne correspond a ce que vous avez rentré pour : ${search.value}`;
      } else {
        container.innerHTML = namesSortedByEnd
          .map((name) => `<li>${name}</li>`)
          .join("");
      }
      console.log("end");
      break;
    }
    case "all": {
      const regex = new RegExp(search.value, "gi");
      const namesSortedByAll = names.filter((name) => regex.test(name));
      if (namesSortedByAll.length === 0) {
        container.innerHTML = `Aucun prénom ne correspond a ce que vous avez rentré pour : ${search.value}`;
      } else {
        container.innerHTML = namesSortedByAll
          .map((name) => `<li>${name}</li>`)
          .join("");
      }
      console.log("all");
      break;
    }
    default: {
      container.innerHTML = `Sorry got wrong value for sortBy: <i><strong>${sortBy}</strong></i>`;
    }
  }
}

displayMatches();
search.addEventListener("keyup", displayMatches);

// regex way

// function findMatches(word, names) {
//   return names.filter((name) => {
//     const regex = new RegExp(word, "giy");
//     return name.match(regex);
//   });
// }

// function displayMatches() {
//   const namesMatched = findMatches(this.value, names);
//   if (namesMatched.length === 0) {
//     container.innerHTML = `Aucun prénom ne correspond a ce que vous avez rentré pour : ${this.value}`;
//   } else {
//     container.innerHTML = namesMatched
//       .map((name) => {
//         return `<li>
//         ${name}
//         </li>`;
//       })
//       .join("");
//   }
// }
