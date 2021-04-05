// toUpper
import { toUpper } from "./upper.js";
console.log(toUpper(["titi", "chaemi", "lara"]));

// Maskify
import { maskify } from "./maskify.js";
console.log(maskify("12343214"));

// Filter
import * as filter from "./filter.js";
console.log(filter.obj);
// console.log(filter.personsAlive);

// Map
import * as map from "./map.js";
console.log(map.usernames, map.ages, map.hobbies);

// Object
import * as object from "./object.js";
console.log(object.updateRecords(object.collection, 5439, "tracks", ""));

// LocalStorage
import * as json from "./json.js";
console.log(JSON.stringify(json.dykann));
console.log(json.toJS);

// Fetch
import { names } from "./fetch.js";
console.log(names);
