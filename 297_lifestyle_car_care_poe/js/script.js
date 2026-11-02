// Shared JavaScript for navigation, gallery lightbox, search and form validation.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation toggle.
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("main-nav");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      menuButton.textContent = isOpen ? "×" : "☰";
    });
  }

  // Service search filters the service cards without reloading the page.
  const searchInput = document.getElementById("service-search");
  if (searchInput) {
    const cards = [...document.querySelectorAll(".service-result")];
    const noResults = document.getElementById("no-services");
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const matches = (card.dataset.search + " " + card.textContent).toLowerCase().includes(term);
        card.hidden = !matches;
        if (matches) visible++;
      });
      if (noResults) noResults.hidden = visible !== 0;
    });
  }

  // Accessible gallery lightbox.
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const lightboxImage = document.getElementById("lightbox-image");
    const caption = document.getElementById("lightbox-caption");
    const closeButton = lightbox.querySelector(".lightbox-close");
    let lastTrigger = null;
    const close = () => {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      if (lastTrigger) lastTrigger.focus();
    };
    document.querySelectorAll(".lightbox-trigger").forEach(trigger => {
      trigger.addEventListener("click", () => {
        lastTrigger = trigger;
        lightboxImage.src = trigger.dataset.image;
        lightboxImage.alt = trigger.querySelector("img")?.alt || "";
        caption.textContent = trigger.dataset.caption || "";
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";
        closeButton.focus();
      });
    });
    closeButton.addEventListener("click", close);
    lightbox.addEventListener("click", event => { if (event.target === lightbox) close(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape" && !lightbox.hidden) close(); });
  }

  // Read a service query string to preselect the enquiry form.
  const serviceSelect = document.getElementById("service");
  if (serviceSelect) {
    const selectedService = new URLSearchParams(window.location.search).get("service");
    if (selectedService) {
      const option = [...serviceSelect.options].find(item => item.text.toLowerCase() === selectedService.toLowerCase());
      if (option) serviceSelect.value = option.value;
    }
  }

  // Character counter for the enquiry message.
  const message = document.getElementById("message");
  const counter = document.getElementById("char-count");
  if (message && counter) {
    const updateCount = () => counter.textContent = String(message.value.length);
    message.addEventListener("input", updateCount);
    updateCount();
  }

  // Form submission is handled by the Formspree AJAX integration in enquiry.html.
});
