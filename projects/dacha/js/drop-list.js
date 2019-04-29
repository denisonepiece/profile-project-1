"use strict";

function dropList() {
    var buttonSorting = document.getElementsByClassName("button-sorting");

    if(buttonSorting) {
        for (var j = 0; j < buttonSorting.length; j++) {
            (function (index) {
                buttonSorting[index].onclick = function () {
                    this.parentNode.classList.toggle("filterform-sorting--open");
                };
            })(j);
        }
    }

    function removeActiveSortList() {
        var sortActiveItem = document.querySelectorAll(".form-sorting__list--show");

        for (var i = 0; i < sortActiveItem.length; i++) {
            sortActiveItem[i].classList.remove("form-sorting__list--show");
        }
    }

    var linkMoreFilters = document.getElementsByClassName("filter__more");

    if(linkMoreFilters) {
        for (var j = 0; j < linkMoreFilters.length; j++) {
            (function (index) {
                linkMoreFilters[index].onclick = function () {
                    this.classList.add("filter__more--remove");
                    this.parentNode.classList.toggle("filter--open-filters");
                };
            })(j);
        }
    }
}

dropList();