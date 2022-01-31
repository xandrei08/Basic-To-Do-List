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

let monday = document.querySelector(".monday");
let tuesday = document.querySelector(".tuesday");
let wednesday = document.querySelector(".wednesday");
let thursday = document.querySelector(".thursday");
let friday = document.querySelector(".friday");
let weekend = document.querySelector(".weekend");
let things = document.querySelector(".things");
let cardNotes = document.querySelector(".cardNotes");
let array = [];
array.push(monday, tuesday, wednesday, thursday, friday, things, cardNotes);

// buttons
let btn1 = document.querySelector(".submit1");
let btn2 = document.querySelector(".submit2");
let btn3 = document.querySelector(".submit3");
let btn4 = document.querySelector(".submit4");
let btn5 = document.querySelector(".submit5");
let btn6 = document.querySelector(".submit6");
let btn7 = document.querySelector(".submit7");
let btn8 = document.querySelector(".submit8");
let count = 0;

// Cards Containers
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let card5 = document.querySelector(".card5");
let card6 = document.querySelector(".card6");
let card7 = document.querySelector(".card7");
let card8 = document.querySelector(".card8");

// Module
function module1(value, btn, card) {
  value = value.value;
  if (value.length === 0) {
    alert("Add your task please");
  } else {
    let li = document.createElement("li");
    let text = value;
    li.append(text);
    card.append(li);
    li.addEventListener("click", function () {
      li.remove();
    });
    count++;
    if (count === 5) {
      btn.disabled = true;
    }
  }
}

// Event Listenres
btn1.addEventListener("click", function () {
  module1(monday, btn1, card1);
});
btn2.addEventListener("click", function () {
  module1(tuesday, btn2, card2);
});
btn3.addEventListener("click", function () {
  module1(wednesday, btn3, card3);
});
btn4.addEventListener("click", function () {
  module1(thursday, btn4, card4);
});
btn5.addEventListener("click", function () {
  module1(friday, btn5, card5);
});
btn6.addEventListener("click", function () {
  module1(weekend, btn6, card6);
});
btn7.addEventListener("click", function () {
  module1(things, btn7, card7);
});
btn8.addEventListener("click", function () {
  module1(cardNotes, btn8, card8);
});
