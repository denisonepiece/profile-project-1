"use strict"

function showDiscont() {
    var discountLink1 = document.getElementById("discountLink1");
    var discountLink2 = document.getElementById("discountLink2");
    var discountLink3 = document.getElementById("discountLink3");
    var discountLink4 = document.getElementById("discountLink4");
    var discountLink5 = document.getElementById("discountLink5");
    var discountLink6 = document.getElementById("discountLink6");

    var discountMain = document.getElementById("discount-main");
    var discountMain2 = document.getElementById("discount-main-2");
    var discountMain3 = document.getElementById("discount-main-3");
    var discountMain4 = document.getElementById("discount-main-4");
    var discountMain5 = document.getElementById("discount-main-5");
    var discountMain6 = document.getElementById("discount-main-6");

    var discountMainTab = document.getElementsByClassName("discount-main");


    function removeActiveDiscount() {
        for (var j = 0; j < discountMainTab.length; j++) {
            (function (index) {
                discountMainTab[index].classList.remove("discount-main--show");
            })(j);
        }
    }

    discountLink1.onclick = function () {
        removeActiveDiscount();
        discountMain.classList.add("discount-main--show")
    };

    discountLink2.onclick = function () {
        removeActiveDiscount();
        discountMain2.classList.add("discount-main--show")
    };

    discountLink3.onclick = function () {
        removeActiveDiscount();
        discountMain3.classList.add("discount-main--show")
    };

    discountLink4.onclick = function () {
        removeActiveDiscount();
        discountMain4.classList.add("discount-main--show")
    };

    discountLink5.onclick = function () {
        removeActiveDiscount();
        discountMain5.classList.add("discount-main--show")
    };

    discountLink6.onclick = function () {
        removeActiveDiscount();
        discountMain6.classList.add("discount-main--show")
    }
    
}

showDiscont();