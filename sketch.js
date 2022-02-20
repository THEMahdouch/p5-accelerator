import p5 from "p5/lib/p5.min";

let sketch = (p5) => {    
    p5.setup = () =>{
        p5.createCanvas(window.innerWidth, window.innerHeight);
        p5.background(0);
    }

    p5.draw = () => {
        p5.fill(255);
        p5.text("Hello World", p5.mouseX, p5.mouseY);
    }
}

new p5(sketch);;