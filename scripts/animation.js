var img;

function preload() {
    img = loadImage("http://localhost:3000/11.png");
    // //load2 = loadImage("doorFrame1.jpg");
    // open = createImg("http://localhost:3000/original.gif");
    //frame = createImg("doorFrame1.jpg");
}

function setup() {
    // createCanvas(1000, 480);
    // background(createImg("http://localhost:3000/original.gif"));
    // createImg("http://localhost:3000/original.gif")
    createCanvas(800, 480);
}

function draw() {
    background(237, 102,99);
    image(img, 0, 0, 240, 240);
    // loads only first frame
    // image(load, 0, 0);
    //image(load2, 100,100);

    // updates animation frames by using an html
    // img element, positioning it over top of
    // the canvas.
    // open.position(0, 0);
    // rect(20, 20, 20, 20);
    // gif_createImg2.position(0, 100);

}
