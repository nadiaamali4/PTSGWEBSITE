// Pilih semua elemen dengan kelas "collection-item"
const collectionItems = document.querySelectorAll('.collection-item');

// Tambahkan event listener untuk setiap elemen
collectionItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    // Tambahkan kelas "hover" ke elemen yang sedang dihover
    item.classList.add('hover');
  });

  item.addEventListener('mouseout', () => {
    // Hapus kelas "hover" dari elemen yang tidak dihover lagi
    item.classList.remove('hover');
  });
});