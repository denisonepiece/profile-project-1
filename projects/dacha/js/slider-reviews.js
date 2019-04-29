function reviewsSlider() {


    var mainReviews = document.getElementById("mainReviews");
    var mainReviewsLeft = document.getElementById("mainReviewsLeft");
    var mainReviewsRight = document.getElementById("mainReviewsRight");
    var mainReviewsSlide = mainReviews.querySelectorAll(".reviews__item");
    var mainReviewsSlide = mainReviews.getElementsByClassName("reviews__item");
    var mainReviewsSlides = mainReviewsSlide.length;
    var mainReviewsInner = document.getElementById("mainReviewsInner");
    var allSlides = mainReviews.getElementsByClassName("reviews__item");
    var width = mainReviewsSlide[1].offsetWidth;
    var slideWidth = ((mainReviewsInner.offsetWidth - 40) / 3) + "px";

    var count = 0;
    var mainReviewsList = document.getElementById("mainReviewsList");
    mainReviewsList.style.width = mainReviewsInner.offsetWidth + "px";
    var maxCount = mainReviewsSlides - 3;

    console.log(width);

    for (var j = 0; j < mainReviewsSlides; j++) {
        (function (index) {
            allSlides[index].style.width = slideWidth;
        })(j);
    }


    mainReviewsRight.onclick = function () {

        if (count < (mainReviewsSlides - 3)) {
            console.log(count);
            count = count  + 3;
        }

        else if (count = maxCount) {
            console.log(count);
            count = 0;
        }
        positionReviews()
    }


    mainReviewsLeft.onclick = function () {
        if (count > 1) {
            count = count - 3;
            console.log(count);
        }

        else if (count = 1) {
            count = mainReviewsSlides - 3;
            console.log(count);
        }

        positionReviews()
    };

    function positionReviews() {
        mainReviewsList.style.marginLeft = "-" + (mainReviewsInner.offsetWidth + 20) * (count/3) + "px";
    }
}

reviewsSlider();