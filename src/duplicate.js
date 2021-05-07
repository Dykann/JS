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

const names = [...namesOne, ...namesTwo];
console.log(names);

const filteredNames = [...new Set(names)];
console.log(filteredNames);

function findMatches(word, filteredNames) {
  return filteredNames.filter((name) => {
    const regex = new RegExp(word, "giy");
    return name.match(regex);
  });
}

function displayMatches() {
  const matchArr = findMatches(this.value, filteredNames);
  if (matchArr.length === 0) {
    container.innerHTML = `Aucun prénom ne correspond a ce que vous avez rentré pour : ${this.value}`;
  } else {
    container.innerHTML = matchArr
      .map((name) => {
        return `<li>
        ${name}
        </li>`;
      })
      .join("");
  }
}

search.addEventListener("change", displayMatches());
search.addEventListener("keyup", displayMatches);
