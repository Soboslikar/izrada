
document.addEventListener('DOMContentLoaded', () => {
    // --- KONSTANTE ---
    const API_BASE_URL = "https://api.cijene.dev";
    const API_KEY = "mee5xooThuithei4ees4bae3emos3ook"; 
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
    const btnNazadNaPocetnuSaOdabira = document.getElementById('btn-nazad-na-pocetnu-sa-odNarabira');

    // Elementi glavnog ekrana akcija
    const infoOdabranaTrgovina = document.getElementById('info-odabrana-trgovina');
    const btnSkenirajProizvod = document.getElementById('btn-skeniraj-proizvod');
    const btnPretraziProavno, evo kompletnog koda za `app.js` s ispravljenim načinom slanja API ključa (koristeći `Authorization: Bearer ${API_KEY}`).

OizvodeGlavni = document.getElementById('btn-pretrazi-proizvode-glavni');
    const btnPromijeniTrgovinu = document.getElementById('btn-promijeni-trgovvaj kod pretpostavlja da imaš HTML strukturu i CSS stilove iz mog prethodnog odgovora gdje sam tiinu');

    // Elementi ekrana skeniranja
    const infoTrgovinaSkeniranje = document.getElementById('info-trgovina-skeniranje');
    const skeniraniProizvodiLista dao sve tri datoteke (`index.html`, `style.css`, `app.js`).

**DatDiv = document.getElementById('skenirani-proizvodi-lista');
    const ukupnoCijenaSkeniranjeSpan = document.getElementById('ukupno-cijena-skeniranje');
    
    oteka: `app.js`**
```javascript
document.addEventListener('DOMContentLoaded', () => {
    // --- KONSTANTE ---
    const API_BASE_URL = "https://api.cijene.dev";
const readerDiv = document.getElementById('reader');
    const scanInstructionElem = document.getElementById('scan-instruction');
    const switchCameraButton = document.getElementById('switch-camera-btn');
    const cameraSelectionOverlay =    const API_KEY = "mee5xooThuithei4ees4bae3emos3ook"; // TVOJ API KLJUČ
    const CAMERA_ID_KEY_LS = 'ducanSkenerSelectedCameraID';
    const ZADNJA_TRGOVINA_KOD_LS = 'ducanSkenerZadnjaTrgov document.getElementById('camera-selection-overlay');
    const cameraListUl = document.getElementById('camera-list');
    const scannerStatusTextElem = document.getElementById('scannerStatusText');
    const scannerErrorTextElem = document.getElementById('scannerErrorText');
    const startStopScanButton = document.getElementById('startStopScaninaKod';

    // --- DOM ELEMENTI ---
    // Ekrani
    const pocetniEkButton');
    const scanResultContainer = document.getElementById('scanResultContainer');
    const scannedEanResultSpan = document.getElementById('scannedEanResultSpan');
    
    const infoSkeniranogProran = document.getElementById('pocetni-ekran');
    const ekranOdabirTrgovine = document.getElementById('ekran-odabir-trgovine');
    const glavniEkranAkcija = document.getElementById('glavni-ekran-akcija');
    const ekranSkeniranja = document.getElementById('ekran-skeniranja');
    const ekranPretrageIListe = document.getElementById('ekranizvodaContainer = document.getElementById('info-skeniranog-proizvoda-container');
    const skeniranNazivEl = document.getElementById('skeniran-naziv');
    const skeniranaCijenaEl = document.getElementById('skenirana-cijena');
    const skeniranaCijenaPoJMEl = document.getElementById('skenirana-cijena-po-jm');
    -pretrage-i-liste');
    const ekranPovijesti = document.getElementById('ekran-povijesti');

    // Gumbi na početnom ekranu
    const btnIzaberiTrgovinu = document.getElementById('btn-izaberi-trgovinu');
    const btnTraziProizvodePocetna = document.getElementById('btn-trazi-proizvode-pocetna');
    const skeniranaKolicinaInput = document.getElementById('skenirana-kolicina');
    const btnDodajSkeniranoNaListu = document.getElementById('btn-dodaj-skenirano-na-listu');
    const btnNazadSaSkeniranja = document.getElementById('btn-nazad-sa-skeniranja');

    // Elementi ekrana pretrage
    const nazivTrgovineZaPretragu = document.getElementById('naziv-trgovine-za-pretragu');
    constconst btnNastaviZadnjaTrgovina = document.getElementById('btn-nastavi-zadnja-trgovina');
    const btnPovijest = document.getElementById('btn-povijest');

    // Elementi ekrana odabira trgovine
    const selectTrgovina = document.getElementById('select-trgovina');
    const btnPotvrdiTrgovinu = document.getElementById('btn-potvrdi-trgovinu');
    const btnNazadNaPocetnuSaOdabira = document.getElementById(' inputPretragaProizvoda = document.getElementById('input-pretraga-proizvoda');
    // const rezultatiPretrageProizvodaDiv = document.getElementById('rezultati-pretrage-proizvoda-div'); // Za kasnije
    const listaProizvodaPretragaDiv = document.getElementById('lista-proizvoda-pretraga');
    const ukupnoCijenaPretragaSpan = document.getElementById('ukupno-cijena-pretraga');
    const btnNazadSabtn-nazad-na-pocetnu-sa-odabira');

    // Elementi glavnog ekrana akcija
    const infoOdabranaTrgovina = document.getElementById('info-odabrana-trgovina');
    const btnSkenirajProizvod = document.getElementById('btn-skeniraj-proizvod');
    const btnPretraziProizvodeGlavni = document.getElementById('btn-pretraziPretrageNaAkcije = document.getElementById('btn-nazad-sa-pretrage-na-akcije');

    // Elementi ekrana povijesti
    const btnNazadSaPovijesti = document.getElementById('btn-nazad-sa-povijesti');

    document.getElementById('trenutna-godina').textContent = new Date().getFullYear();

    // --- STANJE APLIKACIJE ---
    let-proizvode-glavni');
    const btnPromijeniTrgovinu = document.getElementById('btn-promijeni-trgovinu');

    // Elementi ekrana skeniranja
    const infoTrgovinaSkeniranje = document.getElementById('info-trgovina-skeniranje');
    const skeniraniProizvodiListaDiv = document.getElementById('skenirani-proizvodi-lista trenutnoOdabranaTrgovina = null; 
    let zadnjeOdabranaTrgovinaKod = localStorage.getItem(ZADNJA_TRGOVINA_KOD_LS);
    
    let listaZaSkeniranje = []; 
    let listaZaPretragu = [];

    let html5QrCodeInstance = null; ');
    const ukupnoCijenaSkeniranjeSpan = document.getElementById('ukupno-cijena-skeniranje');
    
    const readerDiv = document.getElementById('reader');
    const scanInstructionElem = document.getElementById('scan-instruction');
    const switchCameraButton = document.getElementById('switch-camera-btn');
    const cameraSelectionOverlay = document.getElementById('camera-selection-overlay');
    const cameraListUl
    let isScannerRunning = false;
    let availableCameras = [];

    // --- FUNKCIJE ZA NAVIGACIJU ---
    function prikaziEkran(ekranId) {
        [pocetniEkran, ekranOdabirTrgovine, glavniEkranAkcija, ekranSkeniranja, ekranPretr = document.getElementById('camera-list');
    const scannerStatusTextElem = document.getElementById('scannerStatusText');
    const scannerErrorTextElem = document.getElementById('scannerErrorText');
    const startStopScanButton = document.getElementById('startStopScanButton');
    const scanResultContainer = document.getElementById('scanResultContainer');
    const scannedEanResultSpan = document.getElementById('scannedEanResultSpan');
    
    ageIListe, ekranPovijesti].forEach(ekran => {
            if (ekran && ekran.id === ekranId) ekran.classList.remove('hidden');
            else if (ekran) ekran.classList.add('hidden');
        });
        if (cameraSelectionOverlay && cameraSelectionOverlay.style.display === 'block') {
            cameraSelectionOverlay.style.display = 'none';
        }
    }

const infoSkeniranogProizvodaContainer = document.getElementById('info-skeniranog-proizvoda-container');
    const skeniranNazivEl = document.getElementById('skeniran-naziv');
    const skeniranaCijenaEl = document.getElementById('skenirana-cijena');
    const skeniranaCijenaPoJMEl = document.getElementById('skenirana-cijena    // --- FUNKCIJE ZA API I PODATKE ---
    function mapirajKodLancaUNaziv(kod) {
        if (!kod) return "Nepoznato";
        const imena = {
            "konzum": "Konzum", "lidl": "Lidl", "spar": "Spar", "plodine": "Plodine",
            "kaufland": "Kaufland", "tommy": "Tommy", "studenac": "Studenac",
            "eurospin": "Euro-po-jm');
    const skeniranaKolicinaInput = document.getElementById('skenirana-kolicina');
    const btnDodajSkeniranoNaListu = document.getElementById('btn-dodaj-skenirano-na-listu');
    const btnNazadSaSkeniranja = document.getElementById('btn-nazad-sa-skeniranja');

    // Elementi ekrana pretrage
    const nazivTrgovineZaPretragu = document.getElementById('naziv-trgovine-za-pretraguspin", "dm": "dm", "ktc": "KTC", "metro": "Metro",
            "trgocentar": "Trgocentar", "zabac": "Žabac", "vrutak": "Vrutak",
            "ribola": "Ribola", "ntl": "NTL"
        };
        return imena[kod.toLowerCase()] || (kod.charAt(0).toUpperCase() + kod.slice(1));
    }

    async function dohvatiTrgovine() {
        selectTrgovina.');
    const inputPretragaProizvoda = document.getElementById('input-pretraga-proizvoda');
    // const rezultatiPretrageProizvodaDiv = document.getElementById('rezultati-pretrage-proizvoda-div'); // Za kasnije
    const listaProizvodaPretragaDiv = document.getElementById('lista-proizvoda-pretraga');
    const ukupnoCijenaPretragaSpan = document.getElementById('ukupno-cijena-pretraga');
innerHTML = '<option value="">Učitavanje trgovina...</option>';
        selectTrgovina.disabled = true;
        btnPotvrdiTrgovinu.disabled = true;

        try {
            const response = await fetch(`${API_BASE_URL}/v1/chains/`, {
                method: 'GET',
                headers: { 
                    'Authorization': `Bearer ${API_KEY}`, // ISPRAVLJENO
                    'Accept': 'application/json' 
                }
            });
            if (!response.ok) {    // const btnUsporediCijeneSaPretrage = document.getElementById('btn-usporedi-cijene-sa-pretrage'); // Za kasnije
    const btnNazadSaPretrageNaAkcije = document.getElementById('btn-nazad-sa-pretrage-na-akcije');

    // Elementi ekrana povijesti
    const btnNazadSaPovijesti = document.getElementById('btn-nazad-sa-povijesti');

    // Ostalo
    document.getElementById('trenutna
                 const errorText = await response.text();
                 throw new Error(`Greška ${response.status}: ${errorText}`);
            }
            
            const data = await response.json();
            if (data.chains && data.chains.length > 0) {
                selectTrgovina.innerHTML = '<option value="">-- Izaberi trgovinu --</option>';
                const sortiraniLanci = data.chains.sort((a,b) => mapirajKodLancaUNaziv(a).localeCompare(mapirajKodLancaUNaz-godina').textContent = new Date().getFullYear();

    // --- STANJE APLIKACIJE ---
    let trenutnoOdabranaTrgovina = null; 
    let zadnjeOdabranaTrgovinaKod = localStorage.getItem(ZADNJA_TRGOVINA_KOD_LS);
    
    let listaZaSkeniranje = []; 
    let listaZaPretragu = [];

    // Stanje skenera
    let html5QrCodeInstance = null; 
    let isScannerRunning = false;
iv(b)));
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
                let availableCameras = [];

    // --- FUNKCIJE ZA NAVIGACIJU ---
    function prikaziEkran(ekranId) {
        [pocetniEkran, ekranOdabirTrgovine, glavniEkranAkcija, ekranSkeniranja, ekranPretrageIListe, ekranPovijesti].forEach(ekran => {
            if (ekran && ekran.id === ekranId) ekran.classList.remove}
        } catch (error) {
            console.error('Problem s dohvaćanjem trgovina:', error);
            selectTrgovina.innerHTML = `<option value="">Greška pri učitavanju.</option>`;
            alert(`Nije moguće učitati listu trgovina: ${error.message}`);
        }
    ('hidden');
            else if (ekran) ekran.classList.add('hidden');
        });
        if (cameraSelectionOverlay && cameraSelectionOverlay.style.display === 'block') {
            cameraSelectionOverlay.style.display = 'none';
        }
    }

    // --- FUNKCIJE ZA API I PODATKE ---
    function mapirajKodLancaUNaziv(kod) {
        if (!kod) return}

    async function dohvatiProizvodPoEAN(ean, chainCode) {
        scannerStatusTextElem.textContent = `Tražim proizvod ${ean}...`;
        infoSkeniranogProizvodaContainer.classList.add('hidden');
        infoSkeniranogProizvodaContainer.removeAttribute('data-ean');

        try {
            const response = await fetch(`${API_BASE_URL}/v1/ "Nepoznato";
        const imena = {
            "konzum": "Konzum", "lidl": "Lidl", "spar": "Spar", "plodine": "Plodine",
            "kaufland": "Kaufland", "tommy": "Tommy", "studenac": "Studenac",
            "eurospin": "Eurospin", "dm": "dm", "ktc":products/${ean}/?chains=${chainCode}`, {
                method: 'GET',
                headers: { 
                    'Authorization': `Bearer ${API_KEY}`, // ISPRAVLJENO
                    'Accept': 'application/json' 
                }
            });
            if (!response.ok) {
                 if (response.status === 404) {
                    throw new Error(`Proizvod s EAN ${ean "KTC", "metro": "Metro",
            "trgocentar": "Trgocentar", "zabac": "Žabac", "vrutak": "Vrutak",
            "ribola": "Ribola", "ntl": "NTL"
        };
        return imena[kod.toLowerCase()] || (kod.charAt(0).toUpperCase() + kod.slice(1));
    }

    async function dohvati} nije pronađen u trgovini ${mapirajKodLancaUNaziv(chainCode)}.`);
                }
                throw new Error(`Greška ${response.status} pri dohvaćanju proizvoda: ${await response.text()}`);
            }
            
            const data = await response.json();
            console.log("Podaci o proizvodu:", data);

            if (data.chains && data.chains.length > 0) {
Trgovine() {
        selectTrgovina.innerHTML = '<option value="">Učitavanje trgovina...</option>';
        selectTrgovina.disabled = true;
        btnPotvrdiTrgovinu.disabled = true;

        try {
            const response = await fetch(`${API_BASE_URL}/v1/chains/`, {
                method: 'GET',
                headers: { 
                    'Authorization': `Bearer ${                const proizvodInfo = data.chains[0];
                const naziv = proizvodInfo.name || data.name || "Nepoznat naziv";
                const cijena = parseFloat(proizvodInfo.min_price);
                const kolicinaApi = proizvodInfo.quantity || data.quantity;
                const jedinicaApi = proizvodInfo.unit || data.unit;
                
                skeniranNazivEl.textContent = naziv;
                skeniranaCAPI_KEY}`, // ISPRAVLJENO
                    'Accept': 'application/json' 
                }
            });
            if (!response.ok) {
                 const errorText = await response.text();
                 throw new Error(`Greška ${response.status}: ${errorText}`);
            }
            
            const data = await response.json();
            if (data.chains && data.chains.length > 0) {
ijenaEl.textContent = isNaN(cijena) ? "N/A" : cijena.toFixed(2);
                
                const cijenaPoJM = izracunajCijenuPoJM(cijena, kolicinaApi, jedinicaApi);
                skeniranaCijenaPoJMEl.textContent = cijenaPoJM;

                infoSkeniranogProizvodaContainer.dataset.ean = ean;
                infoSkeniranogProizvodaContainer.dataset.naziv = naziv;
                infoSkeniranogPro                selectTrgovina.innerHTML = '<option value="">-- Izaberi trgovinu --</option>';
                const sortiraniLanci = data.chains.sort((a,b) => mapirajKodLancaUNaziv(a).localeCompare(mapirajKodLancaUNaziv(b)));
                sortiraniLanci.forEach(chainCode => {
                    const option = document.createElement('option');
                    option.value = chainCode;
                    izvodaContainer.dataset.cijena = isNaN(cijena) ? "0" : cijena.toFixed(2);
                infoSkeniranogProizvodaContainer.dataset.cijenapojm = cijenaPoJM;

                infoSkeniranogProizvodaContainer.classList.remove('hidden');
                skeniranaKolicinaInput.value = "1"; 
                scannerStatusTextElem.textContent = "Proizoption.textContent = mapirajKodLancaUNaziv(chainCode);
                    selectTrgovina.appendChild(option);
                });
                selectTrgovina.disabled = false;
                btnPotvrdiTrgovinu.disabled = false;
            } else {
                selectTrgovina.innerHTML = '<option value="">Nema dostupnih trgovina.</option>';
            }
        } catch (error) {
            consolevod pronađen.";
            } else {
                throw new Error(`Proizvod s EAN ${ean} nema podataka za trgovinu ${mapirajKodLancaUNaziv(chainCode)}.`);
            }
        } catch (error) {
            console.error('Problem s dohvaćanjem proizvoda:', error);
            scannerErrorTextElem.textContent = error.message;
            scannerStatusTextElem.textContent = "Problem pri dohvaćanju.error('Problem s dohvaćanjem trgovina:', error);
            selectTrgovina.innerHTML = `<option value="">Greška pri učitavanju.</option>`;
            // Prikazati poruku korisniku, ali ne blokirati aplikaciju s alertom ako je to početno učitavanje
            if (ekranOdabirTrgovine.classList.contains('hidden') === false) { // Ako je korisnik aktivno na ekranu proizvoda.";
            skeniranNazivEl.textContent = `EAN: ${ean}`;
            skeniranaCijenaEl.textContent = "N/A";
            skeniranaCijenaPoJMEl.textContent = "N/A";
            infoSkeniranogProizvodaContainer.classList.remove(' odabira
                 alert(`Nije moguće učitati listu trgovina: ${error.message}`);
            } else { // Ako je u pozadini, samo logiraj
                console.warn(`Pozadinsko dohvaćanje trgovhidden'); 
        }
    }
    
    function izracunajCijenuPoJM(cijenaPakiranja, kolicinaPakiranja, jedinicaPakiranja) {
        if (isNaN(cijenaPakiranja) || !kolicinaPakiranja || !jedinicaPakiranja) return "N/A";
        const kolicina neuspješno: ${error.message}`);
            }
        }
    }

    async function dohvatiProizvodPoEAN(ean, chainCode) {
        scannerStatusTextElem.textContent = `Tražim proizvod ${ean}...`;
        infoSkeniranogProizvodaContainer.classList.add('hidden');
        infoSkeniranogProizvodaContainer.removeAttribute('data-ean');

ina = parseFloat(String(kolicinaPakiranja).replace(',', '.'));
        if (isNaN(kolicina) || kolicina === 0) return "N/A";
        let cijenaPoOsnovnojJedinici = 0;
        let osnovnaJedinica = "";
        const jm = String(jedinicaPakiranja).toLowerCase();

        if (jm === "kg" || jm === "l" ||        try {
            const response = await fetch(`${API_BASE_URL}/v1/products/${ean}/?chains=${chainCode}`, {
                method: 'GET',
                headers: { 
                    'Authorization': `Bearer ${API_KEY}`, // ISPRAVLJENO
                    'Accept': 'application/json' 
                }
            });
            if (!response.ok) {
                 if (response.status === 4 jm === "m") {
            cijenaPoOsnovnojJedinici = cijenaPakiranja / kolicina;
            osnovnaJedinica = jm;
        } else if (jm === "g" || jm === "gr") {
            cijenaPoOsnovnojJedinici = (cijenaPakiranja / kolicina) * 1000;
            osnovnaJedinica04) {
                    throw new Error(`Proizvod s EAN ${ean} nije pronađen u trgovini ${mapirajKodLancaUNaziv(chainCode)}.`);
                }
                throw new Error(`Greška ${response.status} pri dohvaćanju proizvoda: ${await response.text()}`);
            }
            
            const data = await response.json();
            console.log("Podaci o proizvodu:", data); = "kg";
        } else if (jm === "ml") {
            cijenaPoOsnovnojJedinici = (cijenaPakiranja / kolicina) * 1000;
            osnovnaJedinica = "l";
        } else if (jm === "kom" || jm === "kos" || jm === "szt" || jm === "db") {
            return `${cijena

            if (data.chains && data.chains.length > 0) {
                const proizvodInfo = data.chains[0];
                const naziv = proizvodInfo.name || data.name || "Nepoznat naziv";
                const cijena = parseFloat(proizvodInfo.min_price);
                const kolicinaApi = proizvodInfo.quantity || data.quantity;
                const jedinicaApi = proizvodInfo.unit || data.unit;
                
                skeniranNazivEl.textContent = naziv;
                skeniranaCijenaEl.textContent = isNaN(cijena) ? "N/A" : cijena.toFixed(2Pakiranja.toFixed(2)} EUR/kom`;
        } else {
            return "N/A (nepoznata JM)";
        }
        if (isNaN(cijenaPoOsnovnojJedinici)) return "N/A";
        return `${cijenaPoOsnovnojJedinici.toFixed(2)} EUR/${osnovnaJedinica}`;
    }

    function azurirajGumbNastavi() {
        if (zadnjeOdabranaTrgovinaKod) {
            btnNastaviZadnjaTrgovina.textContent = `Nastavi s ${mapirajKodLancaUNaziv(zadnjeOdabranaTrgovinaKod)}`;
            btnNastaviZadnjaTrgovina.classList.remove('hidden');
        } else {
);
                
                const cijenaPoJM = izracunajCijenuPoJM(cijena, kolicinaApi, jedinicaApi);
                skeniranaCijenaPoJMEl.textContent = cijenaPoJM;

                infoSkeniranogProizvodaContainer.dataset.ean = ean;
                infoSkeniranogProizvodaContainer.dataset.naziv = naziv;
                infoSkeniranogProizvodaContainer.dataset.cijena = isNaN(cijena) ? "0" : cijena.toFixed(2);
                infoSkeniranogProizvodaContainer.dataset.cijenapoj            btnNastaviZadnjaTrgovina.classList.add('hidden');
        }
    }

    function postaviOdabranuTrgovinu(kodTrgovine) {
        trenutnoOdabranaTrgovina = { code: kodTrgovine, name: mapirajKodLancaUNaziv(kodTrgovine) };
        localStorage.setItem(ZADNJA_TRGOVINA_KOD_LS, kodTrgovine);
        zadnjeOdabranaTrgovinaKod = kodTrgovine;
        azurirajGumbNastavi();
        const prikazNazivTrgovine = mapirajKodLancaUNaziv(kodTrgovine);
        infoOdabranaTrgovina.textContent = `Trgovina:m = cijenaPoJM;

                infoSkeniranogProizvodaContainer.classList.remove('hidden');
                skeniranaKolicinaInput.value = "1"; 
                scannerStatusTextElem.textContent = "Proizvod pronađen.";
            } else {
                throw new Error(`Proizvod s EAN ${ean} nema dostupne podatke za trgovinu ${mapirajKodLancaUNaziv(chainCode)}.`);
            }
        } catch (error) {
            console.error('Problem s dohvaćanjem proizvoda:', error);
            scannerErrorTextElem.textContent = error.message;
            scannerStatusTextElem.textContent = "Problem pri ${prikazNazivTrgovine}`;
        infoTrgovinaSkeniranje.textContent = `Skeniranje za ${prikazNazivTrgovine}`;
        nazivTrgovineZaPretragu.textContent = `u ${prikazNazivTrgovine}`;
        listaZaSkeniranje = [];
        listaZaPretragu = [];
        renderirajListu('skeniranje');
        renderirajListu('pretraga');
    }
    
    function renderirajListu(tipListe) { 
        const listaDiv = tipListe === 'skeniranje' ? skeniraniProizvodiListaDiv dohvaćanju proizvoda.";
            skeniranNazivEl.textContent = `EAN: ${ean}`;
            skeniranaCijenaEl.textContent = "N/A";
            skeniranaCijenaPoJMEl.textContent = "N/A";
            infoSkeniranogProizvodaContainer.classList.remove('hidden');
        }
    }
    
    function izracunajCijenuPoJM(cijenaPakiranja, kolicinaPakiranja, jedinicaPakiranja) {
        if (ci : listaProizvodaPretragaDiv;
        const ukupnoSpan = tipListe === 'skeniranje' ? ukupnoCijenaSkeniranjeSpan : ukupnoCijenaPretragaSpan;
        const podaciListe = tipListe === 'skeniranje' ? listaZaSkeniranje : listaZaPretragu;
        listaDiv.innerHTML = '';
        let ukupnaCijena = 0;
        if (podaciListe.length === 0) {
            listaDiv.innerHTML = '<p style="font-style:italic; text-align:center;">Lista je prazna.</p>';
        } else {
            podacijenaPakiranja === null || cijenaPakiranja === undefined || isNaN(cijenaPakiranja) || !kolicinaPakiranja || !jedinicaPakiranja) return "N/A";

        const kolicina = parseFloat(String(kolicinaPakiranja).replace(',', '.'));
        if (isNaN(kolicina) || kolicina === 0) return "N/A";

        let cijenaPoOsnovnojJedinici = 0;
        let osnovnaJedinica = "";
        const jm = String(jedinicaPakiranja).toLowerCase();

        if (jm === "kg" || jm === "l"Liste.forEach((proizvod, index) => {
                const el = document.createElement('div');
                el.classList.add('proizvod-na-listi');
                const cijenaStavke = proizvod.cijena * proizvod.kolicina;
                ukupnaCijena += cijenaStavke;
                el.innerHTML = `
                    <span class="naziv">${proizvod.naziv} (${proizvod.kolicina} x ${proizvod.cijena.toFixed(2)} EUR)</span>
                    <span class="cijena">${cijenaStavke.toFixed(2)} EUR</span>
                    <button || jm === "m") {
            cijenaPoOsnovnojJedinici = cijenaPakiranja / kolicina;
            osnovnaJedinica = jm;
        } else if (jm === "g" || jm === "gr") {
            cijenaPoOsnovnojJedinici = (cijenaPakiranja / kolicina) * 1000;
            osnovnaJedinica = "kg";
        } else if (jm === "ml") {
            cijenaPoOsnovnojJedinici = (cijenaPakiranja / kolicina) * 1000;
            os class="ukloni-btn" data-index="${index}" data-list-type="${tipListe}" title="Ukloni proizvod"></button>
                `;
                listaDiv.appendChild(el);
            });
        }
        ukupnoSpan.textContent = ukupnaCijena.toFixed(2);
    }
    
    function dodajNaListu(tipListe, ean, naziv, cijena, kolicina, cijenaPoJM) {
        const podaciListe = tipListe === 'skeniranje' ? listaZaSkeniranje : listaZaPretragu;
        const postojeciProizvodnovnaJedinica = "l";
        } else if (jm === "kom" || jm === "kos" || jm === "szt" || jm === "db") {
            return `${cijenaPakiranja.toFixed(2)} EUR/kom`;
        } else {
            return "N/A (nepoznata JM)";
        }

        if (isNaN(cijenaPoOsnovnojJedinici)) return "N/A";
        return `${cijenaPoOsnovnojJedinici.toFixed(2)} EUR/${osnovnaJedinica}`;
    }

    // --- FUNKCIJE ZA UI (Index = podaciListe.findIndex(p => p.ean === ean);
        if (postojeciProizvodIndex > -1) {
            podaciListe[postojeciProizvodIndex].kolicina += kolicina;
        } else {
            podaciListe.push({ ean, naziv, cijena: parseFloat(cijena), kolicina, cijenaPoJM });
        }
        renderirajListu(tipListe);
    }

    // --- LOGIKA SKENERA ---
    function clearScannerMessages() {
        scannerStatusTextElem.textContent = '';
        scannerErrorTextElem.textContent = '';osim skenera) ---
    function azurirajGumbNastavi() {
        if (zadnjeOdabranaTrgovinaKod) {
            btnNastaviZadnjaTrgovina.textContent = `Nastavi s ${mapirajKodLancaUNaziv(zadnjeOdabranaTrgovinaKod)}`;
            btnNastaviZadnjaTrgovina.classList.remove('hidden');
        } else {
            btnNastaviZadnjaTrgovina.classList.add('hidden');
        }
    }

    function postaviOdabranuTrgovinu(kodTrgovine) {
        trenutnoOdabranaTrgovina = { code
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
            scannerErrorTextElem.textContent = "Trgovina nije odabrana: kodTrgovine, name: mapirajKodLancaUNaziv(kodTrgovine) };
        localStorage.setItem(ZADNJA_TRGOVINA_KOD_LS, kodTrgovine);
        zadnjeOdabranaTrgovinaKod = kodTrgovine;
        azurirajGumbNastavi();

        const prikazNazivTrgovine = mapirajKodLancaUNaziv(kodTrgovine);
        infoOdabranaTrgovina.textContent = `Trgovina: ${prikazNazivTrgovine}`;
        infoTrgovinaSkeniranje.textContent = `Skeniranje za ${prikaz. Ne mogu dohvatiti proizvod.";
        }
    }

    function onScanFailure(error) { /* Ignoriraj */ }

    async function initializeAndStartScanner(requestedCameraId = null) {
        if (isScannerRunning) return; 
        clearScannerMessages();
        scannerStatusTextElem.textContent = "InicijalizacijaNazivTrgovine}`;
        nazivTrgovineZaPretragu.textContent = `u ${prikazNazivTrgovine}`;
        
        listaZaSkeniranje = [];
        listaZaPretragu = [];
        renderirajListu('skeniranje');
        renderirajListu('pretraga');
    }
    
    function renderirajListu(tipListe) { 
        const listaDiv = tipListe === 'skeniranje' ? skeniraniProizvodiListaDiv : listaProiz skenera...";
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
                scannerErrorTextElem.textContent = "Greška skenera.vodaPretragaDiv;
        const ukupnoSpan = tipListe === 'skeniranje' ? ukupnoCijenaSkeniranjeSpan : ukupnoCijenaPretragaSpan;
        const podaciListe = tipListe === 'skeniranje' ? listaZaSkeniranje : listaZaPretragu;

        listaDiv.innerHTML = '';
        let ukupnaCijena = 0;

        if (podaciListe.length === 0) {
            listaDiv.innerHTML = '<p style="font-style:italic; text-align:center;">Lista je prazna.</p>';
        } else {
            podaciListe.forEach((proizvod, index) => {
                const el = document.createElement('div');
 Osvježite stranicu.";
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
                return { width: qrboxWidth, height: qrboxHeight };                el.classList.add('proizvod-na-listi');
                const cijenaStavke = proizvod.cijena * proizvod.kolicina;
                ukupnaCijena += cijenaStavke;

                el.innerHTML = `
                    <span class="naziv">${proizvod.naziv} (${proizvod.kolicina} x ${proizvod.cijena.toFixed(2)} EUR)</span>
                    <span class="cijena">${cijenaStavke.toFixed(2)} EUR</span>
                    <button class="ukloni-btn" data-index="${index}" data-list-type="${tipListe}" title="Ukloni proizvod"></button>
                `;
                listaDiv.appendChild(
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
                const savedCameraId = localStorage.getItem(CAMERAel);
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
        render_ID_KEY_LS);
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
            scannerStatusTextElem.textContent = "PokretirajListu(tipListe);
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
            await dohvatiProizvodPoEAN(anje kamere...";
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
            console.error("Greška pri pokretanju kamere: ", errdecodedText, trenutnoOdabranaTrgovina.code);
        } else {
            scannerErrorTextElem.textContent = "Trgovina nije odabrana. Ne mogu dohvatiti proizvod.";
        }
    }

    function onScanFailure(error) { /* Ignoriraj */ }

    async function initializeAndStartScanner(requestedCameraId = null) {
        if (isScannerRunning) return; 

        clearScannerMessages();
        scannerStatusTextElem.textContent = "Inicijalizacija skenera...";
        if(readerDiv) readerDiv.innerHTML = ""; 
        if(scanInstructionElem) scanInstructionElem.style.display = 'none';);
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
        scannerStatusTextElem.textContent = "Zaustavljanje
        if (switchCameraButton) switchCameraButton.style.display = 'none';
        if (cameraSelectionOverlay) cameraSelectionOverlay.style.display = 'none';
        if(scanResultContainer) scanResultContainer.classList.add('hidden'); 
        if(infoSkeniranogProizvodaContainer) infoSkeniranogProizvodaContainer.classList.add('hidden'); 

        if (!html5QrCodeInstance) {
            try {
                if (!readerDiv) {
                    console.error("Reader div nije pronađen!");
                    scannerErrorTextElem.textContent = "Greška: Reader element nije pronađen.";
                    return;
                }
 skenera...";
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
            scannerStatus                html5QrCodeInstance = new Html5Qrcode("reader");
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
                let qrboxWidth = MathTextElem.textContent = "Skener zaustavljen.";
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
.floor(viewfinderWidth * widthPercentage);
                let qrboxHeight = Math.floor(qrboxWidth * heightToWidthRatio);
                qrboxWidth = Math.max(200, Math.min(viewfinderWidth - 40, qrboxWidth)); 
                qrboxHeight = Math.max(70, Math.min(viewfinderHeight - 40, qrboxHeight)); 
                return { width: qrboxWidth, height: qrboxHeight };
            },
            formatsToSupport: [ 
                Html5QrcodeSupportedFormats.EAN_13, Html5QrcodeSupportedFormats.EAN_8,
                Html5Q                else scannerStatusTextElem.textContent = "Skener nije aktivan.";
            }, 2000);
            return;
        }
        cameraListUl.innerHTML = ''; 
        const currentActiveCameraId = localStorage.getItem(CAMERA_ID_KEY_LS);
        availableCameras.forEach(device => {
            const listItem = document.createElement('li');
            listItem.textContent = device.label || `Kamera ${device.id.substring(0, 10)}...`;
            listItem.dataset.cameraId = device.id;
            listItem.title =rcodeSupportedFormats.UPC_A, Html5QrcodeSupportedFormats.UPC_E
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
                const savedCameraId = localStorage device.label || device.id; 
            if (device.id === currentActiveCameraId) listItem.classList.add('selected-camera');
            listItem.addEventListener('click', async () => {
                cameraSelectionOverlay.style.display = 'none';
                if (device.id !== localStorage.getItem(CAMERA_ID_KEY_LS) || !isScannerRunning) {
                    scannerStatusTextElem.textContent = `Mijenjam na ${listItem.textContent}...`;
                    await stopActiveScanner(); 
                    initializeAndStartScanner(device.id); 
                .getItem(CAMERA_ID_KEY_LS);
                if (savedCameraId && availableCameras.some(d => d.id === savedCameraId)) {
                    cameraIdToUse = savedCameraId;
                } else { 
                    const rearCamera = availableCameras.find(d => d.label.toLowerCase().includes('back') || d.label.toLowerCase().includes('zadnja') || d.label.toLowerCase().includes('environment'));
                    cameraIdToUse = rearCamera ? rearCamera.id : (availableCameras.length > 0 ? availableCameras[}
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
        const0].id : null);
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
            startStopScanButton.textContent = "Zaustavi Skener odabraniKod = selectTrgovina.value;
        if (odabraniKod) {
            postaviOdabranuTrgovinu(odabraniKod);
            prikaziEkran('glavni-ekran-akcija');
        } else {
            alert("Molimo odaberite trgovinu.");
        }
    });
    btnNastaviZadnjaTrgovina.addEventListener('click', () => {
        if (zadnjeOdabranaTrgovinaKod) {
            postaviOdabranuTrgovinu(";
            startStopScanButton.classList.add('stop-btn');
            scannerStatusTextElem.textContent = "Kamera aktivna.";
            if(scanInstructionElem) scanInstructionElem.style.display = 'block';
            if (availableCameras.length > 1 && switchCameraButton) {
                switchCameraButton.style.display = 'block';
            }

        } catch (err) {
            console.error("Greška pri pokretanju kamere: ", err);
            isScannerRunning = false;
            startStopScanButton.textContent = "PokzadnjeOdabranaTrgovinaKod);
            prikaziEkran('glavni-ekran-akcija');
        }
    });
    btnTraziProizvodePocetna.addEventListener('click', () => {
        if (zadnjeOdabranaTrgovinaKod) {
            postaviOdabranuTrgovinu(zadnjeOdabranaTrgovinaKod);
            prikaziEkran('ekran-pretrage-i-liste');
            inputPretragaProizvoda.focus();
        } else {reni Skener";
            startStopScanButton.classList.remove('stop-btn');
            scannerErrorTextElem.textContent = `Problem s kamerom: ${err.name || err.message || err}`;
            if(scanInstructionElem) scanInstructionElem.style.display = 'none';
            if (switchCameraButton) switchCameraButton.style.display = 'none';
        }
    }

    async function stopActiveScanner() {
        
            prikaziEkran('ekran-odabir-trgovine');
            dohvatiTrgovine();
        }
    });
    btnPromijeniTrgovinu.addEventListener('click', () => {
        prikaziEkran('ekran-odabir-trgovine');
        dohvatiTrgovine();
    });
    btnSkenirajProizvod.addEventListener('click',if (!isScannerRunning || !html5QrCodeInstance) {
            // Osiguraj da je UI resetiran čak i ako skener nije bio eksplicitno pokrenut
            isScannerRunning = false; // Postavi flag
            startStopScanButton.textContent = "Pokreni Skener";
            startStopScanButton.classList.remove('stop-btn');
            scannerStatusTextElem.textContent = "Skener nije aktivan.";
            if(reader () => {
        if (!trenutnoOdabranaTrgovina) {
            alert("Molimo prvo odaberite trgovinu.");
            btnIzaberiTrgovinu.click(); return;
        }
        prikaziEkran('ekran-skeniranja');
        clearScannerMessages();
        scannerStatusTextElem.textContent = "Kliknite 'Pokreni Skener'";
        scanResultContainer.classList.add('hidden');Div) readerDiv.innerHTML = "";
            if(scanInstructionElem) scanInstructionElem.style.display = 'none';
            if(switchCameraButton) switchCameraButton.style.display = 'none';
            if(cameraSelectionOverlay) cameraSelectionOverlay.style.display = 'none';
            return;
        }


        clearScannerMessages();
        scannerStatusTextElem.textContent = "Zaustavljanje skenera...";
        if(scanInstruction
        infoSkeniranogProizvodaContainer.classList.add('hidden');
        startStopScanButton.textContent = "Pokreni Skener";
        startStopScanButton.classList.remove('stop-btn');
    });
    btnPretraziProizvodeGlavni.addEventListener('click', () => {
         if (!trenutnoOdabranaTrgovina) {
            alert("Molimo prvo odElem) scanInstructionElem.style.display = 'none';
        if (switchCameraButton) switchCameraButton.style.display = 'none';
        if (cameraSelectionOverlay) cameraSelectionOverlay.style.display = 'none';

        try {
            await html5QrCodeInstance.stop();
        } catch (err) {
            console.error("Greška pri zaustavljanju skenera: ", err);
        }aberite trgovinu.");
            btnIzaberiTrgovinu.click(); return;
        }
        prikaziEkran('ekran-pretrage-i-liste');
        inputPretragaProizvoda.focus();
    });
    btnNazadSaSkeniranja.addEventListener('click', () => { finally {
            isScannerRunning = false;
            startStopScanButton.textContent = "Pokreni Skener";
            startStopScanButton.classList.remove('stop-btn');
            scannerStatusTextElem.textContent = "Skener zaustavljen.";
            if(readerDiv) readerDiv.innerHTML = ""; 
        }
    }

    function toggleCameraSelection() {
        if (!switchCameraButton || !cameraSelectionOverlay || !camera
        stopActiveScanner(); 
        prikaziEkran('glavni-ekran-akcija');
    });
    btnNazadSaPretrageNaAkcije.addEventListener('click', () => prikaziEkran('glavni-ekran-akcija'));
    
    startStopScanButton.addEventListener('click', () => {
        if (isScannerRunning) stopActiveScanner();
        else initializeAndStartScanner();
    });
    if (switchCameraButton) { 
        switchCameraButton.addEventListener('click', toggleCameraSelection);
    }
    document.addEventListener('click', function(event) { 
        if (cameraSelectionOverlay && cameraSelectionOverlay.style.display === 'block') {
            if (!cameraSelectionOverlay.contains(event.ListUl) return;

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

        cameraListUl.target) && switchCameraButton && !switchCameraButton.contains(event.target)) {
                cameraSelectionOverlay.style.display = 'none';
            }
        }
    });
    
    btnDodajSkeniranoNaListu.addEventListener('click', () => {
        const ean = infoSkeniranogProizvodaContainer.dataset.ean;
        const naziv = infoSkeniranogProizvodaContainer.dataset.naziv;
        const cijena = infoSkeniranogProizvodaContainer.dataset.cijena;
        const cijenaPoJM = infoSkeniranogProizvodaContainer.dataset.cijeninnerHTML = ''; 
        const currentActiveCameraId = localStorage.getItem(CAMERA_ID_KEY_LS);

        availableCameras.forEach(device => {
            const listItem = document.createElement('li');
            listItem.textContent = device.label || `Kamera ${device.id.substring(0, 10)}...`;
            listItem.dataset.cameraId = device.id;
            listItem.title = device.label || device.id; 
            if (device.id === currentActiveCameraId) listItem.classList.add('selected-camera');
            
            listItem.addEventListener('click', async () => {
                cameraSelectionOverlay.style.display =apojm;
        const kolicina = parseInt(skeniranaKolicinaInput.value) || 1;

        if (ean && naziv && cijena !== undefined && naziv !== `EAN: ${ean}`) {
            dodajNaListu('skeniranje', ean, naziv, cijena, kolicina, cijenaPoJM);
            infoSkeniranogProizvodaContainer.classList.add('hidden'); 
            scanResultContainer.classList.add('hidden'); 
            scannerStatusTextElem.textContent = "Proizvod dodan 'none';
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
    btnIzaberiTrgov na listu. Možete pokrenuti skener za sljedeći proizvod.";
            startStopScanButton.textContent = "Pokreni Skener";
            startStopScanButton.classList.remove('stop-btn');
        } else {
            alert("Nema valjanih podataka o proizvodu za dodavanje na listu.");
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target && event.target.inu.addEventListener('click', () => {
        prikaziEkran('ekran-odabir-trgovine');
        dohvatiTrgovine();
    });
    btnNazadNaPocetnuSaOdabira.addEventListener('click', () => prikaziEkran('pocetni-ekran'));
    btnPotvrdiTrgovinu.addEventListener('click', () => {
        const odabraniKod = selectTrgovina.value;
        if (odabraniKod) {
            postaviOdabclassList.contains('ukloni-btn')) {
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
    ranuTrgovinu(odabraniKod);
            prikaziEkran('glavni-ekran-akcija');
        } else {
            alert("Molimo odaberite trgovinu.");
        }
    });
    btnNastaviZadnjaTrgovina.addEventListener('click', () => {
        if (zadnjeOdabranaTrgovinaKod) {
            postaviOdabranuTrgovinu(zadnjeOdabranaTrgovinaKod);
            prikaziEkran('glavni-ekran-akcija');

    btnPovijest.addEventListener('click', () => prikaziEkran('ekran-povijesti'));
    btnNazadSaPovijesti.addEventListener('click', () => prikaziEkran('pocetni-ekran'));

    // --- INICIJALIZACIJA ---
    azurirajGumbNastavi();
    prikaziEkran('pocetni-ekran');
    if (Html5Qrcode.getCameras) {
        Html5Qrcode.getCameras()
            .then(devices => {        }
    });
    btnTraziProizvodePocetna.addEventListener('click', () => {
        if (zadnjeOdabranaTrgovinaKod) {
            postaviOdabranuTrgovinu(zadnjeOdabranaTrgovinaKod);
            prikaziEkran('ekran-pretrage-i-liste');
            if(inputPretragaProizvoda) inputPretragaProiz
                if (devices && devices.length) availableCameras = devices;
            })
            .catch(err => console.warn("Nije moguće inicijalno dohvatiti kamere:", err));
    }
});
