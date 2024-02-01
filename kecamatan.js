// kecamatan.js

// Fungsi untuk menonaktifkan elemen-elemen di belakang SweetAlert
function disableBackgroundElements() {
    var backgroundElements = document.querySelectorAll('body > *:not(.swal2-container)');
    backgroundElements.forEach(function (element) {
        element.style.pointerEvents = 'none';
    });
}

// Fungsi untuk mengaktifkan kembali elemen-elemen di belakang SweetAlert
function enableBackgroundElements() {
    var backgroundElements = document.querySelectorAll('body > *:not(.swal2-container)');
    backgroundElements.forEach(function (element) {
        element.style.pointerEvents = 'auto';
    });
}

// Fungsi untuk memperbarui opsi kecamatan
function updateKecamatanOptions() {
    var kabupatenSelect = document.getElementById('kabupaten');
    var kecamatanSelect = document.getElementById('kecamatan');

    // Kosongkan opsi kecamatan
    kecamatanSelect.innerHTML = '<option selected disabled>Kecamatan</option>';

    // Tambahkan opsi kecamatan berdasarkan pilihan kabupaten
    var kecamatanOptions;
    if (kabupatenSelect.value === 'lampungTengah') {
        kecamatanOptions = ['Pilih Kecamatan', 'Anak Ratu aji', 'Anak Tuha', 'Bandar Mataram', 'Bandar Surabaya', 'Bangunrejo', 'Bekri', 'Bumi Nabung', 'Bumi Ratu Nuban', 'Gunung Sugih', 'Kalirejo', 'Kota Gajah', 'Padang Ratu', 'Pubian', 'Punggur', 'Putra Rumbia', 'Rumbia', 'Selagai Lingga', 'Sendang Agung', 'Seputih Agung', 'Seputih Banyak', 'Seputih Raman', 'Seputih Surabaya', 'Tebanggi Besar', 'Terusan Nunyai', 'Trimujo', 'Way Pengubuan', 'Way Seputih'];
    } else if (kabupatenSelect.value === 'lampungTimur') {
        kecamatanOptions = ['Pilih Kecamatan', 'Kecamatan A', 'Kecamatan B', 'Kecamatan C'];
    }

    // Tambahkan opsi kecamatan ke dalam select
    for (var i = 0; i < kecamatanOptions.length; i++) {
        var option = new Option(kecamatanOptions[i], kecamatanOptions[i]);
        kecamatanSelect.appendChild(option);
    }
}

// Fungsi untuk validasi login
function validateLogin() {
    // Logika validasi Anda yang sudah ada...

    // Menonaktifkan elemen-elemen di belakang SweetAlert
    disableBackgroundElements();

    // Menampilkan SweetAlert
    Swal.fire({
        icon: 'success',
        title: 'Konfirmasi Berhasil!',
        text: 'Silahkan Pilih Caleg DPR-RI Anda',
        confirmButtonText: 'Lanjut',
    }).then((result) => {
        // Setelah SweetAlert ditutup, mengaktifkan kembali elemen-elemen di belakang
        enableBackgroundElements();

        // Setelah SweetAlert ditutup, baru alihkan ke halaman baru
        if (result.isConfirmed || result.isDismissed) {
            window.location.href = "suratsuara.html";
        }
    });
}
