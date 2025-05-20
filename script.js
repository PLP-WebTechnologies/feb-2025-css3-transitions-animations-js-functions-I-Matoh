//  Animation on Button Click 
const animateBtn = document.getElementById('animate-btn');
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('bounce');
  // Remove the class after animation ends so it can be triggered again
  animateBtn.addEventListener('animationend', () => {
    animateBtn.classList.remove('bounce');
  }, { once: true });
});

//  Animation on Image Click 
const animatedImg = document.getElementById('animated-img');
animatedImg.addEventListener('click', () => {
  animatedImg.classList.add('spin');
  animatedImg.addEventListener('animationend', () => {
    animatedImg.classList.remove('spin');
  }, { once: true });
});

//  Theme Preference with localStorage 
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const body = document.body;

// Load theme from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
});

// Toggle theme and save preference
toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  // Store preference in localStorage
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
