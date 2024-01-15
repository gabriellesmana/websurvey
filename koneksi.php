<?php
$servername = "localhost";
$database = "web_survey";
$username = "root";
$password = "";


// Membuat koneksi
$conn = new mysqli($servername,$database, $username, $password);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
echo "Koneksi berhasil!";
?>
