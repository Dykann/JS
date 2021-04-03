/*
I wanna get only people who are alive and from that, receive links that have this shape: "http://owen.com/blue-sky?w=210px&h=120em"
*/

const obj = [
  {
    name: "blue-sky",
    author: "Owen",
    width: 210,
    height: 120,
    isAlive: false,
  },
  {
    name: "green-nature",
    author: "Jake",
    width: 20,
    height: 312,
    isAlive: true,
  },
  {
    name: "red-lion",
    author: "Evan",
    width: 50,
    height: 213,
    isAlive: true,
  },
];

const personsAlive = obj
  .filter((person) => person.isAlive)
  .map(
    (person) =>
      `http://${person.author.toLowerCase()}.com/${person.name}?w=${
        person.width
      }px&h=${person.height}em`
  );

export { obj, personsAlive };
