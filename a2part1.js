var canvas;
var ctx;
var w = 1000;
var h = 700;
var colours = [205, 210, 215, 220, 225, 230, 235, 240]
var o1 = {
    x: w/2,
    changeX:0,
    y: h/2,
    changeY:0,
    w: 100,
    h: 100,
    c: 205,
    a: 0.6,
    lw: 5,
    random: 0,
}

setUpCanvas();
drawing(o1);


function drawing(o){
    var x =o.x;
    var y =o.y;
    o.x=o.x-o.w/2;
    o.y=o.y-o.h/2
    ctx.beginPath();
// insert shape drawing code
    ctx.strokeStyle="hsla("+o.c+",100%,50%,"+o.a+")";
    ctx.lineWidth=o.lw;
    ctx.stroke();
    o.x = x;
    o.y = y;
}

// random functions
function rand(range){
    var result = Math.random()*range;
    return result;
}

function randn(range){
    var result = Math.random()*range-range/2;
    return result;
}

// canvas function
function setUpCanvas(){
    canvas=document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");
    canvas.width=w;
    canvas.height=h;
    canvas.style.border="3px dashed blue";
}

console.log(randn(10))
console.log(rand(10))
console.log("assignment 2")