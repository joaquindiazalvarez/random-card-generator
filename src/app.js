/* eslint-disable */
import "bootstrap";
import "./style.css";
let button = document.querySelector(".btn");
let count = 10;
let reset = false;
window.onload = function() {
  //write your code here
  let symbol_club =
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-suit-club-fill" viewBox="0 0 16 16"><path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"/></svg>';
  let symbol_spade =
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16"><path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"/></svg>';
  let symbol_diamond =
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16"><path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"/></svg>';
  let symbol_heart =
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/></svg>';

  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let type = ["club", "spade", "diamond", "heart"];
  let number_random = Math.floor(Math.random() * 13);
  let type_random = Math.floor(Math.random() * 4);
  let parent = document.querySelector(".container-fluid div");
  function addContent(symbol, number) {
    let add =
      '<div id="icono1">' +
      symbol +
      "</div>" +
      number +
      '<div id="icono2">' +
      symbol +
      "</div>";
    parent.innerHTML = add;
  }
  if (type[type_random] === "club" || type[type_random] === "spade") {
    if (type[type_random] === "club") {
      addContent(symbol_club, number[number_random]);
    }
    if (type[type_random] === "spade") {
      addContent(symbol_spade, number[number_random]);
    }
    if (parent.className === "card-red") {
      document.querySelector(".card-red").className = "card-black";
    }
  }
  if (type[type_random] === "diamond" || type[type_random] === "heart") {
    if (type[type_random] === "diamond") {
      addContent(symbol_diamond, number[number_random]);
    }
    if (type[type_random] === "heart") {
      addContent(symbol_heart, number[number_random]);
    }
    if (parent.className === "card-black") {
      document.querySelector(".card-black").className = "card-red";
    }
  }
  button.addEventListener("click", window.onload);
  let timer = document.querySelector(".timer");
  let interval = window.setInterval(() => {
    timer.innerHTML = "Generating new card in " + count + " Seconds...";
    count--;
    if (count === -1) {
      window.clearInterval(interval);
      count = 10;
      window.onload();

      return 0;
    }
  }, 1000);
};
