/* Imagine we receive these datas separately (3 fetches) from the backend and the id is what can link characteristics to each other.
I want to end up with 1 single array containing every attribute for a user.

For example:
{
  name: "Paul",
  age: 48,
  hobbies: ["guitare", "football", "coding"]
}
*/

const usernames = [
  { name: "Paul", id: 1 },
  { name: "Luc", id: 2 },
  { name: "Pierre", id: 3 },
  { name: "Tarik", id: 4 },
];

const ages = [
  { age: 48, id: 1 },
  { age: 3, id: 2 },
  { age: 30, id: 3 },
  { age: 89, id: 4 },
];

const hobbies = [
  { hobby: ["guitare", "football", "coding"], id: 1 },
  { hobby: ["crying", "gambling"], id: 2 },
  { hobby: ["teaching"], id: 3 },
  { hobby: ["cooking", "jumping", "basketball"], id: 4 },
];

const newArr = usernames.map((user, i) => {
  return {
    name: user.name,
    age: ages[i].age,
    id: user.id,
    hobby: hobbies[i],
  };
});

const findUser = newArr.find((user) => user.name === "Luc");

export { usernames, ages, hobbies, findUser };
