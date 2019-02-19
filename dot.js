class Dot {
    constructor (x,y){
        this.x = x;
        this.y = y;
    }
    show(){
        fill(255);
        circle( x0 + this.x, y0 + this.y, 3);
    }
}