var canvas;
var ctx;
var w = 1000;
var h = 700;
// var colours = [205, 210, 215, 220, 225, 230, 235, 240]
var o1 = {
    x: 90,
    changeX:0,
    y: 90,
    changeY:0,
    w: 90,
    c: 210,
    a: 0.75,
    lw: 5,
    random: 0,
    pi: Math.PI,
}
var o2 = {
    x: 90,
    y: 90,
    c: 210,
    a: 0.75,
    lw: 1,
    random: 0,
    }
var o3 = {
    x: 300,
    y: 300,
    c: 210,
    a: 0.75,
    lw: 5,
    random: 0,
}

setUpCanvas();
star1(o1);
star2(o2);
star3(o3);

function star1(o){
    // var x =o.x;
    // var y =o.y;
    ctx.beginPath();
    // arc(x,y,r,start,end)
    ctx.arc(o.x+rand(o.random), o.y+rand(o.random), o.w, 0, .5 *o.pi);
    ctx.arc(o.x+rand(o.random), o.y+(o.y*2)+rand(o.random), o.w, 4.75, .05 *o.pi);
    ctx.arc(o.x+(o.x*2)+rand(o.random), o.y+(o.y*2)+rand(o.random), o.w, 3.25, 1.5 *o.pi);
    ctx.arc(o.x+(o.x*2)+rand(o.random), o.y+rand(o.random), o.w, 1.5, 1 *o.pi);
    ctx.strokeStyle="hsla("+o.c+",100%,50%,"+o.a+")";
    ctx.lineWidth=o.lw;
    ctx.stroke();
    // o.x = x;
    // o.y = y;
}

function star2(o){
    ctx.beginPath();
    ctx.moveTo(o.x+0, o.y+40);
    ctx.lineTo(o.x+10,  o.y+10);
    ctx.lineTo(o.x+40,  o.y+10);
    ctx.lineTo(o.x+20,  o.y-10);
    ctx.lineTo(o.x+30,  o.y-40);
    ctx.lineTo(o.x+0,  o.y-20);
    ctx.lineTo(o.x-30,  o.y-40);
    ctx.lineTo(o.x-20,  o.y-10);
    ctx.lineTo(o.x-50,  o.y+10);
    ctx.lineTo(o.x-10,  o.y+10);
    ctx.closePath();
    ctx.strokeStyle="hsla("+o.c+",100%,50%,"+o.a+")";
        ctx.lineWidth=o.lw;
        ctx.stroke();
    }

function star3(o){
    ctx.beginPath();
    ctx.moveTo(o.x+0, o.y+0);
    ctx.lineTo(o.x+50,  o.y-5);
    ctx.lineTo(o.x+60,  o.y-60);
    ctx.lineTo(o.x+70, o.y-5);
    ctx.lineTo(o.x+120,  o.y+0);
    ctx.lineTo(o.x+70,  o.y+15);
    ctx.lineTo(o.x+60,  o.y+100);
    ctx.lineTo(o.x+50,  o.y+15);
    ctx.closePath();
    ctx.strokeStyle="hsla("+o.c+",100%,50%,"+o.a+")";
        ctx.lineWidth=o.lw;
        ctx.stroke();
}

// function star4(o){
//     ctx.beginPath();
//     ctx.moveTo(o.x+0, o.y+0);
//     ctx.lineTo(o.x+50,  o.y+0);
//     ctx.moveTo(o.x+70, o.y+0);
//     ctx.lineTo(o.x+120,  o.y+0);
//     ctx.moveTo(o.x+60, o.y-60);
//     ctx.lineTo(o.x+60,  o.y-10);
//     ctx.moveTo(o.x+60, o.y+10);
//     ctx.lineTo(o.x+60,  o.y+100);
//     ctx.closePath();
//     ctx.strokeStyle="hsla("+o.c+",100%,50%,"+o.a+")";
//         ctx.lineWidth=o.lw;
//         ctx.stroke();
// }

function rand(){
    var result = Math.floor(Math.random() * 2.5);
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
    canvas.style.border="3px dashed skyblue";
}

console.log(randn(10))
console.log(rand(10))
console.log("assignment 2")