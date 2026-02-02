const btnEn = document.getElementById("btn-en");
const btnVi = document.getElementById("btn-vi");

btnEn.addEventListener("click", () => {
  renderTimeline("en");
  btnEn.classList.add("active");
  btnVi.classList.remove("active");
  localStorage.setItem("lang", "en");
});

btnVi.addEventListener("click", () => {
  renderTimeline("vi");
  btnVi.classList.add("active");
  btnEn.classList.remove("active");
  localStorage.setItem("lang", "vi");
});
