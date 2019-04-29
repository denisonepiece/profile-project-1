"use strict"

function accordion() {
    var accordion = document.getElementById("accordion");

    if(accordion) {
        var accordionItem = accordion.querySelectorAll(".accordion__header");

        for (var j = 0; j < accordionItem.length; j++) {
            (function (index) {
                accordionItem[index].onclick = function () {
                    if (this.parentNode.classList.contains("accordion__item--open")) {
                        this.parentNode.classList.remove("accordion__item--open");
                    }
                    else {
                        this.parentNode.classList.add("accordion__item--open");
                    }

                }
            })(j);
        }

        function removeActive() {
            for (var i = 0; i < accordionItem.length; i++) {
                accordionItem[i].parentNode.classList.remove("accordion__item--open");
            }
        }

    }
}

accordion();

function accordion2() {
    var accordion = document.getElementById("accordion2");

    if(accordion) {
        var accordionItem = accordion.querySelectorAll(".accordion__header");

        for (var j = 0; j < accordionItem.length; j++) {
            (function (index) {
                accordionItem[index].onclick = function () {
                    if (this.parentNode.classList.contains("accordion__item--open")) {
                        this.parentNode.classList.remove("accordion__item--open");
                    }
                    else {
                        this.parentNode.classList.add("accordion__item--open");
                    }

                }
            })(j);
        }

    }
}

accordion2();

function accordionInside() {
    var accordionInside = document.getElementById("accordionInside");

    if(accordionInside) {
        var accordionInsideItem = accordionInside.querySelectorAll(".accordionInside__header");

        for (var j = 0; j < accordionInsideItem.length; j++) {
            (function (index) {
                accordionInsideItem[index].onclick = function () {
                    if (this.parentNode.classList.contains("accordionInside__item--open")) {
                        this.parentNode.classList.remove("accordionInside__item--open");
                    }
                    else {
                        this.parentNode.classList.add("accordionInside__item--open");
                    }

                }
            })(j);
        }

        function removeActive() {
            for (var i = 0; i < accordionInsideItem.length; i++) {
                accordionInsideItem[i].parentNode.classList.remove("accordionInside__item--open");
            }
        }

    }
}

accordionInside();