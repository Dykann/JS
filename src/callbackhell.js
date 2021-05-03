// setTimeout(() => {
//   console.log("first timeout after 1s...");
//   setTimeout(() => {
//     console.log("second timeout after another 2s...");
//     setTimeout(() => {
//       console.log("third timeout after another 1s...");
//       setTimeout(() => {
//         console.log("fourth timeout after another 1.5s...");
//         setTimeout(() => {
//           console.log("fifth timeout after another 1s...");
//           setTimeout(() => {
//             console.log("sixth timeout after another 2s...");
//             setTimeout(() => {
//               console.log("seventh timeout after another 1s...");
//               setTimeout(() => {
//                 console.log(
//                   "tada finished after another 2.5s! background-color is now red ;)"
//                 );
//                 document.body.style.backgroundColor = "red";
//               }, 2500);
//             }, 1000);
//           }, 2000);
//         }, 1000);
//       }, 1500);
//     }, 1000);
//   }, 2000);
// }, 1000);

const setBackground = new Promise((resolve) => {
  setTimeout(resolve, 1000);
})
  .then(() => {
    return new Promise((resolve) => {
      console.log("first timeout after 1s...");
      setTimeout(resolve, 2000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      console.log("second timeout after another 2s...");
      setTimeout(resolve, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      console.log("third timeout after another 1s...");
      setTimeout(resolve, 1500);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      console.log("fourth timeout after another 1.5s...");
      setTimeout(resolve, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      console.log("fifth timeout after another 1s...");
      setTimeout(resolve, 2000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      console.log("sixth timeout after another 2s...");
      setTimeout(resolve, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      console.log("seventh timeout after another 1s...");
      setTimeout(resolve, 2500);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      console.log(
        "tada finished after another 2.5s! background-color is now red ;"
      );
      document.body.style.backgroundColor = "red";
    });
  });
