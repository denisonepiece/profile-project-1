var plusBox = document.getElementsByClassName("plus-box");

for (var j = 0; j < plusBox.length; j++) {
    (function (index) {
        plusBox[index].onclick = function () {
            if (this.classList.contains("plus-box--show")) {
                this.classList.remove("plus-box--show")
            }
            else {
                removeActive();
                this.classList.add("plus-box--show")
            }
        };
    })(j);
}

function removeActive() {
    for (var i = 0; i < plusBox.length; i++) {
        plusBox[i].classList.remove("plus-box--show");
    }
}