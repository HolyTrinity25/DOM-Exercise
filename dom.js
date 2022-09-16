//1.
document.getElementsById("container");
//2.
document.querySelector("#container");
//3.
document.getElementsByClassName("second");
//4.
document.querySelector("ol .third");
//5.
let larryLiv = document.querySelector("#container");
larryLiv.innerText = "HELLO";
//6.
let runner = document.querySelector(".runner");
runner.classList.add("main");
//7.
let runner2 = document.querySelector(".runner2");
runner2.classList.remove("main");
//8.
let newLi = document.createElement("li");
//9.
newLi.innerText = "four";
//10.
let list =document.querySelector("ul");
list.appendChild(newLi);

//11.
let liInsideOl = document.querySelectorAll("ol li");

for(let i = 0; i <liInsideOl.length;i++){
    liInsideOl[i].style.backgroundColor = "green";
};

//12. Remove the div with a class of footer
let footer = document.querySelector(".footer");
footer.remove();






