function hesapla() {
    // Girdileri al
    const adSoyad = document.getElementById("adSoyad").value;
    const vize = parseFloat(document.getElementById("vizeNotu").value);
    const final = parseFloat(document.getElementById("finalNotu").value);

    if (isNaN(vize) || isNaN(final)) {
        alert("Lütfen geçerli notlar giriniz.");
        return;
    }

    // Ortalama hesaplama (Vize %40, Final %60)
    const ortalama = (vize * 0.4) + (final * 0.6);

    // Durum belirleme
    const durum = ortalama >= 50 ? "Geçti" : "Kaldı";

    // Harf notu belirleme
    let harfNotu = "FF";
    if (ortalama >= 90) harfNotu = "AA";
    else if (ortalama >= 80) harfNotu = "BA";
    else if (ortalama >= 70) harfNotu = "BB";
    else if (ortalama >= 60) harfNotu = "CB";
    else if (ortalama >= 50) harfNotu = "CC";
    else harfNotu = "FF";

    // Sonuçları ekrana yazdırma
    document.getElementById("sonucAd").textContent = adSoyad;
    document.getElementById("sonucOrtalama").textContent = "Ortalama: " + ortalama.toFixed(2);
    document.getElementById("sonucHarf").textContent = "Harf Notu: " + harfNotu;
    document.getElementById("sonucDurum").textContent = "Durum: " + durum;

    // Sonuç alanını görünür yap
    document.getElementById("sonucAlani").style.display = "block";
}