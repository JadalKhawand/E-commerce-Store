let imageInfo = [
  {
    src: "images/0.jpg",
    text: "HEYY",
    link: "https://example.com/link0",
  },
  {
    src: "images/1.jpeg",
    text: "HOW YOU DOIN!!",
    link: "https://example.com/link1",
  },
  {
    src: "images/2.jpeg",
    text: "lol",
    link: "https://example.com/link2",
  },
];

let imgIndex = 0;

updateUI();

function moveRight() {
  imgIndex = imgIndex + 1;
  if (imgIndex > imageInfo.length - 1) {
    imgIndex = 0;
  }
  updateUI();
}

function moveLeft() {
  imgIndex = imgIndex - 1;
  if (imgIndex < 0) {
    imgIndex = imageInfo.length - 1;
  }
  updateUI();
}

function updateUI() {
  document.querySelector(".firstsection img").src = imageInfo[imgIndex].src;
  document.querySelector(".image-text").textContent = imageInfo[imgIndex].text;
}

let leftBtn = document.querySelector(".left-btn");
leftBtn.addEventListener("click", moveLeft);

let rightBtn = document.querySelector(".right-btn");
rightBtn.addEventListener("click", moveRight);
