const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const X = e.clientX;
    const Y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInSide = X - buttonLeft;
    const yInSide = Y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInSide + "px";
    circle.style.left = xInSide + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
