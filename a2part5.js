var canvas;
var ctx;
var w = 1000;
var h = 700;
var colours = [205, 215, 225, 235, 240, 245, 250, 255];

// 1st star object
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

// 2nd star object
var o2 = {
    x: 90,
    y: 90,
    c: 210,
    a: 0.75,
    lw: 1,
    random: 0,
    }

// 3rd star object
var o3 = {
    x: -10,
    changeX:200,
    y: 50,
    changeY:110,
    w: 100,
    h: 100,
    c: 250,
    a: 0.75,
    lw: 15,
    random: 1,
}

setUpCanvas();
// star1(o1);
// star2(o2);
star3(o3);

  // 3rd star for loop composition
for(var i=0;i<20;i++){
    star3(o3);
    o3.x+= o3.changeX;
    o3.y+= o3.changeY;
}

//   // 3rd star for loop colour ** FIX 
// for(var i=0;i<colours.length;i++){
//     o3.c += colours[i%colours.length];
//     console.log(colours[i])
// }

  // 1st star function
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

  // 2nd star function
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

    // 3rd star function
function star3(o){
    var x =o.x;
    var y =o.y;
    o.x=o.x-o.w/2;
    o.y=o.y-o.h/2;
        ctx.beginPath();
        // left point
        ctx.moveTo(o.x+0+o.w, o.y+0+o.h);
        ctx.lineTo(o.x+50+o.w,  o.y-5+o.h);
        // top point
        ctx.lineTo(o.x+60+o.w,  o.y-60+o.h);
        ctx.lineTo(o.x+70+o.w, o.y-5+o.h);
        // right point
        ctx.lineTo(o.x+120+o.w,  o.y+0+o.h);
        ctx.lineTo(o.x+70+o.w,  o.y+15+o.h);
        // bottom point
        ctx.lineTo(o.x+60+o.w,  o.y+100+o.h);
        ctx.lineTo(o.x+50+o.w,  o.y+15+o.h);
        ctx.closePath();
    ctx.strokeStyle="hsla("+o.c+",100%,60%,"+o.a+")";
    ctx.lineWidth=o.lw;
    ctx.stroke();
    o.x = x;
    o.y = y;
}

  // positive random function range
function rand(range){
    var result = Math.random()*range;
    return result;
}

// negative random function range
function randn(range){
    var result = Math.random()*range-range/2;
    return result;
}

// canvas
function setUpCanvas(){
    canvas=document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");
    canvas.width=w;
    canvas.height=h;
    canvas.style.border="3px dashed skyblue";
}

console.log(rand(10))
console.log(randn(10))
console.log("assignment 2")