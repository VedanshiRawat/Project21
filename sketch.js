var canvas,box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    createSprite(random(20, 750));

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    //add condition to check if box touching surface and make it box

    if(Surface1.isTouching(box)&& box.bounceOff(surface1)){
        change color here
    }
}
 