//SELECTEURS
// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");
// // console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

// Click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
const mousemove = document.querySelector(".mousemove");
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid blue";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.7)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0,0,0,1)";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// document.addEventListener("keypress", (e) => {
//   key.textContent = e.key;
//   if (e.key === "a") {
//     keypressContainer.style.background = "pink";
//     ring(e.key);
//   } else if (e.key === "b") {
//     keypressContainer.style.background = "teal";
//     ring(e.key);
//   } else {
//     keypressContainer.style.background = "red";
//     ring("c");
//   }
// });
const inputName = document.querySelector('input[type="text"]');
const nav = document.querySelector("nav");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else if (window.scrollY < 120) {
    nav.style.top = "-50px";
  }
});

//--------------------------------------

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); //-----> permet de empecher le rechargement de la page
  //-------> exeptionnellement dans une balise de type checkbox l'Id n'a pas besoin d'etre déclaré dans une variable :
  if (cgv.checked) {
    //---------> autre maniere d'écrire qui également utilisé dans ce cas, parent > enfant > ect.
    //-------> innerHTML et guillemmé touche 7 pour injecter des balises.
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>language : ${language}</h4>`;
  } else {
    alert("Veuillez cocher les CGV");
  }
});

//--------------------------------------

// Load event

window.addEventListener("load", () => {
  console.log("Document chargé !");
});

//--------------------------------------

// Les forEach (en français : pour chacun)

//  permet de pointer plusieurs élements de même Nom, avec document.querySelectorAll, pour qu'il ai le même comportement :
//
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});
