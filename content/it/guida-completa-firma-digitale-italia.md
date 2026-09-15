---
title: La guida completa alla firma digitale in Italia
description: "FES, FEA e FEQ spiegate in parole semplici: quale firma elettronica serve, quando, e come firmare con la CIE."
---

Avete mai ricevuto un documento via mail, stampato, firmato a penna, scansionato e inviato di nuovo via email? Succede 
ancora spesso, anche quando esistono soluzioni completamente digitali che, nei casi previsti dalla legge, hanno lo 
stesso valore legale. Il problema non è la tecnologia, è che nessuno spiega con chiarezza cosa si intende davvero per 
"firma digitale" e quando basta una firma semplice rispetto a quando ne serve una "qualificata".

Questa guida è pensata per chi non è tecnico e contiene esempi concreti e risposte alle domande che tutti ci siamo
fatti almeno una volta.

## "Firma digitale" non significa sempre la stessa cosa

Quando si parla di firma digitale, molti pensano ad una cosa sofisticata cui solo professionisti e pubblica 
amministrazione hanno accesso. In realtà, la legge italiana ed europea distingue 
**tre tipi diversi di firma elettronica**, con livelli di sicurezza e valore legale molto differenti.

La normativa di riferimento è il **Regolamento eIDAS** (UE n. 910/2014) e il **Codice dell'Amministrazione Digitale** 
italiano, o CAD (D.Lgs. 82/2005, aggiornato nel tempo). eIDAS, modificato anche dal Regolamento (UE) 2024/1183, 
definisce il quadro europeo; il CAD completa le regole applicabili in Italia.

"Firma elettronica" è il termine generale. La **firma digitale**, nel significato preciso del CAD, è un particolare 
tipo di firma elettronica qualificata basato su chiavi crittografiche. 

Iniziamo a vedere come funziona in parole semplici.

## Come funziona una firma digitale?

Immaginate che Anna debba firmare un contratto in PDF e inviarlo a Marco. Anna usa un programma di firma digitale come
Plico che crea una firma legata a quel preciso documento PDF. Quando Marco riceve il file, può usare un programma di 
verifica (anche ma non necessariamente Plico stesso) per controllare che sia stata effettivamente Anna a firmarlo e che
il contenuto firmato non sia stato modificato. Se per esempio qualcuno cambia l'importo del contratto da 100 a 1.000 
euro, la verifica rileva che il contenuto non corrisponde più a quello firmato da Anna.

Per farlo si usano due **chiavi crittografiche**, cioè due codici collegati tra loro, con compiti diversi. La 
**chiave privata** serve ad Anna per creare la firma e deve restare sotto il suo esclusivo controllo. La 
**chiave pubblica** permette a Marco, o a chiunque riceva il documento, di verificarla, ma non di creare nuove firme 
al posto di Anna. Un **certificato digitale** associa la chiave pubblica all'identità di Anna.

In altre parole, la verifica permette di controllare **chi ha firmato** e **l'integrità del contenuto firmato**. 

## I tre tipi di firma elettronica in Italia

### 1. Firma Elettronica Semplice (FES)

È il livello più basilare. Rientrano in questa categoria i dati elettronici associati a un documento e utilizzati dal 
firmatario per firmarlo, senza i requisiti aggiuntivi richiesti per le firme avanzate o qualificate.

**Esempi di FES in Italia:**
- Spuntare "Accetto i termini e condizioni" su un sito web
- Scrivere il proprio nome in calce a un'email
- Disegnare la propria firma con il dito su un tablet, come quando si ritira un pacco dal corriere
- Caricare un'immagine della propria firma su un PDF

**Quando basta la FES?**  
Per molti accordi ordinari tra privati: ordini d'acquisto, preventivi accettati, accordi informali. È valida come prova, 
ma il suo peso dipende molto dal contesto. Se qualcuno contesta la firma, dimostrarne l'autenticità può essere 
complicato, perché chiunque potrebbe tecnicamente fare una foto di una firma altrui ed usarla successivamente come FES.

### 2. Firma Elettronica Avanzata (FEA)

È un livello superiore. La legge richiede che sia:

- univocamente collegata al firmatario ed in grado di identificarlo
- creata con dati che il firmatario può utilizzare, con un elevato livello di sicurezza, sotto il proprio esclusivo 
  controllo
- collegata al documento in modo che ogni modifica successiva sia rilevabile

In pratica, la FEA offre garanzie più forti sul collegamento tra la persona e il documento firmato, riducendo il rischio 
che qualcun altro firmi al posto del firmatario.

