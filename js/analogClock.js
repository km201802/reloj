var w = 300;
var h = 300;
var rad = 30;
var rad2 = 6;
var radius = 90;
var tw = [12,11,10,9,8,7,6,5,4,3,2,1]
var six = [];
for(var i=1; i<60; i++){six.push(i)}
console.log(six);
function setup(){
  createCanvas(w, h);
}
function draw(){
  fill("gray");
  rect(0,0,w,h);
  fill("black");
  
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
  var m = 12;
  for(var i=0; i<60; i+=1){
    var l = 8;
    var x = radius*0.95*Math.sin((i*6)*(Math.PI/180));
    var y = radius*0.95*Math.cos((i*6)*(Math.PI/180))+l/2;
    if(i/5!=Math.floor(i/5)){
      push();
      translate(w/2-x,h/2-y);
      rotate((-i*6)*(Math.PI/180));
      line(0,0,0,-l)
      pop();
    }
  }
}
