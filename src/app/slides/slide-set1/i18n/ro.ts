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
## Despre prezentatori: Teodora Chiosa

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
## Despre prezentatori: Constantin Cristache

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
- Aceste site-uri trebuie să fie utilizabile și pe **calculator**, dar și de pe **telefonul mobil**.


<div aria-hidden="true" class="decorative center-text desktop-mobile-emoji">
💻📱📄
</div>
      `,
    },
  ],
};

export default roSlideSetTranslations;
