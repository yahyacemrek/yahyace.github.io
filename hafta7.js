document.addEventListener("DOMContentLoaded", function () {
    // 1. Tema Değiştirme Etkileşimi
    const temaButonu = document.getElementById("temaButonu");
    const htmlElement = document.documentElement;

    temaButonu.addEventListener("click", function () {
        const mevcutTema = htmlElement.getAttribute("data-bs-theme");
        
        if (mevcutTema === "light") {
            htmlElement.setAttribute("data-bs-theme", "dark");
            temaButonu.textContent = "Açık Temaya Geç";
        } else {
            htmlElement.setAttribute("data-bs-theme", "light");
            temaButonu.textContent = "Koyu Temaya Geç";
        }
    });

    // 2. Form İşlemleri ve Özet Oluşturma
    const form = document.getElementById("kayitFormu");
    const sonucAlani = document.getElementById("sonucAlani");

    form.addEventListener("submit", function (event) {
        // Sayfanın yenilenmesini engelle
        event.preventDefault();

        // Eksik alan kontrolü (HTML5 validation API ile birlikte)
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add("was-validated");
            // Kullanıcıya alert ile de uyarı verilebilir ancak Bootstrap'in invalid-feedback'i daha şıktır.
            // Yine de yönergedeki "uyarı verilmelidir" maddesi için alert eklenebilir:
            // alert("Lütfen formdaki zorunlu alanları eksiksiz doldurunuz.");
            return; 
        }

        // Başarılı durumda form verilerini al
        const adSoyad = document.getElementById("adSoyad").value;
        const eposta = document.getElementById("eposta").value;
        const bolum = document.getElementById("bolum").value;
        const sinif = document.getElementById("sinif").value;
        const oturum = document.getElementById("oturum").value;
        const katilimTuru = document.getElementById("katilimTuru").value;

        // Sonuç alanına dinamik özet basma
        sonucAlani.classList.remove("alert-info");
        sonucAlani.classList.add("alert-success");
        
        sonucAlani.innerHTML = `
            <h5 class="fw-bold text-success mb-3"><i class="bi bi-check-circle-fill me-2"></i> Başvurunuz Başarıyla Alındı!</h5>
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-1"><strong>Ad Soyad:</strong> ${adSoyad}</p>
                    <p class="mb-1"><strong>E-posta:</strong> ${eposta}</p>
                    <p class="mb-1"><strong>Bölüm / Sınıf:</strong> ${bolum} - ${sinif}</p>
                </div>
                <div class="col-md-6">
                    <p class="mb-1"><strong>Oturum:</strong> ${oturum}</p>
                    <p class="mb-1"><strong>Katılım Türü:</strong> ${katilimTuru}</p>
                    <p class="mb-1"><strong>Durum:</strong> Onaylandı</p>
                </div>
            </div>
        `;

        // İsteğe bağlı: İşlem bitince validation sınıflarını temizle
        form.classList.remove("was-validated");
    });

    // Reset butonuna basıldığında sonuç alanını da sıfırla
    form.addEventListener("reset", function () {
        form.classList.remove("was-validated");
        sonucAlani.classList.remove("alert-success");
        sonucAlani.classList.add("alert-info");
        sonucAlani.innerHTML = "Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.";
    });
});