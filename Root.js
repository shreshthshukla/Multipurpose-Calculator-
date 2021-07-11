class Root{
    constructor(){
        this.input = createInput("").attribute("placeholder","X"); 
      
        this.button1 = createButton("=")
    }
    display(){
        this.input.position(50,90);
        this.button1.position(300,90); 

        image(root,500,150,220,200)

        this.button1.mousePressed(()=>{
          x = this.input.value();
          z = Math.sqrt(x);
        
        })
      fill("Black")
      textSize(30);
      text("Square Root is "+z,50,200); 
    }
}