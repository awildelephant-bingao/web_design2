
let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");


let categoryUpdate = function(){
    let elephantsSubcats = ["elephant1", "elephant2", "elephant3"];
    let pandasSubcats = ["panda1", "panda2", "panda3"];
    let giraffesSubcats = ["giraffe1", "giraffe2", "giraffe3"];

    subSelect.innerHTML = "";

    if(catSelect.value === "elephant"){
        elephant1IMG.src="images/elephant1.jpg";
        elephant1IMG.alt="Elephant 1";
        console.log("elephant");
        elephantsSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "panda"){
        elephant1IMG.src="images/panda1.jpg";
        elephant1IMG.alt="Panda 1";
        console.log("panda");
        pandasSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "giraffe"){
        elephant1IMG.src="images/giraffe1.jpg";
        elephant1IMG.alt="Giraffe 1";
        console.log("giraffe");
        giraffesSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
}


catSelect.addEventListener("change", categoryUpdate);

let carousel = document.getElementById("carousel");
let carouselIMG = document.getElementById("carouselIMG");

let images = [
        "images/piggy1.jpg",
        "images/piggy2.jpg",
        "images/piggy3.jpg"
    ]

let imgChange = function(){
    if (carouselIMG.alt === "Piggy 1"){
        carouselIMG.src = images[1];
        carouselIMG.alt = "Piggy 2";
    }

    else if (carouselIMG.alt === "Piggy 2"){
        carouselIMG.src = images[2];
        carouselIMG.alt = "Piggy 3";
    }

    else if (carouselIMG.alt === "Piggy 3"){
        carouselIMG.src = images[0];
        carouselIMG.alt = "Piggy 1";
    }

}

window.addEventListener("load",function(){
    setInterval(imgChange,3000);
});