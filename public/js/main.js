
/* ============================================
   RESHAD ABEDIN — PERSONAL PORTFOLIO
   Main JavaScript
   ============================================ */


/* --------------------------------------------
   1. PAGE LOADER
   Removes the loading screen after page loads
-------------------------------------------- */

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(function () {
      loader.classList.add("loaded");
    }, 400);
  }
});


/* --------------------------------------------
   2. MOBILE NAVIGATION
   Opens and closes the mobile menu
-------------------------------------------- */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  // Toggle menu when hamburger button is clicked
  menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close menu after clicking a navigation link
  const navigationItems = navLinks.querySelectorAll("a");

  navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when Escape key is pressed
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}


/* --------------------------------------------
   3. SCROLL REVEAL ANIMATIONS
   Reveals elements when they enter the viewport
-------------------------------------------- */

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(
    function (entries, observer) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          // Stop observing after revealing
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });

} else {

  // Fallback for browsers without IntersectionObserver
  revealElements.forEach(function (element) {
    element.classList.add("visible");
  });

}


/* --------------------------------------------
   4. INITIALIZE ACCESSIBILITY
-------------------------------------------- */

if (menuToggle) {
  menuToggle.setAttribute("aria-expanded", "false");
}
