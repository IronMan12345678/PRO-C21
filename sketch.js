
var star;
var angle = 0;
var planet1, planet2, planet3, planet4 ;
var sun, plnt1, plnt2, plnt3, plnt4, space;
var size = 1;
var planets;

function preload() {
    sun = loadImage("Sun.png");
    plnt1 = loadImage("Mercury.jpg");
    plnt2 = loadImage("Venus.png");
    plnt3 = loadImage("Earth.jpg");
    plnt4 = loadImage("Mars.jpg");
    space = loadImage("Space.png");
}

function setup() {
    var canvas = createCanvas(600, 600);
    angleMode(DEGREES)

    star = createSprite(0, 0, 50, 50);
    star.addAnimation("1", sun);

    star.setCollider("circle", 0, 0, star.width / 2);

    planet1 = createSprite(190, 190, 30, 30);
    planet2 = createSprite(50, 50, 15, 15);
    planet3 = createSprite(80, -80, 20, 20);
    planet4 = createSprite(-110, 110, 50, 50);
    planet5 = createSprite(-150, - 150, 40, 40);

    planet1.addAnimation("1", plnt1);
    planet2.addAnimation("1", plnt2);
    planet3.addAnimation("1", plnt3);
    planet4.addAnimation("1", plnt4);

    planet1.rotationSpeed = -1;
    planet2.rotationSpeed = -1;
    planet3.rotationSpeed = -1;
    planet4.rotationSpeed = -1;

    planets = createGroup();
    planets.push(planet1);
    planets.push(planet2);
    planets.push(planet3);
    planets.push(planet4);


}
function draw() {
    background(space);
    star.scale = size;
    star.collider.radius = star.width / 2
    translate(300, 300);

    rotate(angle);

    drawSprites();
    angle = angle + 1;
    size = size + 0.005;

    planetsDestroy();
}

function planetsDestroy() {
    for (var i = 0; i <= planets.length; i++) {
        var temp = planets.get(i);

        if (temp != undefined) {

            setRoundCollider(temp);
            if (checkCollision(star, temp) === true) {

                temp.destroy();
            }
        }
    }
}
function setRoundCollider(sprite) {
    sprite.setCollider("circle", 0, 0, sprite.width / 2)
}