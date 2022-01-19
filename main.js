function adaugaObiectiv() {
  var obiectiv = document.getElementById("obiectiv").value;
  var day = document.getElementById("day").value;
  var date = document.getElementById("date").value;
  if (obiectiv.length === 0) {
    alert("Te rog adauga Obiectiv!");
  } else if (day.length === 0) {
    alert("Te rog adauga o prioritate mai mare de 0!");
  } else if (date.length === 0) {
    alert("Te rog adauga o data");
    return;
  } else {
    document.getElementById("obiectiv").value = "";
    document.getElementById("day").value = "";
    document.getElementById("date").value = "";
  }
  let li = document.createElement("li");
  let text = document.createTextNode(obiectiv);
  li.appendChild(text);
  li.classList.add("list-group-item");
  let lista;
  let appendDate = li.append(date);

  switch (day) {
    case "Monday":
      lista = document.getElementById("day_1");
      appendDate;
      li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
        date.style.textAlign = "right";
      });
      break;
    case "Tuesday":
      lista = document.getElementById("day_2");
      appendDate;
      li.addEventListener("click", function () {
        li.remove();
      });
      break;
    case "Wednesday":
      lista = document.getElementById("day_3");
      appendDate;
      li.addEventListener("click", function () {
        li.style.textDecoration = "underline";
      });
      break;
    case "Thursday":
      lista = document.getElementById("day_4");
      appendDate;
      li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
        date.style.textDecoration = "line-through";
      });
      break;
    case "Friday":
      lista = document.getElementById("day_5");
      appendDate;
      li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
      });
      break;
    case "Things":
      lista = document.getElementById("note-1");
      appendDate;
      li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
      });
      break;
    case "Note":
      lista = document.getElementById("note-2");
      appendDate;
      li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
      });
      break;
    default:
      alert("Type first letter of days with uppercase!");
      return;
  }
  lista.appendChild(li);
}
