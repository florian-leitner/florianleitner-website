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
