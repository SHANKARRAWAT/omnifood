const menu = document.querySelectorAll(".btn-mobile-nav");
console.log(menu);
let header = document.querySelector(".header");

menu[0].addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Sticky position to header
const h = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // int the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(h);
