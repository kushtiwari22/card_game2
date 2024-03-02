// const user1choice = [];
// const a = document.getElementById("0");
// const b = document.getElementById("1");
// const c = document.getElementById("2");
// user1choice.push(a, b, c);
// const user2choice = [];
// const d = document.getElementById("3");
// const e = document.getElementById("4");
// const f = document.getElementById("5");
// user2choice.push(d,e,f);
// const team1_button = document.getElementById("pack3")
// const team2_button = document.getElementById("pack6");
// let h=0
// let k=0
// let choice1;
// let choice2;
// function function1() {
//     choice1=user1choice[Math.floor(3*Math.random())]
//     choice1.style.marginTop = "30vh";
//     h=choice1;
// }
// function function2() {
//     choice2=user2choice[Math.floor(3*Math.random())]
//     choice2.style.marginTop = "30vh";
//     k=choice2;
//     score(h,k);
// }
// function score(h,k) {
//   let mark1=parseInt(h.id)+3;
//   let mark2=parseInt(k.id) ;
//   console.log(mark1);
//   console.log(mark2);
//   if(mark1>mark2){
//     document.getElementById("score1").innerHTML=parseInt(document.getElementById("score1").innerHTML)+1
//     choice1.style=false;
//     choice2.style=false;
//   }
//   if (mark1<mark2){
//     document.getElementById("score2").innerHTML=parseInt(document.getElementById("score2").innerHTML)+1;
//     choice1.style=false;
//     choice2.style=false;
//   }
//   if (mark1==mark2){
//     choice1.style=false;
//     choice2.style=false;
//   }
// }
const user1choice = [];
const user2choice = [];
const team1_button = document.getElementById("pack3");
const team2_button = document.getElementById("pack6");
let choice1;
let choice2;

// Populate user choices
for (let i = 0; i < 3; i++) {
    user1choice.push(document.getElementById(String(i)));
    user2choice.push(document.getElementById(String(i + 3)));
}
document.getElementById("score1").textContent=0;
document.getElementById("score2").textContent=0;
team1_button.addEventListener("click", function1);
team2_button.addEventListener("click", function2);
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
        setTimeout(function() {
          choice1.style.display = "none"; 
          choice2.style.display = "none"; 
        }, 1000);
      } else if (mark1 < mark2) {
        document.getElementById("score2").textContent = +document.getElementById("score2").textContent + 1;
        setTimeout(function() {
          choice1.style.display = "none"; 
          choice2.style.display = "none"; 
        }, 1000); 
      } else {
        setTimeout(function() {
          choice1.style.display = "none";
          choice2.style.display = "none";
        }, 1000);
      }
}

