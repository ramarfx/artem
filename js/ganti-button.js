const tombol = document.querySelectorAll('.tombol');

tombol.forEach((button) => {
  button.addEventListener('click', () => {
    tombol.forEach((button) => {
      button.classList.remove('aktif');
    });
    button.classList.add('aktif');
  });
});
