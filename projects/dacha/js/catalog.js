"use strict"

function sortListSmall() {
    var btnShowListSortingSmall = document.getElementsByClassName("showListSortingSmall");

    for (var j = 0; j < btnShowListSortingSmall.length; j++) {
        (function (index) {
            btnShowListSortingSmall[index].onclick = function () {
                var listSortingSmall = btnShowListSortingSmall[index].parentNode.querySelector(".list-sorting-small");
                console.log("click");
                listSortingSmall.classList.toggle("show-amount__item-list-sorting-small--show");
            };
        })(j);
    }
}

sortListSmall();