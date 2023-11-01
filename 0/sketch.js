let nSlider; 

function setup() {
  createCanvas(500, 500);
  
  nSlider = createSlider(1, 1000, 100, 10); 
  nSlider.position(500,100); 
}

let gridSize = 4; 

function draw() {
  randomSeed(1010); 
  background(0); 
  stroke(0);
  noStroke();  
  let nscale = nSlider.value(); 

  for(let y = 0; y<height; y+=gridSize) {
    let rc = floor(random(0, 256));
    for (let x =0; i<width; x+=gridSize) {
      //let y = height * noise(i/nscale); 
      let fc = 255 * noise(x/nscale, y/nscale); 
      let aColor; 
      if (fc>200) { 
        aColor = "forestgreen";
      } else if (fc>150) {
        aColor ="sandybrown" ; 
      } else if (fc>120) {
        aColor = "brown" ; 
      } else {
        aColor = "mediumblue"; 
      }
      fill(aColor); 
      rect(x, y, gridSize, gridSize); 
      //line(i, height/2, i, y); 
    } 

  }
}
  // let x = frameCount % width; 
  // let y = height * noise(x/nscale); 
  // fill(255); 
  // ellipse(x, y, 20, 20); 