const searchButton = document.getElementById('search-button');
const searchInput = document.querySelectorAll('.search');

searchButton.addEventListener('click', (e) => {
  console.log(searchInput);
  e.stopPropagation();
  searchInput.forEach((item) => {
    item.classList.toggle('hidden');
  });
});

searchInput[0].addEventListener('click', (e) => {
  e.stopPropagation();
});

searchInput[1].addEventListener('click', (e) => {
  e.stopPropagation();
});
