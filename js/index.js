// UP BUTTON
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollButton = document.querySelector(".scroll-to-top");

  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 0.3
  ) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

// LOGIN
function openLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

function showRegistrationForm() {
  document.getElementById("registrationForm").style.display = "block";
}

// GET STARTED

function openCustomDialog() {
  var dialog = document.getElementById("customDialog");
  dialog.style.display = "block";
}

function closeCustomDialog() {
  var dialog = document.getElementById("customDialog");
  dialog.style.display = "none";
}

const signupForm = document.getElementById("signup-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const policyCheckbox = document.getElementById("policy");
const clubRulesCheckbox = document.getElementById("club-rules");
const privacyCheckbox = document.getElementById("privacy");
const buyButton = document.getElementById("buy-button");

function checkFormValidity() {
  const isFormValid =
    firstNameInput.value &&
    lastNameInput.value &&
    phoneInput.value &&
    emailInput.value &&
    policyCheckbox.checked &&
    clubRulesCheckbox.checked &&
    privacyCheckbox.checked;

  buyButton.disabled = !isFormValid;
}

firstNameInput.addEventListener("input", checkFormValidity);
lastNameInput.addEventListener("input", checkFormValidity);
phoneInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
policyCheckbox.addEventListener("change", checkFormValidity);
clubRulesCheckbox.addEventListener("change", checkFormValidity);
privacyCheckbox.addEventListener("change", checkFormValidity);

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

// SCROLL

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var elements = document.querySelectorAll(".fade-in");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (isElementInViewport(element)) {
      element.classList.add("show");
    }
  }
}

window.addEventListener("scroll", handleScroll);
