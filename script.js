function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const ageSpan = document.getElementById('age');
    if (ageSpan) {
      ageSpan.textContent = calculateAge('2003-10-30'); // <-- Set your birthdate here
    }
  });
  
  // Award image click to show modal
  document.querySelectorAll('.award-img-clickable').forEach(function(img) {
    img.addEventListener('click', function() {
      var src = img.getAttribute('data-full');
      document.getElementById('awardModalImg').src = src;
      var modal = new bootstrap.Modal(document.getElementById('awardImageModal'));
      modal.show();
    });
  });
  
  // Film image click to show modal
  document.querySelectorAll('.film-img-clickable').forEach(function(img) {
    img.addEventListener('click', function() {
      var src = img.getAttribute('data-full');
      document.getElementById('filmModalImg').src = src;
      var modal = new bootstrap.Modal(document.getElementById('filmImageModal'));
      modal.show();
    });
  });
  
  // Profile image click to show modal
  document.querySelectorAll('.profile-img-clickable').forEach(function(img) {
    img.addEventListener('click', function() {
      var src = img.getAttribute('data-full');
      document.getElementById('profileModalImg').src = src;
      var modal = new bootstrap.Modal(document.getElementById('profileImageModal'));
      modal.show();
    });
  });
  
  // Mobile nav menu toggle
  document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('mobileNav').style.display = 'flex';
  });
  document.getElementById('closeNav').addEventListener('click', function() {
    document.getElementById('mobileNav').style.display = 'none';
  });
  // Optional: close menu when a nav link is clicked
  document.querySelectorAll('.mobile-nav-list .nav-item').forEach(function(link) {
    link.addEventListener('click', function() {
      document.getElementById('mobileNav').style.display = 'none';
    });
  });