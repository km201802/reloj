var w = 300;
var h = 300;
var angle = {
  six: 6,
  30: 30
}
var radius = 90;
var tw = [12,11,10,9,8,7,6,5,4,3,2,1]
var six = [];

var frames = 0;
var fps = 0;
var secs = 0;
var lastSecs = 0;
for(var i=1; i<60; i++){six.push(i)}
function setup(){createCanvas(w, h);}

function draw(){
  fill("gray");
  rect(0,0,w,h);
  ellipse(w/2, h/2-4, radius*2.2);
  ellipse(w/2, h/2-4, radius*1.8)
  fill("black");
  
  secs = new Date().getSeconds();
  if(secs!=lastSecs){
    fps = frames;
    document.getElementById("fps").innerHTML = `FPS: ${fps}`;
    frames=0;
  }
  lastSecs = secs;
  
  ellipse(w/2,h/2,6,6);
  var n = 0;
  for(var i=0; i<360; i+= 30){
    var x = radius*Math.sin(i*(Math.PI/180));
    var y = radius*Math.cos(i*(Math.PI/180));
    push();
    textAlign(CENTER);
    text(tw[n],(w/2)-x,(h/2)-y);
    pop();
    n++;
  }
  function ws(){}
  for(var i=0; i<60; i+=1){
    var l = 8;
    var x = radius*0.95*Math.sin(i*6*(Math.PI/180));
    var y = radius*0.95*Math.cos(i*6*(Math.PI/180))+l/2;
    if(i/5!=Math.floor(i/5)){
      push();
      translate(w/2-x,h/2-y);
      rotate((-i*6)*(Math.PI/180));
      line(0,0,0,-l)
      pop();
    }
  }
  var angle = new Date().getSeconds()*6*(Math.PI/180);
  var x = -radius*0.8*Math.sin(angle);
  var y = radius*0.8*Math.cos(angle);
  line(w/2, h/2, w/2-x, h/2-y);

  radians = new Date().getMinutes()*6*(Math.PI/180);
  x = -radius*0.65*Math.sin(radians);
  y = radius*0.65*Math.cos(radians);
  line(w/2, h/2, w/2-x, h/2-y);
 
  radians = (new Date().getHours()*30+(new Date().getMinutes()/12*6))*(Math.PI/180);
  x = -radius*0.5*Math.sin(radians);
  y = radius*0.5*Math.cos(radians);
  line(w/2, h/2, w/2-x, h/2-y);
  frames++;
}
