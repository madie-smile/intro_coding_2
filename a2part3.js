var canvas;
var ctx;
var w = 1000;
var h = 700;
// var colours = [205, 210, 215, 220, 225, 230, 235, 240]
var o1 = {
    x: 100,
    // changeX:0,
    y: 100,
    // changeY:0,
    w: 100,
    c: 205,
    a: 0.6,
    lw: 5,
    random: 0,
    pi: Math.PI,
}

setUpCanvas();
star1(o1);


function star1(o){
    // var x =o.x;
    // var y =o.y;
    ctx.beginPath();
    // arc(x,y,r,start,end)
    ctx.arc(o.x, o.y, o.w, 0, .5 *o.pi);
    ctx.arc(o.x, o.y+(o.y*2), o.w, 5, .05 *o.pi);
    ctx.arc(o.x+(o.x*2), o.y+(o.y*2), o.w, 3.25, 1.5 *o.pi);
    ctx.arc(o.x+(o.x*2), o.y, o.w, 1.5, 1 *o.pi);
    ctx.strokeStyle="hsla("+o.c+",100%,50%,"+o.a+")";
    ctx.lineWidth=o.lw;
    ctx.stroke();
    // o.x = x;
    // o.y = y;
}

function rand(range){
    var result = Math.random()*range;
    return result;
}

function randn(range){
    var result = Math.random()*range-range/2;
    return result;
}

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