**Esempi di FEA in Italia:**
- Firma apposta con la **Carta d'Identità Elettronica (CIE)** tramite NFC e PIN personale
- Processi di FEA che utilizzano un **OTP (One Time Password)** inviato sul cellulare, come quelli adottati da banche 
  e assicurazioni
- Firma grafometrica raccolta su tavolette speciali, quando il sistema rispetta i requisiti della FEA

Un OTP o una tavoletta, da soli, non bastano a creare una FEA: conta l'intero processo di identificazione e firma, che 
deve rispettare i requisiti di legge.

**Quando serve la FEA?**  
Può essere adatta a molti contratti tra privati, nel rispetto delle regole previste per il documento e per il processo 
di firma:

- Contratti di locazione tra privati di durata non superiore a nove anni
- Contratti di lavoro
- Accordi commerciali
- Documenti bancari e assicurativi

La FEA, se conforme alle regole applicabili, può soddisfare il requisito della forma scritta e avere l'efficacia 
probatoria prevista dall'art. 2702 del codice civile. Ci sono però eccezioni: per le scritture private indicate 
nell'art. 1350, numeri da 1 a 12, il CAD richiede la FEQ o la firma digitale, salvo il caso di sottoscrizione 
autenticata. Tra queste ci sono anche le locazioni immobiliari superiori a nove anni. Restano inoltre le formalità 
previste per gli atti che richiedono l'intervento del notaio.

### 3. Firma Elettronica Qualificata (FEQ)

È il livello più alto. La **firma digitale** definita dal CAD italiano appartiene a questa categoria.

Per essere qualificata, la firma deve:

- Essere creata con un **dispositivo qualificato di creazione della firma** (smart card, token USB certificato, 
  o sistema di firma remota)
- Basarsi su un **certificato qualificato** rilasciato da un **prestatore di servizi fiduciari qualificato** (come 
  Aruba, InfoCert, Namirial), iscritto nell'elenco europeo eIDAS

**Strumenti comuni per la FEQ in Italia:**
- **Smart card di firma**, anche abbinate alla CNS: devono contenere un certificato qualificato di firma; il solo 
  certificato di autenticazione CNS non basta
- **Token USB**: chiavette certificate rilasciate da provider come Aruba o InfoCert
- **Firma remota**: firma via app o web, con autenticazione OTP, offerta da provider qualificati

**Quando è obbligatoria la FEQ?**  
In Italia, la firma digitale è richiesta per determinate pratiche, secondo le regole del procedimento. Alcuni esempi:
- Determinate pratiche con la **pubblica amministrazione** (appalti, SUAP, pratiche catastali)
- Deposito di **atti giudiziari telematici** (processo civile telematico, PCT)
- Iscrizioni al **Registro Imprese**
- Offerte nelle **gare d'appalto pubbliche** (es. il MEPA, gestito da Consip)
- **Fatturazione elettronica verso la PA**

Per le fatture elettroniche tra privati (B2B e B2C), la firma digitale non è generalmente obbligatoria. Anche per le 
comunicazioni con la PA non esiste un obbligo unico: l'art. 65 del CAD ammette, nei casi previsti, modalità alternative 
come l'identificazione tramite SPID, CIE o CNS. Occorre seguire le istruzioni della specifica pratica.

L'art. 25 del Regolamento eIDAS stabilisce che una firma elettronica qualificata 
**equivale a una firma autografa in tutti gli Stati membri dell'UE**.

## La firma con la CIE: uno strumento già in tasca a molti italiani

La **Carta d'Identità Elettronica (CIE)** è uno degli strumenti più interessanti perché è già in possesso di molti 
cittadini italiani adulti e permette di firmare senza acquistare un certificato qualificato, usando un dispositivo 
compatibile.

