"use strict"

function SliderFour() {
    var slider = document.getElementById("sliderPopularHouse");
    var slide = slider.querySelectorAll(".slider-popular-house__slider-item");
    var slideAll = slide.length;
    var left = document.getElementById("slidePopularHouseLeft");
    var right = document.getElementById("slidePopularHouseRight");
    var sliderInner = document.getElementById("sliderPopularHouseInner");
    var slideList = document.getElementById("sliderPopularHouseList");
    slideList.style.width = sliderInner.offsetWidth - 1 + "px";
    var slidesShow = 4;
    var maxCount = slideAll - slidesShow;
    var count = 0;

    var slideWidth = ((sliderInner.offsetWidth - 61) / slidesShow) + "px";

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
        slideList.style.marginLeft = "-" + (sliderInner.offsetWidth + 21)* (count/slidesShow) + "px";
    }
}

SliderFour();