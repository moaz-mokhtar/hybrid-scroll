const stickySections = [...document.querySelectorAll(".sticky")];
console.log(stickySections);

let images = [
  "assets/images/01.png",
  "assets/images/02.png",
  "assets/images/03.png",
  "assets/images/04.png",
  "assets/images/05.png",
  "assets/images/06.png",
];

images.forEach((img) => {
  stickySections.forEach((section) => {
    let image = document.createElement("img");
    image.src = img;
    section.querySelector(".scroll_section").appendChild(image);
  });
});

window.addEventListener("scroll", (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".scroll_section");

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0,0)`;
}
