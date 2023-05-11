// Ambil semua elemen dengan kelas "read-more"
const readmore = document.querySelectorAll('.read-more');

// Loop melalui setiap tombol "read-more" dan tambahkan event listener
readmore.forEach((button) => {
  button.addEventListener('click', () => {
    // Cari elemen "more-text" terkait
    const moreText = button.previousElementSibling;
    
    // Ubah teks tombol menjadi "Read less" jika "more-text" sudah ditampilkan, atau "Read more" jika belum
    if (moreText.style.display === 'block') {
      button.textContent = 'Read more';
    } else {
      button.textContent = 'Read less';
    }

    // Ubah display "more-text" menjadi "block" jika semula "none", atau sebaliknya
    moreText.style.display = (moreText.style.display === 'block') ? 'none' : 'block';

    // Loop melalui setiap tombol "read-more" dan sembunyikan "more-text" jika tidak terkait dengan tombol yang ditekan
    readmore.forEach((otherButton) => {
      if (otherButton !== button) {
        const otherText = otherButton.previousElementSibling;
        otherText.style.display = 'none';
        otherButton.textContent = 'Read more';
      }
    });
  });
});