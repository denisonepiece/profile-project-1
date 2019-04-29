$(function(){
    $('.minimized').click(function(event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img class="image-is-big" src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth())/2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});

$(".text-review__view-full").on('click', function (e) {
    $(this).parents(".video-review__right").toggleClass('text-review-open');
});

function showModalReview() {

    var modalCall = document.getElementById("modalReview");
    var modalCallClose = document.getElementById("modalReviewClose");
    var modalCallOverlay = document.getElementById("modalReviewOverlay");
    var modalShowBtn = document.getElementsByClassName("modalReview-show-button");

    var modalCallBackBtn = document.getElementById("modalReviewBackBtn");
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

showModalReview();
