// Ambil elemen link
var link = document.getElementById("link");

// Tambahkan event listener pada saat link di klik
link.addEventListener("click", function(event) {
  // Hentikan default action (pindah ke halaman baru)
  event.preventDefault();

  // Tunggu 1 detik
  setTimeout(function() {
    // Pindah ke halaman baru
    window.location.href = link.href;

    // Ubah warna background dengan transisi
    document.body.style.backgroundColor = "#000000";
  }, 1000);
});
