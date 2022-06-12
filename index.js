function changeColor(id, newColor) {
  const elem = document.getElementById(id);
  if (elem.style.color != newColor) {
    elem.style.color = newColor;
  } else if (elem.style.color = newColor) {
    elem.style.color = 'black'; 
  }
}
