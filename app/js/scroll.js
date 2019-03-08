var cnvsScroll = document.getElementById('scroll');
var ctxScroll = cnvsScroll.getContext('2d');

ctxScroll.scale(1.5, 1.5);

ctxScroll.beginPath();   

ctxScroll.moveTo(0, 0);
ctxScroll.lineTo(10, 10);
ctxScroll.lineTo(20, 0);

ctxScroll.moveTo(0, 5);
ctxScroll.lineTo(10, 15);
ctxScroll.lineTo(20, 5);

ctxScroll.moveTo(0, 10);
ctxScroll.lineTo(10, 20);
ctxScroll.lineTo(20, 10);


setInterval(function() {
    ctxScroll.strokeStyle = color[i];
    ctxScroll.stroke();
    i++;
    if(i == 14) {
        i = 0;
    }
}, 200);

// скрытие холста при скролле

var scroll = document.getElementById('scroll');

window.onscroll = function() {
    if (window.pageYOffset != 0) {
        scroll.classList.add('hidden');
    } else {
        scroll.classList.remove('hidden');
    }
}