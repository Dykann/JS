const articles = document.querySelectorAll(".group-wrapper");

const titleTags = document.querySelectorAll(".titre-wrapper");
const titlesArr = [...titleTags];
const titles = titlesArr.map((titre) => titre.innerText);

articles.forEach((article, index) => {
  article.innerHTML = `<h1 class="jvc-title">${titles[index]}<span>+</span></h1>`;
});

articles.forEach((article, index) => {
  article.innerHTML = `<h1 class="jvc-title">${article.innerText}<span>+</span></h1>`;
});

// FAUX IL NE FAUT pas map car à chaque article qui est innerHTML, on leur renvoie tout l'array (contenant tous les titres)

// articles.forEach((article) => {
//   article.innerHTML = titles.map((title, i) => {
//     return `<h1 class="jvc-title">${title[i]}<span>+</span></h1>`;
//   });
// });

// FAUX car si on insère [index] cela va cibler la INDEXième lettre (allant de 0 à 17) à chaque article

// articles.forEach((article, index) => {
//   article.innerHTML = `<h1 class="jvc-title">${article.innerText[index]}<span>+</span></h1>`;
// });
