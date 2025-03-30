function tampilkanPesan() {
    alert("Terima kasih telah mengunjungi portfolio saya!");
}

document.addEventListener("DOMContentLoaded", function () {
    const tombolKembali = document.getElementById("kembaliBtn");

    if (tombolKembali) {
        tombolKembali.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});
