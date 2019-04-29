"use strict"

function creditTyeps() {
    var creditNavs = document.getElementById("creditNavs");
    var creditNavsBtn = creditNavs.querySelectorAll(".list-pills-vertical__item ");
    var typeList = document.getElementById("typeList");
    var cardTypeItem = typeList.querySelectorAll(".list-credit-type__item");

    var pillSberbank = document.getElementById("pillSberbank");
    var typeSberbank = document.getElementById("typeSberbank");
    var pillVtb = document.getElementById("pillVtb");
    var typeVTB = document.getElementById("typeVTB");
    var pillAlfabank = document.getElementById("pillAlfabank");
    var typeAlfaBank = document.getElementById("typeAlfaBank");
    var pillMatCapital = document.getElementById("pillMatCapital");
    var typeMatCapital = document.getElementById("typeMatCapital");
    var pillEuropeBank = document.getElementById("pillEuropeBank");
    var typeEuropeBank = document.getElementById("typeEuropeBank");
    var pillLoko = document.getElementById("pillLoko");
    var typeLoko = document.getElementById("typeLoko");
    var pillPochta = document.getElementById("pillPochta");
    var typePochta = document.getElementById("typePochta");
    var pillInstalment = document.getElementById("pillInstalment");
    var typeInstalment = document.getElementById("typeInstalment");
    var showTable = document.getElementById("showTable");
    var typeTable = document.getElementById("typeTable");


    function removeActiveNavs() {
        for (var i = 0; i < creditNavsBtn.length; i++) {
            event.preventDefault();
            creditNavsBtn[i].classList.remove("list-pills-vertical__item--active");
        }
    }

    function removeActiveType() {
        for (var i = 0; i < cardTypeItem.length; i++) {
            cardTypeItem[i].classList.remove("list-credit-type__item--active");
        }
    }

    function Pillactive(pillName) {
        this.pillName = pillName;
        pillName.parentNode.classList.add("list-pills-vertical__item--active");
    }

    function Typeactive(typeName) {
        this.typeName = typeName;
        typeName.classList.add("list-credit-type__item--active");
    }

    function Opentype(name, type) {
        console.log(name,type);
        removeActiveType();
        removeActiveNavs();
        new Pillactive(name);
        new Typeactive(type);
    }

    if (pillSberbank) {
        pillSberbank.onclick = function () {
            new Opentype(pillSberbank, typeSberbank);
        }
    }

    if (pillVtb) {
        pillVtb.onclick = function () {
            new Opentype(pillVtb, typeVTB);
        }
    }

    if (pillAlfabank) {
        pillAlfabank.onclick = function () {
            new Opentype(pillAlfabank, typeAlfaBank);
        }
    }

    if (pillMatCapital) {
        pillMatCapital.onclick = function () {
            new Opentype(pillMatCapital, typeMatCapital);
        }
    }

    if (pillEuropeBank) {
        pillEuropeBank.onclick = function () {
            new Opentype(pillEuropeBank, typeEuropeBank);
        }
    }

    if (pillLoko) {
        pillLoko.onclick = function () {
            new Opentype(pillLoko, typeLoko);
        }
    }

    if (pillPochta) {
        pillPochta.onclick = function () {
            console.log(typePochta);
            new Opentype(pillPochta, typePochta);
        }
    }

    if (pillInstalment) {
        pillInstalment.onclick = function () {
            new Opentype(pillInstalment, typeInstalment);
        }
    }

    if (showTable) {
        showTable.onclick = function () {
            new Opentype(showTable, typeTable);
        }
    }
}

creditTyeps();