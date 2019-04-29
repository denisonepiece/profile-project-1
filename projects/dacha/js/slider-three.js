"use strict"

function slideThree() {
    var slider = document.getElementById("slideThree");
    var slide = slider.querySelectorAll(".slider-three__item");
    var slideAll = slide.length;
    var left = document.getElementById("slideThreeLeft");
    var right = document.getElementById("slideThreeRight");
    var sliderInner = document.getElementById("slideThreeInner");
    var slideList = document.getElementById("slideThreeList");
    slideList.style.width = sliderInner.offsetWidth + "px";
    var slidesShow = 3;
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
            count = slideAll - slidesShow;
        }

        positionHouse()
    };

    function positionHouse() {
        slideList.style.marginLeft = "-" + (sliderInner.offsetWidth + 20)* (count/slidesShow) + "px";
    }
}

slideThree();