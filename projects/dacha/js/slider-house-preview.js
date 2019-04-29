function housePreview() {

    var housePreviewSlider = document.getElementById("housePreviewSlider");
    var housePreviewLeft = document.getElementById("housePreviewLeft");
    var housePreviewRight = document.getElementById("housePreviewRight");
    var housePreviewSlide = housePreviewSlider.querySelectorAll(".house-preview__item");
    var housePreviewSlideItem = housePreviewSlider.getElementsByClassName("house-preview__item");
    var houseSlides = housePreviewSlide.length;
    var housePreviewInner = document.getElementById("housePreviewInner");
    var allSlides = document.getElementsByClassName("house-preview__item");
    var slideWidth = ((housePreviewInner.offsetWidth - 40) / 3) + "px";

    var count = 0;
    var housePreviewList = document.getElementById("housePreviewList");
    housePreviewList.style.width = housePreviewInner.offsetWidth + "px";
    var maxCount = houseSlides - 3;

    console.log(houseSlides);
    console.log(maxCount);
    console.log(count);

    for (var j = 0; j < houseSlides; j++) {
        (function (index) {
            allSlides[index].style.width = slideWidth;
        })(j);
    }

    housePreviewRight.onclick = function () {

        if (count < houseSlides - 3) {
            console.log(count);
            count = count  + 3;
            console.log(count);
        }

        else if (count = maxCount ) {
            console.log("max");
            count = 0;
            positionHouse();
        }

        positionHouse()
    }


    housePreviewLeft.onclick = function () {
        if (count > 1) {
            console.log(count);
            count = count - 3;
            console.log(count);
        }

        else if (count = 1) {
            console.log(count);
            count = houseSlides - 3;
            console.log(count);
        }

        positionHouse()
    };

    function positionHouse() {
        housePreviewList.style.marginLeft = "-" + (housePreviewInner.offsetWidth + 20)* (count/3) + "px";
        //count++;
        //count ++;
    }
}

housePreview();
