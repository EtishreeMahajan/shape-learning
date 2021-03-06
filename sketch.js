var box;
var dottedImg, dotted, circle, circleImg, heart, heartImg, star, starImg, rectangle, rectangleImg, square, squareImg, triangle, triangleImg, cylinder, cylinderImg, oval, ovalImg, sphere, sphereImg, decagon, decagonImg, heptagon, heptagonImg, hexagon,
  hexagonImg, nonagon, nonagonImg, octagon, octagonImg, pentagon, pentagonImg, cube, cubeImg, cuboid, cuboidImg, kite, kiteImg, parallelogram, parallelogramImg, rhombus, rhombusImg, trapezium, trapeziumImg, acuteAngled, acuteAngledImg, cone, coneImg,
  equilateral, equilateralImg, isoceles, isocelesImg, obtuseAngled, obtuseAngledImg, prism, prismImg, pyramid, pyramidImg, rightAngled, rightAngledImg, scalene, scaleneImg, dot, dotImg, sleeping, sleepingImg, standing, standingImg, slanting, slantingImg;

function preload() {
  dottedImg = loadImage("asserts/basics/image.png");
  dotImg = loadImage("asserts/basics/dot.png");
  sleepingImg = loadImage("asserts/basics/dotted-line.png");
  slantingImg = loadImage("asserts/basics/slanting line.png");
  standingImg = loadImage("asserts/basics/standingLine.png");
  circleImg = loadImage("asserts/circle/circle.png");
  cylinderImg = loadImage("asserts/circle/cylinder.jpg");
  ovalImg = loadImage("asserts/circle/Oval.png");
  sphereImg = loadImage("asserts/circle/sphere.jpg");
  heartImg = loadImage("asserts/other shapes/heart.png");
  starImg = loadImage("asserts/other shapes/star.png");
  decagonImg = loadImage("asserts/other shapes/decagon.png");
  heptagonImg = loadImage("asserts/other shapes/heptagon.png");
  hexagonImg = loadImage("asserts/other shapes/hexagon.png");
  nonagonImg = loadImage("asserts/other shapes/nonagon.png");
  octagonImg = loadImage("asserts/other shapes/octagon.png");
  pentagonImg = loadImage("asserts/other shapes/pentaon.png");
  rectangleImg = loadImage("asserts/quadrilaterals/retangle.png");
  squareImg = loadImage("asserts/quadrilaterals/square.jpg");
  cubeImg = loadImage("asserts/quadrilaterals/cube.png");
  cuboidImg = loadImage("asserts/quadrilaterals/cuboid.png");
  kiteImg = loadImage("asserts/quadrilaterals/kite.png");
  parallelogramImg = loadImage("asserts/quadrilaterals/parallelogram.png");
  rhombusImg = loadImage("asserts/quadrilaterals/rhombus.png");
  trapeziumImg = loadImage("asserts/quadrilaterals/trapezium.png");
  triangleImg = loadImage("asserts/triangle/triangle.jpg");
  acuteAngledImg = loadImage("asserts/triangle/acuteAngled.png");
  coneImg = loadImage("asserts/triangle/cone.png");
  equilateralImg = loadImage("asserts/triangle/equilateral.png");
  isocelesImg = loadImage("asserts/triangle/isoceles.png");
  obtuseAngledImg = loadImage("asserts/triangle/obtuseAngled.png");
  prismImg = loadImage("asserts/triangle/prism.png");
  pyramidImg = loadImage("asserts/triangle/pyramid.png");
  rightAngledImg = loadImage("asserts/triangle/rightAngled.jpg");
  scaleneImg = loadImage("asserts/triangle/scalene.png");
}

