const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");

  const next = current === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});