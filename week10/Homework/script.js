let toggleIMG = document.getElementById("toggle-img")

let swaptoggleIMG = function() {
    console.log("toggleIMG");
    if(toggleIMG.alt === "menutoggle"){
        toggleIMG.src = "images/closetoggle.png";
        toggleIMG.alt = "closemenutoggle";
    }
    else{
        toggleIMG.src = "images/toggle.png";
        toggleIMG.alt = "menutoggle";
         
    }
}

toggleIMG.addEventListener("click", swaptoggleIMG);



let firstElephantIMG = document.getElementById("elephant1");
let secondElephantIMG = document.getElementById("elephant2");
let thirdElephantIMG = document.getElementById("elephant3");
let fourthElephantIMG = document.getElementById("elephant4");
let bigIMG = document.getElementById("bigImage");


let swapFirstElephant = function () {
    bigIMG.src = "images/elephant1.jpg";
        bigIMG.alt = "First elephant";
}

let swapSecondElephant = function () {
     console.log("secondIMG");
        bigIMG.src = "images/elephant2.jpg";
        bigIMG.alt = "Second elephant";
   
}

let swapThirdElephant = function () {
    bigIMG.src = "images/elephant3.jpg";
        bigIMG.alt = "Third elephant";
}

let swapFourthElephant = function () {
    bigIMG.src = "images/elephant4.jpg";
        bigIMG.alt = "Fourth elephant";
}



firstElephantIMG.addEventListener("click", swapFirstElephant);
secondElephantIMG.addEventListener("click", swapSecondElephant);
thirdElephantIMG.addEventListener("click", swapThirdElephant);
fourthElephantIMG.addEventListener("click", swapFourthElephant);