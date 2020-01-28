// This will handle image src changing for each work item
// Grab DOM items
const Scannar = document.getElementById('scannar'); // Grab scannar image
const Adopt = document.getElementById('#adopt'); // Grab Adopt A Pothole image

// Update our current image index
const updateImageCounter = (index, array) => {
  if (index === array.length - 1) {
    return 0;
  } else {
    return index + 1;
  }
};

// -------------------------- ScannAR -------------------------- //

// Add click event listener
Scannar.addEventListener('click', updateScannar);
// Array of images
const scannarImages = [
  "img/projects/scannar-ss/scannar-login.png",
  "img/projects/scannar-ss/scannar-products.png",
  "img/projects/scannar-ss/scannar-ar.png",
  "img/projects/scannar-ss/scannar-product.png",
  "img/projects/scannar-ss/scannar-business-login.png",
  "img/projects/scannar-ss/scannar-business-no-products.png",
  "img/projects/scannar-ss/scannar-business-create.png",
  "img/projects/scannar-ss/scannar-business-products.png"
]; // Hold url for each scannar image

 // Index for each image url
let sIndex = 1;

// Handle updating scannar
function updateScannar() {
  Scannar.setAttribute("src", scannarImages[sIndex]); // Change curr image
  sIndex = updateImageCounter(sIndex, scannarImages);
};


// -------------------------- Adopt A Pothole -------------------------- //

