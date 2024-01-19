
    // Objek untuk menyimpan status pemilihan setiap partai
    const selectedCandidates = {};

    // Fungsi untuk memilih kandidat
    function selectCandidate(candidateNumber, partyName) {
        // Hapus pemilihan sebelumnya untuk partai ini
        for (const party in selectedCandidates) {
            if (party !== partyName) {
                selectedCandidates[party] = false;
                enableCheckboxes(party);
            }
        }

        // Periksa apakah kandidat sudah dipilih sebelumnya
        if (selectedCandidates[partyName] === candidateNumber) {
            // Jika sudah, batalkan pemilihan
            selectedCandidates[partyName] = false;
            enableCheckboxes(partyName);
        } else {
            // Jika belum, pilih kandidat
            selectedCandidates[partyName] = candidateNumber;
            disableCheckboxes(partyName);
        }

        console.log(selectedCandidates);

        // Cek apakah ada kandidat yang terpilih untuk semua partai
        const allPartiesSelected = Object.values(selectedCandidates).every(candidate => candidate !== false);

        // Jika semua partai sudah terpilih, tampilkan SweetAlert dan pindahkan ke halaman berikutnya
        if (allPartiesSelected) {
            const selectedParty = Object.entries(selectedCandidates).find(([party, candidate]) => candidate !== false);
            showSuccessAlert(selectedParty[0], selectedParty[1]);
        }
    }

    // Fungsi untuk menonaktifkan checkbox di partai tertentu
    function disableCheckboxes(partyName) {
        const checkboxes = document.querySelectorAll(`[name^="candidate_${partyName}"]`);
        checkboxes.forEach((checkbox) => {
            checkbox.disabled = true;
        });
    }

    // Fungsi untuk mengaktifkan kembali checkbox di partai tertentu
    function enableCheckboxes(partyName) {
        const checkboxes = document.querySelectorAll(`[name^="candidate_${partyName}"]`);
        checkboxes.forEach((checkbox) => {
            checkbox.disabled = false;
        });
    }

    // Fungsi untuk menampilkan SweetAlert sukses
    function showSuccessAlert(party, candidate) {
        Swal.fire({
            title: 'Terima Kasih!',
            html: `Anda memilih <strong>${party}</strong> dengan kandidat <strong>${candidate}</strong>`,
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
            // Redirect ke halaman berikutnya
            window.location.href = "halaman-berikutnya.html";
        });
    }

