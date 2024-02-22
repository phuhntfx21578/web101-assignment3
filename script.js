// Hide the personal information function
function handleSubmit() {
  // Taking the input email with lowercase format
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  //   Checking the input email is correct or not
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmail = emailValue.match(regex);
  // The error message when input wrong email format
  const errorMessage = document.getElementById("error-email");
  // Return the personal information content
  const sectionPersonal = document.querySelector(".personal-info");
  //   Return the submit content
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionPersonal.style.display = "block";
    submitControl.style.display = "none";
  } else {
    errorMessage.innerHTML = "Vui lòng nhập đúng định dạng Email";
    errorMessage.style.color = "#B04759";
    errorMessage.style.fontWeight = "bold";
  }
}
// Unhide the job information function
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}
// Hide the job information function
function handleOnMouseOut(element) {
  const viewLess = element.querySelector(".control-view");
  if (!viewLess.classList.value.includes("view-less")) {
    viewLess.style.display = "none";
  }
}
// Control the view function
function handleViewMore(element) {
  // Choose the closest father element to show or hide the content
  const selectedElement = element.closest(".job-info-selected");
  // Choose the control view div
  const viewOption = selectedElement.querySelector(".control-view");
  // Choose the content div
  const sectionContent = selectedElement.querySelectorAll(".section-content");
  // Condition for the View button
  if (viewOption.classList.contains("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "flex";
    });
    viewOption.classList.remove("view-more");
    viewOption.classList.add("view-less");
    viewOption.innerHTML = "🔺View less";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewOption.classList.remove("view-less");
    viewOption.classList.add("view-more");
    viewOption.innerHTML = "🔻View more";
  }
}
