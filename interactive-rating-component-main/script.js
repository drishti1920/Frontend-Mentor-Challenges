const ratingContainer = document.getElementById("rating-container");
const thankyouContainer = document.getElementById("thankyou-container");
const submitButton = document.getElementById("submit-button");
const ratingPoints = document.querySelectorAll(".rating-points p");
const selectedScore = document.getElementById("selected-score");

let selectedRating = null;

ratingPoints.forEach((point) => {
  point.addEventListener("click", () => {
    ratingPoints.forEach((p) => p.classList.remove("active"));

    point.classList.add("active");
    selectedRating = point.dataset.value;
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating) {
    selectedScore.textContent = `You selected ${selectedRating} out of 5`;
    ratingContainer.style.display = "none";
    thankyouContainer.style.display = "block";
  } else {
    alert("Please select a rating before submitting!");
  }
});
