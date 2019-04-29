$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('header').addClass("header--position");
    } else {
        $('header').removeClass("header--position");
    }

    if ($(window).scrollTop() > 100) {
        $('header').addClass("header--fixed");
    } else {
        $('header').removeClass("header--fixed");
    }
});


var headerMenuBurger = document.getElementById("headerMenuBurger");
var headerNav = document.getElementById("headerNav");

headerMenuBurger.onclick = function () {
    headerNav.classList.toggle("header-nav--show");
};

function headerNavlist() {
    var headerNavList = document.getElementById("headerNav");
    var headerNavLink = headerNavList.getElementsByClassName("header__nav-link--list");
    var headerNavItem = headerNavList.getElementsByClassName("header__nav-item--sub-list");
    var headerNavSubListremove = headerNavList.getElementsByClassName("header__nav-sub");


    for (var j = 0; j < headerNavItem.length; j++) {
        (function (index) {
            headerNavLink[index].onmouseover = function () {
                var parentLink = headerNavLink[index].parentNode;
                var headerNavSubList = parentLink.getElementsByClassName("header__nav-sub");
                headerNavSubList[0].classList.add("header__nav-sub--show");
            };
        })(j);
    }


    for (var k = 0; k < headerNavItem.length; k++) {
        (function (index) {
            headerNavSubListremove[index].onmouseleave = function () {
                this.classList.remove("header__nav-sub--show");
            }
        })(k);
    }
}

headerNavlist();

// modal call
function showModalCall () {

    var modalCall = document.getElementById("modalCall");
    var modalCallClose = document.getElementById("modalCallClose");
    var modalCallOverlay = document.getElementById("modalCallOverlay");
    var modalShowBtn = document.getElementsByClassName("modal-show-button");

    var modalCallBackBtn = document.getElementById("modalCallBackBtn");
    var modalCallAcceptClose = document.getElementById("modalCallAcceptClose");
    var modalCallAccept = document.getElementById("modalCallAccept");

    if(modalShowBtn) {
        for (var j = 0; j < modalShowBtn.length; j++) {
            (function (index) {
                modalShowBtn[index].onclick = function () {
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalCall.classList.add("modal-call--show");
                };
            })(j);
        }
    }

    if(modalCallClose) {
        modalCallClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCall.classList.remove("modal-call--show");
        };
    }
    if(modalCallAcceptClose) {
        modalCallAcceptClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCallAccept.classList.remove("modal-call--show");
        };
    }



    if(modalCallOverlay) {
        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCall.classList.remove("modal-call--show");
            modalCallAccept.classList.remove("modal-call--show");
        });
    }

    /*загулушка*/
    if(modalCallBackBtn) {
        modalCallBackBtn.onclick = function () {
            modalCall.classList.remove("modal-call--show");
            modalCallAccept.classList.remove("modal-call--show");
            modalCallAccept.classList.add("modal-call--show");
        };
    }

    if(modalCallAccept) {
        var form = modalCallAccept.querySelector("form");
        var email = modalCallAccept.querySelector("[name=email]");
        var modalError = modalCallAccept.querySelector(".modal-error");

        form.addEventListener("submit", function (evt) {
            if (!email.value) {
                evt.preventDefault();
                modalError.classList.add("modal-error--show");
            }
        });
    }

}

showModalCall ();


function showModalMassage () {

    var modalCall = document.getElementById("modalMassage");
    var modalCallClose = document.getElementById("modalMassageClose");
    var modalCallOverlay = document.getElementById("modalMassageOverlay");
    var modalShowBtn = document.getElementsByClassName("modalMassage-show-button");

    var modalCallBackBtn = document.getElementById("modalMassageBackBtn");
    var modalCallAcceptClose = document.getElementById("modalCallAcceptClose");
    var modalCallAccept = document.getElementById("modalCallAccept");

    if(modalShowBtn) {
        for (var j = 0; j < modalShowBtn.length; j++) {
            (function (index) {
                modalShowBtn[index].onclick = function () {
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalCall.classList.add("modal-call--show");
                };
            })(j);
        }
    }

    if(modalCallClose) {
        modalCallClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCall.classList.remove("modal-call--show");
        };
    }
    if(modalCallAcceptClose) {
        modalCallAcceptClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCallAccept.classList.remove("modal-call--show");
        };
    }



    if(modalCallOverlay) {
        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCall.classList.remove("modal-call--show");
            modalCallAccept.classList.remove("modal-call--show");
        });
    }

    /*загулушка*/
    if(modalCallBackBtn) {
        modalCallBackBtn.onclick = function () {
            modalCall.classList.remove("modal-call--show");
            modalCallOverlay.classList.remove("modal-call-overlay--show");
        };
    }

    if(modalCallAccept) {
        var form = modalCallAccept.querySelector("form");
        var email = modalCallAccept.querySelector("[name=email]");
        var modalError = modalCallAccept.querySelector(".modal-error");

        form.addEventListener("submit", function (evt) {
            if (!email.value) {
                evt.preventDefault();
                modalError.classList.add("modal-error--show");
            }
        });
    }

}

