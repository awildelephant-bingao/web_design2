let carousel = document.getElementById("carousel");
let carouselIMG = document.getElementById("carouselIMG");



let images = [
    "Images/Home_1.jpg",
    "Images/Home_2.jpg",
    "Images/Home_3.jpg"
]

let counter = 0;


   let imgChange = function(){
       if(carouselIMG.alt === "First img 1"){
           carouselIMG.src = images[1];
        carouselIMG.alt = "First img 2";
         }
        else if (carouselIMG.alt === "First img 2"){
            carouselIMG.src = images[2];
         carouselIMG.alt = "First img 3";}

         else if (carouselIMG.alt === "First img 3"){
            carouselIMG.src = images[0];
         carouselIMG.alt = "First img 1";}
   }

   window.addEventListener("load",function(){
       setInterval(imgChange,2000);
       
   })