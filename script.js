// Validate email

const emailEL = document.querySelector("#email");
const btnSubmit = document.getElementById("submit");
const showEL = document.querySelector("#show");
const showErr = document.querySelector("#err-email");
const form = document.querySelector("#form");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
btnSubmit.addEventListener("click", function () {
  const email = emailEL.value;
  if (regex.test(email)) {
    showEL.classList.remove("hidden");
    form.classList.add("hidden");
  } else showErr.classList.remove("hidden");
});

// hidden job info

const btnViewMore = document.querySelectorAll(".more");
const btnViewLess = document.querySelectorAll(".less");
const viewMoreEL = document.querySelectorAll(".view-more");

for (let i = 0; i < btnViewMore.length; i++) {
  btnViewMore[i].addEventListener("click", function () {
    btnViewMore[i].classList.remove("hover");
    btnViewLess[i].classList.add("hover");
    viewMoreEL[i].classList.remove("hidden");
  });
}
for (let i = 0; i < btnViewLess.length; i++) {
  btnViewLess[i].addEventListener("click", function () {
    btnViewMore[i].classList.add("hover");
    btnViewLess[i].classList.remove("hover");
    viewMoreEL[i].classList.add("hidden");
  });
}
