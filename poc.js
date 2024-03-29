async function base64ImageData(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
   } catch (error) {
       console.error('Error converting image to base64:', error);
       return null;
   }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function getImageData(checkOnlyVisible = 1) {
  const allImages = document.querySelectorAll('img');
  let imagesToCheck = [];
  switch (checkOnlyVisible) {
    case 0:
      imagesToCheck = allImages;
      break;
    default:
      imagesToCheck = Array.from(allImages).filter(isInViewport);
  }
  
  let base64ImageDataArray = [];
  
  imagesToCheck.forEach((image, index) => {
    base64ImageData(image.src).then(base64Data => {
        if (base64Data) {
            base64ImageDataArray.push(base64Data);
            console.log(`Image ${index + 1}: ${image.src}, (Base 64 data added to array.)`);
        } else {
            console.log(`Image ${index + 1}: ${image.src}, (Failed to convert image to Base 64.)`);
        }
    });
  });
  console.log('Base 64 Image Data Array (the array itself is also returned by this function): ', base64ImageDataArray);
  return base64ImageDataArray;
}
