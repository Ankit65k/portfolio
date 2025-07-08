function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Highlight active section on scroll
window.addEventListener("scroll", () => {
  const sections = ["home", "about", "skills", "projects", "testimonials", "contact"];
  const navLinks = document.querySelectorAll("#desktop-nav a");

  let currentSection = "";
  sections.forEach(id => {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
});

// Scroll to top button
window.addEventListener("scroll", () => {
  const btn = document.getElementById("scrollTopBtn");
  btn.style.display = (window.scrollY > 500) ? "block" : "none";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
