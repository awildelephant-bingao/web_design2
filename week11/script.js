let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let carousel = document.getElementById("carousel");
let carouselIMG = document.getElementById("carouselIMG");

let images = [
    "images/piggy1.jpg",
    "images/piggy2.jpg",
    "images/piggy3.jpg"
]

let eleph1IMGs = [
    "images/elephant1.jpg",
    "images/elephant2.jpg",
    "images/elephant3.jpg",
    "images/elephant4.jpg"
]

let currentImages = images;
let counter = 0;

let categoryUpdate = function(){
    let elephantsSubcats = ["elephant1", "elephant2", "elephant3"];
    let pandasSubcats = ["panda1", "panda2", "panda3"];
    let giraffesSubcats = ["giraffe1", "giraffe2", "giraffe3"];

    subSelect.innerHTML = "";

    if(catSelect.value === "elephant"){
        elephant1IMG.src="images/elephant4.jpg";
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
        elephant1IMG.src="images/panda4.jpg";
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
        elephant1IMG.src="images/giraffe4.jpg";
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


let imgChange = function(){
    counter++;
    if(counter === currentImages.length){
        counter = 0;
    }
    console.log(counter);
    carouselIMG.src = currentImages[counter];
}

let imgSetUpdate = function(){
    if(subSelect.value == "elephant1"){
        currentImages = eleph1IMGs;
    }
}

window.addEventListener("load",function(){
    categoryUpdate();
    imgSetUpdate();
    setInterval(imgChange,3000);
});
catSelect.addEventListener("change", categoryUpdate);
subSelect.addEventListener("change", imgSetUpdate);