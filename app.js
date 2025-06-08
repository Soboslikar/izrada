document.addEventListener('DOMContentLoaded', () => {
    // --- KONSTANTE ---
    const API_BASE_URL = "https://api.cijene.dev";
    const API_KEY = "mee5xooThuithei4ees4bae3emos3ook"; // TVOJ API KLJUČ
    const CAMERA_ID_KEY_LS = 'ducanSkenerSelectedCameraID';
    const ZADNJA_TRGOVINA_KOD_LS = 'ducanSkenerZadnjaTrgovinaKod';

    // --- DOM ELEMENTI ---
    // Ekrani
    const pocetniEkran = document.getElementById('pocetni-ekran');
    const ekranOdabirTrgovine = document.getElementById('ekran-odabir-trgovine');
    const glavniEkranAkcija = document.getElementById('glavni-ekran-akcija');
    const ekranSkeniranja = document.getElementById('ekran-skeniranja');
    const ekranPretrageIListe = document.getElementById('ekran-pretrage-i-liste');
    const ekranPovijesti = document.getElementById('ekran-povijesti');

    // Gumbi na početnom ekranu
    const btnIzaberiTrgovinu = document.getElementById('btn-izaberi-trgovinu');
    const btnTraziProizvodePocetna = document.getElementById('btn-trazi-proizvode-pocetna');
    const btnNastaviZadnjaTrgovina = document.getElementById('btn-nastavi-zadnja-trgovina');
    const btnPovijest = document.getElementById('btn-povijest');

    // Elementi ekrana odabira trgovine
    const selectTrgovina = document.getElementById('select-trgovina');
    const btnPotvrdiTrgovinu = document.getElementById('btn-potvrdi-trgovinu');
    const btnNazadNaPocetnuSaOdabira = document.getElementById('btn-nazad-na-pocetnu-sa-odabira');

    // Elementi glavnog ekrana akcija
    const infoOdabranaTrgovina = document.getElementById('info-odabrana-trgovina');
    const btnSkenirajProizvod = document.getElementById('btn-skeniraj-proizvod');
    const btnPretraziProizvodeGlavni = document.getElementById('btn-pretrazi-proizvode-glavni');
    const btnPromijeniTrgovinu = document.getElementById('btn-promijeni-trgovinu');

    // Elementi ekrana skeniranja
    const infoTrgovinaSkeniranje = document.getElementById('info-trgovina-skeniranje');
    const skeniraniProizvodiListaDiv = document.getElementById('skenirani-proizvodi-lista');
    const ukupnoCijenaSkeniranjeSpan = document.getElementById('ukupno-cijena-skeniranje');
    
    const readerContainer = document.getElementById('reader-container');
    const readerDiv = document.getElementById('reader');
    const scanInstructionElem = document.getElementById('scan-instruction');
    const switchCameraButton = document.getElementById('switch-camera-btn');
    const cameraSelectionOverlay = document.getElementById('camera-selection-overlay');
    const cameraListUl = document.getElementById('camera-list');
    const scannerStatusTextElem = document.getElementById('scannerStatusText');
    const scannerErrorTextElem = document.getElementById('scannerErrorText');
    const startStopScanButton = document.getElementById('startStopScanButton');
    const scanResultContainer = document.getElementById('scanResultContainer');
    const scannedEanResultSpan = document.getElementById('scannedEanResultSpan');
    
    const infoSkeniranogProizvodaContainer = document.getElementById('info-skeniranog-proizvoda-container');
    const skeniranNazivEl = document.getElementById('skeniran-naziv');
    const skeniranaCijenaEl = document.getElementById('skenirana-cijena');
    const skeniranaCijenaPoJMEl = document.getElementById('skenirana-cijena-po-jm'); // Ispravljen ID
    const skeniranaKolicinaInput = document.getElementById('skenirana-kolicina');
    const btnDodajSkeniranoNaListu = document.getElementById('btn-dodaj-skenirano-na-listu');
    const btnNazadSaSkeniranja = document.getElementById('btn-nazad-sa-skeniranja');

    // Elementi ekrana pretrage
    const nazivTrgovineZaPretragu = document.getElementById('naziv-trgovine-za-pretragu');
    const inputPretragaProizvoda = document.getElementById('input-pretraga-proizvoda');
    const rezultatiPretrageProizvodaDiv = document.getElementById('rezultati-pretrage-proizvoda-div');
    const listaProizvodaPretragaDiv = document.getElementById('lista-proizvoda-pretraga');
    const ukupnoCijenaPretragaSpan = document.getElementById('ukupno-cijena-pretraga');
    // const btnUsporediCijeneSaPretrage = document.getElementById('btn-usporedi-cijene-sa-pretrage'); // Za kasnije
    const btnNazadSaPretrageNaAkcije = document.getElementById('btn-nazad-sa-pretrage-na-akcije');

    // Elementi ekrana povijesti
    const btnNazadSaPovijesti = document.getElementById('btn-nazad-sa-povijesti');

    // Ostalo
    document.getElementById('trenutna-godina').textContent = new Date().getFullYear();


    // --- STANJE APLIKACIJE ---
    let trenutnoOdabranaTrgovina = null; // { code: 'konzum', name: 'Konzum' }
    let zadnjeOdabranaTrgovinaKod = localStorage.getItem(ZADNJA_TRGOVINA_KOD_LS);
    
    let listaZaSkeniranje = []; 
    let listaZaPretragu = [];

    // Stanje skenera
    let html5QrCodeInstance = null; 
    let isScannerRunning = false;
    let availableCameras = [];

    // --- FUNKCIJE ZA NAVIGACIJU ---
    function prikaziEkran(ekranId) {
        [pocetniEkran, ekranOdabirTrgovine, glavniEkranAkcija, ekranSkeniranja, ekranPretrageIListe, ekranPovijesti].forEach(ekran => {
            if (ekran && ekran.id === ekranId) ekran.classList.remove('hidden');
            else if (ekran) ekran.classList.add('hidden');
        });
        // Sakrij overlay za kameru ako je bio otvoren pri promjeni ekrana
        if (cameraSelectionOverlay && cameraSelectionOverlay.style.display === 'block') {
            cameraSelectionOverlay.style.display = 'none';
        }
    }

    // --- FUNKCIJE ZA API I PODATKE ---
    function mapirajKodLancaUNaziv(kod) {
        if (!kod) return "Nepoznato";
        const imena = {
            "konzum": "Konzum", "lidl": "Lidl", "spar": "Spar", "plodine": "Plodine",
            "kaufland": "Kaufland", "tommy": "Tommy", "studenac": "Studenac",
            "eurospin": "Eurospin", "dm": "dm", "ktc": "KTC", "metro": "Metro",
            "trgocentar": "Trgocentar", "zabac": "Žabac", "vrutak": "Vrutak",
            "ribola": "Ribola", "ntl": "NTL"
        };
        return imena[kod.toLowerCase()] || (kod.charAt(0).toUpperCase() + kod.slice(1));
    }

    async function dohvatiTrgovine() {
        selectTrgovina.innerHTML = '<option value="">Učitavanje trgovina...</option>';
        selectTrgovina.disabled = true;
        btnPotvrdiTrgovinu.disabled = true;

        try {
            const response = await fetch(`${API_BASE_URL}/v1/chains/`, {
                method: 'GET',
                headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
            });
            if (!response.ok) {
                 const errorText = await response.text();
                 throw new Error(`Greška ${response.status}: ${errorText}`);
            }
            
            const data = await response.json();
            if (data.chains && data.chains.length > 0) {
                selectTrgovina.innerHTML = '<option value="">-- Izaberi trgovinu --</option>';
                // Sortiraj lance po imenu prije dodavanja
                const sortiraniLanci = data.chains.sort((a,b) => mapirajKodLancaUNaziv(a).localeCompare(mapirajKodLancaUNaziv(b)));
                sortiraniLanci.forEach(chainCode => {
                    const option = document.createElement('option');
                    option.value = chainCode;
                    option.textContent = mapirajKodLancaUNaziv(chainCode);
                    selectTrgovina.appendChild(option);
                });
                selectTrgovina.disabled = false;
                btnPotvrdiTrgovinu.disabled = false;
            } else {
                selectTrgovina.innerHTML = '<option value="">Nema dostupnih trgovina.</option>';
            }
        } catch (error) {
            console.error('Problem s dohvaćanjem trgovina:', error);
            selectTrgovina.innerHTML = `<option value="">Greška pri učitavanju.</option>`;
            alert(`Nije moguće učitati listu trgovina: ${error.message}`);
        }
    }

    async function dohvatiProizvodPoEAN(ean, chainCode) {
        scannerStatusTextElem.textContent = `Tražim proizvod ${ean}...`;
        infoSkeniranogProizvodaContainer.classList.add('hidden');
        infoSkeniranogProizvodaContainer.removeAttribute('data-ean'); // Resetiraj spremljeni EAN

        try {
            const response = await fetch(`${API_BASE_URL}/v1/products/${ean}/?chains=${chainCode}`, {
                method: 'GET',
                headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
            });
            if (!response.ok) {
                 if (response.status === 404) {
                    throw new Error(`Proizvod s EAN ${ean} nije pronađen u trgovini ${mapirajKodLancaUNaziv(chainCode)}.`);
                }
                throw new Error(`Greška ${response.status} pri dohvaćanju proizvoda: ${await response.text()}`);
            }
            
            const data = await response.json();
            console.log("Podaci o proizvodu:", data);

            if (data.chains && data.chains.length > 0) {
                const proizvodInfo = data.chains[0];
                const naziv = proizvodInfo.name || data.name || "Nepoznat naziv";
                const cijena = parseFloat(proizvodInfo.min_price);
                const kolicinaApi = proizvodInfo.quantity || data.quantity;
                const jedinicaApi = proizvodInfo.unit || data.unit;
                
                skeniranNazivEl.textContent = naziv;
                skeniranaCijenaEl.textContent = isNaN(cijena) ? "N/A" : cijena.toFixed(2);
                
                const cijenaPoJM = izracunajCijenuPoJM(cijena, kolicinaApi, jedinicaApi);
                skeniranaCijenaPoJMEl.textContent = cijenaPoJM;

                infoSkeniranogProizvodaContainer.dataset.ean = ean;
                infoSkeniranogProizvodaContainer.dataset.naziv = naziv;
                infoSkeniranogProizvodaContainer.dataset.cijena = isNaN(cijena) ? "0" : cijena.toFixed(2);
                infoSkeniranogProizvodaContainer.dataset.cijenapojm = cijenaPoJM; // Ispravljeno ime atributa

                infoSkeniranogProizvodaContainer.classList.remove('hidden');
                skeniranaKolicinaInput.value = "1"; 
                scannerStatusTextElem.textContent = "Proizvod pronađen.";
            } else {
                throw new Error(`Proizvod s EAN ${ean} nije pronađen u specifikacijama za trgovinu ${mapirajKodLancaUNaziv(chainCode)}.`);
            }
        } catch (error) {
            console.error('Problem s dohvaćanjem proizvoda:', error);
            scannerErrorTextElem.textContent = error.message;
            scannerStatusTextElem.textContent = "Problem pri dohvaćanju proizvoda.";
            // Prikazati samo EAN ako podaci nisu dohvaćeni
            skeniranNazivEl.textContent = `EAN: ${ean}`;
            skeniranaCijenaEl.textContent = "N/A";
            skeniranaCijenaPoJMEl.textContent = "N/A";
            infoSkeniranogProizvodaContainer.classList.remove('hidden');
        }
    }
    
    function izracunajCijenuPoJM(cijenaPakiranja, kolicinaPakiranja, jedinicaPakiranja) {
        if (isNaN(cijenaPakiranja) || !kolicinaPakiranja || !jedinicaPakiranja) return "N/A";

        const kolicina = parseFloat(String(kolicinaPakiranja).replace(',', '.'));
        if (isNaN(kolicina) || kolicina === 0) return "N/A";

        let cijenaPoOsnovnojJedinici = 0;
        let osnovnaJedinica = "";
        const jm = String(jedinicaPakiranja).toLowerCase();

        if (jm === "kg" || jm === "l" || jm === "m") {
            cijenaPoOsnovnojJedinici = cijenaPakiranja / kolicina;
            osnovnaJedinica = jm;
        } else if (jm === "g" || jm === "gr") {
            cijenaPoOsnovnojJedinici = (cijenaPakiranja / kolicina) * 1000;
            osnovnaJedinica = "kg";
        } else if (jm === "ml") {
            cijenaPoOsnovnojJedinici = (cijenaPakiranja / kolicina) * 1000;
            osnovnaJedinica = "l";
        } else if (jm === "kom" || jm === "kos" || jm === "szt" || jm === "db") {
            return `${cijenaPakiranja.toFixed(2)} EUR/kom`;
        } else {
            return "N/A (nepoznata JM)";
        }

        if (isNaN(cijenaPoOsnovnojJedinici)) return "N/A";
        return `${cijenaPoOsnovnojJedinici.toFixed(2)} EUR/${osnovnaJedinica}`;
    }

    // --- FUNKCIJE ZA UI (osim skenera) ---
    function azurirajGumbNastavi() {
        if (zadnjeOdabranaTrgovinaKod) {
            btnNastaviZadnjaTrgovina.textContent = `Nastavi s ${mapirajKodLancaUNaziv(zadnjeOdabranaTrgovinaKod)}`;
            btnNastaviZadnjaTrgovina.classList.remove('hidden');
        } else {
            btnNastaviZadnjaTrgovina.classList.add('hidden');
        }
    }

    function postaviOdabranuTrgovinu(kodTrgovine) {
        trenutnoOdabranaTrgovina = { code: kodTrgovine, name: mapirajKodLancaUNaziv(kodTrgovine) };
        localStorage.setItem(ZADNJA_TRGOVINA_KOD_LS, kodTrgovine);
        zadnjeOdabranaTrgovinaKod = kodTrgovine;
        azurirajGumbNastavi();

        const prikazNazivTrgovine = mapirajKodLancaUNaziv(kodTrgovine);
        infoOdabranaTrgovina.textContent = `Trgovina: ${prikazNazivTrgovine}`;
        infoTrgovinaSkeniranje.textContent = `Skeniranje za ${prikazNazivTrgovine}`;
        nazivTrgovineZaPretragu.textContent = `u ${prikazNazivTrgovine}`;
        // Resetiraj liste pri promjeni trgovine
        listaZaSkeniranje = [];
        listaZaPretragu = [];
        renderirajListu('skeniranje');
        renderirajListu('pretraga');
    }
    
    function renderirajListu(tipListe) { 
        const listaDiv = tipListe === 'skeniranje' ? skeniraniProizvodiListaDiv : listaProizvodaPretragaDiv;
        const ukupnoSpan = tipListe === 'skeniranje' ? ukupnoCijenaSkeniranjeSpan : ukupnoCijenaPretragaSpan;
        const podaciListe = tipListe === 'skeniranje' ? listaZaSkeniranje : listaZaPretragu;

        listaDiv.innerHTML = '';
        let ukupnaCijena = 0;

        if (podaciListe.length === 0) {
            listaDiv.innerHTML = '<p style="font-style:italic; text-align:center;">Lista je prazna.</p>';
        } else {
            podaciListe.forEach((proizvod, index) => {
                const el = document.createElement('div');
                el.classList.add('proizvod-na-listi');
                const cijenaStavke = proizvod.cijena * proizvod.kolicina;
                ukupnaCijena += cijenaStavke;

                el.innerHTML = `
                    <span class="naziv">${proizvod.naziv} (${proizvod.kolicina} x ${proizvod.cijena.toFixed(2)} EUR)</span>
                    <span class="cijena">${cijenaStavke.toFixed(2)} EUR</span>
                    <button class="ukloni-btn" data-index="${index}" data-list-type="${tipListe}" title="Ukloni proizvod"></button>
                `;
                listaDiv.appendChild(el);
            });
        }
        ukupnoSpan.textContent = ukupnaCijena.toFixed(2);
    }
    
    function dodajNaListu(tipListe, ean, naziv, cijena, kolicina, cijenaPoJM) {
        const podaciListe = tipListe === 'skeniranje' ? listaZaSkeniranje : listaZaPretragu;
        
        const postojeciProizvodIndex = podaciListe.findIndex(p => p.ean === ean);
        if (postojeciProizvodIndex > -1) {
            podaciListe[postojeciProizvodIndex].kolicina += kolicina;
        } else {
            podaciListe.push({ ean, naziv, cijena: parseFloat(cijena), kolicina, cijenaPoJM });
        }
        renderirajListu(tipListe);
    }

    // --- LOGIKA SKENERA (HTML5-QRCODE) ---
    function clearScannerMessages() {
        scannerStatusTextElem.textContent = '';
        scannerErrorTextElem.textContent = '';
    }

    async function onScanSuccess(decodedText, decodedResult) {
        clearScannerMessages();
        console.log(`Skeniran kod: ${decodedText}`, decodedResult);
        
        scannedEanResultSpan.textContent = decodedText;
        scanResultContainer.classList.remove('hidden');

        await stopActiveScanner(); 

        if (trenutnoOdabranaTrgovina && trenutnoOdabranaTrgovina.code) {
            await dohvatiProizvodPoEAN(decodedText, trenutnoOdabranaTrgovina.code);
        } else {
            scannerErrorTextElem.textContent = "Trgovina nije odabrana. Ne mogu dohvatiti proizvod.";
        }
    }

    function onScanFailure(error) { /* Ignoriraj za sada */ }

    async function initializeAndStartScanner(requestedCameraId = null) {
        if (isScannerRunning) return; 

        clearScannerMessages();
        scannerStatusTextElem.textContent = "Inicijalizacija skenera...";
        readerDiv.innerHTML = ""; 
        scanInstructionElem.style.display = 'none';
        if (switchCameraButton) switchCameraButton.style.display = 'none';
        if (cameraSelectionOverlay) cameraSelectionOverlay.style.display = 'none';
        scanResultContainer.classList.add('hidden'); 
        infoSkeniranogProizvodaContainer.classList.add('hidden'); 

        if (!html5QrCodeInstance) {
            try {
                html5QrCodeInstance = new Html5Qrcode("reader");
            } catch (e) {
                console.error("Greška pri kreiranju Html5Qrcode instance:", e);
                scannerErrorTextElem.textContent = "Greška skenera. Osvježite stranicu.";
                return;
            }
        }
        
        const config = {
            fps: 10, 
            qrbox: (viewfinderWidth, viewfinderHeight) => {
                let widthPercentage = 0.80; 
                let heightToWidthRatio = 0.35; 
                let qrboxWidth = Math.floor(viewfinderWidth * widthPercentage);
                let qrboxHeight = Math.floor(qrboxWidth * heightToWidthRatio);
                qrboxWidth = Math.max(200, Math.min(viewfinderWidth - 40, qrboxWidth)); 
                qrboxHeight = Math.max(70, Math.min(viewfinderHeight - 40, qrboxHeight)); 
                return { width: qrboxWidth, height: qrboxHeight };
            },
            formatsToSupport: [ 
                Html5QrcodeSupportedFormats.EAN_13, Html5QrcodeSupportedFormats.EAN_8,
                Html5QrcodeSupportedFormats.UPC_A, Html5QrcodeSupportedFormats.UPC_E
            ]
        };

        try {
            if (availableCameras.length === 0 && Html5Qrcode.getCameras) {
                scannerStatusTextElem.textContent = "Dohvaćam kamere...";
                const devices = await Html5Qrcode.getCameras();
                if (devices && devices.length) availableCameras = devices;
            }

            let cameraIdToUse = requestedCameraId;
            if (!cameraIdToUse) {
                const savedCameraId = localStorage.getItem(CAMERA_ID_KEY_LS);
                if (savedCameraId && availableCameras.some(d => d.id === savedCameraId)) {
                    cameraIdToUse = savedCameraId;
                } else { 
                    const rearCamera = availableCameras.find(d => d.label.toLowerCase().includes('back') || d.label.toLowerCase().includes('zadnja') || d.label.toLowerCase().includes('environment'));
                    cameraIdToUse = rearCamera ? rearCamera.id : (availableCameras.length > 0 ? availableCameras[0].id : null);
                }
            }
            
            if (!cameraIdToUse) {
                scannerErrorTextElem.textContent = "Nema dostupnih kamera ili dozvole nisu dane.";
                scannerStatusTextElem.textContent = "Problem s kamerom.";
                return;
            }

            scannerStatusTextElem.textContent = "Pokretanje kamere...";
            await html5QrCodeInstance.start(cameraIdToUse, config, onScanSuccess, onScanFailure);
            
            isScannerRunning = true;
            localStorage.setItem(CAMERA_ID_KEY_LS, cameraIdToUse);
            startStopScanButton.textContent = "Zaustavi Skener";
            startStopScanButton.classList.add('stop-btn');
            scannerStatusTextElem.textContent = "Kamera aktivna.";
            scanInstructionElem.style.display = 'block';
            if (availableCameras.length > 1 && switchCameraButton) {
                switchCameraButton.style.display = 'block';
            }

        } catch (err) {
            console.error("Greška pri pokretanju kamere: ", err);
            isScannerRunning = false;
            startStopScanButton.textContent = "Pokreni Skener";
            startStopScanButton.classList.remove('stop-btn');
            scannerErrorTextElem.textContent = `Problem s kamerom: ${err.name || err.message || err}`;
            scanInstructionElem.style.display = 'none';
            if (switchCameraButton) switchCameraButton.style.display = 'none';
        }
    }

    async function stopActiveScanner() {
        if (!isScannerRunning || !html5QrCodeInstance) return;

        clearScannerMessages();
        scannerStatusTextElem.textContent = "Zaustavljanje skenera...";
        scanInstructionElem.style.display = 'none';
        if (switchCameraButton) switchCameraButton.style.display = 'none';
        if (cameraSelectionOverlay) cameraSelectionOverlay.style.display = 'none';

        try {
            await html5QrCodeInstance.stop();
        } catch (err) {
            console.error("Greška pri zaustavljanju skenera: ", err);
        } finally {
            isScannerRunning = false;
            startStopScanButton.textContent = "Pokreni Skener";
            startStopScanButton.classList.remove('stop-btn');
            scannerStatusTextElem.textContent = "Skener zaustavljen.";
            readerDiv.innerHTML = ""; 
        }
    }

    function toggleCameraSelection() {
        if (!switchCameraButton || !cameraSelectionOverlay || !cameraListUl) return;

        if (cameraSelectionOverlay.style.display === 'block') {
            cameraSelectionOverlay.style.display = 'none';
            return;
        }

        if (!availableCameras || availableCameras.length <= 1) {
            scannerStatusTextElem.textContent = "Nema drugih kamera za odabir.";
            setTimeout(() => { 
                if(isScannerRunning) scannerStatusTextElem.textContent = "Kamera aktivna."; 
                else scannerStatusTextElem.textContent = "Skener nije aktivan.";
            }, 2000);
            return;
        }

        cameraListUl.innerHTML = ''; 
        const currentActiveCameraId = localStorage.getItem(CAMERA_ID_KEY_LS);

        availableCameras.forEach(device => {
            const listItem = document.createElement('li');
            listItem.textContent = device.label || `Kamera ${device.id.substring(0, 10)}...`;
            listItem.dataset.cameraId = device.id;
            listItem.title = device.label || device.id; 
            if (device.id === currentActiveCameraId) listItem.classList.add('selected-camera');
            
            listItem.addEventListener('click', async () => {
                cameraSelectionOverlay.style.display = 'none';
                if (device.id !== localStorage.getItem(CAMERA_ID_KEY_LS) || !isScannerRunning) {
                    scannerStatusTextElem.textContent = `Mijenjam na ${listItem.textContent}...`;
                    await stopActiveScanner(); 
                    initializeAndStartScanner(device.id); 
                }
            });
            cameraListUl.appendChild(listItem);
        });
        cameraSelectionOverlay.style.display = 'block';
    }


    // --- EVENT LISTENERI ---
    btnIzaberiTrgovinu.addEventListener('click', () => {
        prikaziEkran('ekran-odabir-trgovine');
        dohvatiTrgovine();
    });
    btnNazadNaPocetnuSaOdabira.addEventListener('click', () => prikaziEkran('pocetni-ekran'));
    btnPotvrdiTrgovinu.addEventListener('click', () => {
        const odabraniKod = selectTrgovina.value;
        if (odabraniKod) {
            postaviOdabranuTrgovinu(odabraniKod);
            prikaziEkran('glavni-ekran-akcija');
        } else {
            alert("Molimo odaberite trgovinu.");
        }
    });
    btnNastaviZadnjaTrgovina.addEventListener('click', () => {
        if (zadnjeOdabranaTrgovinaKod) {
            postaviOdabranuTrgovinu(zadnjeOdabranaTrgovinaKod);
            prikaziEkran('glavni-ekran-akcija');
        }
    });
    btnTraziProizvodePocetna.addEventListener('click', () => {
        if (zadnjeOdabranaTrgovinaKod) {
            postaviOdabranuTrgovinu(zadnjeOdabranaTrgovinaKod);
            prikaziEkran('ekran-pretrage-i-liste');
            inputPretragaProizvoda.focus();
        } else {
            prikaziEkran('ekran-odabir-trgovine');
            dohvatiTrgovine();
            // Ovdje bi se mogao postaviti "flag" da nakon odabira trgovine idemo na pretragu
            // localStorage.setItem('ducanSkenerNamjeraNakonOdabira', 'pretraga');
        }
    });
    btnPromijeniTrgovinu.addEventListener('click', () => {
        prikaziEkran('ekran-odabir-trgovine');
        dohvatiTrgovine();
    });
    btnSkenirajProizvod.addEventListener('click', () => {
        if (!trenutnoOdabranaTrgovina) {
            alert("Molimo prvo odaberite trgovinu.");
            btnIzaberiTrgovinu.click(); return; // Simuliraj klik za odabir
        }
        prikaziEkran('ekran-skeniranja');
        clearScannerMessages();
        scannerStatusTextElem.textContent = "Kliknite 'Pokreni Skener'";
        scanResultContainer.classList.add('hidden');
        infoSkeniranogProizvodaContainer.classList.add('hidden');
        startStopScanButton.textContent = "Pokreni Skener"; // Osiguraj da gumb prikazuje "Pokreni"
        startStopScanButton.classList.remove('stop-btn');
    });
    btnPretraziProizvodeGlavni.addEventListener('click', () => {
         if (!trenutnoOdabranaTrgovina) {
            alert("Molimo prvo odaberite trgovinu.");
            btnIzaberiTrgovinu.click(); return;
        }
        prikaziEkran('ekran-pretrage-i-liste');
        inputPretragaProizvoda.focus();
    });
    btnNazadSaSkeniranja.addEventListener('click', () => {
        stopActiveScanner(); // Obavezno zaustavi kameru
        prikaziEkran('glavni-ekran-akcija');
    });
    btnNazadSaPretrageNaAkcije.addEventListener('click', () => prikaziEkran('glavni-ekran-akcija'));
    
    // Listeneri za skener
    startStopScanButton.addEventListener('click', () => {
        if (isScannerRunning) stopActiveScanner();
        else initializeAndStartScanner();
    });
    if (switchCameraButton) { 
        switchCameraButton.addEventListener('click', toggleCameraSelection);
    }
    document.addEventListener('click', function(event) { 
        if (cameraSelectionOverlay && cameraSelectionOverlay.style.display === 'block') {
            if (!cameraSelectionOverlay.contains(event.target) && switchCameraButton && !switchCameraButton.contains(event.target)) {
                cameraSelectionOverlay.style.display = 'none';
            }
        }
    });
    
    btnDodajSkeniranoNaListu.addEventListener('click', () => {
        const ean = infoSkeniranogProizvodaContainer.dataset.ean;
        const naziv = infoSkeniranogProizvodaContainer.dataset.naziv;
        const cijena = infoSkeniranogProizvodaContainer.dataset.cijena;
        const cijenaPoJM = infoSkeniranogProizvodaContainer.dataset.cijenapojm; // Ispravljeno ime atributa
        const kolicina = parseInt(skeniranaKolicinaInput.value) || 1;

        if (ean && naziv && cijena !== undefined && naziv !== `EAN: ${ean}`) { // Provjeri da nije samo EAN prikazan
            dodajNaListu('skeniranje', ean, naziv, cijena, kolicina, cijenaPoJM);
            infoSkeniranogProizvodaContainer.classList.add('hidden'); 
            scanResultContainer.classList.add('hidden'); 
            scannerStatusTextElem.textContent = "Proizvod dodan na listu. Možete pokrenuti skener za sljedeći proizvod.";
            startStopScanButton.textContent = "Pokreni Skener";
            startStopScanButton.classList.remove('stop-btn');
        } else {
            alert("Nema valjanih podataka o proizvodu za dodavanje na listu.");
        }
    });

    // Delegiranje eventa za gumb "Ukloni" s lista
    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('ukloni-btn')) {
            const index = parseInt(event.target.dataset.index);
            const listType = event.target.dataset.listType;
            if (listType === 'skeniranje') {
                listaZaSkeniranje.splice(index, 1);
            } else if (listType === 'pretraga') {
                listaZaPretragu.splice(index, 1);
            }
            renderirajListu(listType);
        }
    });
    
    // Povijest placeholder
    btnPovijest.addEventListener('click', () => prikaziEkran('ekran-povijesti'));
    btnNazadSaPovijesti.addEventListener('click', () => prikaziEkran('pocetni-ekran'));

    // --- INICIJALIZACIJA APLIKACIJE ---
    azurirajGumbNastavi();
    prikaziEkran('pocetni-ekran');
    // Inicijalno dohvati kamere da znamo treba li prikazati gumb za promjenu
    if (Html5Qrcode.getCameras) {
        Html5Qrcode.getCameras()
            .then(devices => {
                if (devices && devices.length) {
                    availableCameras = devices;
                    // Gumb za promjenu kamere će se prikazati unutar initializeAndStartScanner ako je potrebno
                }
            })
            .catch(err => {
                console.warn("Nije moguće inicijalno dohvatiti kamere:", err);
            });
    }
});
