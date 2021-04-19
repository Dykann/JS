const colors = document.querySelectorAll(".w3-col.l4.m6.w3-center.colorbox");
const arr = [...colors];

const colorsObj = arr.map((color) => {
  return {
    name: color.querySelector(".colornamespan").innerText,
    hex: color.querySelector(".colorhexspan").innerText,
  };
});

const div = document.querySelector("#main");

div.outerHTML = colorsObj
  .map((obj, i) => {
    return `<div>
  <p style="background-color:${obj.hex}">${obj.name}</p>
  <span style="background-color:${obj.hex}"></span>
  </div>`;
  })
  .join("");
