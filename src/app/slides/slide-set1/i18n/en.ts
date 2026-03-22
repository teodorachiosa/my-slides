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
## About the speakers: </br> <span class="f-w-normal">Teodora Chiosa</span>

<div class="about-me-images">
  <img src="img/was.png" alt="the Web Accessibility Specialist badge">
</div>

- Web Accessibility Specialist, certified by the International Association of Accessibility Professionals (IAAP)
- Web Programmer, with experience in building interface components for websites
      `,
    },
    {
      content: md`
## About the speakers: </br> <span class="f-w-normal">Constantin Cristache</span>

- Web & digital accessibility tester
- Blind assistive technology user
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
## What is Accessibility?

> The design of products, devices, services, vehicles, or environments to be usable by disabled people.
>
> [Accessibility - Wikipedia](https://en.wikipedia.org/wiki/Accessibility)
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
## Types of disabilities
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
## What does a website look like "under the hood"?

We could imagine a website's structure as a box with various other boxes inside.

<div aria-hidden="true" class="decorative package-emoji">📦</div>
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
<div class="side-by-side">
  <img src="img/website/boxes.jpg" alt="cardboard boxes arranged chaotically and without labels">
  <img src="img/website/boxes-labelled-en.png" alt="labelled cardboard boxes. On most of the boxes there is a label: cables, clothes, books, documents, photos">
</div>
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
## How does a person with disabilities use a website?

Reminder: Translate image and add image description...
      `,
    },
    {
      content: md`
## What is assistive technology?

...
      `,
    },
    {
      backgroundColor: '\\var(--emerald)',
      content: md`
## <span aria-hidden="true" class="decorative">✅</span> Example: an accessible button

Best case scenario, the "boxes" have labels.

A sighted user sees the box contents directly:

<!--RemoveButtonEn-->


Screen reader users hear the label of the box:

**Spoken screen reader output**: <code>Remove button</code>.
      `,
    },
    {
      backgroundColor: '\\var(--red)',
      content: md`
## <span aria-hidden="true" class="decorative">❌</span> Example: an inaccessible button

Sometimes, the boxes:

- don't have labels
- have the wrong labels

<!--RemoveButtonBad-->

**Spoken screen reader output**: <code>button</code>.

**What does the button do?** I don't know...
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
## Why is web accessibility important?
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## <span aria-hidden="true" class="decorative">⚖️</span> What does the law say (1)?

First EU directive
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## <span aria-hidden="true" class="decorative">⚖️</span> What does the law say (2)?

Second EU directive
      `,
    },
    {
      content: md`
### WCAG
      `,
    },
    {
      content: md`
### POUR: Perceivable
      `,
    },
    {
      content: md`
### POUR: Perceivable (example)
      `,
    },
    {
      content: md`
### POUR: Operable
      `,
    },
    {
      content: md`
### POUR: Understandable
      `,
    },
    {
      content: md`
### POUR: Robust
      `,
    },
    {
      content: md`
## Minimum support?
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
## Quick solutions... are they effective?
      `,
    },

    {
      backgroundColor: '\\var(--red)',
      content: md`
### The issues with overlays
      `,
    },
        {
      content: md`
Lawsuit screenshot
      `
    },
    {
      backgroundColor: '\\var(--red)',
      content: md`
## A website with an overlay does not mean an accessible website!
      `,
    },
    {
      backgroundColor: '\\var(--green)',
      content: md`
## How to tell if a website might truly be accessible?
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## Useful links and sources
      `,
    },
    {
      backgroundColor: '\\var(--green)',
      content: md`
## Q&A
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## QR code
      `,
    },
  ],
};

export default enSlideSet1Translations;
