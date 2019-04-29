"use strict"

function SliderFourDocs() {
    var slider = document.getElementById("slideFourDocs");
    var slide = slider.querySelectorAll(".slider-four__item");
    var slideAll = slide.length;
    var left = document.getElementById("slideFourDocsLeft");
    var right = document.getElementById("slideFourDocsRight");
    var sliderInner = document.getElementById("slideFourDocsInner");
    var slideList = document.getElementById("slideFourDocsList");
    slideList.style.width = sliderInner.offsetWidth + "px";
    var slideMargin = 40;
    console.log(sliderInner.offsetWidth);
    var slidesShow = 4;
    var maxCount = slideAll - slidesShow;
    var count = 0;

    var slideWidth = ((sliderInner.offsetWidth - slideMargin*(slidesShow - 1)) / slidesShow) + "px";

    for (var j = 0; j < slideAll; j++) {
        (function (index) {
            slide[index].style.width = slideWidth;
        })(j);
    }

    right.onclick = function () {

        if (count < slideAll - slidesShow) {
            count = count  + slidesShow;
        }

        else if (count = maxCount ) {
            count = 0;
            positionHouse();
        }

        positionHouse()
    };


    left.onclick = function () {
        if (count > 1) {
            console.log(count);
            count = count - slidesShow;
            console.log(count);
        }

        else if (count = 1) {
            console.log(count);
            count = slideAll - slidesShow;
            console.log(count);
        }

        positionHouse()
    };

    function positionHouse() {
        slideList.style.marginLeft = "-" + (sliderInner.offsetWidth + 40)* (count/slidesShow) + "px";
    }
}

SliderFourDocs();