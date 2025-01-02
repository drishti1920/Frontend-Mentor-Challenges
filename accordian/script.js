const accordianQuestions = document.getElementsByClassName("accordian");

for (let i = 0; i < accordianQuestions.length; i++) {
  accordianQuestions[i].addEventListener("click", function () {
    // Toggle active class
    this.classList.toggle("active");

    // Get the panel and icon
    const panel = this.nextElementSibling;
    const icon = this.querySelector("img");

    // Toggle the panel's display
    if (panel.style.display === "block") {
      panel.style.display = "none";
      icon.src = "./assets/images/icon-plus.svg"; // Change to collapsed icon
      icon.alt = "show";
    } else {
      panel.style.display = "block";
      icon.src = "./assets/images/icon-minus.svg"; // Change to open icon
      icon.alt = "hide";
    }
  });
}