function setup() {
  createCanvas(800, 800);

  box = createSprite(400, 400, 600, 600);
  box.shapeColor = 255;

  this.button = createButton('DETAILS');
  this.button.position(610, 650);
  this.button.mousePressed(() => {
    dotted.visible = false;
    rectangle.visible = false;
    triangle.visible = false;
    square.visible = false;
    star.visible = false;
    circle.visible = false;
    heart.visible = false;
    textSize(20);
    fill(0);
    strokeWeight(2);
    stroke(0);
    text("LEARNING SHAPES NOT ONLY HELPS CHILDREN IDENTIFY ", 115, 140);
    text("AND ORGANIZE VISUAL INFORMATION , IT WILL HELP THEM ", 110, 175);
    text("LEARN SKILLS IN OTHER CURRICULUM AREAS INCLUDING", 115, 210);
    text("READING , MATH , AND SCIENCE LEARNING SHAPES ALSO", 115, 245);
    text("HELPS THEM UNDERSTAND OTHER SIGNS AND SYMBOLS...", 115, 280);
    text("THIS APP WILL HELP THEM TO REMEMBER THE SHAPES", 115, 450);
    text("WITH VERY EASY CONCEPTS AND THEY CAN IDENTIFY", 115, 485);
    text("THE SHAPES LIFELONG . IT WOULD BASICALLY EXPLAIN.", 115, 520);
    text("EXAMPLE : RECTANGLE - IT IS A SHAPE WHICH IS MADE ", 115, 555);
    text("AFTER STRETCHING THE SQUARE . SUCH FUN EXANPLES", 115, 590);
    text("ARE EMBEDDED IN THE APP.", 115, 625);
  });

  this.button1 = createButton("BACK");
  this.button1.position(385, 650);
  this.button1.mousePressed(() => {
    dotted.visible = true;
    rectangle.visible = true;
    triangle.visible = true;
    square.visible = true;
    star.visible = true;
    circle.visible = true;
    heart.visible = true
  });

  this.button2 = createButton('BEGIN');
  this.button2.position(130, 650);
  this.button2.mousePressed(() => {
    dotted.visible = false;
    rectangle.visible = false;
    triangle.visible = false;
    square.visible = false;
    star.visible = false;
    circle.visible = false;
    heart.visible = false;
    textSize(20);
    fill(0);
    strokeWeight(2);
    text(" 1) BASICS", 120, 150);
    text(" 2) QUADRILATERALS", 120, 190);
    text(" 3) TRIANGLES", 120, 230);
    text(" 4) CIRCLES", 120, 270);
    text(" 5) OTHER SHAPES", 120, 310);
    this.button3 = createButton("CLICK");
    this.button3.position(620, 135);
    this.button3.mousePressed(() => {
      textSize(20);
      fill(0);
      strokeWeight(1.5);
      text(" 1) DOT (.)", 120, 150);
      text(" 2) STANDING LINE (|)", 120, 190);
      text(" 3) SLANTING LINE (/)", 120, 230);
      text(" 4) SLEEPING LINE(-)", 120, 270);
      this.button4 = createButton("SEE");
      this.button4.position(620, 130);
      this.button4.mousePressed(() => {
        dot = createSprite(420, 200);
        dot.addImage(dotImg);
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("DOT", 380, 290);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button5 = createButton("SEE");
      this.button5.position(620, 170);
      this.button5.mousePressed(() => {
        standing = createSprite(200, 200);
        standing.addImage(standingImg);
        standing.scale = 0.4;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("STANDING LINE(DOTS LINE)", 220, 210);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button6 = createButton("SEE");
      this.button6.position(620, 210);
      this.button6.mousePressed(() => {
        slanting = createSprite(420, 200);
        slanting.addImage(slantingImg);
        slanting.scale = 0.4;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("SLANTING LINE", 380, 290);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button7 = createButton("SEE");
      this.button7.position(620, 255);
      this.button7.mousePressed(() => {
        sleeping = createSprite(420, 200);
        sleeping.addImage(sleepingImg);
        sleeping.scale = 0.4;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("SLEEPING LINE", 380, 290);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
    });

    this.button8 = createButton("CLICK");
    this.button8.position(620, 175);
    this.button8.mousePressed(() => {
      textSize(20);
      fill(0);
      strokeWeight(1.5);
      text(" 1) SQUARE", 120, 150);
      text(" 2) RECTANGLE", 120, 190);
      text(" 3) RHOMBUS", 120, 230);
      text(" 4) PARALLELOGRAM", 120, 270);
      text(" 5) TRAPEZIUM", 120, 310);
      text(" 6) KITE", 120, 350);
      text(" 7) CUBE (3D SHAPE)", 120, 390);
      text(" 8) CUBOID (3D SHAPE)", 120, 430);
      this.button9 = createButton("SEE");
      this.button9.position(620, 130);
      this.button9.mousePressed(() => {
        square = createSprite(415, 200);
        square.addImage(squareImg);
        square.scale = 0.4;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("SQUARE", 340, 290);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button10 = createButton("SEE");
      this.button10.position(620, 170);
      this.button10.mousePressed(() => {
        rectangle = createSprite(415, 200);
        rectangle.addImage(rectangleImg);
        rectangle.scale = 0.20;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("RECTAGLE", 320, 280);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button11 = createButton("SEE");
      this.button11.position(620, 210);
      this.button11.mousePressed(() => {
        rhombus = createSprite(420, 200);
        rhombus.addImage(rhombusImg);
        rhombus.scale = 0.9;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("RHOMBUS", 295, 300);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button12 = createButton("SEE");
      this.button12.position(620, 250);
      this.button12.mousePressed(() => {
        parallelogram = createSprite(420, 200);
        parallelogram.addImage(parallelogramImg);
        parallelogram.scale = 0.9;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("PARALLELOGRAM", 250, 290);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button13 = createButton("SEE");
      this.button13.position(620, 290);
      this.button13.mousePressed(() => {
        trapezium = createSprite(420, 200);
        trapezium.addImage(trapeziumImg);
        trapezium.scale = 0.35;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("TRAPEZIUM", 320, 310);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button14 = createButton("SEE");
      this.button14.position(620, 330);
      this.button14.mousePressed(() => {
        kite = createSprite(420, 200);
        kite.addImage(kiteImg);
        kite.scale = 1.8;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("KITE", 380, 310);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button15 = createButton("SEE");
      this.button15.position(620, 370);
      this.button15.mousePressed(() => {
        cube = createSprite(420, 200);
        cube.addImage(cubeImg);
        cube.scale = 0.23;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("CUBE", 380, 320);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button16 = createButton("SEE");
      this.button16.position(620, 410);
      this.button16.mousePressed(() => {
        cuboid = createSprite(420, 200);
        cuboid.addImage(cuboidImg);
        cuboid.scale = 0.4;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("CUBOID", 350, 320);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
    });

    this.button17 = createButton("CLICK");
    this.button17.position(620, 215);
    this.button17.mousePressed(() => {
      textSize(20);
      fill(0);
      strokeWeight(1.5);
      text(" 1) TRIANGLES", 120, 150);
      text(" 2) ACUTE ANGLED TRIANGLE", 120, 190);
      text(" 3) RIGHT ANGLED TRIANGLE", 120, 230);
      text(" 4) OBTUSE ANGLED TRIANGLE", 120, 270);
      text(" 5) ISOCELES", 120, 310);
      text(" 6) EQULATERAL", 120, 350);
      text(" 7) SCALENE", 120, 390);
      text(" 8) CONE (3D)", 120, 430);
      text(" 9) PYRAMID (3D)", 120, 470);
      text(" 10) PRISM (3D)", 120, 510);
      this.button18 = createButton("SEE");
      this.button18.position(620, 130);
      this.button18.mousePressed(() => {
        triangle = createSprite(415, 200);
        triangle.addImage(triangleImg);
        triangle.scale = 0.9;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("TRIANGLE", 325, 310);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button19 = createButton("SEE");
      this.button19.position(620, 170);
      this.button19.mousePressed(() => {
        acuteAngled = createSprite(415, 180);
        acuteAngled.addImage(acuteAngledImg);
        acuteAngled.scale = 0.9;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("ACUTE ANGLED TRIANGLE", 180, 280);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button20 = createButton("SEE");
      this.button20.position(620, 210);
      this.button20.mousePressed(() => {
        rightAngled = createSprite(420, 200);
        rightAngled.addImage(rightAngledImg);
        rightAngled.scale = 0.9;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("RIGHT ANGLED TRIANGLE", 180, 300);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button21 = createButton("SEE");
      this.button21.position(620, 255);
      this.button21.mousePressed(() => {
        obtuseAngled = createSprite(420, 200);
        obtuseAngled.addImage(obtuseAngledImg);
        obtuseAngled.scale = 0.9;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("OBTUSE ANGLED TRIANGLE", 180, 310);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button22 = createButton("SEE");
      this.button22.position(620, 290);
      this.button22.mousePressed(() => {
        isoceles = createSprite(420, 200);
        isoceles.addImage(isocelesImg);
        isoceles.scale = 0.5;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("ISOCELES", 330, 310);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button23 = createButton("SEE");
      this.button23.position(620, 330);
      this.button23.mousePressed(() => {
        equilateral = createSprite(420, 200);
        equilateral.addImage(equilateralImg);
        equilateral.scale = 0.9;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("EQUILATERAL", 300, 310);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button24 = createButton("SEE");
      this.button24.position(620, 370);
      this.button24.mousePressed(() => {
        scalene = createSprite(420, 200);
        scalene.addImage(scaleneImg);
        scalene.scale = 0.9;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("SCALENE", 340, 320);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button25 = createButton("SEE");
      this.button25.position(620, 410);
      this.button25.mousePressed(() => {
        cone = createSprite(420, 200);
        cone.addImage(coneImg);
        cone.scale = 0.25;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("CONE", 370, 320);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button26 = createButton("SEE");
      this.button26.position(620, 450);
      this.button26.mousePressed(() => {
        pyramid = createSprite(420, 200);
        pyramid.addImage(pyramidImg);
        pyramid.scale = 0.4;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("PYRAMID", 350, 320);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button27 = createButton("SEE");
      this.button27.position(620, 490);
      this.button27.mousePressed(() => {
        prism = createSprite(420, 200);
        prism.addImage(prismImg);
        prism.scale = 0.4;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("PRISM", 350, 320);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
    });

    this.button28 = createButton("CLICK");
    this.button28.position(620, 255)
    this.button28.mousePressed(() => {
      textSize(20);
      fill(0);
      strokeWeight(1.5);
      text(" 1) CIRCLE", 120, 150);
      text(" 2) OVAL", 120, 190);
      text(" 3) SPHERE", 120, 230);
      text(" 4) CYLINDER", 120, 270);
      this.button29 = createButton("SEE");
      this.button29.position(620, 130);
      this.button29.mousePressed(() => {
        circle = createSprite(420, 200);
        circle.addImage(circleImg);
        circle.scale = 0.25;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("CIRCLE", 350, 310);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button30 = createButton("SEE");
      this.button30.position(620, 170);
      this.button30.mousePressed(() => {
        oval = createSprite(420, 200);
        oval.addImage(ovalImg);
        oval.scale = 2;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("OVAL", 380, 310);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button31 = createButton("SEE");
      this.button31.position(620, 210);
      this.button31.mousePressed(() => {
        sphere = createSprite(420, 200);
        sphere.addImage(sphereImg);
        sphere.scale = 0.5;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("SPHERE", 350, 310);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button32 = createButton("SEE");
      this.button32.position(620, 255);
      this.button32.mousePressed(() => {
        cylinder = createSprite(420, 200);
        cylinder.addImage(cylinderImg);
        cylinder.scale = 1;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("CYLINDER", 330, 310);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
    });

    this.button33 = createButton("CLICK");
    this.button33.position(620, 295);
    this.button33.mousePressed(() => {
      textSize(20);
      fill(0);
      strokeWeight(1.5);
      text(" 1) PENTAGON", 120, 150);
      text(" 2) HEXAGON", 120, 190);
      text(" 3) HEPTAGON", 120, 230);
      text(" 4) OCTAGON", 120, 270);
      text(" 5) NONAGON", 120, 310);
      text(" 6) DECAGON", 120, 350);
      text(" 7) STAR", 120, 390);
      text(" 8) HEART", 120, 430);
      this.button34 = createButton("SEE");
      this.button34.position(620, 130);
      this.button34.mousePressed(() => {
        pentagon = createSprite(415, 200);
        pentagon.addImage(pentagonImg);
        pentagon.scale = 0.8;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("PENTAGON", 315, 315);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button35 = createButton("SEE");
      this.button35.position(620, 170);
      this.button35.mousePressed(() => {
        hexagon = createSprite(415, 200);
        hexagon.addImage(hexagonImg);
        hexagon.scale = 0.8;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("HEXAGON", 325, 315);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button36 = createButton("SEE");
      this.button36.position(620, 210);
      this.button36.mousePressed(() => {
        heptagon = createSprite(420, 200);
        heptagon.addImage(heptagonImg);
        heptagon.scale = 0.9;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("HEPTAGON", 315, 315);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button37 = createButton("SEE");
      this.button37.position(620, 250);
      this.button37.mousePressed(() => {
        octagon = createSprite(420, 200);
        octagon.addImage(octagonImg);
        octagon.scale = 0.9;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("OCTAGON", 330, 315);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button38 = createButton("SEE");
      this.button38.position(620, 290);
      this.button38.mousePressed(() => {
        nonagon = createSprite(420, 200);
        nonagon.addImage(nonagonImg);
        nonagon.scale = 1;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("NONAGON", 330, 315);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button39 = createButton("SEE");
      this.button39.position(620, 330);
      this.button39.mousePressed(() => {
        decagon = createSprite(420, 200);
        decagon.addImage(decagonImg);
        decagon.scale = 1.8;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("DECAGON", 325, 315);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button40 = createButton("SEE");
      this.button40.position(620, 370);
      this.button40.mousePressed(() => {
        star = createSprite(420, 200);
        star.addImage(starImg);
        star.scale = 0.13;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("STAR", 380, 320);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
      this.button41 = createButton("SEE");
      this.button41.position(620, 410);
      this.button41.mousePressed(() => {
        heart = createSprite(420, 200);
        heart.addImage(heartImg);
        heart.scale = 0.3;
        textSize(35);
        fill(0);
        strokeWeight(1.5);
        stroke(0);
        text("HEART", 360, 320);
        text("A DOT IS NOTHING BUT SMALL", 105, 360);
        text("CIRCLE BUT IT IS CONSIDER AS ", 105, 400);
        text("THE BEGINNING OF THE ELEMENT.", 105, 440);
        text("AS IT MARKS THE BEGNNING AND", 105, 480);
        text("THE END OF THE LINE. ", 105, 520);
      });
    });
  });
  dotted = createSprite(450, 430, 50, 50);
  dotted.addImage("img", dottedImg);
  dotted.scale = 0.8;

  triangle = createSprite(360, 365, 50, 50);
  triangle.addImage(triangleImg);
  triangle.scale = 0.6;

  rectangle = createSprite(200, 365, 50, 50);
  rectangle.addImage(rectangleImg);
  rectangle.scale = 0.15;

  square = createSprite(470, 460, 50, 50);
  square.addImage(squareImg);
  square.scale = 0.3;

  circle = createSprite(265, 455, 50, 50);
  circle.addImage(circleImg);
  circle.scale = 0.15;

  star = createSprite(160, 450, 50, 50);
  star.addImage(starImg);
  star.scale = 0.08;

  heart = createSprite(370, 475, 50, 50);
  heart.addImage(heartImg);
  heart.scale = 0.15;
}

function draw() {
  background("yellow");
  textSize(50);
  fill(0);
  strokeWeight(3);
  stroke(0)
  text("SHAPE LEARNING", 190, 65);
  drawSprites();
  /*textSize(30);
  fill(0);
  strokeWeight(1.5);
  stroke(0)
  text("Shapes are our first step to start learning. ", 130, 150);
  text("This is a simple and enjoyable app for ", 130, 200);
  text("children to recognize and learn shape ", 130, 250);
  text("easily.", 130, 300);*/
}