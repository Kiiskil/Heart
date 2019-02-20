let x0 = 300;
let y0 = 300;
let a = 0;
let s = 10;
let i = 0;
let fr = 30;
let x;
let y;
let name = "heart";
let iff = 0;


let heartsLength = 600;
let cr = 0.01;
let dots = new Array();
let sliderLength;
let sliderAngle;
let sliderRate;
let sliderZoom;

//cr = pow(change,-1)/change;


function setup(){
    createCanvas(600,600);
    frameRate(fr);
    sliderLength = createSlider(1,2000,60);
    sliderAngle = createSlider(1,2000,100);
    sliderRate = createSlider(1,120,30);
    sliderZoom = createSlider(1,75,10);
    x = s * 16 * pow(sin(a), 3);
    y = -s * (13 * cos(a) - 5 * cos(2*a) - 2 * cos(3*a) - cos(4*a));
}

function bluePrint(newName){
    name = newName;
    //console.log(name);
    let r = 0;
    switch(name){
        case "spiral":
            r = s * pow(a,0.5);
            x = s * r * cos(a);
            y = s * r * sin(a);
            break;
        case "cross":
            r = 2 / sqrt(sin(4*a));
            x = s * r * cos(a);
            y = s * r * sin(a);
            break;
        case "heart":
            x = s * 16 * pow(sin(a), 3);
            y = -s * (13 * cos(a) - 5 * cos(2*a) - 2 * cos(3*a) - cos(4*a));
            break;
        case "devil":
            let g = pow(96,0.5);
            let l = 10;
            r = sqrt(( pow(g,2) * pow(sin(a),2) - pow(l,2) * pow(cos(a),2)  )/(  pow(sin(a),2) - pow(cos(a),2) ));
            //r = sqrt(( g * sin(a) - l * cos(a)  )/(  sin(a) - cos(a) ));
            x = s * r * cos(a);
            y = s * r * sin(a);
            break;
        case "swast":
            r = sqrt(( sin(a)*cos(a) )/( pow(sin(a),4)-pow(cos(a),4) ));
            x = s * r * cos(a);
            y = s * r * sin(a);
            break;
        case "trifolium":
            if(iff){
                r = -2 * cos(3 * a);
                iff = false;
            }
            else
            {
                r = 2 * cos(3 * a);
                iff = true;
            }
            x = s * r * cos(a);
            y = s * r * sin(a);
            break;
        default:
            x = s * 16 * pow(sin(a), 3);
            y = -s * (13 * cos(a) - 5 * cos(2*a) - 2 * cos(3*a) - cos(4*a));
            break;
    }
}

function draw(){
    background(0);
    heartsLength = sliderLength.value();
    cr = 10/sliderAngle.value();
    if(fr != sliderRate.value()){
        fr = sliderRate.value();
        frameRate(fr);
    }
    s = sliderZoom.value();
    bluePrint(name);
    line(x0, y0, x0+x, y0+y);
    stroke(255);
    let dot = new Dot(x,y);
    dots[i] = dot;
    dots.forEach(dot => {
        dot.show();
    });
    if(dots.length>heartsLength){
        dots = new Array();
        i = -1;
        a = 0;
    }
    let br = (Math.floor(Math.random() * (110 - 90 + 1)) + 90)/100;
    a += cr * br;
    //console.log(a);
    i++;
}
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    else{
        console.log(event.target);
    }
  }
