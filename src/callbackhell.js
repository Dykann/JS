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
  resolve();
});

setBackground
  .then(() => {
    setTimeout(() => {
      console.log("first timeout after 1s...");
    }, 1000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("second timeout after another 2s...");
    }, 3000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("third timeout after another 1s...");
    }, 4000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("fourth timeout after another 1.5s...");
    }, 5500);
  })
  .then(() => {
    setTimeout(() => {
      console.log("fifth timeout after another 1s...");
    }, 6500);
  })
  .then(() => {
    setTimeout(() => {
      console.log("sixth timeout after another 2s...");
    }, 8500);
  })
  .then(() => {
    setTimeout(() => {
      console.log("seventh timeout after another 1s...");
    }, 9500);
  })
  .then(() => {
    setTimeout(() => {
      console.log(
        "tada finished after another 2.5s! background-color is now red ;)"
      );
      document.body.style.backgroundColor = "red";
    }, 12000);
  });
