const copyBtn = document.querySelector(".hero__copy-btn");

if (copyBtn) {
  const defaultHTML = copyBtn.innerHTML;
  const checkHTML = `
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      copyBtn.innerHTML = checkHTML;
      copyBtn.classList.add("is-copied");
      setTimeout(() => {
        copyBtn.innerHTML = defaultHTML;
        copyBtn.classList.remove("is-copied");
      }, 1500);
    } catch (err) {
      /* clipboard unavailable — mailto link still works */
    }
  });
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox__img");

function openLightbox(img) {
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
}

document.querySelectorAll(".portfolio__item-btn").forEach((btn) => {
  btn.addEventListener("click", () => openLightbox(btn.querySelector("img")));
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
