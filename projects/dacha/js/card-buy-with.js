"use strict"

function listBuy() {
    var listBuyWith = document.getElementsByClassName("list-buy-with")[0];
    var buyWith = listBuyWith.querySelectorAll('.buy-with');
    var inputsAll = listBuyWith.getElementsByClassName('label-check__input');
    var inputIcon = listBuyWith.getElementsByClassName('label-check__icon');
    var chooseAmount = document.getElementById("chooseAmount");

    for (var j = 0; j < buyWith.length; j++) {
        (function (index) {
            buyWith[index].onclick = function () {
                var input = this.querySelector(".label-check__input");

                if (input.checked) {
                    input.checked = false;
                }

                else {
                    input.checked = true;
                }

                calc();
            }
        })(j);
    }

    for (var j = 0; j < inputIcon.length; j++) {
        (function (index) {
            inputIcon[index].onclick = function () {

                var input = this.parentNode.getElementsByClassName(".label-check__input")[0];

                if (input.checked) {
                    input.checked = false;
                }

                else {
                    input.checked = true;
                }

                calc();
            }
        })(j);
    }


    function calc() {
        var count = 0;

        for (var i = 0; i < inputsAll.length; i++) {
            if (inputsAll[i].checked === true) {
                count++;
            }
            chooseAmount.innerText = count;
        }
    }

    calc();

}

listBuy();
