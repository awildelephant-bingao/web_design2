let firstElephantIMG = doctument.getElementById ("elephant1");
let secondElephantIMG = doctument.getElementById ("elephant2");
let thirdElephantIMG = doctument.getElementById ("elephant3");
let fouthElephantIMG = doctument.getElementById ("elephant4");
let bigIMG = document. getElementById ("bigImage");


let elephantFirstIMG = function(){
    bigIMG.src ="images/elephant1.jpg";
}


firstElephantIMG.addEvenListener ("click", elephantFirstIMG);