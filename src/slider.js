let positionX = 0;
let direction = 0;

function moveLeft() {
  if (positionX < 0) {
    const slider = document.querySelector("#container");
    positionX += 900;
    slider.style.transform = `translateX(${positionX}px)`;
  }
}

function moveRight() {
  if (positionX > -2700) {
    const slider = document.querySelector("#container");
    positionX -= 900;
    slider.style.transform = `translateX(${positionX}px)`;
  }
}

export { moveLeft, moveRight };
