var back_ground, backgroundImage;
var mofo, mofoImage;
var inimigoMofo, inimigoMorfoImage;
var pão, pão_imagem;
var gaveta, gavetaImagem;
var chão
var corVerde, corVerdeImagem;


function preload() {
  backgroundImage = loadImage("cozinha.png");
  inimigoMorfoImage = loadImage("inimigomofo.png");
  mofoImage = loadImage("mofo.png");
  pão_imagem = loadImage("pão.png");
  gavetaImagem = loadImage("gaveta.png");
  corVerdeImagem = loadImage("corVerde.png")
}

function setup() {
  createCanvas(1600, 900);

  back_ground = createSprite(1000, -80);
  back_ground.addImage("background", backgroundImage);
  
  back_ground.scale = 3.0;

  pão = createSprite(1000, 830);
  pão.addImage("pão", pão_imagem);
  pão.scale = 1.5;

  mofo = createSprite(1000, 1000);
  mofo.addImage("mofo", mofoImage);
  mofo.visible = false;
  mofo.scale = 4.55;

  corVerde = createSprite(1000, 1100);
  corVerde.addImage("cor", corVerdeImagem);
  corVerde.visible = false;
  corVerde.scale = 9.10;
  
  chão = createSprite(1000, 1175);
  chão.visible = false
  chão.scale = 6;
}

function draw() {
  background(255);
 
  if (keyDown("SPACE")) {
      
    pão.velocityY = - 25;
    back_ground.y += 7;
    mofo.y += 2;
   
    setTimeout (() => {
    chão.destroy();
    }, 1000);

    setTimeout (() => {
     mofo.visible = true;
     corVerde.visible = true;
    }, 1000);
  }

  pão.velocityY = pão.velocityY + 10;

  if (keyDown("D") && pão.x <= 1250) {
    pão.x += 5;
  }

  if (keyDown("A") && pão.x >= 750) {
    pão.x -= 5;
  }
  
  setTimeout(() => {
    mofo.position.y = mofo.position.y - 1;
    corVerde.position.y = corVerde.position.y - 1;
  },3000);

  mofo.position.y = corVerde.position.y - 400;
  
  pão.collide(chão);

  drawSprites();
}