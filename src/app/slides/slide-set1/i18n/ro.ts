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
  <img src="img/was.png" alt="Insigna pentru Specialist în accesibilitate digitală">
</div>

- Specialist în accesibilitate web, cu certificat obținut de Asociația Internațională a Profesioniștilor în Accesibilitate
- Programator Web, cu experiență în crearea de componente pentru site-uri web
      `,
    },
    {
      content: md`
## Despre prezentatori: </br> <span class="f-w-normal">Constantin Cristache</span>

- Tester accesibilitate web și digitală
- Utilizator de soluții asistive pentru nevăzători
      `,
    },
    {
      content: md`
## Ce este accesibilitatea?

> Proiectarea produselor, dispozitivelor, serviciilor, vehiculelor sau mediilor pentru a fi utilizabile de către **persoanele cu dizabilități**.
>
> [Accesibilitate - Wikipedia](https://ro.wikipedia.org/wiki/Accesibilitate)
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
## Tipuri de dizabilități

- <span aria-hidden="true" class="decorative">👁️</span> Persoane cu daltonism, cu deficiențe de vedere (glaucom, cataracta) sau oarbe
- <span aria-hidden="true" class="decorative">👂</span> Persoane cu deficiențe de auz sau surde
- <span aria-hidden="true" class="decorative">🖐️</span> Persoane cu artrită, boala Parkinson sau paralizie
- <span aria-hidden="true" class="decorative">🧠</span> Persoane cu ADHD, dislexie, autism sau cu dizabilitate intelectuală

> Unele persoane pot avea:
>
> - **multiple dizabilități**
> - **dizabilități invizibile**
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

<div aria-hidden="true" class="decorative package-emoji">📦</div>
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
## Ce este tehnologia asistivă?

Tehnologia asistivă include software sau hardware ce **permite persoanelor cu dizabilități să interacționeze cu site-urile web**.

Exemple:

- <span aria-hidden="true" class="decorative">🔊</span> **Cititoare de ecran** - transformă textul în sunet pentru cei ce nu pot citi textul afișat pe ecran
- <span aria-hidden="true" class="decorative">🔍</span> **Lupa** - mărește ce este afișat pe ecran
- <span aria-hidden="true" class="decorative">🗣️</span> **Recunoașterea vocală** - transformă comenzile vocale în interacțiuni cu site-ul web
      `,
    },
    {
      content: md`
## <span aria-hidden="true" class="decorative">✅</span> Exemplu: un buton accesibil

În cel mai fericit caz, cutiile au etichete.

### Persoanele văzătoare văd direct conținutul cutiei:

<!--RemoveButtonRo-->

### Utilizatorii de cititor de ecran vor auzi eticheta cutiei:

Rezultat vorbit de un cititor de ecran: <code>Șterge buton</code>.
      `,
    },
    {
      content: md`
## <span aria-hidden="true" class="decorative">❌</span> Exemplu: un buton inaccesibil

Câteodată, cutiile:

- nu au etichete
- au etichetele greșite

<!--RemoveButtonBad-->

Rezultat vorbit de un cititor de ecran: <code>buton</code>.

**Ce funcționalitate are butonul?** Nu știu, fiindcă nu are etichetă.
      `,
    },
    {
      content: md`
## <span aria-hidden="true" class="decorative">💬</span> Care este experiența unui utilizator de cititor de ecran?

**Constantin** va vorbi acum despre experiența sa...
      `,
    },
    {
      content: md`
## De ce este importantă accesibilitatea web?

Orice persoană are dreptul la **autonomie**.

O persoană cu dizabilități ar trebui să poată:

- să găsească informații
- să vizioneze un film
- să facă cumpărături
- să cumpere bilete la muzeu
- să interogheze un cont bancar etc.
      `,
    },
    {
      content: md`
## <span aria-hidden="true" class="decorative">⚖️</span> Ce spune legislația?

Există **2** legi relevante pentru mediul digital:

1. [Directiva (UE) 2016/2102](https://eur-lex.europa.eu/legal-content/RO/TXT/HTML/?uri=CELEX:32016L2102) privind accesibilitatea site-urilor web și a aplicațiilor mobile ale organismelor din sectorul public, transpusă în [Ordonanța de urgență nr. 112/2018](https://legislatie.just.ro/Public/DetaliiDocumentAfis/209421)
   - Intrată în vigoare între 2019 și 2021
   - Vizează doar **interacțiunea cu serviciile statului**
      `,
    },
    {
      content: md`
2. [Directiva (UE) 2019/882](https://eur-lex.europa.eu/legal-content/RO/TXT/HTML/?uri=CELEX:32019L0882) privind cerințele de accesibilitate aplicabile produselor și serviciilor, transpusă în [Legea nr. 232/2022](https://legislatie.just.ro/Public/DetaliiDocument/257778)
   - Cunoscută și drept **European Accessibility Act**
   - Intrată în vigoare în 2025 pentru:
     - <span aria-hidden="true" class="decorative smaller">💻</span> calculatoare, telefoane (smartphone) și sisteme de operare
     - <span aria-hidden="true" class="decorative smaller">💵</span> ATM-uri, terminale de plată
     - <span aria-hidden="true" class="decorative smaller">📺</span> comunicații audio-vizuale (televizor)
     - <span aria-hidden="true" class="decorative smaller">📞</span> numărul de urgență 112
     - <span aria-hidden="true" class="decorative smaller">🚋</span> serviciile de transport
     - <span aria-hidden="true" class="decorative smaller">🪙</span> serviciile bancare
     - <span aria-hidden="true" class="decorative smaller">🛒</span> site-uri de comerț online (shopping)
     - <span aria-hidden="true" class="decorative smaller">📙</span> cărți electronice
      `,
    },
    {
      content: md`
### Ghidul de accesibilitate

Legislația cere ca site-urile să respecte **minimul** cerințelor din **Ghidul pentru Conținut Web Accesibil**.

Conținutul trebuie să fie:

- **P**erceptibil
- **O**perabil
- **U**șor de înțeles
- **R**obust
      `,
    },
    {
      content: md`
#### Perceptibil

- Text alternativ la imagini
- Subtitrări la clipuri video
- Transcrieri la podcasturi și clipuri video
      `,
    },
    {
      content: md`
#### Operabil

- Interacțiune fără bariere folosind tastatura
- Destul timp la dispoziție pentru interacțiune
- Fără flash-uri de lumină care pot provoca crize epileptice
- Navigarea ușoară în pagină
  - Titluri pentru delimitarea conținutului
  - Câmp de căutare
  - Focus de la tastatură vizibil, butoane destul de mari
      `,
    },
    {
      content: md`
#### Ușor de înțeles

- Conținut clar
- Așezare în pagină previzibilă
- Ajutor în identificarea și repararea erorilor
      `,
    },
    {
      content: md`
#### Robust

- Respectarea **standardelor** pentru a îmbunătăți **compatibiltatea** cu tehnologiile asistive („etichetarea cutiilor”)

<img class="interaction-diagram" style="width: 47%" src="img/website/user-interaction.png" alt="Diagramă care prezintă în mod simplificat metodele de interacțiune dintre utilizatori și site-uri web. Detalii mai jos.">
<div class="sr-only">
  <p>În partea stângă se află un chenar care reprezintă o fereastră de browser. </p>
  <p>Înăuntrul acestei ferestre se află alte 2 chenare: unul arată reprezentarea vizuală a unui site web, iar cealaltă arată structura arborescentă a aceluiași site - sub formă de cutii.</p>
  <p>Diagrama arată faptul că primul utilizator navighează vizual și interacționează folosind mouse-ul. Pentru acest lucru folosește reprezentarea vizuală a site-ului.</p>
  <p>Al doilea utilizator folosește tehnologie asistivă (spre exemplu, un cititor de ecran) și interacționează de fapt cu structura site-ului.</p>
      `,
    },
    {
      content: md`
<h3 style="text-align: center">
  <span class="f-w-normal">„</span>Minimul <span class="f-w-normal">cerințelor din Ghidul pentru Conținut Web Accesibil”?</span>
</h3>

<div class="center-pyramid">
  <img src="img/wcag/levels.png" alt="Diagramă sub formă de piramidă: Nivel A - Suport de bază, Nivel AA - Suport ideal - minimul adoptat de legislație, Nivel AAA - Suport specializat">
</div>
      `,
    },
    {
      content: md`
<img class="float-overlay" src="img/website/overlay.png" alt="">

## Soluțiile accesibile rapide... </br><span class="f-w-normal">Sunt ele eficiente?</span>

Unele companii oferă soluții de accesibilitate numite **overlay-uri**.

Se instalează ușor pe site.

Se prezintă sub forma unui buton poziționat pe deasupra conținutului unui site.
      `,
    },
    {
      content: md`
### <span aria-hidden="true" class="decorative">❌</span> Problemele soluțiilor overlay

- Fac **promisiuni pe care nu le pot îndeplini**.
  - Nu abordează toate criteriile cerute de legislație.
  - Nu pot repara structura sau conținutul paginii ci se axează pe îmbunătățiri vizuale.
- Promovează **lipsa de standardizare**, fiecare overlay fiind puțin diferit de celelalte și oferind funcționalități diferite.
- Funcționalitatea oferită de overlay poate fi **greu de găsit** (e.g. buton fără etichetă, buton plasat ultimul în pagină).
- Poate crea noi bariere.

<span class="smaller">Detalii</span>: [OverlayFactsheet.com](https://overlayfactsheet.com/en/).
      `,
    },
    {
      content: md`
### <span aria-hidden="true" class="decorative">🚨</span> Un site cu overlay _nu_ înseamnă un site accesibil!

Atunci când accesibilitatea este luată în considerare cu adevărat:

- este **planificată** și **integrată în procesul de lucru** al designerilor, programatorilor, testerilor
- poate dura de la câteva luni până la câțiva ani pentru o remediere inițială (depinde de dimensiunea site-ului)
- este mereu luată în considerare când un site primește funcționalități noi
      `,
    },
    {
      content: md`
## Cum detectăm un site accesibil?
      `,
    },
    {
      content: md`
## Linkuri utile și surse
      `,
    },
    {
      content: md`
## Cod QR
      `,
    },
  ],
};

export default roSlideSetTranslations;
