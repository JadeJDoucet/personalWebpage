// This will handle image src changing for each work item
// Grab DOM items
const Scannar = document.getElementById('scannar'); // Grab scannar image
const Adopt = document.getElementById('adopt'); // Grab Adopt A Pothole image
const Readr = document.getElementById('readr');

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

// Array of image urls
const scannarImages = [
  "img/projects/scannar-ss/scannar-login.png",
  "img/projects/scannar-ss/scannar-products.png",
  "img/projects/scannar-ss/scannar-ar.png",
  "img/projects/scannar-ss/scannar-product.png",
  "img/projects/scannar-ss/scannar-business-login.png",
  "img/projects/scannar-ss/scannar-business-no-products.png",
  "img/projects/scannar-ss/scannar-business-create.png",
  "img/projects/scannar-ss/scannar-business-products.png"
];

// Index for current image
let sIndex = 1;

// Handle updating scannar
function updateScannar() {
  Scannar.setAttribute("src", scannarImages[sIndex]); // Change curr image
  sIndex = updateImageCounter(sIndex, scannarImages);
};


// -------------------------- Adopt A Pothole -------------------------- //
Adopt.addEventListener('click', updateAdopt);

// Array of image urls
const adoptImages = [
  "img/projects/adopt-a-pothole-ss/adopt-home.jpg",
  "img/projects/adopt-a-pothole-ss/adopt-map.jpg",
  "img/projects/adopt-a-pothole-ss/adopt-report.jpg"
];

// Index for current image
let aIndex = 1;

// Handle updating adopt
function updateAdopt() {
  Adopt.setAttribute("src", adoptImages[aIndex]); // Change curr image
  aIndex = updateImageCounter(aIndex, adoptImages);
};


// -------------------------- Readr -------------------------- //
Readr.addEventListener('click', updateReadr);

// Array of image urls
const readrImages = [
  "img/projects/reader-ss/readr-login.png", // Starting image
  "img/projects/reader-ss/readr-reader.png",
  "img/projects/reader-ss/readr-saved.png",
  "img/projects/reader-ss/readr-suggestion.png"
];

// Index for current image
let rIndex = 1;

// Handle updating adopt
function updateReadr() {
  Readr.setAttribute("src", readrImages[rIndex]); // Change curr image
  rIndex = updateImageCounter(rIndex, readrImages);
};