showModalMassage();

function showModalMassageGen() {

    var modalCall = document.getElementById("modalMassageGen");
    var modalCallClose = document.getElementById("modalMassageGenClose");
    var modalCallOverlay = document.getElementById("modalMassageGenOverlay");
    var modalShowBtn = document.getElementsByClassName("modalMassageGen-show-button");

    var modalCallBackBtn = document.getElementById("modalMassageGenBackBtn");
    var modalCallAcceptClose = document.getElementById("modalCallAcceptClose");
    var modalCallAccept = document.getElementById("modalCallAccept");

    if(modalShowBtn) {
        for (var j = 0; j < modalShowBtn.length; j++) {
            (function (index) {
                modalShowBtn[index].onclick = function () {
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalCall.classList.add("modal-call--show");
                };
            })(j);
        }
    }

    if(modalCallClose) {
        modalCallClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCall.classList.remove("modal-call--show");
        };
    }
    if(modalCallAcceptClose) {
        modalCallAcceptClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCallAccept.classList.remove("modal-call--show");
        };
    }



    if(modalCallOverlay) {
        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCall.classList.remove("modal-call--show");
            modalCallAccept.classList.remove("modal-call--show");
        });
    }

    /*загулушка*/
    if(modalCallBackBtn) {
        modalCallBackBtn.onclick = function () {
            modalCall.classList.remove("modal-call--show");
            modalCallOverlay.classList.remove("modal-call-overlay--show");
        };
    }

    if(modalCallAccept) {
        var form = modalCallAccept.querySelector("form");
        var email = modalCallAccept.querySelector("[name=email]");
        var modalError = modalCallAccept.querySelector(".modal-error");

        form.addEventListener("submit", function (evt) {
            if (!email.value) {
                evt.preventDefault();
                modalError.classList.add("modal-error--show");
            }
        });
    }

}

showModalMassageGen();

// modal video
function showModalVideo () {
    var modalVideo = document.getElementById("modalVideo");
    if (modalVideo) {
        var modalVideoClose = modalVideo.querySelector(".modal-video__close");
        var btnmOpenodalVideo = document.getElementsByClassName("preview-video-list__item-link");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < btnmOpenodalVideo.length; j++) {
            (function (index) {
                btnmOpenodalVideo[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalVideo.classList.add("modal-video--show");
                };
            })(j);
        }

        if (modalVideoClose) {
            modalVideoClose.onclick = function () {
                modalCallOverlay.classList.remove("modal-call-overlay--show");
                modalVideo.classList.remove("modal-video--show");
            };
        }
        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalVideo.classList.remove("modal-video--show");
        });
    }
}

showModalVideo () ;


// modal call project
function showModalCallProject () {
    var modalCallProject = document.getElementById("modalCallProject");
    if (modalCallProject) {
        var modalVideoClose = modalCallProject.querySelector(".modal-call__close");

        var showModalProject = document.getElementsByClassName("showModalProject");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < showModalProject.length; j++) {
            (function (index) {
                showModalProject[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalCallProject.classList.add("modal-video--show");
                };
            })(j);
        }


        modalVideoClose.onclick = function () {
            console.log("close");
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCallProject.classList.remove("modal-video--show");
        };

        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalCallProject.classList.remove("modal-video--show");
        });
    }
}

showModalCallProject ();

// modal change project
function showModalChangeProject () {
    var modalChangeProject = document.getElementById("modalChangeProject");
    if (modalChangeProject) {
        var modalVideoClose = modalChangeProject.querySelector(".modal-call__close");

        var showModalChangeProject = document.getElementsByClassName("showModalChangeProject");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < showModalChangeProject.length; j++) {
            (function (index) {
                showModalChangeProject[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalChangeProject.classList.add("modal-video--show");
                };
            })(j);
        }


        modalVideoClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalChangeProject.classList.remove("modal-video--show");
        };

        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalChangeProject.classList.remove("modal-video--show");
        });
    }
}

showModalChangeProject ();

var showModalBuyProject = document.getElementsByClassName("showModalBuyProject");
console.log(showModalBuyProject);

// modal buy project
function showmodalBuyProject () {
    var modalBuyProject = document.getElementById("modalBuyProject");
    if (modalBuyProject) {
        var modalVideoClose = modalBuyProject.querySelector(".modal-call__close");

        var showModalBuyProject = document.getElementsByClassName("showModalBuyProject");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < showModalBuyProject.length; j++) {
            (function (index) {
                showModalBuyProject[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalBuyProject.classList.add("modal-video--show");
                };
            })(j);
        }


        modalVideoClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalBuyProject.classList.remove("modal-video--show");
        };

        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalBuyProject.classList.remove("modal-video--show");
        });
    }
}

