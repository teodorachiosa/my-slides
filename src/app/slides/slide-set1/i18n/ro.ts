import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const roSlideSetTranslations: TranslatedSlideSet = {
  title: '\\Accesibilitatea web pe înțelesul tuturor',
  slides: [
    {
      content: md`
<div class="title-slide">

<!--A11yIcon-->

  <h1>
    <span>Accesibilitatea web</span>
    <span>pe înțelesul tuturor</span>
  </h1>

  <div class="footer">
    <span class="presenters">
      <img src="img/ced-logo.png" class="ced-logo" alt="CED România - Centrul de excelență prin diversitate">
       și <strong>Teodora Chiosa</strong>
    </span>
    <span>23 Martie 2026</span>
  </div>

</div>
      `,
    },
    {
      content: md`
## Despre prezentatori: </br> <span class="f-w-normal">Teodora Chiosa</span>

<div class="about-me-images">
  <img src="img/avatar.png" alt="o poză tip portret cu Teodora zâmbind la cameră">
  <img src="img/was.png" alt="Insigna pentru Specialist în accesibilitate digitală">
</div>

- Specialist în accesibilitate web, cu certificat obținut de Asociația Internațională a Profesioniștilor în Accesibilitate
- Programator Web, cu experiență în crearea de componente pentru site-uri web
      `,
    },
    {
      content: md`
## Despre prezentatori: </br> <span class="f-w-normal">Constantin Cristache</span>

- Tester accesibilitate web și digitală, utilizator de soluții asistive pentru nevăzători
      `,
    },
    {
      content: md`
## Ce este accesibilitatea?

> Proiectarea produselor, dispozitivelor, serviciilor, vehiculelor sau mediilor pentru a fi utilizabile de către **persoanele cu dizabilități**.
>
> Sursa: [Accesibilitate - Wikipedia](https://ro.wikipedia.org/wiki/Accesibilitate)
      `,
    },
    {
      content: md`
<img class="fullscreen" src="img/environment/braille-buttons.png" alt="butoane de lift care folosesc sistemul braille">
      `,
    },
    {
      content: md`
<img class="fullscreen" src="img/environment/wheelchair-ramp.jpg" alt="o persoană în scaun rulant folosind o rampă de autoturism">
      `,
    },
    {
      content: md`
## Ce este accesibilitatea web?

- Proiectarea și implementarea de **site-uri web** (inclusiv documente PDF) astfel încât acestea să poată fi accesate și utilizate de către persoanele cu dizabilități.
- Aceste site-uri trebuie să fie utilizabile și de pe **calculator**, dar și de pe **telefonul mobil**.

<div aria-hidden="true" class="decorative center-text desktop-mobile-emoji">
💻📱📄
</div>
      `,
    },
    {
      content: md`
## Cum arată „în spate” un site web?

Ne putem imagina că structura unui site este ca o cutie, cu diverse alte cutii înăuntru.
      `,
    },
    {
      content: md`
<div class="side-by-side">
  <img src="img/website/boxes.jpg" alt="cutii de carton aranjate haotic și fără etichete">
  <img src="img/website/boxes-labelled-ro.png" alt="cutii de carton cu etichete. Pe majoritatea cutiilor există etichete pe care scrie: cabluri, haine, cărți, documente, poze">
</div>
      `,
    },
    {
      content: md`
## Cum folosește o persoană cu dizabilități un site?

<img class="interaction-diagram" src="img/website/user-interaction.png" alt="Diagramă care prezintă în mod simplificat metodele de interacțiune dintre utilizatori și site-uri web. Detalii mai jos.">
<div class="sr-only">
  <p>În partea stângă se află un chenar care reprezintă o fereastră de browser. </p>
  <p>Înăuntrul acestei ferestre se află alte 2 chenare: unul arată reprezentarea vizuală a unui site web, iar cealaltă arată structura arborescentă a aceluiași site - sub formă de cutii.</p>
  <p>Diagrama arată faptul că primul utilizator navighează vizual și interacționează folosind mouse-ul. Pentru acest lucru folosește reprezentarea vizuală a site-ului.</p>
  <p>Al doilea utilizator folosește tehnologie asistivă (spre exemplu, un cititor de ecran) și interacționează de fapt cu structura site-ului.</p>
      `,
    },
    {
      content: md`
## <span aria-hidden="true" class="decorative">✅</span> Exemplu: un buton accesibil

În cel mai fericit caz, cutiile au etichete.

### Persoanele văzătoare văd direct conținutul cutiei:

<!--RemoveButtonRo-->

### Utilizatorii de cititor de ecran vor auzi eticheta cutiei:

Rezultat vorbit de un cititor de ecran: <code>buton Șterge</code>.
      `,
    },
    {
      content: md`
## <span aria-hidden="true" class="decorative">❌</span> Exemplu: un buton inaccesibil

În cel mai rau caz, cutiile:

- nu au etichete
- sau au etichetele greșite

<!--RemoveButtonBad-->

Rezultat vorbit de un cititor de ecran: <code>buton</code>.

**Ce face butonul?** Nu știu...
      `,
    },
    {
      content: md``,
    },
    {
      content: md`
## <span aria-hidden="true" class="decorative">♿</span> Dizabilități </br> și funcționalități de accesibilitate web
      `,
    },
    {
      content: md`
### <span class="f-w-normal">Funcționalități de accesibilitate pentru ...</span> </br> o persoană cu mobilitate scăzută

- Elemente interactive destul de mari (butoane, casete text)
- Posibilitatea de interacțiune doar din tastatură
- Posibilitatea de interacțiune doar din comenzi vocale

#### Cine altcineva beneficiază de aceste funcționalități?

- Posibilitatea de interacțiune doar din comenzi vocale

### <span class="f-w-normal">Funcționalități de accesibilitate pentru ...</span> </br> o persoană surdă

- Subtitrări
  - text **sincronizat** cu video și audio
  - transcriere directă, dialog și non-dialog (e.g. "tunet puternic")
- Transcrieri
  - alternativă text pentru audio (e.g. podcast) sau video cu audio
  - identificarea vorbitorului
  - transcriere directă, dialog și non-dialog
- Limba semnelor
  - a metodă de comunicare care folosește o combinație de mișcări ale mâinilor, expresii faciale, sau poziția corpului

#### Cine altcineva beneficiază de aceste funcționalități?

- Persoanele care învață o nouă limba
- Persoanele care se află într-un mediu zgomotos (e.g. autobuz)

### <span class="f-w-normal">Funcționalități de accesibilitate pentru ...</span> </br> o persoană cu deficiențe de vedere sau oarbă

- Contrast îndeajuns de mare între text și fundal
- Mărirea textului sau a întregii pagini web (zoom in)
- Simboluri sau descrieri text și evitarea comunicării doar prin culoare
- Descrieri audio (e.g. explicarea verbală a unor imagini în timpul unei prezentări vizuale)
- Posibilitatea de interacțiune doar din tastatură
- Transformarea din text în vorbire prin utilizarea unui cititor de ecran
- Transformarea din text în braille (tactil)

#### Cine altcineva beneficiază de aceste funcționalități?

- Posibilitatea de interacțiune doar din comenzi vocale
      `,
    },
  ],
};

export default roSlideSetTranslations;
