
//FOR MOVEMENT

const card = document.querySelector(".card");
const container = document.querySelector(".container");
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".info h1");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");
const circle = document.querySelector(".circle");

container.addEventListener("mousemove", (e) =>{
    
   let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
   
   
 card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
 
});
//animate In
 container.addEventListener("mouseenter", (e) =>{
   card.style.transition = 'none';
   
   sneaker.style.transform = "translateZ(250px) rotateZ(20deg)";
   //pop out
   
  //  title.style.transform = "translateZ(200px)";
   purchase.style.transform = "translateZ(100px)";
   sizes.style.transform = "translateZ(250px)";
   
   
 });
//Animate Out
 container.addEventListener("mouseleave", (e) =>{
   card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
   sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
   circle.style.transform = "translateZ(0px)";
  
   //pop in
  
  //  title.style.transform = "translateZ(0px)";
   purchase.style.transform = "translateZ(0px)";
   sizes.style.transform = "translateZ(0px)";
   
 });