const moreBtn = document.querySelector(".info .metadata .seeMore");
const title = document.querySelector(".info .metadata .title");
const subsBtn = document.querySelector(".info .channel .subscribe");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

subsBtn.addEventListener("click", () => {
  subsBtn.classList.toggle("clicked");
});
