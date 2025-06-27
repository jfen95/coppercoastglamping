document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbarcontent a");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const currentHash = window.location.hash;

  links.forEach(link => {
    const href = link.getAttribute("href");

    // Handle exact page match like 'index.html' or 'review.html'
    if (href === currentPath) {
      link.classList.add("active");
    }

    // Handle section links on homepage like '#pods'
    if (currentPath === "index.html" && href.startsWith("#") && href === currentHash) {
      link.classList.add("active");
    }
  });
});
