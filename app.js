        // --- KONSTANTE ---
        const API_BASE_URL = "https://api.cijene.dev";
        const API_KEY = "mee5xooThuithei4ees4bae3emos3ook";

        // --- DOM ELEMENTI ---
        const pocetniEkran = document.getElementById('pocetni-ekran');
        const ekranOdabirTrgovine = document.getElementById('ekran-odabir-trgovine');
        const glavniEkranAkcija = document.getElementById('glavni-ekran-akcija');
        const ekranSkeniranja = document.getElementById('ekran-skeniranja');
        const ekranPretrageIListe = document.getElementById('ekran-pretrage-i-liste');

        const btnIzaberiTrgovinu = document.getElementById('btn-izaberi-trgovinu');
        const btnTraziProizvodePocetna = document.getElementById('btn-trazi-proizvode-pocetna');
        const btnNastaviZadnjaTrgovina = document.getElementById('btn-nastavi-zadnja-trgovina');

        const selectTrgovina = document.getElementById('select-trgovina');
        const btnPotvrdiTrgovinu = document.getElementById('btn-potvrdi-trgovinu');
        const btnNazadNaPocetnuSaOdabira = document.getElementById('btn-nazad-na-pocetnu-sa-odabira');

        const infoOdabranaTrgovina = document.getElementById('info-odabrana-trgovina'); 
        const infoTrgovinaSkeniranjeOverlay = document.getElementById('info-trgovina-skeniranje-overlay'); 
        const btnSkenirajProizvod = document.getElementById('btn-skeniraj-proizvod');
        const btnPretraziProizvodeGlavni = document.getElementById('btn-pretrazi-proizvode-glavni');
        const btnPromijeniTrgovinu = document.getElementById('btn-promijeni-trgovinu');
        
        const nazivTrgovineZaPretragu = document.getElementById('naziv-trgovine-za-pretragu');
        const btnNazadSaSkeniranja = document.getElementById('btn-nazad-sa-skeniranja');
        const btnNazadSaPretrageNaAkcije = document.getElementById('btn-nazad-sa-pretrage-na-akcije');
        
        const infoSkeniranogProizvodaContainer = document.getElementById('info-skeniranog-proizvoda-container');
        const skeniranNazivEl = document.getElementById('skeniran-naziv');
        const skeniranaCijenaEl = document.getElementById('skenirana-cijena');
        const skeniranaCijenaPoJediniciEl = document.getElementById('skenirana-cijena-po-jedinici');
        const skeniranaKolicinaInput = document.getElementById('skenirana-kolicina');

        const qrReaderElement = document.getElementById('qr-reader');
        const statusSkeneraOverlayElement = document.getElementById('status-skenera-overlay'); 
        const btnPokreniZaustaviSkener = document.getElementById('btn-pokreni-zaustavi-skener');

        let trenutnoOdabranaTrgovina = null; 
        let zadnjeOdabranaTrgovinaKod = localStorage.getItem('zadnjaTrgovinaKod');
        let zadnjeOdabranaTrgovinaNaziv = localStorage.getItem('zadnjaTrgovinaNaziv');
        let html5QrCode = null; 

        function prikaziEkran(ekranId) {
            [pocetniEkran, ekranOdabirTrgovine, glavniEkranAkcija, ekranSkeniranja, ekranPretrageIListe].forEach(ekran => {
                if (ekran && ekran.id === ekranId) ekran.classList.remove('hidden');
                else if (ekran) ekran.classList.add('hidden');
            });
        }

        function mapirajKodLancaUNaziv(kod) {
            if (!kod) return "Nepoznato";
            const imena = { "konzum": "Konzum", "lidl": "Lidl", "spar": "Spar", "plodine": "Plodine", "kaufland": "Kaufland", "tommy": "Tommy", "studenac": "Studenac", "eurospin": "Eurospin", "dm": "dm", "ktc": "KTC", "metro": "Metro", "trgocentar": "Trgocentar", "zabac": "Žabac", "vrutak": "Vrutak", "ribola": "Ribola", "ntl": "NTL" };
            return imena[kod.toLowerCase()] || (kod.charAt(0).toUpperCase() + kod.slice(1));
        }

        async function dohvatiITipkajTrgovine() {
            selectTrgovina.innerHTML = '<option value="">Učitavanje trgovina...</option>';
            selectTrgovina.disabled = true; btnPotvrdiTrgovinu.disabled = true;
            try {
                // KORISTIMO X-API-Key OVDJE
                const response = await fetch(`${API_BASE_URL}/v1/chains/`, { 
                    method: 'GET', 
                    headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' } 
                });
                if (!response.ok) {
                    let errorMsg = `Greška ${response.status}: ${response.statusText}`;
                    try { const errData = await response.json(); errorMsg += ` - ${errData.detail || JSON.stringify(errData)}`; } catch (e) {}
                    if (response.status === 401 || response.status === 403) { errorMsg += "\nProvjerite API ključ i način autentifikacije."; }
                    throw new Error(errorMsg);
                }
                const data = await response.json(); 
                if (data.chains && data.chains.length > 0) {
                    selectTrgovina.innerHTML = '<option value="">-- Izaberi trgovinu --</option>';
                    data.chains.sort((a,b) => mapirajKodLancaUNaziv(a).localeCompare(mapirajKodLancaUNaziv(b))).forEach(chainCode => { 
                        const option = document.createElement('option'); 
                        option.value = chainCode; 
                        option.textContent = mapirajKodLancaUNaziv(chainCode); 
                        selectTrgovina.appendChild(option); 
                    });
                    selectTrgovina.disabled = false; btnPotvrdiTrgovinu.disabled = false;
                } else { selectTrgovina.innerHTML = '<option value="">Nema dostupnih trgovina.</option>'; }
            } catch (error) { 
                console.error('Problem s dohvaćanjem trgovina:', error); 
                selectTrgovina.innerHTML = `<option value="">Greška pri učitavanju.</option>`; 
                alert(`Nije moguće učitati listu trgovina: ${error.message}`); 
            }
        }
        
        function izracunajCijenuPoJM(cijenaPakiranjaStr, kolicinaInputStr, jedinicaMjereInput) {
            console.log("--- Ulaz u izracunajCijenuPoJM ---:", "Cijena Pak:", cijenaPakiranjaStr, "Količina Ulaz:", kolicinaInputStr, "Jedinica Ulaz:", jedinicaMjereInput);
            const cijenaPakiranja = parseFloat(cijenaPakiranjaStr);
            let kolicinaStrNumerickiDio = kolicinaInputStr;
            if (typeof kolicinaInputStr === 'string') { kolicinaStrNumerickiDio = kolicinaInputStr.replace(',', '.'); const match = kolicinaStrNumerickiDio.match(/^[0-9.]+/); if (match && match[0]) { kolicinaStrNumerickiDio = match[0]; } }
            let kolicina = parseFloat(kolicinaStrNumerickiDio);
            let jedinicaMjere = jedinicaMjereInput;
            console.log("--- Nakon parsiranja u izracunajCijenuPoJM ---:", "Cijena Pak (broj):", cijenaPakiranja, "Količina (broj):", kolicina, "Količina Str Numerički:", kolicinaStrNumerickiDio, "Jedinica:", jedinicaMjere);
            if (isNaN(cijenaPakiranja) || isNaN(kolicina) || kolicina === 0 || jedinicaMjere === null || jedinicaMjere === undefined) { console.warn("Neispravni ulazni podaci za izracunajCijenuPoJM ili jedinica nedostaje:", cijenaPakiranjaStr, kolicinaInputStr, jedinicaMjereInput); return "N/A"; }
            let cijenaPoOsnovnojJM = ""; let osnovnaJM = "";
            jedinicaMjere = String(jedinicaMjere).toLowerCase();
            if (jedinicaMjere === "kom" || jedinicaMjere === "ko") { return `${cijenaPakiranja.toFixed(2)} EUR/kom`; }
            else if (jedinicaMjere === "g" || jedinicaMjere === "gr") { cijenaPoOsnovnojJM = ((cijenaPakiranja / kolicina) * 1000).toFixed(2); osnovnaJM = "kg"; }
            else if (jedinicaMjere === "ml") { cijenaPoOsnovnojJM = ((cijenaPakiranja / kolicina) * 1000).toFixed(2); osnovnaJM = "l"; }
            else if (jedinicaMjere === "kg" || jedinicaMjere === "l") { cijenaPoOsnovnojJM = (cijenaPakiranja / kolicina).toFixed(2); osnovnaJM = jedinicaMjere; }
            else { console.warn("Nepoznata jedinica mjere za izračun:", jedinicaMjere, "Originalni ulaz:", jedinicaMjereInput); return "N/A (nepoznata JM)"; }
            if (isNaN(parseFloat(cijenaPoOsnovnojJM))) { console.warn("Rezultat izračuna cijenePoOsnovnojJM je NaN:", cijenaPoOsnovnojJM); return "N/A (greška u izr.)"; }
            return `${cijenaPoOsnovnojJM} EUR/${osnovnaJM}`;
        }

        async function dohvatiPodatkeSkeniranogProizvoda(ean, chainCode) {
            skeniranNazivEl.textContent = `Tražim podatke za EAN: ${ean}...`;
            skeniranaCijenaEl.textContent = "..."; skeniranaCijenaPoJediniciEl.textContent = "...";
            infoSkeniranogProizvodaContainer.classList.remove('hidden'); skeniranaKolicinaInput.value = 1;
            try {
                // KORISTIMO X-API-Key OVDJE
                const response = await fetch(`${API_BASE_URL}/v1/products/${ean}/?chains=${chainCode}`, { 
                    method: 'GET', 
                    headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' } 
                });
                if (!response.ok) {
                    let errorMsg = `Greška pri dohvaćanju proizvoda (${response.status}): ${response.statusText}`;
                     if (response.status === 404) { errorMsg = `Proizvod s EAN ${ean} nije pronađen u trgovini ${mapirajKodLancaUNaziv(chainCode)}.`; }
                     else { try { const errData = await response.json(); errorMsg += ` - ${errData.detail || JSON.stringify(errData)}`; } catch (e) {} }
                    throw new Error(errorMsg);
                }
                const data = await response.json();
                console.log("--- Ukupni podaci o proizvodu od API-ja ---:", data);
                if (data.chains && data.chains.length > 0) {
                    const productInfo = data.chains[0]; 
                    console.log("--- Sadržaj productInfo (data.chains[0]) ---:", productInfo);
                    const nazivPrikaz = productInfo.name || data.name || "Nepoznat naziv";
                    skeniranNazivEl.textContent = nazivPrikaz;
                    if (productInfo.min_price !== undefined && productInfo.min_price !== null) { skeniranaCijenaEl.textContent = parseFloat(productInfo.min_price).toFixed(2); }
                    else { skeniranaCijenaEl.textContent = "N/A"; console.warn("min_price nije definiran u productInfo:", productInfo); }
                    console.log("--- Vrijednosti za izračun JM (iz productInfo) ---:", "Cijena:", productInfo.min_price, "Količina:", productInfo.quantity, "Jedinica:", productInfo.unit);
                    const cijenaPoJM = izracunajCijenuPoJM(productInfo.min_price, productInfo.quantity, productInfo.unit);
                    console.log("--- Rezultat izracunajCijenuPoJM ---:", cijenaPoJM);
                    skeniranaCijenaPoJediniciEl.textContent = cijenaPoJM;
                } else {
                    skeniranNazivEl.textContent = `Proizvod s EAN ${ean} nema podataka za trgovinu ${mapirajKodLancaUNaziv(chainCode)}.`;
                    skeniranaCijenaEl.textContent = "N/A"; skeniranaCijenaPoJediniciEl.textContent = "N/A";
                    console.warn(`API vratio 200 OK, ali nema 'chains' podataka za ${ean} u ${chainCode}`, data);
                }
            } catch (error) {
                console.error('Problem s dohvaćanjem proizvoda:', error);
                skeniranNazivEl.textContent = "Greška pri dohvaćanju";
                skeniranaCijenaEl.textContent = "-"; skeniranaCijenaPoJediniciEl.textContent = "-";
                alert(`Nije moguće učitati podatke o proizvodu: ${error.message}`);
            }
        }

        function azurirajGumbNastavi() {
            if (zadnjeOdabranaTrgovinaKod && zadnjeOdabranaTrgovinaNaziv) { btnNastaviZadnjaTrgovina.textContent = `Nastavi s ${mapirajKodLancaUNaziv(zadnjeOdabranaTrgovinaNaziv)}`; btnNastaviZadnjaTrgovina.classList.remove('hidden'); }
            else { btnNastaviZadnjaTrgovina.classList.add('hidden'); }
        }

        function postaviOdabranuTrgovinu(kod, naziv) {
            trenutnoOdabranaTrgovina = { code: kod, name: naziv }; // 'name' je ovdje zapravo kod lanca
            localStorage.setItem('zadnjaTrgovinaKod', kod); 
            localStorage.setItem('zadnjaTrgovinaNaziv', naziv); // Spremi originalni kod kao 'naziv'
            zadnjeOdabranaTrgovinaKod = kod; 
            zadnjeOdabranaTrgovinaNaziv = naziv; // Koristi kod za internu referencu
            azurirajGumbNastavi();
            const prikazNazivTrgovine = mapirajKodLancaUNaziv(naziv); // Mapiraj tek za prikaz
            infoOdabranaTrgovina.textContent = `Trgovina: ${prikazNazivTrgovine}`; 
            if(infoTrgovinaSkeniranjeOverlay) { infoTrgovinaSkeniranjeOverlay.textContent = `Trgovina: ${prikazNazivTrgovine}`; }
            nazivTrgovineZaPretragu.textContent = prikazNazivTrgovine;
        }

        btnIzaberiTrgovinu.addEventListener('click', () => { prikaziEkran('ekran-odabir-trgovine'); dohvatiITipkajTrgovine(); });
        btnNazadNaPocetnuSaOdabira.addEventListener('click', () => prikaziEkran('pocetni-ekran'));
        btnPotvrdiTrgovinu.addEventListener('click', () => { 
            const odabraniKod = selectTrgovina.value; 
            if (odabraniKod) { 
                postaviOdabranuTrgovinu(odabraniKod, odabraniKod); // Proslijedi kod kao kod i "naziv"
                prikaziEkran('glavni-ekran-akcija'); 
            } else { 
                alert("Molimo odaberite trgovinu."); 
            } 
        });
        btnNastaviZadnjaTrgovina.addEventListener('click', () => { 
            if (zadnjeOdabranaTrgovinaKod && zadnjeOdabranaTrgovinaNaziv) { 
                postaviOdabranuTrgovinu(zadnjeOdabranaTrgovinaKod, zadnjeOdabranaTrgovinaNaziv); 
                prikaziEkran('glavni-ekran-akcija'); 
            } 
        });
        btnTraziProizvodePocetna.addEventListener('click', () => { 
            if (zadnjeOdabranaTrgovinaKod && zadnjeOdabranaTrgovinaNaziv) { 
                postaviOdabranuTrgovinu(zadnjeOdabranaTrgovinaKod, zadnjeOdabranaTrgovinaNaziv); 
                prikaziEkran('ekran-pretrage-i-liste'); 
                document.getElementById('input-pretraga-proizvoda').focus(); 
            } else { 
                prikaziEkran('ekran-odabir-trgovine'); 
                dohvatiITipkajTrgovine(); 
            } 
        });
        btnPromijeniTrgovinu.addEventListener('click', () => { prikaziEkran('ekran-odabir-trgovine'); dohvatiITipkajTrgovine(); });
        
        btnSkenirajProizvod.addEventListener('click', () => {
            if (!trenutnoOdabranaTrgovina) { 
                alert("Molimo prvo odaberite trgovinu."); 
                prikaziEkran('ekran-odabir-trgovine'); 
                dohvatiITipkajTrgovine(); 
                return; 
            }
            prikaziEkran('ekran-skeniranja');
            if(infoTrgovinaSkeniranjeOverlay && trenutnoOdabranaTrgovina) { 
                infoTrgovinaSkeniranjeOverlay.textContent = `Trgovina: ${mapirajKodLancaUNaziv(trenutnoOdabranaTrgovina.name)}`; 
            }
            statusSkeneraOverlayElement.textContent = "Kliknite 'Pokreni skener' za aktivaciju kamere.";
            infoSkeniranogProizvodaContainer.classList.add('hidden');
            if (html5QrCode && html5QrCode.isScanning) { stopScanner(); } // Osiguraj da je zaustavljen ako je bio aktivan
            btnPokreniZaustaviSkener.textContent = "Pokreni skener";
        });
        
        btnPretraziProizvodeGlavni.addEventListener('click', () => { 
            if (!trenutnoOdabranaTrgovina) { 
                alert("Molimo prvo odaberite trgovinu."); 
                prikaziEkran('ekran-odabir-trgovine'); 
                dohvatiITipkajTrgovine(); 
                return; 
            } 
            prikaziEkran('ekran-pretrage-i-liste'); 
            document.getElementById('input-pretraga-proizvoda').focus(); 
        });
        
        btnNazadSaSkeniranja.addEventListener('click', () => { 
            stopScanner(); // Obavezno zaustavi skener prije povratka
            prikaziEkran('glavni-ekran-akcija'); 
        });
        btnNazadSaPretrageNaAkcije.addEventListener('click', () => { prikaziEkran('glavni-ekran-akcija'); });

        document.addEventListener('DOMContentLoaded', () => { 
            document.getElementById('trenutna-godina').textContent = new Date().getFullYear(); 
            azurirajGumbNastavi(); 
            prikaziEkran('pocetni-ekran'); 
        });

        // --- SKENER LOGIKA ---
        function onScanSuccess(decodedText, decodedResult) {
            console.log(`Kod pronađen: ${decodedText}`, decodedResult); 
            statusSkeneraOverlayElement.textContent = `Skeniran kod: ${decodedText}`; 
            stopScanner(); 
            if (trenutnoOdabranaTrgovina && trenutnoOdabranaTrgovina.code) { 
                dohvatiPodatkeSkeniranogProizvoda(decodedText, trenutnoOdabranaTrgovina.code); 
            } else { 
                alert("Nije odabrana trgovina."); 
                prikaziEkran('ekran-odabir-trgovine'); 
                dohvatiITipkajTrgovine(); 
            }
        }
        function onScanFailure(error) { /* Ignoriraj */ }

        function startScanner() {
            if (!Html5Qrcode) { 
                statusSkeneraOverlayElement.textContent = "Greška: Html5Qrcode biblioteka nije učitana."; 
                console.error("Html5Qrcode biblioteka nije učitana."); 
                return; 
            }
            if (!html5QrCode) { 
                try { 
                    html5QrCode = new Html5Qrcode("qr-reader"); // Koristi div specificiran u HTML-u
                } catch (e) { 
                    console.error("Greška pri inicijalizaciji Html5Qrcode:", e); 
                    statusSkeneraOverlayElement.textContent = "Greška: Skener se ne može inicijalizirati."; 
                    return; 
                } 
            }
            // Konfiguracija skenera
            const config = { 
                fps: 10, 
                qrbox: (viewfinderWidth, viewfinderHeight) => {
                    // Izračunaj veličinu qrboxa, npr. 70% manje dimenzije
                    let edgePercentage = 0.7;
                    let minEdgeSize = 150; // Minimalna veličina ruba u px
                    let maxEdgeSize = Math.min(viewfinderWidth, viewfinderHeight, 300); // Maksimalna veličina, ali ne veća od 300px
                    
                    let qrboxEdgeSize = Math.floor(Math.min(viewfinderWidth, viewfinderHeight) * edgePercentage);
                    qrboxEdgeSize = Math.max(minEdgeSize, qrboxEdgeSize);
                    qrboxEdgeSize = Math.min(maxEdgeSize, qrboxEdgeSize);

                    // Napravi da je malo širi nego viši, npr. omjer 1.6:1 za EAN kodove
                    let qrboxHeight = qrboxEdgeSize * 0.6; // Npr. 60% od izračunate veličine
                    let qrboxWidth = qrboxEdgeSize; 

                    return { width: qrboxWidth, height: qrboxHeight };
                },
                rememberLastUsedCamera: true, 
                supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
                // Možeš dodati i formatsToSupport ako znaš da su samo EAN/UPC:
                // formatsToSupport: [ Html5QrcodeSupportedFormats.EAN_13, Html5QrcodeSupportedFormats.EAN_8, /* ... ostali UPC/EAN */ ]
            };
            
            statusSkeneraOverlayElement.textContent = "Pokretanje kamere...";
            if (qrReaderElement) qrReaderElement.innerHTML = ""; // Očisti prethodni sadržaj ako postoji
            
            html5QrCode.start(
                { facingMode: "environment" }, // Pokušaj koristiti stražnju kameru
                config,
                onScanSuccess,
                onScanFailure
            )
            .then(() => { 
                statusSkeneraOverlayElement.textContent = "Kamera aktivna. Skenirajte barkod."; 
                btnPokreniZaustaviSkener.textContent = "Zaustavi skener"; 
            })
            .catch(err => { 
                statusSkeneraOverlayElement.textContent = "Greška pri pokretanju kamere."; 
                console.error("Greška pri pokretanju kamere: ", err); 
                alert(`Nije moguće pokrenuti kameru: ${err}. Provjerite dozvole i da stranica koristi HTTPS (osim za localhost).`); 
                btnPokreniZaustaviSkener.textContent = "Pokreni skener"; 
            });
        }

        function stopScanner() {
            if (html5QrCode && html5QrCode.isScanning) {
                html5QrCode.stop()
                .then(ignore => { 
                    statusSkeneraOverlayElement.textContent = "Skener zaustavljen. Kliknite 'Pokreni skener' za ponovno aktiviranje."; 
                    btnPokreniZaustaviSkener.textContent = "Pokreni skener"; 
                    console.log("Skener zaustavljen."); 
                    if (qrReaderElement) qrReaderElement.innerHTML = ""; // Očisti video element
                })
                .catch(err => { 
                    console.error("Greška pri zaustavljanju skenera: ", err); 
                    statusSkeneraOverlayElement.textContent = "Greška pri zaustavljanju skenera."; 
                    btnPokreniZaustaviSkener.textContent = "Pokreni skener"; // Za svaki slučaj
                });
            } else {
                // Ako skener nije bio aktivan, samo osiguraj da je UI ispravan
                statusSkeneraOverlayElement.textContent = "Skener nije aktivan. Kliknite 'Pokreni skener'.";
                btnPokreniZaustaviSkener.textContent = "Pokreni skener";
                if (qrReaderElement) qrReaderElement.innerHTML = ""; // Očisti za svaki slučaj
            }
        }

        btnPokreniZaustaviSkener.addEventListener('click', () => {
            if (html5QrCode && html5QrCode.isScanning) { 
                stopScanner(); 
            } else { 
                // Provjeri je li korisnik na ekranu skeniranja
                if (document.getElementById('ekran-skeniranja').classList.contains('hidden')) {
                    alert("Molimo prvo idite na ekran za skeniranje (kliknite 'Skeniraj proizvod').");
                    return;
                }
                startScanner(); 
            }
        });
        
        // --- TODO: Lista skeniranih/pretraženih proizvoda, dodavanje, ukupno, usporedba... ---
        // Za sada je ovo samo placeholder logika.
        const btnDodajSkeniranoNaListu = document.getElementById('btn-dodaj-skenirano-na-listu');
        const skeniraniProizvodiListaDiv = document.getElementById('skenirani-proizvodi-lista');
        const ukupnoCijenaSkeniranjeSpan = document.getElementById('ukupno-cijena-skeniranje');
        let listaSkeniranih = [];

        btnDodajSkeniranoNaListu.addEventListener('click', () => {
            const naziv = skeniranNazivEl.textContent;
            const cijenaStr = skeniranaCijenaEl.textContent;
            const kolicina = parseInt(skeniranaKolicinaInput.value) || 1;

            if (naziv && naziv !== "Tražim podatke za EAN..." && naziv !== "Greška pri dohvaćanju" && cijenaStr && cijenaStr !== "..." && cijenaStr !== "N/A" && cijenaStr !== "-") {
                const cijena = parseFloat(cijenaStr);
                listaSkeniranih.push({ naziv, cijena, kolicina });
                azurirajPrikazListeSkeniranih();
                infoSkeniranogProizvodaContainer.classList.add('hidden'); // Sakrij info nakon dodavanja
                // Opcionalno, ponovno pripremi skener
                statusSkeneraOverlayElement.textContent = "Proizvod dodan. Kliknite 'Pokreni skener' za sljedeći.";
                btnPokreniZaustaviSkener.textContent = "Pokreni skener";
            } else {
                alert("Nije moguće dodati proizvod. Podaci nisu potpuni.");
            }
        });

        function azurirajPrikazListeSkeniranih() {
            skeniraniProizvodiListaDiv.innerHTML = '';
            let ukupno = 0;
            listaSkeniranih.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('proizvod-na-listi');
                const itemUkupno = item.cijena * item.kolicina;
                itemDiv.innerHTML = `
                    <span>${item.naziv} (${item.kolicina}x)</span>
                    <span>${itemUkupno.toFixed(2)} EUR</span>
                    <button data-index="${index}" class="ukloni-item" style="padding: 2px 5px; font-size: 0.8em; background-color:#ffaaaa; border:none; border-radius:3px;">X</button>
                `;
                itemDiv.querySelector('.ukloni-item').addEventListener('click', (e) => {
                    listaSkeniranih.splice(e.target.dataset.index, 1);
                    azurirajPrikazListeSkeniranih();
                });
                skeniraniProizvodiListaDiv.appendChild(itemDiv);
                ukupno += itemUkupno;
            });
            ukupnoCijenaSkeniranjeSpan.textContent = ukupno.toFixed(2);
             if (listaSkeniranih.length === 0) {
                skeniraniProizvodiListaDiv.innerHTML = '<p style="text-align:center; font-style:italic;">Lista je prazna.</p>';
            }
        }
        // Inicijalni prikaz prazne liste
        azurirajPrikazListeSkeniranih();
