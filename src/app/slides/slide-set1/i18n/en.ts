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
      <img src="img/ced-logo.png" class="ced-logo" alt="CED Romania - Center of Excellence Through Diversity">
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
## About the speakers: Teodora Chiosa

<div class="about-me-images">
  <img src="img/avatar.png" alt="a portrait photo of Teodora smiling at the camera">
  <img src="img/was.png" alt="the Web Accessibility Specialist badge">
</div>

- Web Accessibility Specialist, certified by the International Association of Accessibility Professionals (IAAP)
- Web Programmer, with experience in building interface components for websites
      `,
    },
    {
      content: md`
## About the speakers: Constantin Cristache

- Web & digital accessibility tester, assistive technology user
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
## What is Accessibility?

> The design of products, devices, services, vehicles, or environments to be usable by disabled people.
>
> Source: [Accessibility - Wikipedia](https://en.wikipedia.org/wiki/Accessibility)
      `,
    },

    {
      content: md`
<img class="fullscreen" src="img/environment/braille-buttons.png" alt="elevator buttons using the braille system">
      `,
    },
    {
      content: md`
<img class="fullscreen" src="img/environment/wheelchair-ramp.jpg" alt="a person in a wheelchair using a van's ramp">
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
## What is Web Accessibility?

- The design and implementation of **websites** (as well as PDF documents) so that they can be accessed and used by people with disabilities.
- These websites must work well when used from a **personal computer** and from a **mobile device**.


<div aria-hidden="true" class="decorative center-text desktop-mobile-emoji">
💻📱📄
</div>
      `,
    },
  ],
};

export default enSlideSet1Translations;
