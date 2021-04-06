/*

  JS TEST
  
  1) Je veux que tu me récupéres la data de ce endpoint : https://jsonplaceholder.typicode.com/posts
  
  2) Ensuite que tu gardes la data mais modifie la forme de chaque "id" :
  1 --> 001
  2 --> 002
  50 --> 0050
  
  3) Puis que tu ajoutes une propriété "name" à la data :
  {
    "userId": 1,
    "id": 006,
    "title": ...,
    "body": ...,

    "name": 'Leanne Graham'
  }
  
  S'il n'y a pas de name, afficher "name": "unnamed"

  Voici la liste des noms par ordre croissant d'index :
  
*/

export const names = [
  "Leanne Graham",
  "Ervin Howell",
  "Clementine Bauch",
  "Patricia Lebsack",
  "Chelsey Dietrich",
  "Mrs. Dennis Schulist",
  "Kurtis Weissnat",
  "Nicholas Runolfsdottir V",
  "Glenna Reichert",
  "Clementina DuBuque",
];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) =>
    data.map((user, i) => {
      return {
        ...user,
        id: `00${user.id}`,
        name: names[i] || "unnamed",
      };
    })
  )
  .then((newData) => console.log(newData));
