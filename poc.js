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
}

function getImageData () {
  const images = document.querySelectorAll('img');
  
  images.forEach((image, index) => {
    base64ImageData(image.src).then(base64Data => {
        if (base64Data) {
            console.log(`Image ${index + 1}: ${image.src}, (${base64Data})`);
        } else {
            console.log(`Image ${index + 1}: ${image.src}, (Failed to convert image to base64.)`);
        }
    });
  });
}
