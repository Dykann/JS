const colorsNode = document.querySelectorAll(
  ".w3-col.l4.m6.w3-center.colorbox"
);

const colorsObj = [...colorsNode].map((color) => {
  return {
    name: color.querySelector(".colornamespan").innerText,
    hex: color.querySelector(".colorhexspan").innerText,
  };
});

// const colorsObj = [...colorsNode].map((color, index) => {
//   return {
//     name: document.querySelectorAll(".colornamespan")[index].innerText,
//     hex: document.querySelectorAll(".colorhexspan")[index].innerText,
//   };
// });

const div = document.querySelector("#main");

div.innerHTML = colorsObj
  .map((color) => {
    return `<div>
  <p>${color.name}</p>
  <span style="background-color:${color.hex};display:inline-block;width:300px;height:100px"></span>
  </div>`;
  })
  .join("");
