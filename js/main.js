let title = document.querySelector(".title");
let allSquare = document.querySelector(".allSquare");
let select = document.querySelector(".select");
let turnMood = "";
let end = false;
let square = [];
function ternMood(id) {
  if (id === "chooseX") {
    turnMood = "x";
    select.style.display = "none";
    allSquare.style.display = "block";
    title.innerHTML = "X";
  } else {
    turnMood = "o";
    select.style.display = "none";
    allSquare.style.display = "block";
    title.innerHTML = "O";
  }
}
function turn(id) {
  let element = document.getElementById(id);
  if (end === false) {
    if (turnMood === "x" && element.innerHTML == "") {
      element.innerHTML = "x";
      turnMood = "o";
      title.innerHTML = "O";
    } else if (turnMood === "o" && element.innerHTML == "") {
      element.innerHTML = "o";
      turnMood = "x";
      title.innerHTML = "X";
    }
  }
  winner();
}
function done(num1, num2, num3) {
  title.innerHTML = `${square[num1]} Winner`;
  document.getElementById("item" + num1).style.backgroundColor = "#000";
  document.getElementById("item" + num2).style.backgroundColor = "#000";
  document.getElementById("item" + num3).style.backgroundColor = "#000";
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3000);
  end = true;
}
function winner() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById("item" + i).innerHTML;
  }
  if (square[1] == square[2] && square[1] == square[3] && square[1] != "") {
    done(1, 2, 3);
  }
  if (square[4] == square[5] && square[4] == square[6] && square[4] != "") {
    done(4, 5, 6);
  }
  if (square[7] == square[8] && square[7] == square[9] && square[7] != "") {
    done(7, 8, 9);
  }
  if (square[1] == square[4] && square[1] == square[7] && square[1] != "") {
    done(1, 4, 7);
  }
  if (square[2] == square[5] && square[2] == square[8] && square[2] != "") {
    done(2, 5, 8);
  }
  if (square[3] == square[6] && square[3] == square[9] && square[3] != "") {
    done(3, 6, 9);
  }
  if (square[1] == square[5] && square[1] == square[9] && square[5] != "") {
    done(1, 5, 9);
  }
  if (square[3] == square[5] && square[3] == square[7] && square[3] != "") {
    done(3, 5, 7);
  }
  if (
    square[1] != "" &&
    square[2] != "" &&
    square[3] != "" &&
    square[4] != "" &&
    square[5] != "" &&
    square[6] != "" &&
    square[7] != "" &&
    square[8] != "" &&
    square[9] != ""
  ) {
    location.reload();
  }
}
