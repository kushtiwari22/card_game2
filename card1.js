
const user1choice = [];
const user2choice = [];
const team1_button = document.getElementById("pack3");
const team2_button = document.getElementById("pack6");
let choice1;
let choice2;
for (let i = 0; i < 3; i++) {
    user1choice.push(document.getElementById(String(i)));
    user2choice.push(document.getElementById(String(i + 3)));
}
document.getElementById("score1").textContent=0;
document.getElementById("score2").textContent=0;
team1_button.addEventListener("click", function1);
team2_button.addEventListener("click", function2);
// let king1=document.getElementsByClassName("king1");
// let king2=document.getElementsByClassName("king2");
function function1() {
    choice1 = user1choice[Math.floor(Math.random() * 3)];
    choice1.style.marginTop = "30vh";
}

// Function to handle team 2 choice
function function2() {
    choice2 = user2choice[Math.floor(Math.random() * 3)];
    choice2.style.marginTop = "30vh";
    score(choice1, choice2);
}
function score(choice1, choice2) {
  const mark1 = parseInt(choice1.id) + 3;
  const mark2 = parseInt(choice2.id);

  if (mark1 > mark2) {
      document.getElementById("score1").textContent = +document.getElementById("score1").textContent + 1;
      var king1Elements = document.getElementsByClassName("king1");
      var king2Elements = document.getElementsByClassName("king2");
      for (var i = 0; i < king1Elements.length; i++) {
          king1Elements[i].style.zIndex = 1;
      }
      setTimeout(function() {
          choice1.removeAttribute('style'); 
          choice2.removeAttribute('style'); 
          for (var i = 0; i < king2Elements.length; i++) {
              king1Elements[i].style.zIndex = -1;
          }
      }, 2000);
  } else if (mark1 < mark2) {
      document.getElementById("score2").textContent = +document.getElementById("score2").textContent + 1;
      var king1Elements = document.getElementsByClassName("king1");
      var king2Elements = document.getElementsByClassName("king2");
      for (var i = 0; i < king2Elements.length; i++) {
          king2Elements[i].style.zIndex = 1;
      }
      setTimeout(function() {
          choice1.removeAttribute('style'); 
          choice2.removeAttribute('style');
          for (var i = 0; i < king1Elements.length; i++) {
              king2Elements[i].style.zIndex = -1;
          }
      }, 2000); 
  } else {
      setTimeout(function() {
          choice1.removeAttribute('style'); 
          choice2.removeAttribute('style'); 
      }, 2000);
  }
}


