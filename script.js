// ------------------------------------------------------------------HERO-NAVIGATION----------------------------------------------------

document.querySelector(".hero-body").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("hero-h2")) {
    const id = e.target.getAttribute("href");
    const section = document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth" });
  }
});

// ------------------------------------------------------------------NAVBAR-NAVIGATION----------------------------------------------------
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    const section = document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth" });
  }
});

// ------------------------------------------------------------------POPUP-ON-SCROLL----------------------------------------------------
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
// ------------------------------------------------------------------LANGUAGE-SYMBOL-TABS ----------------------------------------------------

const tabs = document.querySelectorAll(".projects-btn");
const tabsContainer = document.querySelector(".projects-lang-flex");
const tabsContent = document.querySelectorAll(".projects-content");
const tabsBox = document.querySelector(".projects-background-box");
const projectsP = document.querySelector(".projects-p");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".projects-btn");
  if (!clicked) return;
  //   //Remove Active Classes
  tabs.forEach((t) => t.classList.remove("projects-btn-active"));
  tabsContent.forEach((c) => c.classList.remove("projects-content-active"));

  // Active Button
  clicked.classList.add("projects-btn-active");

  //   //Active Content Area
  document
    .querySelector(`.projects-content-${clicked.dataset.btn}`)
    .classList.add("projects-content-active");

  //Scroll to Content Area
  const section = tabsContainer.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

//------------------------------------------------------------------MODAL ----------------------------------------------------

const modalBtn = document.querySelectorAll(".project");
const modalBtnContainer = document.querySelector(".projects-background-box");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");
const btnCloseModal = document.querySelector(".close-modal");
const modalContent = document.querySelectorAll(".modal-grid");
const modalTitle = document.querySelectorAll(".modal-logo-text");

overlay.classList.add("hidden");

modalBtnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".project");
  //Guard Clause
  if (!clicked) return;
  const id = clicked.getAttribute("id");
  console.log(id);

  //Remove Active Classes
  modalContent.forEach((c) => c.classList.add("hidden"));
  modalTitle.forEach((c) => c.classList.add("hidden"));

  //Active Content Area
  document.querySelector(`#modal`).classList.add("modal-active");
  document.querySelector(`#modal-${id}`).classList.remove("hidden");
  document.querySelector(`#title-${id}`).classList.remove("hidden");
  document.querySelector(".modal-overlay").classList.remove("hidden");
});

const closeModal = function () {
  modal.classList.remove("modal-active");
  overlay.classList.add("hidden");
};

if (!modal.classList.contains("hidden")) {
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
