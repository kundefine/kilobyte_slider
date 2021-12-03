function Slider() {
  const SLIDER = document.querySelectorAll(".slider");
  const SLIDER_IMAGES = [];
  const SLIDER_NEXT_BUTTON = [];
  const SLIDER_PREV_BUTTON = [];
  const SLIDER_PAGINATION = [];


  //property
  this.singleSlider = [];
  this.totalSlider = SLIDER.length || null;
   
   
  // method
  this.active = function() {
    console.log("your slider is active");
  }


  //create navigation and pagination
  (function makeNavigation() {
    let div = [];
    let navButtonPrev = [];
    let navButtonNext = [];
    if(SLIDER.length > 0) {
      for(let i = 0; i < SLIDER.length; i++) {
        div[i] = document.createElement("DIV");
        navButtonPrev[i] = document.createElement("BUTTON");
        navButtonNext[i] = document.createElement("BUTTON");

        navButtonPrev[i].textContent = "Prev";
        navButtonNext[i].textContent = "Next";

        div[i].className = "navigation " + "nav-" + i;
        navButtonPrev[i].className = "prev " + "prev-" + i;
        navButtonNext[i].className = "next " + "next-" + i;

        div[i].appendChild(navButtonPrev[i]);
        div[i].appendChild(navButtonNext[i]);

        SLIDER[i].appendChild(div[i]);
      }
    }
  }());

  (function makePagination() {
    let div = [];
    let span = [];
    if(SLIDER.length > 0) {
      for(let i = 0; i < SLIDER.length; i++) {
        div[i] = document.createElement("DIV");

        let sliderImg = SLIDER[i].getElementsByTagName('img');
        if(sliderImg) {
            for(let j = 0; j < sliderImg.length; j++) {
              span[j] = document.createElement("span");
              span[j].textContent = j;
              div[i].appendChild(span[j]);
            } 
        }

        div[i].className = "pagination " + "pag-" + i;
        SLIDER[i].appendChild(div[i]);
      }
    }
  }());


  for(let i = 0; i < SLIDER.length; i++) {
    SLIDER_IMAGES[i] = SLIDER[i].querySelectorAll('img');
  }

  for(let i = 0; i < SLIDER.length; i++) {
    SLIDER_PAGINATION[i] = SLIDER[i].querySelectorAll('div.pagination span');
  }
  for(let i = 0; i < SLIDER.length; i++) {
    SLIDER_NEXT_BUTTON[i] = SLIDER[i].querySelector('button.next');
  }

  for(let i = 0; i < SLIDER.length; i++) {
    SLIDER_PREV_BUTTON[i] = SLIDER[i].querySelector('button.prev');
  }
   
  for(let i = 0; i < this.totalSlider; i++) {
    this.singleSlider[i] = {
        myPosition        : 0,
        sliderNumber      : SLIDER[i],
        sliderImg         : SLIDER_IMAGES[i],
        sliderTotalImage  : SLIDER_IMAGES[i].length,
        sliderNextButton  : SLIDER_NEXT_BUTTON[i],
        sliderPrevButton  : SLIDER_PREV_BUTTON[i],
        sliderPagination  : SLIDER_PAGINATION[i],
    };
  }

   
  let singleGlobSlider = this.singleSlider;
   
  // next slide
  for(let i = 0; i < this.totalSlider; i++) {
    this.singleSlider[i].sliderNextButton.onclick = function (ev) {
        singleGlobSlider[i].sliderImg[singleGlobSlider[i].myPosition].style.opacity = '0';
        singleGlobSlider[i].sliderPagination[singleGlobSlider[i].myPosition].style.backgroundColor = "lightslategray";
        singleGlobSlider[i].myPosition += 1;
        if(singleGlobSlider[i].myPosition >= singleGlobSlider[i].sliderTotalImage) {
          singleGlobSlider[i].myPosition = 0;
        }
        singleGlobSlider[i].sliderImg[singleGlobSlider[i].myPosition].style.opacity = '1';
        singleGlobSlider[i].sliderPagination[singleGlobSlider[i].myPosition].style.backgroundColor = "red";
    }
  }

  // previous slide
  for(let i = 0; i < this.totalSlider; i++) {
    this.singleSlider[i].sliderPrevButton.onclick = function (ev) {
        singleGlobSlider[i].sliderImg[singleGlobSlider[i].myPosition].style.opacity = '0';
        singleGlobSlider[i].sliderPagination[singleGlobSlider[i].myPosition].style.backgroundColor = "lightslategray";
        singleGlobSlider[i].myPosition -= 1;
        if(singleGlobSlider[i].myPosition < 0) {
          singleGlobSlider[i].myPosition = singleGlobSlider[i].sliderTotalImage - 1;
        }
        singleGlobSlider[i].sliderImg[singleGlobSlider[i].myPosition].style.opacity = '1';
        singleGlobSlider[i].sliderPagination[singleGlobSlider[i].myPosition].style.backgroundColor = "red";
    }
  }

  // pagination slide
  for(let i = 0; i < this.totalSlider; i++) {
    for(let j = 0; j < this.singleSlider[i].sliderTotalImage; j++) {
        this.singleSlider[i].sliderPagination[j].onclick = function(ev) {
          singleGlobSlider[i].sliderImg[singleGlobSlider[i].myPosition].style.opacity = '0';
          singleGlobSlider[i].sliderPagination[singleGlobSlider[i].myPosition].style.backgroundColor = "lightslategray";
          singleGlobSlider[i].myPosition = j;
          singleGlobSlider[i].sliderImg[singleGlobSlider[i].myPosition].style.opacity = '1';
          singleGlobSlider[i].sliderPagination[singleGlobSlider[i].myPosition].style.backgroundColor = "red";
        };
    }  
  }
}
new Slider();