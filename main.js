const ekleButonu = document.getElementById("addBtn");
// console.log(ekleButonu);

const silmeButonu = document.getElementById("clearBtn")
console.log(silmeButonu);


const inputButonu = document.getElementById("inputText")
// console.log(inputButonu);

const toDoContainer = document.getElementById("todo-container")
// console.log(toDoContainer);

ekleButonu.addEventListener("click", function () {
 event.preventDefault();

 const paragraph = document.createElement("p");
 paragraph.classList.add("paragraph-style");

 toDoContainer.appendChild(paragraph);
 paragraph.innerHTML = inputButonu.value;
 inputButonu.value = "";

 paragraph.addEventListener("click",
  function () {
   paragraph.style.textDecoration = "line-through"

  })

 silmeButonu.addEventListener("click",
  function () {
   paragraph.style.display = "none"
  })


})

