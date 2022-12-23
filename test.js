const animationSpeedInput = document.getElementById("animation-speed-input");
const iconElement = document.getElementById("icon");

animationSpeedInput.addEventListener("input", function() {
  const speed = this.value;
  iconElement.style.animationDuration = `${speed}s`;
});
