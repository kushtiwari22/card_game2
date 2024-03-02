
const user1choice = [];
const user2choice = [];
const team1_button = document.getElementById("pack3");
const team2_button = document.getElementById("pack6");
let choice1;
let choice2;
for (let i = 0; i < 12; i++) {
    user1choice.push(document.getElementById(String(i)));
    user2choice.push(document.getElementById(String(i + 13)));
}
document.getElementById("score1").textContent=0;
document.getElementById("score2").textContent=0;
team1_button.addEventListener("click", function1);
team2_button.addEventListener("click", function2);
let h=0;
function function1() {
    if(h==0){
    choice1 = user1choice[Math.floor(Math.random() * 13)];
    choice1.style.marginTop = "30vh";
    h=1;
    }
}
function function2() {
    if(h==1){
    choice2 = user2choice[Math.floor(Math.random() * 13)];
    choice2.style.marginTop = "30vh";
    score(choice1, choice2);
    h=0;
    }
}
function score(choice1, choice2) {
  const mark1 = parseInt(choice1.id) + 13;
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


