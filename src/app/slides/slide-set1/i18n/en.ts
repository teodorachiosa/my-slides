import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const enSlideSet1Translations: TranslatedSlideSet = {
  title: '\\Web Accessibility for Everyone',
  slides: [
    {
      backgroundColor: '\\var(--violet)',
      content: md`
<div class="title-slide">

<!--A11yIcon-->

  <h1>
    <span>Web Accessibility</span>
    <span>for Everyone</span>
  </h1>

  <div class="footer">
    <span class="presenters">
      <img fetchpriority="high" src="img/ced-logo.webp" class="ced-logo" width="161" height="34" alt="CED Romania - Center of Excellence Through Diversity">
       and <strong>Teodora Chiosa</strong>
    </span>
    <span>March 23<sup>rd</sup> 2026</span>
  </div>

</div>
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## About the speakers: </br> <span class="f-w-normal">Teodora Chiosa</span>

<div class="about-me-images">
  <img fetchpriority="high" src="img/was.webp" width="81" height="81" alt="the Web Accessibility Specialist badge">
</div>

- [Web Accessibility Specialist](https://www.credly.com/badges/8c7936b4-35be-4aa2-9064-eb57ce746db3/public_url) Web Accessibility Specialist, certified by the International Association of Accessibility Professionals (IAAP)
- Web Programmer, with experience in building interface components for websites
- About 6 years of experience with Web Accessibility
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## About the speakers: </br> <span class="f-w-normal">Constantin Cristache</span>

- **Teacher** at "Iris" Special Theoretical Highschool from Timișoara, Romania
- **Trainer** at CED Romania
- Web & digital accessibility **tester**
- **Blind assistive technology user**
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
## What is Accessibility?

> The design of products, devices, services, vehicles, or environments to be usable by people with disabilities.
>
> [Accessibility - Wikipedia](https://en.wikipedia.org/wiki/Accessibility)
      `,
    },
    {
      content: md`
<img loading="lazy" class="fullscreen" src="img/environment/braille-buttons.webp" alt="elevator buttons using the braille system">
      `,
    },
    {
      content: md`
<img loading="lazy" class="fullscreen" src="img/environment/wheelchair-ramp.webp" alt="a person in a wheelchair using a van's ramp">
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
## Types of disabilities

- <span aria-hidden="true" class="decorative">👁️</span> Persons with color blindness, visual impairments (glaucoma, cataracts) or blindness
- <span aria-hidden="true" class="decorative">👂</span> Persons with hearing impairments or deafness
- <span aria-hidden="true" class="decorative">🖐️</span> Persons with arthritis, Parkinson's or paralysis
- <span aria-hidden="true" class="decorative">🧠</span> Persons with ADHD, dyslexia, autism or intelectual disability

<br/>

> Some people have **multiple disabilities**.

> Some disabilities are **invisible**.
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
## What is Web Accessibility?

- The design and implementation of **websites** (as well as PDF documents) so that they can be accessed and used by people with disabilities.
- These websites must work well when used from a **personal computer** and from a **mobile device**.

<div aria-hidden="true" class="decorative center-text desktop-mobile-emoji">
💻📱📄
</div>
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
## What does a website look like "behind the scenes"?

We could imagine a website's structure as a box with various other boxes inside.

<div aria-hidden="true" class="decorative package-emoji">📦</div>
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
<div class="side-by-side">
  <img loading="lazy" src="img/website/boxes.webp" alt="cardboard boxes arranged chaotically and without labels">
  <img loading="lazy" src="img/website/boxes-labelled-en.webp" alt="labelled cardboard boxes. On most of the boxes there is a label: cables, clothes, books, documents, photos">
</div>
      `,
    },
    {
      backgroundColor: '\\var(--pink)',
      content: md`
## How does a person with disabilities use a website?

<img loading="lazy" class="interaction-diagram" width="422" height="319" src="img/website/user-interaction-en.webp" alt="Diagramă care prezintă în mod simplificat metodele de interacțiune dintre utilizatori și site-uri web. Detalii mai jos.">
      `,
    },
    {
      backgroundColor: '\\var(--pink)',
      content: md`
## What is assistive technology?

Assistive technology includes software or hardware which **helps persons with disabilities have a better experience when interacting with the digital world**.

Examples:

- <span aria-hidden="true" class="decorative">🔊</span> **Screen readers** - transform text to speech
- <span aria-hidden="true" class="decorative">🔍</span> **Magnifier** - makes displayed content larger and more zoomed in
- <span aria-hidden="true" class="decorative">🗣️</span> **Speech recognition** - transforms vocal commands into interactions
      `,
    },
    {
      backgroundColor: '\\var(--emerald)',
      content: md`
## <span aria-hidden="true" class="decorative">✅</span> Example: an accessible button

Best case scenario, the "boxes" have labels.

A sighted user sees the "box" contents directly:

<!--RemoveButtonEn-->

Screen reader users hear the label of the "box".

<br/>

**Spoken screen reader output**: <code>Remove button</code>.
      `,
    },
    {
      backgroundColor: '\\var(--red)',
      content: md`
## <span aria-hidden="true" class="decorative">❌</span> Example: an inaccessible button

Sometimes, the "boxes":

- don't have labels
- have the wrong labels

<!--RemoveButtonBad--> (You can't see it, but this button doesn't have a label in the code)

<br/>
<br/>

**Spoken screen reader output**: <code>button</code>. **What's its purpose?**

> The right code and the right structure are essential for accessibility!
      `,
    },
    {
      backgroundColor: '\\var(--yellow)',
      content: md`
## Why is web accessibility important?

> Every person has the right to **autonomy**.

A person with disabilities should not encounter barriers when:

<span aria-hidden="true" class="decorative barrier">🚧</span>

- looking up information
- enjoying a movie
- shopping online
- buying museum tickets
- using their banking app
- etc.
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## <span aria-hidden="true" class="decorative">⚖️</span> What does the law say?

There two main laws relevant for the digital world (in Europe):

1. [EU Directive 2016/2102](https://eur-lex.europa.eu/legal-content/RO/TXT/HTML/?uri=CELEX:32016L2102) - website and mobile application accessibility for the public sector
   - Came into effect between 2019 and 2021
   - Only applies to **government services**
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
2. [EU Directive 2019/882](https://eur-lex.europa.eu/legal-content/RO/TXT/HTML/?uri=CELEX:32019L0882) - accessability requirements for products and services
   - Also known as the **European Accessibility Act**
   - Came into effect in 2025 and covers:
     - <span aria-hidden="true" class="decorative smaller">💻</span> PCs, smartphones and operating systems
     - <span aria-hidden="true" class="decorative smaller">💵</span> ATMs, self-pay terminals
     - <span aria-hidden="true" class="decorative smaller">📺</span> audio-visual communication (TV)
     - <span aria-hidden="true" class="decorative smaller">📞</span> the 112 emergency number
     - <span aria-hidden="true" class="decorative smaller">🚋</span> transport services
     - <span aria-hidden="true" class="decorative smaller">🪙</span> banking services
     - <span aria-hidden="true" class="decorative smaller">🛒</span> e-commerce (shopping) websites
     - <span aria-hidden="true" class="decorative smaller">📙</span> e-books
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
### The accessibility guidelines

The laws require that websites apply the **minimum** requirements of the **[Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG22/)** (WCAG).

Website content must be:

<img loading="lazy" width="364" height="113" class="pour-img" src="img/wcag/pour.webp" alt="">

- **P**erceivable
- **O**perable
- **U**nderstandable
- **R**obust
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
#### Perceivable

- Alternative text for images
- Captions for videos
- Transcriptions for podcasts and videos
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
<img loading="lazy" width="145" height="65" class="cloud-img" src="img/website/cloudy.webp" alt="a screenshot with the text: 10 degrees celsius, 19% chance of rain, humidity 49%, wind 10 kilometers per hour. The screenshot also includes an illustration of a cloud">

Example: Alternative text for the cloud image?

"Cloudy".
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
<img loading="lazy" class="fullscreen" src="img/disabilities/captions-transcripts-en.webp" alt="screenshot of a video on Youtube. The red border shows the location of the button used to toggle captions. Captions are shown in the bottom center part of the video. Another red border highlights the panel with the transcription of the video.">
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
#### Operable

- Interactions without barriers when using a keyboard
- Enough time for interactions
- No flashes that could cause epileptic seizures
- Easy navigation in the page:
  - Page title is present
  - Headings are used to ...
  - Search fields
  - Focus de la tastatură vizibil
  - Butoane destul de mari
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
### POUR: Understandable
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
### POUR: Robust
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`

### <span class="f-w-normal">"The </span>minimum <span class="f-w-normal">requirements of the Web Content Accessibility Guidelines"?</span>


<div class="center-pyramid">
  <img loading="lazy" width="827" height="321" src="img/wcag/levels-en.webp" alt="Pyramid diagram showing WCAG levels: Level A - Essential support, Level AA - Ideal support - the minimum adopted by legislation, and Level AAA - Specialized support">
</div>
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
<img loading="lazy" width="262" height="328" class="float-overlay" src="img/website/overlay.webp" alt="">

## Quick fixes... </br><span class="f-w-normal">Are they effective?</span>

Some companies offer accessibility solutions called **overlays**.

They are easy to install on websites.

They usually look like a button that goes on top of the website's content.
      `,
    },
    {
      backgroundColor: '\\var(--red)',
      content: md`
### <span aria-hidden="true" class="decorative">❌</span> The problem with overlays

- They **make promises they can't keep**.
  - They don't handle all the criteria required by legislation.
  - They can't repair the structure or content of the web page, instead focusing mostly on visual improvements.
- They promote **poor standardization and compatibility** because each overlay product is different.
- Overlay functionalities can be **hard to reach** (e.g. unlabeled button, overlay button as one of the last elements in the page).
- They can create new barriers.

<span class="smaller">Details</span>: [Overlay Factsheet](https://overlayfactsheet.com/en/) and [Overlay Timeline](https://overlaytimeline.com/).
      `,
    },
    {
      content: md`
<img loading="lazy" class="fullscreen" src="img/website/lawsuit.webp" alt="a screenshot of an article with the title: FTC orders AI accessibility startup accessiBe to pay $1M for misleading advertising">
      `,
    },
    {
      backgroundColor: '\\var(--red)',
      content: md`
### A website with an overlay <br> <span class="nu">doesn't</span> necessarily mean an accessible website!

When accessibility is truly taken into consideration:

- it's **planned** and **integrated into the workflow** of designers, engineers, testers
- it can take months for an initial remediation (for large and complex websites)
- accessibility is always taken into account when new features are added
      `,
    },
    {
      backgroundColor: '\\var(--green)',
      content: md`
## <span aria-hidden="true" class="decorative">💚</span> How to tell if a website is indeed accessible?

- It contains an **Accessibility Statement**.
- It's a breeze to use the website, no matter how you try to interact with it (using mouse, keyboard, assistive technology etc.).

### Demo:

- [Easy checks](https://www.w3.org/WAI/test-evaluate/easy-checks/) that can be applied to [GOV.uk](https://gov.uk).
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## Resources

- [European Accessibility Act (EAA)](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en)
- [WCAG 2 at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)
- [NVDA](https://www.nvaccess.org/download/) - Screen reader (Windows)
      `,
    },
    {
      backgroundColor: '\\var(--green)',
      content: md`
## <span aria-hidden="true" class="decorative">💭</span> Questions and answers

<img loading="lazy" width="298" height="298" class="q-and-a-img" src="img/q-and-a.webp" alt="">
      `,
    },
  ],
};

export default enSlideSet1Translations;
