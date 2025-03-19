document.addEventListener("DOMContentLoaded", () => {
  const shareButtons = document.querySelectorAll(".share-button");
  const shareContainer = document.querySelector(".share-container");

  shareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("clicked");

      if (shareContainer.style.display === "flex") {
        shareContainer.style.display = "none";
      } else {
        shareContainer.style.display = "flex";
      }
    });
  });
});
