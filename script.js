let container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let divs = document.createElement("div");
    container.appendChild(divs);
    divs.style.height = "6.25vh";
    divs.style.background = "lightgrey";
    divs.style.border = "1px solid grey";
    divs.style.width="6.25%";
    divs.addEventListener("mouseover", () =>{
        divs.style.background="blue";
    })
    
  }
}

