<?php



function registrasi($data) {
    global $conn;

    $username = strtolower(stripslashes($data ["username"]));
    $nomorkk = strtolower(stripslashes($data ["nomorkk"]));
    $nik = strtolower(stripslashes($data ["nik"]));
    $password = mysqli_rel_escape_string($conn, $data["passoword"]);



    mysqli_query($conn, "INSERT INTO daftar VALUES ('$username', '$nomorkk', '$nik',
    '$password')");

    return mysqli_affected_rows($conn);

}