"use strict"

function SliderFour() {
    var slider = document.getElementById("slideFour");
    var slide = slider.querySelectorAll(".slider-four__item");
    var slideAll = slide.length;
    var left = document.getElementById("slideFourLeft");
    var right = document.getElementById("slideFourRight");
    var sliderInner = document.getElementById("slideFourInner");
    var slideList = document.getElementById("slideFourList");
    slideList.style.width = sliderInner.offsetWidth + "px";
    var slidesShow = 4;
    var maxCount = slideAll - slidesShow;
    var count = 0;

    var slideWidth = ((sliderInner.offsetWidth - 40) / slidesShow) + "px";

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
        slideList.style.marginLeft = "-" + (sliderInner.offsetWidth + 20)* (count/slidesShow) + "px";
    }
}

SliderFour();