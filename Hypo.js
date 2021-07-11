class Hypo{
  constructor(){
    
    this.input1 = createInput("").attribute("placeholder","A"); 
    this.input2 = createInput("").attribute("placeholder","B");
      
    this.button = createButton("=");

    // this.input1.hide();
    // this.input2.hide();
    // this.button.hide();
}

display(){

    this.button.position(500,90);

    this.input1.position(50,90);
    this.input2.position(250,90);

    image(triangle,500,150,220,200)


    this.button.mousePressed(()=>{
    
        x = this.input1.value();
        y = this.input2.value();
        z = Math.sqrt(x*x + y*y);
      
    })
    fill("Black")
    textSize(30);
    text("Hypotenuse or (C) is:\n"+z,50,200);
    fill("Yellow")
    text("By Shreshth😊",50,390)
}
}