La CIE contiene un chip NFC (la stessa tecnologia dei pagamenti contactless con le carte di credito) che protegge la 
chiave privata e un certificato digitale che identifica il titolare. La carta permette sia di identificarsi online, sia 
di creare firme elettroniche avanzate (FEA) con un'app compatibile, come spiegato dal 
[Ministero dell'Interno](https://www.cartaidentita.interno.gov.it/info-utili/firma-con-cie/).

Avviata la firma nell'app, si avvicina la CIE allo smartphone e si inserisce il PIN: il documento viene firmato con 
una **Firma Elettronica Avanzata (FEA)**. Questo livello può essere usato per molti contratti privati, con i limiti 
descritti sopra.

**Esempio pratico:** Dovete firmare un contratto di consulenza con un libero professionista. Con la firma CIE su un PDF, 
entrambe le parti hanno una prova solida che il documento è autentico, che chi ha firmato è proprio quella persona, e 
che non è stato modificato dopo la firma. È molto più sicuro e verificabile rispetto a una firma scansionata.

## Quando serve quale tipo di firma: esempi pratici

| Situazione | Tipo di firma consigliato |
|---|---|
| Accettare i termini di un servizio online | FES |
| Inviare un'offerta commerciale firmata | FES o FEA |
| Contratto di affitto tra privati | FEA per durate fino a nove anni; FEQ o firma digitale oltre nove anni |
| Contratto di lavoro subordinato | FEA, nel rispetto delle formalità previste per il contratto |
| Sottoscrizione di un verbale di assemblea societaria | Dipende dal tipo di società, dalla delibera e dalle formalità richieste |
| Offerta in gara d'appalto pubblica | FEQ (Firma Digitale) |
| Comunicazione con la pubblica amministrazione | Dipende dalla pratica: FEQ oppure altre modalità ammesse, come SPID |
| Deposito atti al tribunale telematicamente | FEQ (Firma Digitale) |
| Iscrizione al Registro Imprese | FEQ (Firma Digitale) |
| Autorizzazione bancaria online | Procedura prevista dalla banca; token e OTP non implicano da soli una FEA |

## Come verificare se una firma digitale è valida

Quando si riceve un documento firmato digitalmente, è possibile (ed è buona pratica) verificare che la firma sia 
autentica. Gli elementi principali da controllare sono quattro:

1. **Integrità**: il contenuto firmato è integro e le eventuali modifiche successive sono segnalate
2. **Identità e attendibilità**: il certificato identifica chi ha firmato e la sua catena di certificazione è 
   riconosciuta dal verificatore
3. **Validità del certificato**: il certificato non era scaduto al momento della firma
4. **Revoca**: il certificato non era stato revocato (es. per smarrimento o furto del dispositivo)

Le app di firma più complete mostrano queste informazioni, ma una spunta verde può avere significati diversi: è 
importante leggere quali controlli sono stati effettivamente eseguiti. Per stabilire la validità al momento della firma 
serve anche un riferimento temporale attendibile, come una marca temporale; la data dichiarata nel file, da sola, non 
basta perché facilmente alterabile.

La verifica offline può controllare l'integrità e alcuni dati del certificato, ma senza informazioni di revoca 
attendibili non dimostra che il certificato non sia stato revocato. Nota bene che una firma con avvisi o errori non 
significa necessariamente che il documento sia falso, ma solo che richiede un'analisi più attenta.

## Le app per firmare PDF: confronto

Esistono molte soluzioni per firmare documenti digitalmente. Le differenze principali riguardano i tipi di firma 
supportati, la privacy (i dati rimangono sul dispositivo o vengono caricati su server cloud?), il costo e la semplicità 
d'uso.

| App | Funzioni di firma | Aspetti da considerare | Costo |
|---|---|---|---|
| **Plico** | Firma grafica, firma con CIE (FEA), ispezione delle firme PDF | iOS e Android; documenti elaborati in locale; ispezione offline senza controllo della revoca | Gratuito |
| **[Adobe Acrobat Sign](https://www.adobe.com/acrobat/business/compliance/eidas.html)** | Firme elettroniche, anche avanzate e qualificate secondo il flusso configurato | Servizio cloud; verificare piano e provider necessari per la FEQ | Dipende dal piano e dai servizi attivati |
| **[DocuSign](https://www.docusign.com/products/digital-signature)** | Firme elettroniche, anche avanzate e qualificate secondo il flusso configurato | Servizio cloud; verificare piano e modalità di identificazione | Dipende dal piano e dai servizi attivati |
| **[Dropbox Sign](https://help.dropbox.com/plans/dropbox-sign-and-eid)** | Firme elettroniche e opzioni di identificazione eID | Servizio cloud; disponibilità e livello delle firme dipendono dall'opzione eID e dal piano | Dipende dal piano e dalle opzioni |
| **[Namirial Sign](https://servicedesk.namirial.com/hc/it/articles/6417235289489-Namirial-Sign-Info-App)** | Firma digitale con dispositivo fisico o remoto e verifica dei documenti | Versioni web, desktop e mobile; controllare le funzioni della versione scelta | Dipende dai servizi di firma acquistati |
| **[Aruba Sign](https://guide.aruba.it/trust-services/firma/firma-digitale/as-windows-mac)** | Firma digitale e verifica dei documenti | Per firmare occorre un dispositivo o un servizio di firma compatibile | Software gratuito; dispositivo o servizio di firma separato |
| **[InfoCert Sign](https://www.infocert.it/firma-digitale/infocert-sign)** | Firma digitale, verifica e marche temporali | Funzioni disponibili secondo versione e servizi attivati | Funzioni gratuite e offerte a pagamento |

**Note sulla tabella:**

- "Firma grafica" indica qui l'immagine della propria firma usata per sottoscrivere un PDF, che può costituire una FES. 
  L'aspetto visivo non determina il livello giuridico: anche una FEA può mostrare l'immagine della firma.
- Per firmare con CIE da smartphone servono NFC, PIN e un'app compatibile. È possibile usare anche un computer con 
  lettore contactless e software compatibile.
- La FEQ richiede un certificato qualificato e un dispositivo qualificato, che può trovarsi anche presso il provider di 
  firma remota.
- La verifica di una firma già presente e la possibilità di apporre una nuova firma sono funzioni diverse.
- Elaborazione locale, trasmissione e archiviazione sul cloud sono aspetti distinti: per documenti riservati, verificate 
  il funzionamento della specifica modalità scelta.

## Perché la privacy conta nella scelta dell'app di firma

Quando si carica un PDF su un servizio cloud per firmarlo, il documento, che potrebbe contenere dati personali, 
informazioni aziendali riservate o clausole contrattuali delicate, viene trasmesso a server di terzi e può essere 
archiviato secondo le condizioni del servizio. La posizione dei server e gli eventuali trasferimenti fuori dall'UE 
dipendono dal provider e non sono sempre trasparenti.

Per molti documenti questo non è un problema. Ma per contratti riservati, informazioni mediche, pratiche legali o 
documenti aziendali sensibili, una soluzione che elabora tutto **in locale**, sul proprio smartphone o computer, riduce 
la condivisione con terzi.

Il GDPR (Regolamento UE 2016/679) impone già obblighi stringenti sul trattamento dei dati personali: affidarsi a un 
servizio cloud per firmare documenti contenenti dati personali richiede di verificare che il provider offra le garanzie 
appropriate.

## Conclusioni

Riassumendo i punti essenziali:

- **Non tutte le firme elettroniche sono uguali**: FES, FEA e FEQ offrono garanzie diverse e hanno effetti giuridici 
  che dipendono anche dal documento
- Per molti **contratti tra privati** si può usare una Firma Elettronica Avanzata (FEA), rispettando i requisiti e i 
  limiti previsti dalla legge
- La **firma digitale**, un tipo di FEQ, è richiesta per determinate pratiche con la pubblica amministrazione e per 
  certi atti formali
- La **firma grafica** (immagine della firma su PDF) usata per sottoscrivere un documento può costituire una FES: il suo 
  peso come prova dipende dal contesto
- La **CIE** è già uno strumento di firma avanzata utilizzabile da chi possiede una carta e un certificato validi, il 
  PIN e un dispositivo compatibile
- La scelta tra soluzioni cloud e offline dipende dalla sensibilità dei documenti da firmare

Firmare digitalmente in modo corretto non è complicato come sembra. Con la CIE già in tasca e un'app come Plico, è 
possibile apporre una firma elettronica avanzata direttamente dallo smartphone, per i documenti che ammettono questo 
tipo di firma, senza stampare nulla e senza caricare i propri documenti riservati su server di terzi.

---

*Fonti normative e istituzionali:*

- [Regolamento (UE) n. 910/2014 (eIDAS), in particolare artt. 3, 25 e 26](https://eur-lex.europa.eu/eli/reg/2014/910/oj/ita), come modificato dal [Regolamento (UE) 2024/1183](https://eur-lex.europa.eu/eli/reg/2024/1183/oj/ita)
- [D.Lgs. 7 marzo 2005, n. 82 — Codice dell'Amministrazione Digitale](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82), in particolare artt. 1, 20, 21 e 65
- [DPCM 22 febbraio 2013 — Regole tecniche sulle firme elettroniche](https://www.gazzettaufficiale.it/eli/id/2013/05/21/13A04284/sg), in particolare artt. 55–61 per la FEA
- [Ministero dell'Interno — Firma con CIE](https://www.cartaidentita.interno.gov.it/info-utili/firma-con-cie/)
- [AgID — Servizi fiduciari qualificati](https://www.agid.gov.it/it/piattaforme/firma-elettronica-qualificata)
- [Regolamento (UE) 2016/679 (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ita), in particolare artt. 28, 32 e 44 e seguenti
