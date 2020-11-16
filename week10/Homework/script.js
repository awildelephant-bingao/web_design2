let toggleIMG = document.getElementById("toggle-img")

let swaptoggleIMG = function() {
    if(toggleIMG.alt === "menutoggle"){
        toggleIMG.src = "images/closetoogle.png";
        toggleIMG.alt = "closemenutoggle";
    }
    else{
        toggleIMG.src = "images/toggle.png";
        toggleIMG.alt === "menutoggle";
         
    }
}

toggleIMG.addEvenListener("click", swaptoggleIMG);



let firstElephantIMG = document.getElementById("elephant1");
let secondElephantIMG = document.getElementById("elephant2");
let thirdElephantIMG = document.getElementById("elephant3");
let fouthElephantIMG = document.getElementById("elephant4");
let bigIMG = document.getElementById("bigImage");


let swapFirstElephant = function () {
    if (bigIMG.alt === "First elephant") {
        bigIMG.src = "images/elephant2.jpg";
        bigIMG.alt = "Second elephant";
    } else {
        bigIMG.src = "images/elephant1.jpg" 
        bigIMG.alt = "First elephant";

    }
}

let swapSecondElephant = function () {
    if (bigIMG.alt === "First elephant") {
        bigIMG.src = "images/elephant3.jpg";
        bigIMG.alt = "Third elephant";
    } else {
        bigIMG.src = "images/elephant1.jpg" 
        bigIMG.alt = "First elephant";
    }
}

let swapThirdElephant = function () {
    if (bigIMG.alt === "First elephant") {
        bigIMG.src = "images/elephant3.jpg";
        bigIMG.alt = "Third elephant";
    } else {
        bigIMG.src = "images/elephant1.jpg" 
        bigIMG.alt = "First elephant";
    }
}

let swapFourthElephant = function () {
    if (bigIMG.alt === "First elephant") {
        bigIMG.src = "images/elephant4.jpg";
        bigIMG.alt = "Fourth elephant";
    } else {
        bigIMG.src = "images/elephant1.jpg" 
        bigIMG.alt = "First elephant";
    }
}



firstElephantIMG.addEvenListener("click", swapFirstElephant);
secondElephantIMG.addEvenListener("click", swapSecondElephant);
thirdElephantIMG.addEvenListener("click", swapThirdElephant);
fourthElephantIMG.addEvenListener("click", swapFourthElephant);