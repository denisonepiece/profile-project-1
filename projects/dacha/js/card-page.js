"use strict"

function pillsFoundation() {
    var pillPile = document.getElementById("pillPile");
    var pillTape = document.getElementById("pillTape");
    var pileFoundation = document.getElementById("pileFoundation");
    var tapeFoundation = document.getElementById("tapeFoundation");
    var pillPile2 = document.getElementById("pillPile2");
    var pillTape2 = document.getElementById("pillTape2");
    var pileFoundation2 = document.getElementById("pileFoundation2");
    var tapeFoundation2 = document.getElementById("tapeFoundation2");

    if(pillPile) {
        pillPile.onclick = function () {
            pillPile.classList.add("list-pills__item--active");
            pileFoundation.classList.add("foundation-tabs__item--active");
            pillTape.classList.remove("list-pills__item--active");
            tapeFoundation.classList.remove("foundation-tabs__item--active");
        };
    }

    if(pillTape) {
        pillTape.onclick = function () {
            pillTape.classList.add("list-pills__item--active");
            pillPile.classList.remove("list-pills__item--active");
            tapeFoundation.classList.add("foundation-tabs__item--active");
            pileFoundation.classList.remove("foundation-tabs__item--active");
        };

    }

    if(pillPile2) {
        pillPile2.onclick = function () {
            pillPile2.classList.add("list-pills__item--active");
            pileFoundation2.classList.add("foundation-tabs__item--active");
            pillTape2.classList.remove("list-pills__item--active");
            tapeFoundation2.classList.remove("foundation-tabs__item--active");
        };
    }

    if(pillTape2) {
        pillTape2.onclick = function () {
            pillTape2.classList.add("list-pills__item--active");
            pillPile2.classList.remove("list-pills__item--active");
            tapeFoundation2.classList.add("foundation-tabs__item--active");
            pileFoundation2.classList.remove("foundation-tabs__item--active");
        }
    }
}

pillsFoundation();


// тип просмотра
function viewTypeShow() {
    var cardType = document.getElementById("cardType");

    if(cardType) {
        var tabViewType = cardType.querySelectorAll(".tab-view-type");
        var configuration = document.getElementById("configuration");
        var fullConstruction = document.getElementById("fullKeyConstruction");
        var toConfiguration = document.getElementsByClassName("toConfiguration");
        var toDecorConstruction = document.getElementsByClassName("toDecorConstruction");
        var fullDecorationConstruction = document.getElementById("fullDecorationConstruction");
        var toKeyConstruction = document.getElementsByClassName("toKeyConstruction");


        function removeActive() {
            for (var i = 0; i < tabViewType.length; i++) {
                tabViewType[i].classList.remove("tab-view-type--show");
            }
        }

        for (var j = 0; j < toConfiguration.length; j++) {
            (function (index) {
                toConfiguration[index].onclick = function () {
                    removeActive();
                    configuration.classList.add("tab-view-type--show");
                };
            })(j);
        }

        for (var j = 0; j < toKeyConstruction.length; j++) {
            (function (index) {
                toKeyConstruction[index].onclick = function () {
                    removeActive();
                    fullConstruction.classList.add("tab-view-type--show");
                };
            })(j);
        }

        for (var j = 0; j < toDecorConstruction.length; j++) {
            (function (index) {
                toDecorConstruction[index].onclick = function () {
                    removeActive();
                    fullDecorationConstruction.classList.add("tab-view-type--show");
                };
            })(j);
        }
    }
}

viewTypeShow();