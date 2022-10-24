//div

const firstDiv = document.body.children[0]
const divOne = document.body.firstElementChild;
console.log(divOne);
//ul

const firstUL = document.body.children[1];
const ulOne = firstDiv.firstElementChild;

//second li "Pete"

const secondLi = firstUL.children[1];
const LiTwo = firstUL.lastElementChild;

LiTwo.textContent = "Richard";

console.log(LiTwo);

const secondUL = document.body.children[2];


console.log(secondUL);

const LiOne = firstUL.children[0]
LiOne.textContent = "Anton"

const SndLiOne = secondUL.children[0]
SndLiOne.textContent = "Anton"



