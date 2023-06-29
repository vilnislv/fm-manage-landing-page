const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: true,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false,
    },
  },
});

function validation() {
  var form = document.getElementById('form');
  var email = document.getElementById('email').value;
  var text = document.getElementById('text');
  const pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = 'Your email is valid';
    text.style.color = '#00ff00';
  }
  else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = 'Please insert a valid email';
    text.style.color = '#ff0000';
  }
  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = '#00ff00';
  }
}
function resetForm() {
  document.getElementById('form').reset();
  document.getElementById('text').innerHTML = "";
}

