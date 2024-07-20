var typed = new Typed(".typing",{
    strings:["     ", "Backend Developer","Java Developer","Content Writer","Public Speaker"],
    typeSpeed:100,
    BackSpeed:100,
    loop:true
})
var typed = new Typed(".typing1",{
  strings:[" ","Java", "Spring Boot", "Docker", "Elastic Search", "Kafka" , "Python"],
  typeSpeed:100,
  BackSpeed:100,
  loop:true
})
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll(".nav li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.parentElement.classList.remove('active');

    if (link.getAttribute("href") === `#${current}`) {
      link.parentElement.classList.add('active');
      link.style.color = 'red';
    }
    else {
      link.style.color = ''; // Reset text color for other links
    }

  });
});

// var header = document.getElementById("aside");

// $('.asideh1').addClass("active");
// var btns = header.getElementsByClassName("asideh");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   if (current.length > 0) { 
//     current[0].className = current[0].className.replace(" active", "");
//   }
//   this.className += " active";
//   });
// };

const navLi= document.querySelectorAll("ul li a");
window.addEventListener("scroll", ()=>{
  let current='';
  sections.forEach( section=>{
    const sectionTop=section.offsetTop;
    console.log(sectionTop);
    const sectionHeight =section.clientHeight;
    if(scrollY >=(sectionTop-sectionHeight/3)){
      current=section.getAttribute('id');
    };
  });
  console.log(current)
  navLi.forEach(li =>{
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    };
  });
})