/***********************
 EMAILJS CONTACT FORM
************************/
(function () {
  emailjs.init("PVx2KwSPX2X0TsKVF");
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusText = document.getElementById("formStatus");
  const btn = document.getElementById("submitBtn");

  if (form && statusText && btn) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      statusText.style.color = "#facc15";
      statusText.innerText = "Sending message...";
      btn.disabled = true;

      const templateParams = {
        user_name: form.user_name.value,
        user_email: form.user_email.value,
        message: form.message.value,
        title: "Portfolio Inquiry",
      };

      emailjs
        .send("service_i7vy0tx", "template_ejj4eev", templateParams)
        .then(() => {
          statusText.style.color = "#22c55e";
          statusText.innerText = "Message sent successfully!";
          btn.disabled = false;
          form.reset();
        })
        .catch((error) => {
          console.error(error);
          statusText.style.color = "#ef4444";
          statusText.innerText = "Something went wrong. Try again!";
          btn.disabled = false;
        });
    });
  }
});

/***********************
 HEADER SCROLL EFFECT
************************/
document.addEventListener("DOMContentLoaded", () => {

  /* HERO LOAD */
  document.querySelector(".hero")?.classList.add("hero-loaded");

  /* HEADER SCROLL */
  window.addEventListener("scroll", () => {
    document.querySelector("header")
      ?.classList.toggle("scrolled", window.scrollY > 50);
  });

  /* MOBILE MENU */
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (menuToggle && mobileMenu && closeMenu) {
    menuToggle.onclick = () => mobileMenu.classList.add("active");
    closeMenu.onclick = () => mobileMenu.classList.remove("active");
  }

});

/***********************
 ABOUT SECTION ANIMATION
************************/
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");
  if (!aboutSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(aboutSection);
});

/***********************
 SERVICE CARDS ANIMATION
************************/
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});

/***********************
 SKILLS PROGRESS BARS
************************/
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".sal-progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute("data-width");
          bar.style.width = width;
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 }
  );

  progressBars.forEach((bar) => {
    bar.setAttribute("data-width", bar.style.width);
    bar.style.width = "0%";
    observer.observe(bar);
  });
});

/***********************
 VIEW ALL PROJECTS
************************/
document.addEventListener("DOMContentLoaded", () => {
  const viewAllBtn = document.getElementById("viewAllBtn");
  const hiddenCards = document.querySelectorAll(".salm-card.salm-hidden");

  if (!viewAllBtn) return;

  viewAllBtn.addEventListener("click", () => {
    hiddenCards.forEach((card) => {
      card.classList.remove("salm-hidden");
      card.style.display = "block";
    });
    viewAllBtn.style.display = "none";
  });
});

/***********************
 SMOOTH SCROLL
************************/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
