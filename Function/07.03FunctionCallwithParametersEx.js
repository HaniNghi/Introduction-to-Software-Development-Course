
function addImage(imgUrl) {
  const image = document.createElement("img");
  image.src = imgUrl;
  const imageDiv = document.getElementById("images");
  imageDiv.appendChild(image);
}


// Call addImages 3 times with 3 different URLs
// Assign flagOfFinlandUrl
const flagOfFinlandUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/250px-Flag_of_Finland.svg.png"
// Call addImage function to append Finnish's flag
addImage(flagOfFinlandUrl)

// Assign flagOfSwedenUrl
const flagOfSwedenUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/250px-Flag_of_Sweden.svg.png"
// Call addImage function to append Sweden's flag
addImage(flagOfSwedenUrl)

// Assign flagOfNorwaydUrl
const flagOfNorwayUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/250px-Flag_of_Norway.svg.png"
// Call addImage function to append Norway's flag
addImage(flagOfNorwayUrl)
