let positionX = 0;
let direction = 0;

function moveLeft() {
  if (positionX < 0) {
    const slider = document.querySelector("#container");
    positionX += 450;
    slider.style.transform = `translateX(${positionX}px)`;
  }
}

function moveRight() {
  if (positionX > -3150) {
    const slider = document.querySelector("#container");
    positionX -= 450;
    slider.style.transform = `translateX(${positionX}px)`;
  }
}

export { moveLeft, moveRight };
