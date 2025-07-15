const projectVideos = document.querySelectorAll('.project-vidbox video');

projectVideos.forEach(video => {
  // Detect device width
  if (window.innerWidth > 768) {
    // Desktop: play on hover
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  } else {
    // Mobile: play/pause on tap
    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle sidebar
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close sidebar after clicking a link (only for mobile)
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
    }
  });
});