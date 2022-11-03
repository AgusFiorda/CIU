const bdark = document.querySelector("#bdark");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

bdark.addEventListener("click", (e) => {
  body.classList.toggle("darkmode");
  header.classList.toggle("darkmode");
  footer.classList.toggle("darkmode");
});
