document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const stylesheet = document.getElementById("theme-stylesheet");

  if (!toggle || !stylesheet) return;

  const savedTheme = localStorage.getItem("site-theme") || "contrast";

  setTheme(savedTheme);

  toggle.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("site-theme") || "contrast";
    const newTheme = currentTheme === "dark" ? "contrast" : "dark";

    setTheme(newTheme);
    localStorage.setItem("site-theme", newTheme);
  });

  function setTheme(theme) {
    if (theme === "dark") {
      stylesheet.href = "{{ '/assets/css/dark.css' | relative_url }}";
      toggle.textContent = "Light";
    } else {
      stylesheet.href = "{{ '/assets/css/main.css' | relative_url }}";
      toggle.textContent = "Dark";
    }
  }
});