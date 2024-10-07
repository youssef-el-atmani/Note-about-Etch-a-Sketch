let container = document.querySelector(".container");
let btn = document.querySelector(".btn");

let size;

let widthSize = 100 / size;

function createGrid(size) {

  container.innerHTML='';

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let divs = document.createElement("div");
      container.appendChild(divs);
      divs.style.height = `calc(100% / ${size})`;
      divs.style.background = "lightgrey";
      divs.style.border = "1px solid grey";
      divs.style.width = `calc(100% /${size})`;
      divs.addEventListener("mouseover", () => {
        divs.style.background = `${generateColor()}`;
      });
    }
  }
}

btn.addEventListener("click", () => {
  size = prompt("Digite o tamanho do grid (max 100)");
  if (size > 100) {
    size = 100;
    createGrid(size);
  } else {
    createGrid(size);
  }
});


function generateColor() {
  const letters =  '0123456789ABCDEF';
  let color = '#';

  for (let i=0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)];
  }

  return color;
}

