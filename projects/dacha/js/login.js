$("#request").on("click", function () {
    $("#modal-login").removeClass("modal-call--show").css("z-index", 1);
    $("#modal-recovery").addClass("modal-call--show").css("z-index", 9);
});

$("#modal-login-show").on("click", function () {
   $("#modal-recovery").removeClass("modal-call--show").css("z-index", 1);
   $("#modal-login").addClass("modal-call--show").css("z-index", 9);
});

$("#send-email").on("click", function () {
    $("#modal-recovery").removeClass("modal-call--show").css("z-index", 1);
    $("#modal-check").addClass("modal-call--show").css("z-index", 9);
});

$("#modal-login-show2").on("click", function () {
    $("#modal-check").removeClass("modal-call--show").css("z-index", 1);
    $("#modal-login").addClass("modal-call--show").css("z-index", 9);
});
