let nSlider; 

function setup() {
  createCanvas(500, 500);
  
  nSlider = createSlider(1, 1000, 100, 10); 
  nSlider.position(500,100); 
}

let gridSize = 16; 

function draw() {
  background(0); 
  stroke(255); 
  let nscale = nSlider.value(); 

  for(let y = 0; y<height; y+=gridSize) {
    let rc = floor(random(0, 256));
    for (let x =0; i<width; x+=gridSize) {
      //let y = height * noise(i/nscale); 
      let fc = 255 * noise(x/nscale, y/nscale); 
      fill(fc); 
      rect(x, y, gridSize, gridSize); 
      //line(i, height/2, i, y); 
  }
}
  // let x = frameCount % width; 
  // let y = height * noise(x/nscale); 
  // fill(255); 
  // ellipse(x, y, 20, 20); 
}
