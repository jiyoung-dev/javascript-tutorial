// 랜덤 배경이미지 추가 
const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
console.log(bgImage);
document.body.appendChild(bgImage);  // body에 html 추가