// check if There's Local Storage Color Option

let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) { 

  document.documentElement.style.setProperty("--main--color",localStorage.getItem("color-option")
  
  );
  //Remove Active Class From All Class List

  document.querySelectorAll(".colorsPage li").forEach((element) => {
   
    element.classList.remove("active");

    if (element.dataset.color === mainColors) {
      
      element.classList.add("active");
    }
  });
}

// Random Background Option

let backgroundOption = true;

// variable To Control The Interval

let backgroundInterval;

let backgroundLocalItem = localStorage.getItem("background-option");

if (backgroundLocalItem !== null) {

if(backgroundLocalItem === 'true'){

  backgroundOption = true;
}else{

  backgroundOption = false;
}
document.querySelectorAll('.random-background span').forEach(element => {

  element.classList.remove('active');
});

if(backgroundLocalItem==='true'){

  document.querySelector('.random-background .yes').classList.add('active');
}
else{  
  
  
  document.querySelector('.random-background .no').classList.add('active');
  
}



} 

// toggle spin Class on icon
document.querySelector(".icon i").onclick = function () {

    this.classList.toggle("fa-spin");
  //
  document.querySelector(".setting-box").classList.toggle("open");

  document.querySelector(".icon").classList.toggle("icon2");
};

// switch colors
const colorsList = document.querySelectorAll(".colorsPage li");

colorsList.forEach((li) => { li.addEventListener("click",

(e) => {document.documentElement.style.setProperty("--main--color",e.target.dataset.color);

    // set color on local

    localStorage.setItem("color-option", e.target.dataset.color);

    //Remove Active Class From All Childrens

    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class On Self

    e.target.classList.add("active");
  });
});

// switch background
const randomBackEl = document.querySelectorAll(".random-background span");

randomBackEl.forEach((span) => {

  span.addEventListener("click", (background) => {

    document.documentElement.style.setProperty(
      "--main--color",
      background.target.dataset.color
    );

    //Remove Active Class From All Childrens

    background.target.parentElement
      .querySelectorAll(".active")
      .forEach((element) => {
        element.classList.remove("active");
      });

    // Add Active Class On Self

    background.target.classList.add("active");

    if (background.target.dataset.background === "yes") {
      
      backgroundOption = true;

      localStorage.setItem("background-option", true);

      document.documentElement.style.setProperty("--main--color",localStorage.getItem("color-option"));

      randomImgs();

    } else {
      
      backgroundOption = false;
      
      clearInterval(backgroundInterval);
      
      localStorage.setItem("background-option", false);

      document.documentElement.style.setProperty("--main--color",localStorage.getItem("color-option"));

    
    }
  });
});

// select Landing Page Element

let landingPage = document.querySelector(".landing-page");

// get Array Of Imgs

let ImgsArray = ["2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// function To Random Img

function randomImgs() {
  if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {
      // get Random Number

      let randomNumber = Math.floor(Math.random() * ImgsArray.length);

      // Change Background Image Url

      landingPage.style.backgroundImage ='url("img/' + ImgsArray[randomNumber] + '")';
    }, 10000);
  }
}
randomImgs();



// Select Skills Selector

let ourSkills = document.getElementById("Our Skills");

window.onscroll = function () {

 // Skills Offset Top

  let skillsOffsetTop = ourSkills.offsetTop;
 
  // 

  // Outer Skills Height
  
  let skillsOuterHeight = ourSkills.offsetHeight;

  //
  
  // Window Height

  let windowHeight = this.innerHeight
  
  // window scroll Top

  let windowScrollTop = this.pageYOffset;
  
if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){

let skills = document.querySelectorAll(".skill-box .skill-progress span");

skills.forEach(skill =>{

  skill.style.width = skill.dataset.progress;

  

});

console.log('afgd')
}

};