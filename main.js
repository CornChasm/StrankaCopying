const listek = document.getElementById("listek");
const leftSide = document.getElementById("leftSide");
const rightSide = document.getElementById("rightSide");
const center = document.getElementById("center");
const enlargedListekBG = document.getElementById("enlargedListekBG");
const centerText = document.querySelector(".centerText");
const body = document.querySelector("body");
function preloadListek(url, callback) {
  let img = new Image();
  img.src = url;
  img.onload = callback;
}
function preloading() {
  for (let i = 1; i < 17; i++) {
    preloadListek(`./img/Jidelni_listek${i}.jpg`);
  }
}
preloading();
let currentListekPage = 1;
let didPageTurn = false;
let wasListekEnlarged = false;
leftSide.onclick = () => {
  if (didPageTurn) return;
  currentListekPage--;
  didPageTurn = true;
  if (currentListekPage == 0) {
    currentListekPage = 16;
  }
  listek.style.backgroundImage = `url(./img/Jidelni_listek${currentListekPage}.jpg)`;
  setTimeout(() => {
    didPageTurn = false;
  }, 750);
};
rightSide.onclick = () => {
  if (didPageTurn) return;
  currentListekPage++;
  didPageTurn = true;
  if (currentListekPage == 17) {
    currentListekPage = 1;
  }
  listek.style.backgroundImage = `url(./img/Jidelni_listek${currentListekPage}.jpg)`;
  setTimeout(() => {
    didPageTurn = false;
  }, 750);
};
center.onclick = () => {
  if (!wasListekEnlarged) {
    wasListekEnlarged = true;
    listek.style.scale = "1.5";
    listek.style.left = "50%";
    listek.style.transform = "translate(-50%, 0%)";
    enlargedListekBG.style.display = "block";
    enlargedListekBG.style.height = `${2 * listek.scrollHeight}px`;
    centerText.innerHTML = "klikněte aby zmenšit";
  } else {
    wasListekEnlarged = false;
    listek.style.scale = "1";
    listek.style.left = "750px";
    listek.style.transform = "translate(0%, 0%)";
    enlargedListekBG.style.display = "none";
    enlargedListekBG.style.height = `${100}%`;
    centerText.innerHTML = "klikněte aby zvětšit";
  }
};
enlargedListekBG.onclick = () => {
  wasListekEnlarged = false;
  listek.style.scale = "1";
  listek.style.left = "750px";
  listek.style.transform = "translate(0%, 0%)";
  enlargedListekBG.style.display = "none";
  enlargedListekBG.style.height = `${100}%`;
  centerText.innerHTML = "klikněte aby zvětšit";
};
document.getElementById("navUvod").onclick = () => {
  document.getElementById("uvod").scrollIntoView(true, { behavior: "smooth" });
};
document.getElementById("navListek").onclick = () => {
  document
    .getElementById("listekTitle")
    .scrollIntoView(true, { behavior: "smooth" });
};
document.getElementById("navKontakt").onclick = () => {
  document
    .getElementById("kontakt")
    .scrollIntoView(true, { behavior: "smooth" });
};
let adPosX = 0;
const adSwitch = setInterval(() => {
  adPosX += 663;
  document.getElementById("ads").style.backgroundPositionX = `-${adPosX}px`;
}, 15000);
document.getElementById("adsX").onclick = () => {
  document.getElementById("ads").style.display = "none";
  clearInterval(adSwitch);
};
