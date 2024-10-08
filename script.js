let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");

let size;

let widthSize = 100 / size;

createGrid(10);

function createGrid(size) {

  container.innerHTML='';

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let divs = document.createElement("div");

      // I think it is better to append an element only when you done with it,
      // For example if you have a a div that you have just created, and you want to change..
      // .. its background color, what is best I think, is to change the background first, and just then ..
      // Append it whereever you want
      // Here is a link to a chatGpt that I've just created it : https://chatgpt.com/share/6704f8bf-b9d0-8011-9061-fc86d2b0224e
      // And look for https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#exercise
          // Look for the hint
      container.appendChild(divs);
      divs.style.height = `calc(100% / ${size})`;
      divs.style.background = "white";
      divs.style.border = "1px solid grey";
      divs.style.width = `calc(100% /${size})`;

      divs.dataset.interactions = 0;


      divs.addEventListener("mouseover", () => {
        let interactions = parseInt(divs.dataset.interactions);

        if (interactions === 0) {
          let randomColor = generateColor();
          divs.style.backgroundColor= randomColor;
          
        } else if (interactions < 15){
          let currentColor = divs.style.backgroundColor;
          let [r, g, b] = currentColor.match(/\d+/g).map(Number);
          
          r = Math.floor(r - (r * 0.3));
          g = Math.floor(g - (g * 0.3));
          b = Math.floor(b - (b * 0.3));

          divs.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
        }
        divs.dataset.interactions = interactions + 1;

      });
    }
  }
}

btns.forEach((btn) =>{
  btn.addEventListener("click", () => {
    size = prompt("Digite o tamanho do grid (max 100)");
    if (size > 100) {
      size = 100;
      createGrid(size);
    } else {
      createGrid(size);
    }
  });
})



function generateColor() {
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);

  return `rgb(${r},${g},${b})`;
}

