/* FAQ accordion */
document.querySelectorAll(".faq-item").forEach((item) => {
  const q = item.querySelector(".faq-q");
  const a = item.querySelector(".faq-a");
  const toggle = item.querySelector(".faq-toggle");
  if (q && toggle) {
    q.addEventListener("click", () => {
      const isOpen = toggle.textContent === "−";
      document
        .querySelectorAll(".faq-toggle")
        .forEach((t) => (t.textContent = "+"));
      document
        .querySelectorAll(".faq-a")
        .forEach((el) => el && (el.style.display = "none"));
      if (!isOpen) {
        toggle.textContent = "−";
        if (a) a.style.display = "block";
      }
    });
    if (a && toggle.textContent === "+") a.style.display = "none";
  }
});

/* Mobile hamburger */
const btn = document.getElementById("hamburgerBtn");
const drawer = document.getElementById("navDrawer");
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  drawer.classList.toggle("open");
});
function closeNav() {
  btn.classList.remove("open");
  drawer.classList.remove("open");
}
