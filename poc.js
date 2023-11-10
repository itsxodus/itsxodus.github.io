function getImageData () {
  const images = document.querySelectorAll('img');
  images.forEach((image, index) => {
      console.log(`Image ${index + 1}: ${image.src}`);
  });
}
