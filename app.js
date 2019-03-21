// let r1 = 150;
// let r2 = 100;
// let m1 = 20;
// let m2 = 20;
let a1 = 180;
let a2 = 180;
let g = 0.81;
let a1_v = 0;
let a2_v = 0;

function setup() {
    createCanvas(700, 700);
    textSize(12);

    r1Slider = createSlider(0,300,150)
    r1Slider.position (20,10)
    
    r2Slider = createSlider(0,300,150)
    r2Slider.position (20,40)
    
    m1Slider = createSlider(0,50,20)
    m1Slider.position (20,70)
    
    m2Slider = createSlider(0,50,20)
    m2Slider.position (20,100)

    
  }
  
function draw() {

    let r1 = r1Slider.value();
    let r2 = r2Slider.value();
    let m1 = m1Slider.value();
    let m2 = m2Slider.value();

    let num1 = -g * (2*m1+m2) * sin(a1);
    let num2 = -m2 * g * sin(a1-2*sin(a1-2*a2));
    let num3 = -2 * sin(a1 - a2);
    let num4 = m2*(Math.pow(a2_v,2) * r2 + Math.pow(a1_v,2) * r1 * cos(a1-a2));

    let denom1 = r1 * (2 * m1 + m2 - m2 * cos(2*a1 - 2*a2))
    let denom2 = r2 * (2 * m1 + m2 - m2 * cos(2*a1 - 2*a2))

    let num5 = (2 * sin(a1-a2))
    let num6 = (Math.pow(a1_v,2)*r1*(m1+m2) + g*(m1+m2) * cos(a1)+Math.pow(a2_v,2)*r2*m2*cos(a1-a2))

    let a1_a = (num1+num2+num3*num4) / denom1;

    let a2_a = (num5*num6) / denom2;

    background(220);

    stroke(0);
    strokeWeight(1);

    text(`r1 length: ${r1}`,r1Slider.x*10,r1Slider.y+8)
    text(`r2 length: ${r2}`,r2Slider.x*10,r2Slider.y+8)
    text(`m1 mass: ${m1}`,m1Slider.x*10,m1Slider.y+8)
    text(`m2 mass: ${m2}`,m2Slider.x*10,m2Slider.y+8)

    translate(300, 250);

    let x1 = r1 * Math.sin(a1);
    let y1 = r1 * Math.cos(a1);

    let x2 = x1 + r2 * Math.sin(a2);
    let y2 = y1 + r2 * Math.cos(a2);


    line(0,0,x1,y1)
    ellipse(x1,y1,m1,m1)
    fill(0)

    line(x1,y1,x2,y2)
    ellipse(x2,y2,m2,m2)
    fill(0)
    
    a1_v = a1_v + a1_a;
    a2_v = a2_v + a2_a;
    a1 = a1 + a1_v;
    a2 = a2 + a2_v;

    a1_v *= 0.999;
    a2_v *= 0.999;
  }
