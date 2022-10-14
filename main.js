import Box from "./dummyBox";

const canvas = document.getElementById("canvas");
const deltaTime = document.getElementById("deltaTime");
const fps = document.getElementById("fps");
const frameCounter = document.getElementById("frameCounter");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Control the FPS of your engine!
const FPS = 30;

let currentTimestamp = Date.now();
let ellipseTime = currentTimestamp;
const _fpsInterval = 1000 / FPS;
let _fCounter = 0;

const dummyBox = new Box(ctx);

/**
 * Main update function.
 */
function _simulationUpdateFrame() {
  requestAnimationFrame(_simulationUpdateFrame);

  currentTimestamp = Date.now();
  let timeDiff = currentTimestamp - ellipseTime;

  if (timeDiff > _fpsInterval) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ellipseTime = currentTimestamp - (timeDiff % _fpsInterval);
    deltaTime.innerHTML = timeDiff;
    frameCounter.innerHTML = _fCounter++;
    fps.innerHTML = FPS;

    // All your update function here
    dummyBox.update();
  }
}

_simulationUpdateFrame();
