
let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let imageToggle = function(){

    if(toggleIMG.alt === "Qute quokka 1"){
        //do stuff
        toggleIMG.src = "../what_JS_can_do/quokka2.jpg";
        toggleIMG.alt = "Qute quokka 2";
    }
    else {
        //do other stuff
       toggleIMG.src = "../what_JS_can_do/quokka1.jpg";
       toggleIMG.alt = "Qute quokka 1";
    }
}

let categoryUpdate = function(){
    let elephantsSubcats = ["elephant1", "elephant2", "elephant3"];
    let pandasSubcats = ["panda1", "panda2", "panda3"];
    let giraffesSubcats = ["giraffe1", "giraffe2", "giraffe3"];

    subSelect.innerHTML = "";

    if(catSelect.value === "elephant"){
        console.log("elephant");
        foodSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "panda"){
        console.log("panda");
        animSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "giraffe"){
        console.log("giraffe");
        natureSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
}

//imageToggle();

catSelect.addEventListener("change", categoryUpdate);

