import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const roSlideSetTranslations: TranslatedSlideSet = {
  title: '\\Accesibilitatea web pe înțelesul tuturor',
  slides: [
    {
      backgroundColor: '\\var(--violet)',
      content: md`
<div class="title-slide">

<!--A11yIcon-->

  <h1>
    <span>Accesibilitatea web</span>
    <span>pe înțelesul tuturor</span>
  </h1>

  <div class="footer">
    <span class="presenters">
      <img fetchpriority="high" src="img/ced-logo.webp" class="ced-logo" width="480" height="100" alt="CED România - Centrul de excelență prin diversitate">
       și <strong>Teodora Chiosa</strong>
    </span>
    <span>23 Martie 2026</span>
  </div>

</div>
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## Despre prezentatori: </br> <span class="f-w-normal">Teodora Chiosa</span>

<div class="about-me-images">
  <img fetchpriority="high" src="img/was.webp" width="600" height="600" alt="Insigna pentru Specialist în accesibilitate digitală">
</div>

- [Specialist în accesibilitate web](https://www.credly.com/badges/8c7936b4-35be-4aa2-9064-eb57ce746db3/public_url), cu certificat obținut de la Asociația Internațională a Profesioniștilor în Accesibilitate
- **Programator Web**, cu experiență în crearea de componente pentru site-uri web
- În jur de 6 ani de experiență cu Accesibilitatea Web
      `,
    },
    {
      content: md`
## Despre prezentatori: </br> <span class="f-w-normal">Constantin Cristache</span>

- **Profesor** la Liceul Teoretic Special „Iris” din Timișoara
- **Trainer** în programele de formare derulate de CED România
- **Tester** accesibilitate web și digitală
- **Utilizator de soluții asistive** pentru nevăzători
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
## Ce este accesibilitatea?

> Proiectarea produselor, dispozitivelor, serviciilor, vehiculelor sau mediilor pentru a fi utilizabile de către **persoanele cu dizabilități**.
>
> [Accesibilitate - Wikipedia](https://ro.wikipedia.org/wiki/Accesibilitate)
      `,
    },
    {
      content: md`
<img loading="lazy" class="fullscreen" src="img/environment/braille-buttons.webp" alt="butoane de lift care folosesc sistemul braille">
      `,
    },
    {
      content: md`
<img loading="lazy" class="fullscreen" src="img/environment/wheelchair-ramp.webp" alt="o persoană în scaun rulant folosind o rampă de autoturism">
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
## Tipuri de dizabilități

- <span aria-hidden="true" class="decorative">👁️</span> Persoane cu daltonism, cu deficiențe de vedere (glaucom, cataracta) sau nevăzătoare
- <span aria-hidden="true" class="decorative">👂</span> Persoane cu deficiențe de auz
- <span aria-hidden="true" class="decorative">🖐️</span> Persoane cu artrită, boala Parkinson sau paralizie
- <span aria-hidden="true" class="decorative">🧠</span> Persoane cu ADHD, dislexie, autism sau cu dizabilitate intelectuală

<br/>

> Unele persoane au **dizabilități multiple**.

> Unele dizabilități sunt **invizibile**.
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
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
      backgroundColor: '\\var(--orange)',
      content: md`
## Cum arată „în spate” un site web?

Ne putem imagina că structura unui site este ca o cutie, cu diverse alte cutii înăuntru.

<div aria-hidden="true" class="decorative package-emoji">📦</div>
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
<div class="side-by-side">
  <img loading="lazy" src="img/website/boxes.webp" alt="cutii de carton aranjate haotic și fără etichete">
  <img loading="lazy" src="img/website/boxes-labelled-ro.webp" alt="cutii de carton cu etichete. Pe majoritatea cutiilor există etichete: cabluri, haine, cărți, documente, poze">
</div>
      `,
    },
    {
      backgroundColor: '\\var(--pink)',
      content: md`
<h2 style="text-align: center">
  Cum folosește o persoană cu dizabilități un site?
</h2>

<img loading="lazy" class="interaction-diagram" width="422" height="319" src="img/website/user-interaction-ro.webp" alt="Diagramă care prezintă în mod simplificat metodele de interacțiune dintre utilizatori și site-uri web. Detalii mai jos.">
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

Tehnologia asistivă include software sau hardware ce **oferă persoanelor cu dizabilități o experiență mai bună în interacțiunea cu mediul digital**.

Exemple:

- <span aria-hidden="true" class="decorative">🔊</span> **Cititoare de ecran** - transformă textul în vorbire (sunet)
- <span aria-hidden="true" class="decorative">🔍</span> **Lupa** - mărește ce este afișat pe ecran
- <span aria-hidden="true" class="decorative">🗣️</span> **Recunoașterea vocală** - transformă comenzile vocale în interacțiuni
      `,
    },
    {
      backgroundColor: '\\var(--emerald)',
      content: md`
## <span aria-hidden="true" class="decorative">✅</span> Exemplu: un buton accesibil

În cel mai fericit caz, „cutiile” au etichete.

Persoanele văzătoare văd direct conținutul „cutiei”:

<!--RemoveButtonRo-->

Utilizatorii de cititor de ecran vor auzi eticheta „cutiei”.

<br/>

**Rezultat vorbit de un cititor de ecran**: <code>Șterge buton</code>.
      `,
    },
    {
      backgroundColor: '\\var(--red)',
      content: md`
## <span aria-hidden="true" class="decorative">❌</span> Exemplu: un buton inaccesibil

Câteodată, „cutiile”:

- nu au etichete
- au etichetele greșite

<!--RemoveButtonBad--> (Nu se vede, dar acest buton nu are etichetă în cod)

<br/>
<br/>

**Rezultat vorbit de un cititor de ecran**: <code>buton</code>. **Ce scop are butonul?**

> Structura corectă și codul corect sunt esențiale pentru accesibilitate!
      `,
    },
    {
      backgroundColor: '\\var(--yellow)',
      content: md`
## De ce este importantă accesibilitatea web?

> Orice persoană are dreptul la **autonomie**.

O persoană cu dizabilități nu ar trebui să întâmpine bariere atunci când:

<span aria-hidden="true" class="decorative barrier">🚧</span>

- caută informații
- urmărește un film
- face cumpărături online
- cumpără bilete la muzeu
- interoghează un cont bancar
- etc.
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## <span aria-hidden="true" class="decorative">⚖️</span> Ce spune legislația?

Există două legi relevante pentru mediul digital (în Europa):

1. [Directiva (UE) 2016/2102](https://eur-lex.europa.eu/legal-content/RO/TXT/HTML/?uri=CELEX:32016L2102) - accesibilitatea site-urilor web și a aplicațiilor mobile ale organismelor din sectorul public, transpusă în [Ordonanța de urgență nr. 112/2018](https://legislatie.just.ro/Public/DetaliiDocumentAfis/209421)
   - Intrată în vigoare între 2019 și 2021
   - Vizează doar **serviciile statului**
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
2. [Directiva (UE) 2019/882](https://eur-lex.europa.eu/legal-content/RO/TXT/HTML/?uri=CELEX:32019L0882) - cerințele de accesibilitate aplicabile produselor și serviciilor, transpusă în [Legea nr. 232/2022](https://legislatie.just.ro/Public/DetaliiDocument/257778)
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

Legislația cere ca site-urile să respecte **minimul** cerințelor din **[Ghidul pentru Conținut Web Accesibil](https://www.w3.org/TR/WCAG22/)** (<span lang="en">WCAG</span>).

Conținutul unui site trebuie să fie:

<img loading="lazy" width="364" height="113" class="pour-img" src="img/wcag/pour.webp" alt="">

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
<img loading="lazy" width="145" height="65" class="cloud-img" src="img/website/cloudy.webp" alt="o captură de ecran cu textul: 10 grade celsius, precipitații 19%, umiditate 49%, vânt 10 km pe oră. Captura de ecran include de asemenea și o ilustrație cu un nor">

Exemplu: Text alternativ pentru imaginea cu norul?

"Înnorat".
      `,
    },
    {
      content: md`
<img loading="lazy" class="fullscreen" src="img/disabilities/captions-transcripts-ro.webp" alt="o captură de ecran a unui video pe Youtube. Chenare roșii indică butonul de activare a subtitrărilor și subtitrările în sine afișate în josul clipului video. Un alt chenar roșu indică și panoul cu transcrierea clipului video.">
      `,
    },
    {
      content: md`
#### Operabil

- Interacțiune fără bariere folosind tastatura
- Destul timp la dispoziție pentru interacțiune
- Fără flash-uri care pot provoca crize în cazul persoanelor epileptice
- Navigarea ușoară în pagină:
  - Titlul paginii
  - Titluri pentru delimitarea conținutului
  - Câmp de căutare
  - Focus de la tastatură vizibil
  - Butoane destul de mari
      `,
    },
    {
      content: md`
#### Ușor de înțeles

- Conținut clar
- Așezare în pagină previzibilă (exemplu: meniul e mereu în același loc)
- Ajutor în identificarea și repararea erorilor
      `,
    },
    {
      content: md`
#### Robust

- Respectarea **standardelor** pentru a îmbunătăți **compatibiltatea** cu tehnologiile asistive („etichetarea cutiilor”)

<img loading="lazy" class="interaction-diagram" style="width: 47%" src="img/website/user-interaction-ro.webp" alt="Diagramă care prezintă în mod simplificat metodele de interacțiune dintre utilizatori și site-uri web. Detalii mai jos.">
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
  <img loading="lazy" width="827" height="321" src="img/wcag/levels-ro.webp" alt="Diagramă sub formă de piramidă: Nivel A - Suport de bază, Nivel AA - Suport ideal - minimul adoptat de legislație, Nivel AAA - Suport specializat">
</div>
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
<img loading="lazy" width="262" height="328" class="float-overlay" src="img/website/overlay.webp" alt="">

## Soluțiile accesibile rapide... </br><span class="f-w-normal">Sunt ele eficiente?</span>

Unele companii oferă soluții de accesibilitate numite **overlay-uri**.

Se instalează ușor pe site.

Se prezintă sub forma unui buton poziționat pe deasupra conținutului unui site.
      `,
    },
    {
      backgroundColor: '\\var(--red)',
      content: md`
### <span aria-hidden="true" class="decorative">❌</span> Problemele soluțiilor overlay

- Fac **promisiuni pe care nu le pot îndeplini**.
  - Nu abordează toate criteriile cerute de legislație.
  - Nu pot repara structura sau conținutul paginii ci se axează pe îmbunătățiri vizuale.
- Promovează **lipsa de standardizare și compatibilitate**, fiecare overlay fiind diferit.
- Funcționalitatea oferită de overlay poate fi **greu de găsit** (e.g. buton fără etichetă, buton plasat printre ultimele elemente în pagină).
- Poate crea noi bariere.

<span class="smaller">Detalii</span>: [Overlay Factsheet](https://overlayfactsheet.com/en/) și [Overlay Timeline](https://overlaytimeline.com/).
      `,
    },
    {
      content: md`
<img loading="lazy" class="fullscreen" src="img/website/lawsuit.webp" alt="o captură de ecran a unui articol cu titlul: Comisia Federală pentru Comerț ordonă startup-ului de accesibilitate prin inteligență artificială accessiBe să plătească 1 milion de dolari pentru publicitate înșelătoare">
      `,
    },
    {
      backgroundColor: '\\var(--red)',
      content: md`
### Un site cu overlay <br> <span class="nu">nu</span> înseamnă un site accesibil!

Atunci când accesibilitatea este luată în considerare cu adevărat:

- este **planificată** și **integrată în procesul de lucru** al designerilor, programatorilor, testerilor
- poate dura câteva luni pentru o remediere inițială (pentru site-uri complexe și cu multe pagini)
- este mereu luată în considerare când un site primește funcționalități noi
      `,
    },
    {
      backgroundColor: '\\var(--green)',
      content: md`
## <span aria-hidden="true" class="decorative">💚</span> Cum detectăm un site accesibil?

- Conține o **Declarație de Accesibilitate**.
- Este o plăcere să folosești site-ul, oricum ai încerca să interacționezi cu acesta (cu mouse-ul, tastatura, tehnologia asistivă etc.).

### Demo:

- [Verificări rapide](https://www.w3.org/WAI/test-evaluate/easy-checks/) aplicate pe site-ul [GOV.uk](https://gov.uk).
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## Resurse (engleză)

- [European Accessibility Act (EAA)](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en)
- [WCAG 2 at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) - Ghidul pentru Conținut Web Accesibil (<span lang="en">WCAG</span>), pe scurt
- [NVDA](https://www.nvaccess.org/download/) - Cititor de ecran (Windows)
      `,
    },
    {
      backgroundColor: '\\var(--green)',
      content: md`
## <span aria-hidden="true" class="decorative">💭</span> Întrebări și răspunsuri

<img loading="lazy" width="298" height="298" class="q-and-a-img" src="img/q-and-a.webp" alt="">
      `,
    },
  ],
};

export default roSlideSetTranslations;
