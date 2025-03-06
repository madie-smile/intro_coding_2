var canvas;
var ctx;
var w = 1000;
var h = 700;
// colour array
var colours = [205, 215, 225, 235, 240, 245, 250, 255];

// 1st star object
var o1 = {
    x: 50,
    changeX:10,
    y: 50,
    changeY:10,
    w: 50,
    c: colours[0],
    a: 0.5,
    lw: 5,
    random: 0,
    pi: Math.PI,
}

// 2nd star object
var o2 = {
    x: 90,
    changeX:100,
    y: 90,
    changeY:100,
    c: colours[4],
    a: 0.65,
    lw: 10,
    random: 0,
}

// 3rd star object
var o3 = {
    x: 50,
    changeX:170,
    y: 120,
    changeY:120,
    w: 100,
    h: 100,
    sw:-20,
    sh:-20,
    c: colours[6],
    a: 0.9,
    lw: 15,
    random: 1,
}

setUpCanvas();
star1(o1);
star2(o2);
star3(o3);

// 1st star for loop composition
for(var i=0;i<100;i++){
    star1(o1); 
    o1.x+= o1.changeX;
    o1.y+= o1.changeY;
    }

// 2nd star for loop composition
  for(var i=0;i<100;i++){
    star2(o2);
    o2.x+= o2.changeX;
    o2.y+= o2.changeY;
// x coordinate randomness
    if(o2.x<0){
        o2.x=i%w/2*rand(10)
    }
    else if (o2.x>1000){
        o2.x=i%w/2*rand(100)
    }
    else {
        if(o2.x=0){
            o2.x=10
        } else if (o2.x=1000){
            o2.x=o2.x-10*rand(100)
        } else {
            o2.x=i%350
        }
        }
// y coordinate randomness
        if(o2.y<0){
            o2.y=i%h/2*rand(100)
        }
        else if (o2.y>700){
            o2.y=i%h/2*rand(100)
        }
        else {
            if(o2.y=0){
                o2.y=10*rand(10)
            } else if (o2.y=700){
                o2.y=o2.y-10*rand(100)
            } else {
                o2.y=i%350
            }
            }
}

// 3rd star for loop composition
for(var i=0;i<5;i++){
    star3(o3);
    o3.x+= o3.changeX;
    o3.y+= o3.changeY;
    o3.sw-= o3.sw;
    o3.sh-= o3.sh;
}

// 1st star function
function star1(o){
    var x =o.x;
    var y =o.y;
    ctx.beginPath();
    // arc(x,y,r,start,end)
    ctx.arc(o.x, o.y, o.w, 0, .5 *o.pi);
    ctx.arc(o.x, o.y+(o.y*2), o.w, 4.75, .05 *o.pi);
    ctx.arc(o.x+(o.x*2), o.y+(o.y*2), o.w, 3.25, 1.5 *o.pi);
    ctx.arc(o.x+(o.x*2), o.y, o.w, 1.5, 1 *o.pi);
    ctx.closePath();
    ctx.strokeStyle="hsla("+o.c+",100%,60%,"+o.a+")";
    ctx.lineWidth=o.lw;
    ctx.stroke();
    o.x = x;
    o.y = y;
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
    ctx.strokeStyle="hsla("+o.c+",100%,60%,"+o.a+")";
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
        ctx.moveTo(o.x+0+o.w-o.sw, o.y+0+o.h);
        ctx.lineTo(o.x+50+o.w,  o.y-5+o.h);
        // top point
        ctx.lineTo(o.x+60+o.w,  o.y-60+o.h-o.sh);
        ctx.lineTo(o.x+70+o.w, o.y-5+o.h);
        // right point
        ctx.lineTo(o.x+120+o.w+o.sw,  o.y+0+o.h);
        ctx.lineTo(o.x+70+o.w,  o.y+15+o.h);
        // bottom point
        ctx.lineTo(o.x+60+o.w,  o.y+100+o.h+o.sh/2);
        ctx.lineTo(o.x+50+o.w,  o.y+15+o.h);
        ctx.closePath();
    ctx.strokeStyle="hsla("+o.c+",100%,70%,"+o.a+")";
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

// canvas
function setUpCanvas(){
    canvas=document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");
    canvas.width=w;
    canvas.height=h;
    canvas.style.border="3px dashed skyblue";
}

console.log(rand(10))
console.log("assignment 2")