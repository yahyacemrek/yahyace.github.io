function donustur() {
    const deger = parseFloat(document.getElementById("degerInput").value);
    const tip = document.getElementById("donusumTipi").value;
    let sonuc = 0;

    if (isNaN(deger)) {
        alert("Lütfen geçerli bir sayı giriniz.");
        return;
    }

    // Dönüşüm hesaplamaları
    switch(tip) {
        case "c_f":
            sonuc = (deger * 9/5) + 32; // Celsius to Fahrenheit
            break;
        case "m_km":
            sonuc = deger / 1000; // Metre to Kilometre
            break;
        case "kg_g":
            sonuc = deger * 1000; // Kilogram to Gram
            break;
    }

    // Sayıyı Türkiye formatında göster (Örn: 50000 yerine 50.000)
    const formatliSonuc = sonuc.toLocaleString('tr-TR');
    
    document.getElementById("sonucDegeri").textContent = formatliSonuc;
}

// Sayfa yüklendiğinde varsayılan değerler için fonksiyonu bir kez çalıştır
window.onload = donustur;