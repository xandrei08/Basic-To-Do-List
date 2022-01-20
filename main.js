// function adaugaObiectiv() {
//   var obiectiv = document.getElementById("obiectiv").value;
//   var day = document.getElementById("day").value;
//   var date = document.getElementById("date").value;
//   if (obiectiv.length === 0) {
//     alert("Te rog adauga Obiectiv!");
//   } else if (day.length === 0) {
//     alert("Te rog adauga o prioritate mai mare de 0!");
//   } else if (date.length === 0) {
//     alert("Te rog adauga o data");
//     return;
//   } else {
//     document.getElementById("obiectiv").value = "";
//     document.getElementById("day").value = "";
//     document.getElementById("date").value = "";
//   }
//   let li = document.createElement("li");
//   let text = document.createTextNode(obiectiv);
//   li.appendChild(text);
//   li.classList.add("list-group-item");
//   let lista;
//   let appendDate = li.append(date);

//   switch (day) {
//     case "Monday":
//       lista = document.getElementById("day_1");
//       appendDate;
//       li.addEventListener("click", function () {
//         li.style.textDecoration = "line-through";
//         date.style.textAlign = "right";
//       });
//       break;
//     case "Tuesday":
//       lista = document.getElementById("day_2");
//       appendDate;
//       li.addEventListener("click", function () {
//         li.remove();
//       });
//       break;
//     case "Wednesday":
//       lista = document.getElementById("day_3");
//       appendDate;
//       li.addEventListener("click", function () {
//         li.style.textDecoration = "underline";
//       });
//       break;
//     case "Thursday":
//       lista = document.getElementById("day_4");
//       appendDate;
//       li.addEventListener("click", function () {
//         li.style.textDecoration = "line-through";
//         date.style.textDecoration = "line-through";
//       });
//       break;
//     case "Friday":
//       lista = document.getElementById("day_5");
//       appendDate;
//       li.addEventListener("click", function () {
//         li.style.textDecoration = "line-through";
//       });
//       break;
//     case "Things":
//       lista = document.getElementById("note-1");
//       appendDate;
//       li.addEventListener("click", function () {
//         li.style.textDecoration = "line-through";
//       });
//       break;
//     case "Note":
//       lista = document.getElementById("note-2");
//       appendDate;
//       li.addEventListener("click", function () {
//         li.style.textDecoration = "line-through";
//       });
//       break;
//     default:
//       alert("Type first letter of days with uppercase!");
//       return;
//   }
//   lista.appendChild(li);
// }
let btn = document.querySelector(".btn2");
let headerContainer = document.querySelector(".header-container");
let header = document.querySelector(".header");
let infos1;

function info() {
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let date = document.querySelector(".date").value;

  if (firstName.length === 0) {
    alert("Add your first Name");
  } else if (lastName.length === 0) {
    alert("Add your last name");
  } else if (date.length === 0) {
    alert("Please select date!");
  } else {
    document.querySelector(".firstName").value = " ";
    document.querySelector(".lastName").value = " ";
    document.querySelector(".date").value = " ";
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    li.append(firstName);
    li.classList.add("form-li");
    li1.append(lastName);
    li1.classList.add("form-li");
    li2.append(date);
    li2.classList.add("form-li");
    ul.append(li, li1, li2);
    console.log(btn);
    header.appendChild(ul);
    infos1 = header;
    btn.style.display = "initial";
    headerContainer.style.display = "none";
  }
}

function taskList() {
  let monday = document.querySelector(".monday").value;
  let tuesday = document.querySelector(".tuesday").value;
  let wednesday = document.querySelector(".wednesday").value;
  let thursday = document.querySelector(".thursday").value;
  let friday = document.querySelector(".friday").value;
  let things = document.querySelector(".things").value;
  let cardNotes = document.querySelector(".cardNotes").vlaue;
  let array = [monday, tuesday, wednesday, thursday, friday, things, cardNotes];
  for (let array1 of array) {
    if (array1.length === 0) {
      alert("It doesn't work");
    }
  }
}
