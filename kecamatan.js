function updateKecamatanOptions() {
    var kabupatenSelect = document.getElementById('kabupaten');
    var kecamatanSelect = document.getElementById('kecamatan');

    // Kosongkan opsi kecamatan
    kecamatanSelect.innerHTML = '<option selected disabled>Kecamatan</option>';

    // Tambahkan opsi kecamatan berdasarkan pilihan kabupaten
    if (kabupatenSelect.value === 'lampungTengah') {
        // Gantilah dengan daftar kecamatan yang sesuai untuk Lampung Tengah
        var kecamatanOptions = ['Pilih Kecamatan', 'Anak Ratu aji', 'Anak Tuha', 'Bandar Mataram', 'Bandar Surabaya', 'Bangunrejo', 'Bekri', 'Bumi Nabung', 'Bumi Ratu Nuban', 'Gunung Sugih', 'Kalirejo', 'Kota Gajah', 'Padang Ratu', 'Pubian', 'Punggur', 'Putra Rumbia', 'Rumbia', 'Selagai Lingga', 'Sendang Agung', 'Seputih Agung', 'Seputih Banyak', 'Seputih Raman', 'Seputih Surabaya', 'Tebanggi Besar', 'Terusan Nunyai', 'Trimujo', 'Way Pengubuan', 'Way Seputih'];
    } else if (kabupatenSelect.value === 'lampungTimur') {
        // Gantilah dengan daftar kecamatan yang sesuai untuk Lampung Timur
        var kecamatanOptions = ['Pilih Kecamatan', 'Kecamatan A', 'Kecamatan B', 'Kecamatan C'];
    }
    // Tambahkan opsi kecamatan ke dalam select
    for (var i = 0; i < kecamatanOptions.length; i++) {
        var option = document.createElement('option');
        option.value = i + 1;
        option.text = kecamatanOptions[i];
        kecamatanSelect.add(option);
    }
}

function validateLogin() {
  
    window.location.href = "suratsuara.html";
}
