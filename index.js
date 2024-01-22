let imgs =[
  'imgs/0be88bdf842786b7e055ee719d0a3435.jpg',
  'imgs/CristianoRonaldo.jpg',
  'imgs/download (1).jpeg',
  'imgs/download (2).jpeg',
  'imgs/download.jpeg',
  'imgs/e45aa-15477310368984-800.jpg',
  'imgs/OIP (1).jpeg',
  'imgs/OIP (2).jpeg',
  'imgs/OIP (3).jpeg',
  'imgs/OIP (4).jpeg',
  'imgs/OIP.jpeg',
  'imgs/R (1).jpeg',
  'imgs/R (2).jpeg',
  'imgs/R (3).jpeg',
  'imgs/R (4).jpeg',
  'imgs/R.jpeg'
];

const imgs2= imgs;

const container = document.createElement("div");
container.setAttribute("class","container");
document.body.appendChild(container);


for(let index in imgs){
  const ime = document.createElement("img");
  const button = document.createElement("button");
  // button.setAttribute("class","click");
  const div = document.createElement("div");
  div.setAttribute("class","div");
  button.textContent="Click";
  ime.setAttribute("src", imgs[index]);
  const randomIndex = Math.floor(Math.random() * imgs.length);
  ime.src = imgs[randomIndex];
  button.addEventListener("click" , rotate);
  div.appendChild(ime);
  div.appendChild(button);
  container.appendChild(div);
}

const reset = document.createElement("input");
reset.setAttribute("type","reset")
reset.setAttribute("class", "reset")
reset.addEventListener("click", resetimages);
document.body.appendChild(reset);


function rotate(event){
console.log(event.target.classList.toggle("rotatey"));
}

function resetimages(){
  location.reload();
}




// for(let key in imgs2){
//   const imes = document.createElement("img");
//   imes.setAttribute("src", imgs2[key]);
//   const randomIndex = Math.floor(Math.random() * imgs2.length);
//   imes.src = imgs2[randomIndex];
//   container.prepend(imes);
// }
