// JavaScript untuk menangani klik pada gambar eyeicon //
function togglePassword() {
    var passwordField = document.getElementById("password");
    var eyeIcon = document.getElementById("eyeicon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "../src/img/hide.png"; // Ganti sumber gambar sesuai kebutuhan
    } else {
        passwordField.type = "password";
        eyeIcon.src = "../src/img/view.png"; // Ganti sumber gambar sesuai kebutuhan
    }
}
// JavaScript untuk menangani klik pada gambar eyeicon //