showmodalBuyProject ();

// modal sent project
function showModalSendOnMail () {
    var modalSenMail = document.getElementById("modalSenMail");
    if (modalSenMail) {
        var modalVideoClose = modalSenMail.querySelector(".modal-call__close");

        var showModalSendOnMail = document.getElementsByClassName("showModalSendOnMail");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < showModalSendOnMail.length; j++) {
            (function (index) {
                showModalSendOnMail[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalSenMail.classList.add("modal-video--show");
                };
            })(j);
        }


        modalVideoClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalSenMail.classList.remove("modal-video--show");
        };

        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalSenMail.classList.remove("modal-video--show");
        });
    }
}

showModalSendOnMail ();

// modal options
function showModalOprions () {
    var modalOptions = document.getElementById("modalOptions");
    if (modalOptions) {
        var modalVideoClose = modalOptions.querySelector(".modal-call__close");

        var showModalOptions = document.getElementsByClassName("showModalOptions");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < showModalOptions.length; j++) {
            (function (index) {
                showModalOptions[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalOptions.classList.add("modal-video--show");
                };
            })(j);
        }


        modalVideoClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalOptions.classList.remove("modal-video--show");
        };

        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalOptions.classList.remove("modal-video--show");
        });
    }
}


// modal building
function showModalBuilding() {
    var modalOptions = document.getElementById("modalBuilding");
    if (modalOptions) {
        var modalVideoClose = modalOptions.querySelector(".modal-call__close");

        var showModalProject = document.getElementsByClassName("showModalProject");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < showModalProject.length; j++) {
            (function (index) {
                showModalProject[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalOptions.classList.add("modal-video--show");
                };
            })(j);
        }


        modalVideoClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalOptions.classList.remove("modal-video--show");
        };

        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalOptions.classList.remove("modal-video--show");
        });
    }
}

showModalBuilding ();

// modal showModalPrice
function showModalPrice() {
    var modalPriceProject = document.getElementById("modalPriceProject");
    if (modalPriceProject) {
        var modalVideoClose = modalPriceProject.querySelector(".modal-call__close");

        var showModalPriceProject = document.getElementsByClassName("showModalPriceProject");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < showModalPriceProject.length; j++) {
            (function (index) {
                showModalPriceProject[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalPriceProject.classList.add("modal-video--show");
                };
            })(j);
        }


        modalVideoClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalPriceProject.classList.remove("modal-video--show");
        };

        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalPriceProject.classList.remove("modal-video--show");
        });
    }
}

showModalBuilding ();

showModalPrice ();

// modal modalBuilding
function showsPriceKnow() {
    var modalBuyProject = document.getElementById("modalBuyProject");
    if (modalBuyProject) {
        var modalVideoClose = modalBuyProject.querySelector(".modal-call__close");

        var showModalBuyProject = document.getElementsByClassName("showModalBuyProject");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < showModalBuyProject.length; j++) {
            (function (index) {
                showModalBuyProject[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalBuyProject.classList.add("modal-video--show");
                };
            })(j);
        }


        modalVideoClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalBuyProject.classList.remove("modal-video--show");
        };

        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalBuyProject.classList.remove("modal-video--show");
        });
    }
}

showsPriceKnow();

// modal showSms
function showSms() {
    var modalSmsAddress = document.getElementById("modalSmsAddress");
    if (modalSmsAddress) {
        var modalVideoClose = modalSmsAddress.querySelector(".modal-call__close");

        var showModalBuyProject = document.getElementsByClassName("showSmsModal");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < showModalBuyProject.length; j++) {
            (function (index) {
                showModalBuyProject[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalSmsAddress.classList.add("modal-video--show");
                };
            })(j);
        }


        modalVideoClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalSmsAddress.classList.remove("modal-video--show");
        };

        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalSmsAddress.classList.remove("modal-video--show");
        });
    }
}

showSms();

// modal showParking
function showParking() {
    var modalAddress = document.getElementById("modalAddress");
    if (modalAddress) {
        var modalVideoClose = modalAddress.querySelector(".modal-call__close");

        var showParkingModal = document.getElementsByClassName("showParkingModal");
        var modalCallOverlay = document.getElementById("modalCallOverlay");

        for (var j = 0; j < showParkingModal.length; j++) {
            (function (index) {
                showParkingModal[index].onclick = function () {
                    var modalCallOverlay = document.getElementById("modalCallOverlay");
                    modalCallOverlay.classList.add("modal-call-overlay--show");
                    modalAddress.classList.add("modal-video--show");
                };
            })(j);
        }


        modalVideoClose.onclick = function () {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalAddress.classList.remove("modal-video--show");
        };

        modalCallOverlay.addEventListener("click", function (evt) {
            modalCallOverlay.classList.remove("modal-call-overlay--show");
            modalAddress.classList.remove("modal-video--show");
        });
    }
}

showParking();