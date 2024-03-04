document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".links li");

  links.forEach(link => {
    link.addEventListener("click", function() {
      const page = this.getAttribute("onclick").split("'")[1];
      changeFrame(page);
    });
  });

function changeFrame(page) {
  document.getElementById('frame').src = page;
}
});