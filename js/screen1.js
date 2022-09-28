class Screen1 {
constructor() {
    //this.titleimg = createImg("assets/title.png", "gameTitle");
    //this.intro = createImg("assets/intro.png");
    this.nextButtonImg = createImg("assets/nextBttnImg.png");
    //this.trialButtonImg = createImg();
    //this.bgImg = createImg("assets/bgImg.jpg");
}
setElementPosition(){
    //this.titleimg.position(400, 200);
    this.nextButtonImg.position(400,100);
    //this.bgImg.position(100, 100);
    //this.intro.position(400, 500);
    //this.trialButtonImg.position(x, y);
}
/*setElementStyle(){
    this.titleimg.class("titleStyle");
}*/

handleMousePressed(){
this.nextButtonImg.mousePressed(()=>{
    //this.titleimg.hide();
    //this.intro.hide();
    this.intro = createImg("assets/intro.png");
    //this.bgImg.hide();
})
}

display(){
    this.setElementPosition();
    //this.setElementStyle();
    this.handleMousePressed();
}
}