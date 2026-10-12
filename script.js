/* Campus Book Exchange - basic JavaScript DOM manipulation */

document.addEventListener("DOMContentLoaded", function () {
  // Home page interactions
  const mainHeading = document.getElementById("mainHeading");
  const changeHeadingBtn = document.getElementById("changeHeadingBtn");
  if (mainHeading && changeHeadingBtn) {
    changeHeadingBtn.addEventListener("click", function () {
      mainHeading.textContent = "Great books bring our campus together!";
    });
  }

  const changeCardColorBtn = document.getElementById("changeCardColorBtn");
  if (changeCardColorBtn) {
    changeCardColorBtn.addEventListener("click", function () {
      const firstFeaturedCard = document.querySelector(".featured-card");
      if (firstFeaturedCard) firstFeaturedCard.classList.toggle("card-highlight");
    });
  }

  const toggleFeaturedBtn = document.getElementById("toggleFeaturedBtn");
  const featuredSection = document.getElementById("featuredSection");
  if (toggleFeaturedBtn && featuredSection) {
    toggleFeaturedBtn.addEventListener("click", function () {
      const cards = featuredSection.querySelector(".book-grid");
      const hidden = cards.classList.toggle("form-hidden");
      toggleFeaturedBtn.textContent = hidden ? "Show featured books" : "Hide featured books";
    });
  }

  // Browse books interactions
  document.querySelectorAll(".request-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      button.textContent = "Request Sent";
      button.disabled = true;
      const message = button.parentElement.querySelector(".request-message");
      if (message) message.textContent = "Your request has been recorded for this demo.";
    });
  });

  const showBookBtn = document.getElementById("showBookBtn");
  if (showBookBtn) {
    showBookBtn.addEventListener("click", function () {
      const titleInput = document.getElementById("bookTitleInput");
      const result = document.getElementById("showBookResult");
      const title = titleInput.value.trim();
      if (!title) {
        result.textContent = "Please enter a book title first.";
        result.style.color = "#b42318";
        return;
      }
      result.textContent = 'You entered: "' + title + '". Your book title has been submitted.';
      result.style.color = "#23744d";
    });
  }

  const changeBookAppearanceBtn = document.getElementById("changeBookAppearanceBtn");
  if (changeBookAppearanceBtn) {
    changeBookAppearanceBtn.addEventListener("click", function () {
      const cards = document.querySelectorAll(".browse-card");
      if (cards.length) cards[0].classList.toggle("card-highlight");
    });
  }

  // List a book page interactions
  const formHeading = document.getElementById("formHeading");
  const changeFormHeadingBtn = document.getElementById("changeFormHeadingBtn");
  if (formHeading && changeFormHeadingBtn) {
    let enlarged = false;
    changeFormHeadingBtn.addEventListener("click", function () {
      enlarged = !enlarged;
      formHeading.style.fontSize = enlarged ? "2.35rem" : "1.8rem";
    });
  }

  const toggleFormBtn = document.getElementById("toggleFormBtn");
  const bookForm = document.getElementById("bookForm");
  if (toggleFormBtn && bookForm) {
    toggleFormBtn.addEventListener("click", function () {
      const hidden = bookForm.classList.toggle("form-hidden");
      toggleFormBtn.textContent = hidden ? "Show form" : "Hide form";
    });
  }

  if (bookForm) {
    bookForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("studentName").value.trim();
      const title = document.getElementById("newBookTitle").value.trim();
      const author = document.getElementById("authorName").value.trim();
      const category = document.getElementById("category").value;
      const condition = document.getElementById("condition").value;
      const message = document.getElementById("formMessage");

      if (!name || !title || !author || !category || !condition) {
        message.textContent = "Please complete all required fields before submitting.";
        message.style.color = "#b42318";
        return;
      }

      message.textContent = "Thank you, " + name + "! Your listing for \"" + title + "\" has been prepared successfully. (Demo only; it has not been saved.)";
      message.style.color = "#23744d";
      bookForm.reset();
    });
  }
});
