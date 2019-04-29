"use strict";

function slideThree(sliderId,slideItem,leftID,rightID, sliderThreeInner,slideListId,margin,slidesShow) {

    var slider = document.getElementById(sliderId);
    console.log(slider);
    var slide = slider.getElementsByClassName(slideItem);
    var slideAll = slide.length;
    var left = document.getElementById(leftID);
    var right = document.getElementById(rightID);
    var sliderInner = document.getElementById(sliderThreeInner);
    var slideList = document.getElementById(slideListId);
    slideList.style.width = sliderInner.offsetWidth + "px";
    //var slidesShow = 3;
    var maxCount = slideAll - slidesShow;
    var count = 0;
    //var margin = slide[0].style.marginRight;

    if(!margin) {
        margin = 20
    }


    if(!slidesShow) {
        slidesShow = 3
    }

    var slideWidth = ((sliderInner.offsetWidth - (margin * 2)) / slidesShow) + "px";

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
        slideList.style.marginLeft = "-" + (sliderInner.offsetWidth + margin)* (count/slidesShow) + "px";
    }
}

// slideThree();
