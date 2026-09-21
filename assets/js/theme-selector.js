document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("theme-selector");

  if (!selector) return;

  const savedTheme = localStorage.getItem("site-theme") || "main";

  setTheme(savedTheme);
  selector.value = savedTheme;

  selector.addEventListener("change", () => {
    const theme = selector.value;

    setTheme(theme);
    localStorage.setItem("site-theme", theme);
  });

  function setTheme(theme) {
    const themeStylesheet = document.getElementById("theme-stylesheet");

    if (themeStylesheet) {
      themeStylesheet.href = `/assets/css/${theme}.css`;
    }
  }
});