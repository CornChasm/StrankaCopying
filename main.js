const listek = document.getElementById("listek");
const leftSide = document.getElementById("leftSide");
const rightSide = document.getElementById("rightSide");
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
