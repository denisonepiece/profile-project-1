function mainSlide() {

    var sliderMember = document.getElementById("sliderMember");
    var mainSliderLeft = document.getElementById("sliderMemberLeft");
    var mainSliderRight = document.getElementById("sliderMemberRight");
    var slide = document.querySelectorAll(".office__slide");
    var slides = slide.length;
    var mainSliderControls = document.getElementsByClassName("main-slider__control");
    var sliderMemberInner = document.getElementById("sliderMemberInner");
    var mainSlideWidth = sliderMemberInner.offsetWidth;
    var count = 1;
    var sliderMemberList = document.getElementById("sliderMemberList");
    sliderMemberList.style.width = (mainSlideWidth - 10) * slides + "px";

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
        sliderMemberList.style.marginLeft = "-" + (mainSlideWidth + 20) * count + "px";
        count++;
    }
}

mainSlide();