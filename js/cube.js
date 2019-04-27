var canvas = document.getElementById('cube');
var ctx = canvas.getContext('2d');


ctx.scale(1, 1);

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(0, 300);
ctx.lineTo(200, 300);
ctx.lineTo(200, 100);
ctx.lineTo(0, 100);
ctx.lineTo(100, 50);
ctx.lineTo(300, 50);
ctx.lineTo(200, 100);
ctx.moveTo(200, 300);
ctx.lineTo(300, 250);
ctx.lineTo(300, 50);
ctx.moveTo(300, 250);
ctx.lineTo(100, 250);
ctx.lineTo(100, 50);
ctx.moveTo(100, 250);
ctx.lineTo(0, 300);
ctx.lineTo(200, 100);
ctx.lineTo(300, 250);
ctx.moveTo(200, 300);
ctx.lineTo(0, 100);
ctx.moveTo(200, 300);
ctx.lineTo(300, 50);
ctx.lineTo(0, 100);
ctx.moveTo(200, 100);
ctx.lineTo(100, 50);

// var color = [
//     '#791CEF',
//     '#6220EF',
//     '#4A25EF',
//     '#2E2BEF',
//     '#254CEE',
//     '#1F6BED',
//     '#198CEC',
//     '#11BBEB',
//     '#198CEC',
//     '#1F6BED',
//     '#254CEE',
//     '#2E2BEF',
//     '#4A25EF',
//     '#6220EF',
// ];

var i = 0;

setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = randColor();
    ctx.stroke();
    // i++;
    // if(i == 14) {
    //     i = 0;
    // }
}, 300);

function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
