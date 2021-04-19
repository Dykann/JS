// Je veux que tu me recuperes tous les titres des articles et que tu les transformes pour les avoir à ce format :
// "<h1 class="jvc-title">Age of Empires IV et Mythologies : quel avenir ?<span>+</span></h1>"
// Si la position du titre est un multiple de 3 alors ajouter <span class="special">SPECIAL</span>

const titles = document.querySelectorAll(".titre-wrapper");

titles.forEach((title, i) => {
  if (i % 3 === 0) {
    return (title.outerHTML = `<h1 class="jvc-title"><span class="special">SPECIAL</span>${title.innerText}<span>+</span></h1>`);
  } else {
    return (title.outerHTML = `<h1 class="jvc-title">${title.innerText}<span>+</span></h1>`);
  }
});
