let hyper=document.querySelectorAll(".hyper");
let line=document.querySelector(".line");
hyper.forEach((as)=>{
    const a=as.querySelector("a");
    const line=as.querySelector(".line");
    a.addEventListener("mouseover",()=>{
             line.classList.remove("hide");
             a.style.fontWeight="700";
             a.style.color="#ffc609";
    });
    a.addEventListener("mouseout",()=>{
        as.style.fontWeight="400";
        line.classList.add("hide");
          a.style.color="rgb(247, 195, 81)";
    });
});

let bool1=true;

document.addEventListener('DOMContentLoaded', () => {

let babar=document.querySelector("#babar");
let old=babar.innerText;
let title=document.querySelector("#title");
let hello=document.querySelector("#home #hello");
let div=document.querySelector("#pic div");
let h1=document.querySelector("#title h1");
 let img=document.querySelector("#MyImg");
setInterval(()=>{
       if(bool1){
         babar.innerText="Web Developer Based in London";
         bool1=false;
         title.style.width="650px";
         div.style.marginLeft="430px";
         hello.style.marginTop="70px";
         h1.style.fontSize="3.2rem";
           img.src='pink.png';
    }
       else{
        babar.innerText=old;
        bool1=true;
        title.style.width="400px";
        div.style.marginLeft="390px";
        hello.style.marginTop="40px";
        h1.style.fontSize="3.8rem";
        img.src="WhatsApp_Image_2024-07-22_at_21.12.19_141e1738-removebg-preview.png";
    
       }

},4000);

});

document.addEventListener('DOMContentLoaded', () => {
    let babar = document.querySelector("#babar");
    let oldText = babar.innerText; // Store the original text to revert later
    let bool1 = true;
    let title = document.querySelector("#title");
    let hello = document.querySelector("#hello");
    let div = document.querySelector("#pic div");
    let h1 = document.querySelector("#title h1");
    let img = document.querySelector("#MyImg");
  let div1=document.querySelector("#pic #pic-1");
    setInterval(() => {
      if (bool1) {
        babar.innerText = "Web Developer Based in Pakistan";
        bool1 = false;
        title.style.width = "650px";
        div.style.marginLeft = "470px";
        hello.style.marginTop = "70px";
        h1.style.fontSize = "3.2rem";
        // img.src = 'black shirt.png';
        // div1.style.marginLeft="440px";
      } else {
        babar.innerText = oldText;
        bool1 = true;
        title.style.width = "400px";
        div.style.marginLeft = "490px";
        hello.style.marginTop = "40px";
        h1.style.fontSize = "3.8rem";
        // img.src = "blue.png";
        // div1.style.marginLeft="390px";
      }
      
    }, 4000);
  });  


  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });
    // let hyper1=document.querySelectorAll(".hyper");
    // hyper1.forEach((hyper1)=>{
    navLinks.forEach( (link )=> {
        


        if (link.getAttribute('href').includes(currentSection)) {
           line1.classList.remove("hide");
           link.style.fontWeight="900";
           link.style.color="#ffc609";
   
        }
    });
  // });
});


let services=document.querySelectorAll(".items-services");
services.forEach((ser)=>{
  
  let i=ser.querySelector(".items-services i");
  let h1=ser.querySelector(".items-services h1");
  let div=ser.querySelector(".items-services div");
  ser.addEventListener("mouseover",()=>{
 
  i.style.color="white";
  h1.style.color="black";
  div.style.backgroundColor="black";
});
ser.addEventListener("mouseout",()=>{

i.style.color="#ffc609";h1.style.color="white";
div.style.backgroundColor="#ffc609";
});
});






document.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setTimeout(() => {
              section.classList.add('visible');
          }, 1000); // Delay of 1 second
      }
  });
});

