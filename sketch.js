
let csize=[];
let yPos=[];
let speed=[];

function setup()
{
  createCanvas(windowWidth, windowHeight);
  for(let i=1; i<10; i++)
  {
    csize.push(Math.random()*3+1);
    yPos.push(0);
  }
}

function draw() 
{
  background(128, 128, 128);
  fill(38, 38, 38);
  rect(0, windowHeight/2, windowWidth, windowHeight/2);
  for(let i=1; i<10; i++)
  {
    fill(192, 192, 192);
    let x=i*windowWidth/9;
    let diameters=csize[i]*20;
    circle(x, yPos[i], diameters);
    
    if(yPos[i]>=windowHeight-diameters/2)
    {
      speed[i]=0;
    }
    else if(yPos[i]>=windowHeight/2-diameters/2)
    {
      speed[i]=csize[i]/2;
    }
    else
    {
      speed[i]=csize[i]+1;
    }
    yPos[i]+=speed[i];
  }
}