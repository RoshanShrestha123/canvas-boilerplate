import Box from "./dummyBox";

const FPS = 30;

const deltaTime = document.getElementById("deltaTime");
const frameCounter = document.getElementById("frameCounter");

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

let currentTimestamp = Date.now();
let previousTime = currentTimestamp;
const _fpsInterval = 1000 / FPS;

let _fCounter = 0;

const dummyBox = new Box(ctx);

/**
 * Main update function.
 */
function _simulationUpdateFrame() {
  requestAnimationFrame(_simulationUpdateFrame);

  currentTimestamp = Date.now();
  let timeDiff = currentTimestamp - previousTime;

  if (timeDiff > _fpsInterval) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    previousTime = currentTimestamp - (timeDiff % _fpsInterval);
    deltaTime.innerHTML = timeDiff;
    frameCounter.innerHTML = _fCounter++;

    dummyBox.draw();
  }
}

_simulationUpdateFrame();
