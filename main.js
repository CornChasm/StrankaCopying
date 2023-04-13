const mainBorder = document.querySelector(".mainBorder");
for (let index = 0; index < 80; index++) {
  mainBorder.appendChild(document.createElement("div"));
  mainBorder.children[index].setAttribute("id", `tile${index}`);
  document.getElementById(`tile${index}`).onclick = () => {};
}
document
  .getElementById("tile11")
  .appendChild(document.createElement("div"))
  .setAttribute("id", "player");

const w = "up";
const a = "left";
const s = "down";
const d = "right";
const movementArray = [
  s,
  s,
  s,
  s,
  d,
  s,
  d,
  d,
  w,
  d,
  d,
  w,
  d,
  d,
  w,
  w,
  a,
  a,
  a,
  w,
  a,
  a,
  a,
  a,
];
let x = 11;
for (let i = 0; i < movementArray.length; i++) {
  switch (movementArray[i]) {
    case s:
      x += 10;
      mainBorder.children[x].setAttribute("class", `road${i}`);
      document.getElementById(`tile${x}`).style.backgroundColor = "red";
      break;
    case d:
      x += 1;
      mainBorder.children[x].setAttribute("class", `road${i}`);
      document.getElementById(`tile${x}`).style.backgroundColor = "red";
      break;
    case w:
      x -= 10;
      mainBorder.children[x].setAttribute("class", `road${i}`);
      document.getElementById(`tile${x}`).style.backgroundColor = "red";
      break;
    case a:
      x -= 1;
      mainBorder.children[x].setAttribute("class", `road${i}`);
      document.getElementById(`tile${x}`).style.backgroundColor = "red";
      break;
  }
}
let y = 23;
let loopCount = 0;
let iterationStopped = false;
let maxY = movementArray.length - 1;
let child = document.getElementById("player");
let parent = document.querySelector(`.road${y}`);
const amogus = function () {
  console.log(y);
  iterationStopped = false;
  document
    .querySelector(`.road${y}`)
    .removeChild(document.getElementById("player"));
  y++;
  if (y == 23) {
    iterationStopped = true;
    clearInterval(walk);
    loopCount++;
    console.log("loopCount: ", loopCount);
  }
  if (y == 24) {
    y = 0;
  }
  document
    .querySelector(`.road${y}`)
    .appendChild(document.createElement("div"))
    .setAttribute("id", "player");
};
let walk = setInterval(amogus, 200);
onclick = () => {
  switch (iterationStopped) {
    case false:
      console.log("Stopped");
      clearInterval(walk);
      iterationStopped = true;
      break;
    case true:
      console.log("Started");
      walk = setInterval(amogus, 200);
      iterationStopped = false;
      break;
  }
};
