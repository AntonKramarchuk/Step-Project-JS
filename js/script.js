"use strict";

// --------------------------------tabs or servis-------------------------
const portfolioLink = document.querySelectorAll(".optional-services-item");
const tabItem = document.querySelectorAll(".tab");
portfolioLink.forEach((item) => {
  item.addEventListener("click", () => {
    let tabId = item.getAttribute("data-tab");
    let currentTab = document.querySelectorAll(tabId);

    tabItem.forEach((item) => {
      item.classList.add("hiden");
    });
    currentTab.forEach((item) => {
      item.classList.remove("hiden");
    });
    portfolioLink.forEach((item) => {
      item.classList.remove("optional-services-item-active");
    });
    item.classList.add("optional-services-item-active");
  });
});
// ----------------------------------tabs portfolio----------------------------

const images = [
  {
    class: "portfolio-imege",
    src: "./image/portfolio/Layer34.png",
    name: "img1",
    category: "graphic",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer33.png",
    name: "img2",
    category: "web",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer24.png",
    name: "img2",
    category: "wordpress",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer24.png",
    name: "img3",
    category: "web",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer25.png",
    name: "img4",
    category: "landing",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer26.png",
    name: "img1",
    category: "graphic",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer27.png",
    name: "img2",
    category: "web",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer28.png",
    name: "img2",
    category: "wordpress",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer29.png",
    name: "img3",
    category: "web",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer30.png",
    name: "img4",
    category: "web",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer31.png",
    name: "img1",
    category: "graphic",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer32.png",
    name: "img2",
    category: "wordpress",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer33.png",
    name: "img2",
    category: "web",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer34.png",
    name: "img3",
    category: "web",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer33.png",
    name: "img4",
    category: "landing",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer31.png",
    name: "img1",
    category: "web",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer27.png",
    name: "img2",
    category: "wordpress",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer26.png",
    name: "img2",
    category: "wordpress",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer25.png",
    name: "img3",
    category: "web",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer27.png",
    name: "img4",
    category: "landing",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer24.png",
    name: "img1",
    category: "wordpress",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer25.png",
    name: "img2",
    category: "web",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer28.png",
    name: "img2",
    category: "wordpress",
  },
  {
    class: "portfolio-img",
    src: "./image/portfolio/Layer26.png",
    name: "img3",
    category: "web",
  },
];
let totalImages = 12;
const imageList = document.querySelector(".portfolio-section-image");

imageList.innerHTML = images
  .slice(0, totalImages)
  .map((item) => {
    return `<div class="portfolio-image-wraper">
              <div class="portfolio-hover">
                  <img
                  class="portfolio-hover-icon"
                   src="./image/portfolio/icon.svg"
                   alt="#"
                  />
               <p class="portfolio-hover-title">creative design</p>
               <p class="portfolio-hovert-text">Web Design</p>
              </div>
               <img
             src= ${item.src}
             class="portfolio-image"/>
            </div>`;
  })
  .join("");
const tabPhoto = document.querySelectorAll(".portfolio-link");
let category = "all";
tabPhoto.forEach((item) => {
  item.addEventListener("click", (event) => {
    tabPhoto.forEach((item) => {
      item.classList.remove("portfolio-link-activ");
    });

    item.classList.add("portfolio-link-activ");

    category = item.getAttribute("data-category");

    if (category === "all") {
      imageList.innerHTML = images
        .slice(0, totalImages)
        .map((item) => {
          return `<div class="portfolio-image-wraper">
          <div class="portfolio-hover">
              <img
              class="portfolio-hover-icon"
               src="./image/portfolio/icon.svg"
               alt="#"
              />
           <p class="portfolio-hover-title">creative design</p>
           <p class="portfolio-hovert-text">Web Design</p>
          </div>
           <img
         src= ${item.src}
         class="portfolio-image"/>
        </div>`;
        })
        .join("");
    } else {
      const filterImages = images.filter((item) => {
        return item.category === category;
      });
      imageList.innerHTML = filterImages
        .map((item) => {
          return `<div class="portfolio-image-wraper">
          <div class="portfolio-hover">
              <img
              class="portfolio-hover-icon"
               src="./image/portfolio/icon.svg"
               alt="#"
              />
           <p class="portfolio-hover-title">creative design</p>
           <p class="portfolio-hovert-text">Web Design</p>
          </div>
           <img
         src= ${item.src}
         class="portfolio-image"/>
        </div>`;
        })
        .join("");
    }
  });
});

