/*
  Interactive Fox Pet with Bones
*/

let player;
let playerImg;

let wanderTimer = 0;
let targetX = 0;
let targetY = 0;

let state = "wander";
let waitTimer = 0;

let barkTimer = 0;
let previousState = "wander";

let stepSound;
let barkSound;
let snoreSound;

// ---------- BONE SYSTEM ----------
let bones = [];
let boneMode = false;
let boneBox = { x: 10, y: 10, w: 28, h: 28 };

// ---------- FOX ANIMATIONS ----------
let playerAnis = {
  idle: { row: 0, frames: 4, frameDelay: 10 },
  run: { row: 1, frames: 4, frameDelay: 3 },
  jump: { row: 2, frames: 3, frameDelay: 8 },
  attack: { row: 3, frames: 6, frameDelay: 2 },
  sleep: { row: 4, frames: 2, frameDelay: 40 },
};

const VIEWW = 320;
const VIEWH = 180;

const FRAME_W = 32;
const FRAME_H = 32;

// ---------- PIXEL BONE SPRITE ----------
const boneSprite = [
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0],
  [0, 1, 2, 5, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0],
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
  [0, 0, 1, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 1, 0, 0],
  [0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0],
  [0, 1, 4, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 4, 1, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
];

const boneColors = {
  1: "#2d3436",
  2: "#ffffff",
  3: "#f1f2f6",
  4: "#dfe4ea",
  5: "#ffffff",
};

function preload() {
  playerImg = loadImage("assets/foxSpriteSheet.png");

  stepSound = loadSound("assets/footStep_grass.mp3");
  barkSound = loadSound("assets/fox_bark.mp3");
  snoreSound = loadSound("assets/fox_snore.mp3");
}

function setup() {
  new Canvas(VIEWW, VIEWH, "pixelated");

  allSprites.pixelPerfect = true;

  player = new Sprite(VIEWW / 2, VIEWH / 2, FRAME_W, FRAME_H);

  player.spriteSheet = playerImg;
  player.rotationLock = true;

  player.anis.w = FRAME_W;
  player.anis.h = FRAME_H;
  player.anis.offset.y = -4;

  player.addAnis(playerAnis);

  player.ani = "idle";

  player.w = 18;
  player.h = 20;

  player.removeColliders();

  targetX = player.x;
  targetY = player.y;
}

function draw() {
  background("skyblue");

  let dx = targetX - player.x;
  let dy = targetY - player.y;
  let d = dist(player.x, player.y, targetX, targetY);

  let speed = 0.8;

  // ---------- BARK ----------
  if (state === "bark") {
    player.vel.x = 0;
    player.vel.y = 0;

    player.ani = "attack";

    if (millis() - barkTimer > 800) {
      state = previousState;
    }
  }

  // ---------- WANDER ----------
  else if (state === "wander") {
    wanderTimer++;

    if (wanderTimer > random(120, 240)) {
      targetX = random(20, VIEWW - 20);
      targetY = random(20, VIEWH - 20);

      wanderTimer = 0;
    }

    moveFox(dx, dy, d, speed);
  }

  // ---------- MOVE ----------
  else if (state === "moving") {
    moveFox(dx, dy, d, speed);

    if (d < 5) {
      player.vel.x = 0;
      player.vel.y = 0;

      player.ani = "idle";

      waitTimer = millis();
      state = "waiting";
    }
  }

  // ---------- WAIT ----------
  else if (state === "waiting") {
    player.vel.x = 0;
    player.vel.y = 0;

    player.ani = "idle";

    if (millis() - waitTimer > 3000) {
      state = "wander";
    }
  }

  // ---------- SLEEP ----------
  else if (state === "sleep") {
    player.vel.x = 0;
    player.vel.y = 0;

    player.ani = "sleep";

    if (!snoreSound.isPlaying()) {
      snoreSound.loop();
    }
  }

  // ---------- SPACE BARK ----------
  if (kb.presses(" ")) {
    previousState = state;
    state = "bark";

    barkTimer = millis();

    barkSound.play();
  }

  drawBones();
  drawBoneBox();

  // ---------- BONE CURSOR ----------
  if (boneMode) {
    cursor("none");

    drawBoneSprite(mouseX - 8, mouseY - 4, 1);
  } else {
    cursor(ARROW);
  }
}

// ---------- FOX MOVEMENT ----------
function moveFox(dx, dy, d, speed) {
  if (d > 5) {
    player.vel.x = (dx / d) * speed;
    player.vel.y = (dy / d) * speed;

    player.ani = "run";

    if (frameCount % 25 === 0) {
      stepSound.play();
    }

    if (player.vel.x > 0) {
      player.mirror.x = false;
    } else {
      player.mirror.x = true;
    }
  } else {
    player.vel.x = 0;
    player.vel.y = 0;

    player.ani = "idle";
  }
}

// ---------- MOUSE ----------
function mousePressed() {
  // toolbox
  if (
    mouseX > boneBox.x &&
    mouseX < boneBox.x + boneBox.w &&
    mouseY > boneBox.y &&
    mouseY < boneBox.y + boneBox.h
  ) {
    boneMode = !boneMode;
    return;
  }

  let d = dist(mouseX, mouseY, player.x, player.y);

  if (d < 20 && !boneMode) {
    state = "sleep";
    return;
  }

  if (state === "sleep") {
    snoreSound.stop();
  }

  if (boneMode) {
    bones.push({ x: mouseX, y: mouseY });
  }

  targetX = mouseX;
  targetY = mouseY;

  state = "moving";
}

// ---------- TOOLBOX ----------
function drawBoneBox() {
  stroke(120);
  fill(245);

  rect(boneBox.x, boneBox.y, boneBox.w, boneBox.h, 6);

  drawBoneSprite(boneBox.x + 6, boneBox.y + 10, 1);
}

// ---------- DRAW BONES ----------
function drawBones() {
  for (let i = bones.length - 1; i >= 0; i--) {
    let b = bones[i];

    // shadow
    fill(0, 40);
    ellipse(b.x, b.y + 5, 12, 4);

    drawBoneSprite(b.x - 8, b.y - 4, 1);

    let d = dist(player.x, player.y, b.x, b.y);

    if (d < 16) {
      bones.splice(i, 1);

      barkSound.play();

      previousState = state;
      state = "bark";
      barkTimer = millis();
    }
  }
}

// ---------- PIXEL SPRITE DRAWER ----------
function drawBoneSprite(x, y, scale) {
  noStroke();

  for (let r = 0; r < boneSprite.length; r++) {
    for (let c = 0; c < boneSprite[r].length; c++) {
      let pixel = boneSprite[r][c];

      if (pixel !== 0) {
        fill(boneColors[pixel]);

        rect(x + c * scale, y + r * scale, scale, scale);
      }
    }
  }
}
