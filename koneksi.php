<?php


$servername = "localhost";
$database = "web_survey";
$username = "root";
$password = "";

// Membuat koneksi
$conn = mysqli_connect ($servername, $database, $username, $password);

// Memeriksa koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
} else {
    echo "Koneksi Berhasil";
}
?>
