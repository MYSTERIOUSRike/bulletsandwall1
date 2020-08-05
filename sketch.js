/*Project 21-The military wants to test the effectiveness of walls against bullets. All walls are made
of concrete material. If the damage to the wall from the bullet exceeds a certain value, the
material used to make the wall is rejected. */

var bullet,wall;
var speed,weight,thickness;
var bulletRightEdge;
var wallLeftEdge;
var damage;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 40, 15);
  bullet.shapeColor= color(255,255,255);
  
  thickness=random(22,83)
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor= color(80,80,80);

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed; 
  //bullet.weight=weight; 
  
 // wall.thickness=thickness;
  
}
  
function draw() {
  
  background(0);                        
  drawSprites(); //To show the bullet and wall before collision

  //Formula to check collision
  wall.debug=true;
  bullet.debug=true;

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
  
     //To stop the bullet after colliding with wall
    //bullet.x=650; //To display the bullet at a fixed position after touching the wall
    damage  =(0.5*weight*speed*speed)/(thickness*thickness*thickness);
   
   //var damage =(0.5*bullet.weight*bullet.velocityX*bullet.velocityX)/(wall.thickness*wall.thickness*wall.thickness); 
   // Based on damage calculation, give the colors to wall 
   if(damage>10){
     wall.shapeColor=color(255,0,0);  // Red
   }
   
   if(damage<10){
      wall.shapeColor=color(0,255,0);  // Green
    }
   }                      
   drawSprites();
  }                      
function hascollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>= wallLeftEdge){
  return true;
  }
  return false;
  













}
// bulletRightEdge=lbullet.x+lbullet.width;
// wallLeftEdge=lwall.x;
// if (bulletRightEdge>= wallLeftEdge){
  // return true;
// }
// return false;





