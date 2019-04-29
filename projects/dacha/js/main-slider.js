function mainSlide() {

    var mainSlider = document.getElementById("mainSlider");
    var mainSliderLeft = document.getElementById("mainSliderLeft");
    var mainSliderRight = document.getElementById("mainSliderRight");
    var slide = document.querySelectorAll(".main-slider__item");
    var slides = slide.length;
    var mainSliderControls = document.getElementsByClassName("main-slider__control");
    var mainSliderInner = document.getElementById("mainSlideInner");
    var mainSlideWidth = mainSliderInner.offsetWidth;
    var count = 1;
    var mainSliderList = document.getElementById("mainSliderList");
    mainSliderList.style.width = mainSlideWidth * slides + "px";

    for (var j = 0; j < slides; j++) {
        (function (index) {
            slide[index].style.width = mainSlideWidth + "px";
        })(j);
    }


    mainSliderRight.onclick = function () {

        if (count < slides) {
        }

        else if (count == slides) {
            count = 0;
        }
        position()
    }

    mainSliderLeft.onclick = function () {
        if (count == 1) {
            count = slides - 1;
        }

        else if (count > 1 || count == 0) {
            count = count - 2;
        }

        position()
    };

    function position() {
        removeActive();
        mainSliderList.style.marginLeft = "-" + mainSlideWidth * count + "px";
        //slide[count].classList.add("active-slide");
        mainSliderControls[count].classList.add("active");
        count++;
    }

    function removeActive() {
        for (var i = 0; i < slides; i++) {
            mainSliderControls[i].classList.remove("active");
        }
    }

    for (var i = 0; i < mainSliderControls.length; i++) {
        (function (index) {
            mainSliderControls[index].onclick = function () {
                count = index;
                position();
            }
        })(i);
    }
}

mainSlide();