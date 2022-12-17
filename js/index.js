"use strick";

// 1. pick the documents from html by id
// 2. insert a click function to target the div clicked
// 3. remove the class bg-blue
// 4. remove the class that has the red ball
// 5. reduce the notification number by one...

const mark = document.getElementById("mark");
const angela = document.getElementById("angela");
const jacob = document.getElementById("jacob");
const notification = document.getElementById("notification");
const allRead = document.getElementById("allRead");
let unRead = document.querySelectorAll(".bg-blue-50");

const rizky = document.getElementById("rizky");
const hide = document.getElementById("hide");

let score = unRead.length;

console.log(unRead);

unRead.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clicked");
    item.classList.remove("bg-blue-50");
    unRead = document.querySelectorAll(".bg-blue-50");
    notification.innerHTML = unRead.length;
  });
});
// const read = (event) => {
//     event.target.classList.remove('bg-blue-50');
//     if (score > 0) {
//         score--;
//     }
//     notification.innerHTML = score;
// }

allRead.addEventListener("click", () => {
  unRead.forEach((message) => {
    message.classList.remove("bg-blue-50");
    unRead = document.querySelectorAll(".bg-blue-50");
    notification.innerHTML = unRead.length;
  });
});

// const markAll = () => {
//     mark.classList.remove('bg-blue-50');
//     angela.classList.remove('bg-blue-50');
//     jacob.classList.remove('bg-blue-50');
//     notification.innerHTML = 0;
// };

rizky.addEventListener("click", () => {
  hide.classList.toggle("hidden");
  // hide.style.transform = "translate(10px)"
});

// function read(event) {
//     console.log("clicked");
// }

// const btn = document.getElementById("btn").addEventListener("click", function() {
//     console.log("btn");
// })
