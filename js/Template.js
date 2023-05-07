// check if There's Local Storage Color Option

let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
  document.documentElement.style.setProperty(
    "--main--color",
    localStorage.getItem("color-option")
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
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }
}



// toggle spin Class on icon
let setting = document.querySelector('.setting-box');

let iconI = document.querySelector('.icon');
 


  iconI.onclick = function (e) {
  
  iconI.classList.toggle("fa-spin");
  //

  iconI.classList.toggle("icon2");

  setting.classList.toggle('open1')

 
};
document.addEventListener('click',(d)=>{
 
  if(e.target !== iconI){

  if (setting.classList.contains("open1")) {

    setting.classList.remove("open1");
   
  }

}


})

const colorsList = document.querySelectorAll(".colorsPage li");

colorsList.forEach((li) => {
  li.addEventListener(
    "click",

    (e) => {
      document.documentElement.style.setProperty(
        "--main--color",
        e.target.dataset.color
      );

      // set color on local

      localStorage.setItem("color-option", e.target.dataset.color);

      //Remove Active Class From All Childrens

      handelActive(e);
    }
  );
});

// switch background
const randomBackEl = document.querySelectorAll(".random-background span");

randomBackEl.forEach((span) => {
  span.addEventListener("click", (background) => {
    handelActive(background);

    if (background.target.dataset.background === "yes") {
      backgroundOption = true;

      localStorage.setItem("background-option", true);

      document.documentElement.style.setProperty(
        "--main--color",
        localStorage.getItem("color-option")
      );

      randomImgs();
    } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background-option", false);

      document.documentElement.style.setProperty(
        "--main--color",
        localStorage.getItem("color-option")
      );
    }
  });
});

// select Landing Page Element

let landingPage = document.querySelector(".landing-page");

// get Array Of Imgs

let ImgsArray = ["01.jpg", "3.jpg", "4.jpg", "5.jpg"];

// function To Random Img

function randomImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // get Random Number

      let randomNumber = Math.floor(Math.random() * ImgsArray.length);

      // Change Background Image Url

      landingPage.style.backgroundImage =
        'url("img/' + ImgsArray[randomNumber] + '")';
    }, 10000);
  }
}
randomImgs();

// Select Skills Selector

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top

  let skillsOffsetTop = ourSkills.offsetTop;

  //

  // Outer Skills Height

  let skillsOuterHeight = ourSkills.offsetHeight;

  //

  // Window Height

  let windowHeight = this.innerHeight;

  // window scroll Top

  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let skills = document.querySelectorAll(".skill-box .skill-progress span");

    skills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
// Create Popup Gallery

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (even) => {
    // Create Overlay Element

    let overlay = document.createElement("div");

    // Add Class To overlay

    overlay.className = "popup-overlay";

    // Append Overlay To The Body

    document.body.appendChild(overlay);

    // Create The popup Box

    let popupBox = document.createElement("div");

    // Add Class To The Popup Box

    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // Create Heading

      let heading = document.createElement("h3");

      // Create Text For Heading

      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading

      heading.appendChild(imgText);

      popupBox.appendChild(heading);
    }

    // Create The Image

    let popupImage = document.createElement("img");

    // Set Image Sours

    popupImage.src = img.src;

    // Add Image To popup Box

    popupBox.appendChild(popupImage);

    // Add Popup Box in Body

    document.body.appendChild(popupBox);

    // Create The Close Span

    let closeB = document.createElement("span");

    // Create Close Button Text

    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeB.appendChild(closeButtonText);

    // Add Class To Close Button

    closeB.className = "close-button";

    // Add CloseB To The Popup Box

    popupBox.appendChild(closeB);
  });
});

// Close Popup
document.addEventListener("click", function (even) {
  if (even.target.className == "close-button") {
    // Remove The Current Popup

    even.target.parentNode.remove();

    // Remove Overlay

    document.querySelector(".popup-overlay").remove();
  }
});

// Select All BUllets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const allLinks = document.querySelectorAll(".links a");

function scrollTo(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();

      document
        .querySelector(e.target.dataset.section)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}
scrollTo(allBullets);
scrollTo(allLinks);

// Handel Active
function handelActive(ev) {
  //Remove Active Class From All Childrens

  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  // Add Active Class On Self

  ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletsLocal = localStorage.getItem("bullets-option");

if (bulletsLocal !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletsLocal === "block") {
    bulletsContainer.style.display = "block";

    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";

    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets-option", "block");
    } else {
      bulletsContainer.style.display = "none";

      localStorage.setItem("bullets-option", "none");
    }
    handelActive(e);
  });
});
document.querySelector(".reset-options").onclick = function () {
  // localStorage.clear();
  localStorage.removeItem("color-option");
  localStorage.removeItem("background-option");
  localStorage.removeItem("bullets-option");
  // Reload window
  window.location.reload();
};

// Toggle Menu

let toggleBt = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBt.onclick = function (e) {
  // Stop Propagation

  e.stopPropagation();
  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");
};

// Click Anywhere Outside And Toggle Button

document.addEventListener("click", (e) => {
  if (e.target !== toggleBt && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      // Toggle Class "menu-active" On Button
      toggleBt.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");
    }
  }
});

tLinks.onclick = function (e) {
  e.stopPropagation();
};
