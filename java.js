// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission for validation

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const carModel = document.getElementById('car-model').value.trim();
  const service = document.getElementById('service').value.trim();

  if (!name || !email || !phone || !carModel || !service) {
    alert('Please fill out all fields.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert('Please enter a valid phone number.');
    return;
  }

  alert('Thank you for your request! Seth’s Auto Aid will contact you shortly.');
  form.reset();
});

