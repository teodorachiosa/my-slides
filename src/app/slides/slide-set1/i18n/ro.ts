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
- <span aria-hidden="true" class="decorative">🗣️</span> **Recunoașterea vocală** - transformă comenzile vocale în interacțiuni
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

În cel mai rau caz, cutiile:

- nu au etichete
- sau au etichetele greșite

<!--RemoveButtonBad-->

Rezultat vorbit de un cititor de ecran: <code>buton</code>.

**Ce face butonul?** Nu știu...
      `,
    },
    {
      content: md`
## <span aria-hidden="true" class="decorative">💬</span> Care este experiența unui utilizator de cititor de ecran?

Constantin va vorbi acum despre experiența sa...
      `,
    },
    {
      content: md``,
    },
    {
      content: md``,
    },
  ],
};

export default roSlideSetTranslations;
