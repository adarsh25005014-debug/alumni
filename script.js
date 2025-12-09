// Highlight active nav link
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Mentorship Form Alert
const mentorForm = document.querySelector('.mentor-form');
if (mentorForm) {
  mentorForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Mentorship Request Sent! An alumni mentor will contact you soon.");
    mentorForm.reset();
  });
}

// Apply Button on Job Cards
document.querySelectorAll('.job-card .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Your application has been submitted!");
  });
});
