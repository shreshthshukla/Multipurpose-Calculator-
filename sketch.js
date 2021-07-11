var x, y, z;

var triangle, root;
var button1, button2;
function preload(){

  triangle = loadImage("triangle.png");

  root = loadImage("root.png")
}

function setup() {
  createCanvas(800,400);
  var title = createElement('h2');
  title.html('Multiporpose Calculator');
  title.position(250,0);

  hypo = new Hypo();

  roots = new Root();
  
  button1 = createButton("Hypotenuse Calculator");
  button1.position(300,200);
  button2 = createButton("Square Root Calculator");
  button2.position(300,300);
  x = 0
  y = 0
  z = 0
}

function draw() {
  background("red");  

  // hypo.display();
  // roots.display();
}