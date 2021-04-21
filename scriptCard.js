const one = document.querySelector(".img1");
const two = document.querySelector(".img2");
const three = document.querySelector(".img3");
const four = document.querySelector(".img4");
const five = document.querySelector(".img5");
const six = document.querySelector(".img6");
const next = document.querySelector(".bxs-chevron-right");
const prev = document.querySelector(".bxs-chevron-left");
var pos = 1;
next.addEventListener("click", () => {
  switch (pos) {
    case 1:
      pos += 1;
      one.style.opacity = "0";
      two.style.opacity = "1";
      break;
    case 2:
      pos += 1;
      two.style.opacity = "0";
      three.style.opacity = "1";
      break;
    case 3:
      pos += 1;
      three.style.opacity = "0";
      four.style.opacity = "1";
      break;
    case 4:
      pos += 1;
      four.style.opacity = "0";
      five.style.opacity = "1";
      break;
    case 5:
      pos+= 1;
      five.style.opacity = "0";
      six.style.opacity = "1";
      break;
    case 6:
      pos = 1;
      six.style.opacity = "0";
      one.style.opacity = "1";
      break;
  }
})
prev.addEventListener("click", () => {
    switch (pos) {
      case 1:
        pos = 6;
        one.style.opacity = "0";
        six.style.opacity = "1";
        break;
      case 2:
        pos -= 1;
       
        two.style.opacity = "0";
        one.style.opacity = "1";
        break;
      case 3:
        pos -= 1;
        
        three.style.opacity = "0";
        two.style.opacity = "1";
        break;
      case 4:
        pos -= 1;
       
        four.style.opacity = "0";
        three.style.opacity = "1";
        break;
      case 5:
        pos-= 1;
        
        five.style.opacity = "0";
        four.style.opacity = "1";
        break;
      case 6:
        pos -=1;
        
        six.style.opacity = "0";
        five.style.opacity = "1";
        break;
    }
  })
