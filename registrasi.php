<?php

require 'koneksi.php';

if (isset ($_POST [ "simpan"])) {
    if (simpan ($_POST) > 0 ) {
        echo "<script>
        alert('User baru berhasil di tambahkan'); 
                </script>";
    } else {
        echo mysqli_error ($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="daftar.css">
</head>
<body>

<!-- BAGIAN LOGIN -->
<section id="login" class="container">
    <div class="row">
        <div class="col">
            <h1>Silahkan Daftar</h1>
        </div>
    </div>
 <form action="registrasi.php" method="POST">
    <div class="row">
        <div class="col">
            <div class="input-box">
                <input type="text" placeholder="*Nama" id="username" name="username">
                <div class="invalid-feedback" id="usernameError">Nama tidak boleh kosong</div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-box">
                <input type="text" placeholder="*Nomor KK" id="nomorkk" name="nomorkk" required>
                <div class="invalid-feedback" id="nomorkkError">Nomor KK tidak boleh kosong</div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-box">
                <input type="text" placeholder="*NIK" id="nik" name="nik" required>
                <div class="invalid-feedback" id="nikError">NIK tidak boleh kosong</div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-box">
                <input type="password" placeholder="*Password" id="password" name="password" required>
                <img src="src/img/view.png" id="eyeicon" onclick="togglePassword()">
                <div class="invalid-feedback" id="passwordError">Password tidak boleh kosong</div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <button type="button" name="simpan">Simpan</button>
        </div>
    </div>
 </form>
</section>

    <!-- JAVASCRIPT BOOTSTRAP -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    <!-- AKHIR JAVASCRIPT BOOTSTRAP -->

        <!-- JavaScript untuk menangani klik pada gambar eyeicon -->
        <script src="daftar.js"></script>



</body>
</html>