// -------------------------------------------------------
const btnPortfolio = document.querySelector(".portfolio-load");

btnPortfolio.addEventListener("click", (event) => {
  btnPortfolio.classList.add("hiden");
  totalImages += 12;

  if (category === "all") {
    imageList.innerHTML = images
      .slice(0, totalImages)
      .map((item) => {
        return `<div class="portfolio-image-wraper">
        <div class="portfolio-hover">
            <img
            class="portfolio-hover-icon"
             src="./image/portfolio/icon.svg"
             alt="#"
            />
         <p class="portfolio-hover-title">creative design</p>
         <p class="portfolio-hovert-text">Web Design</p>
        </div>
         <img
       src= ${item.src}
       class="portfolio-image"/>
      </div>`;
      })
      .join("");
  } else {
    imageList.innerHTML = images
      .slice(0, totalImages)
      .filter((item) => {
        return item.category === category;
      })
      .map((item) => {
        return `<div class="portfolio-image-wraper">
        <div class="portfolio-hover">
            <img
            class="portfolio-hover-icon"
             src="./image/portfolio/icon.svg"
             alt="#"
            />
         <p class="portfolio-hover-title">creative design</p>
         <p class="portfolio-hovert-text">Web Design</p>
        </div>
         <img
       src= ${item.src}
       class="portfolio-image"/>
      </div>`;
      })
      .join("");
  }
});
// -----------------------------------------слайдер----------------------а
const slider = document.querySelectorAll(".comments-main-imeges"),
  prev = document.querySelector(".comments-arrow-left"),
  next = document.querySelector(".comments-arrow-right"),
  dots = document.querySelectorAll(".comments-imeges-container"),
  sliderShow = document.querySelector(".commets-slider-section"),
  sliderText = document.querySelectorAll(".comments-text"),
  slideruserNameProfession = document.querySelectorAll(
    ".comment-user-name-profession"
  );
console.log(slideruserNameProfession);
let index = 0;
let sliderOfSet = 55;

// -------------------name-------------------
function activeUserName(n) {
  for (const nameProffesion of slideruserNameProfession) {
    nameProffesion.classList.add("comments-name-profession-hiden");
  }
  slideruserNameProfession[n].classList.remove(
    "comments-name-profession-hiden"
  );
}

// -------------------comment-------------------
function activeComment(n) {
  for (const text of sliderText) {
    text.classList.add("comments-text-hiden");
  }
  sliderText[n].classList.remove("comments-text-hiden");
}
// -------------------Slider-------------------
function activeSlider(n) {
  for (const slid of slider) {
    slid.classList.add("hiden");
  }

  slider[n].classList.remove("hiden");
}
// -------------------Img-------------------
function activeImg(n) {
  for (const img of dots) {
    img.classList.remove("comments-imeges-activ");
  }
  dots[n].classList.add("comments-imeges-activ");
}

// -------------------------------current--------------------
function currentSlider(ind) {
  if (ind >= dots.length) {
    activeSlider(0);
    activeImg(0);
    activeComment(0);
    activeUserName(0);
  } else {
    activeUserName(ind);
    activeComment(ind);
    activeSlider(ind);
    activeImg(ind);
  }
}

function nextSid() {
  if (dots.length - index - 4 <= 0) {
    index++;
    currentSlider(index);
    if (index == slider.length) {
      index = 0;
      currentSlider(index);
      sliderOfSet = 55;
      sliderShow.style.transform = `translateX(${sliderOfSet}px)`;
    }
  } else {
    index++;
    currentSlider(index);
    sliderOfSet = sliderOfSet - 105;
    sliderShow.style.transform = `translateX(${sliderOfSet}px)`;
  }
}

function prevSlid() {
  if (index == 0) {
    index = dots.length - 1;
    sliderOfSet = (dots.length - 4) * -55;
    sliderShow.style.transform = `translateX(${sliderOfSet}px)`;
    currentSlider(index);
  } else {
    if (index + 1 - 4) {
      index--;
      currentSlider(index);
    } else {
      index--;
      currentSlider(index);
      sliderOfSet = sliderOfSet + 105;
      sliderShow.style.transform = `translateX(${sliderOfSet}px)`;
    }
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    currentSlider(index);
  });
});

next.addEventListener("click", nextSid);
prev.addEventListener("click", prevSlid);
// -----------------------------------------------------

const hoverImage = document.querySelector(".portfolio-hover");

console.log(hoverImage);
