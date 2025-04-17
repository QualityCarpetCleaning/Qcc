document.getElementById('menu-toggle').addEventListener('click', function() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
});

if (document.getElementById('review-form')) {
  const reviewForm = document.getElementById('review-form');
  const reviewList = document.getElementById('review-list');

  function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    reviewList.innerHTML = '';
    reviews.forEach(r => {
      const li = document.createElement('li');
      li.textContent = `${r.name}: ${r.text}`;
      reviewList.appendChild(li);
    });
  }

  reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const text = document.getElementById('review').value.trim();
    if (name && text) {
      const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
      reviews.push({ name, text });
      localStorage.setItem('reviews', JSON.stringify(reviews));
      reviewForm.reset();
      loadReviews();
    }
  });

  loadReviews();
}
