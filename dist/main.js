(()=>{"use strict";const e=[{name:"blue-sky",author:"Owen",width:210,height:120,isAlive:!1},{name:"green-nature",author:"Jake",width:20,height:312,isAlive:!0},{name:"red-lion",author:"Evan",width:50,height:213,isAlive:!0}],a=(e.filter((e=>e.isAlive)).map((e=>`http://${e.author.toLowerCase()}.com/${e.name}?w=${e.width}px&h=${e.height}em`)),[{name:"Paul",id:1},{name:"Luc",id:2},{name:"Pierre",id:3},{name:"Tarik",id:4}]),i=[{age:48,id:1},{age:3,id:2},{age:30,id:3},{age:89,id:4}],t=[{hobby:["guitare","football","coding"],id:1},{hobby:["crying","gambling"],id:2},{hobby:["teaching"],id:3},{hobby:["cooking","jumping","basketball"],id:4}];a.map(((e,a)=>({name:e.name,age:i[a].age,id:e.id,hobby:t[a]}))).find((e=>"Luc"===e.name));const o={firstName:"Titi",name:"Khaov",age:22,isHuman:!0,hobbies:["coding","football","league of legends"]},l=(localStorage.setItem("Dykann",JSON.stringify(o)),JSON.parse(localStorage.getItem("Dykann")));var n,r,s,g;console.log(["titi","chaemi","lara"].map((e=>e.charAt(0).toUpperCase()+e.slice(1)))),console.log(function(e){const a=e.slice(0,-4);return"#".repeat(a.length)+e.slice(-4)}("12343214")),console.log(e),console.log(a,i,t),console.log((g="",s="tracks",!1===(n={2548:{albumTitle:"Slippery When Wet",artist:"Bon Jovi",tracks:["Let It Rock","You Give Love a Bad Name"]},2468:{albumTitle:"1999",artist:"Prince",tracks:["1999","Little Red Corvette"]},1245:{artist:"Robert Palmer",tracks:[]},5439:{albumTitle:"ABBA Gold"}})[r=5439].hasOwnProperty("tracks")?n[r][s]=[g]:delete n[r][s],n)),console.log(JSON.stringify(o)),console.log(l)})();