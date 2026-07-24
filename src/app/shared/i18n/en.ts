import enWelcomeTranslations from '@presentations/welcome/i18n/en';
import enCatsTranslations from '@presentations/cats/i18n/en';

const en = {
  ui: {
    menu: 'Presentations',
    settings: 'Settings',
    siteTitle: 'ngx-md-slides',
    by: 'by',
    skipToPresent: 'Skip to "Present"',
    skipToNavigation: 'Skip to "Presentations"',
    skipToSlides: 'Skip to main content',
    noteTitle: 'Note',
    noteText: 'Changes apply instantly',
    layout: 'Layout',
    fixedLayout: 'Fixed',
    fixedLayoutDescription: 'Maintain an aspect ratio of 16:9 (zoom not supported)',
    flexibleLayout: 'Flexible',
    flexibleLayoutDescription: 'Allow web page behavior (zoom supported)',
    width: 'Width',
    decreaseWidth: 'Decrease width',
    increaseWidth: 'Increase width',
    decreaseButtonDisabled: 'Minimum width reached',
    increaseButtonDisabled: 'Maximum width reached',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    language: 'Language',
    present: 'Present',
    press: 'Press',
    or: 'or',
    notFoundTitle: 'Page not found',
    notFoundSubtitle: 'Open a presentation from the "Presentations" menu',
    footerText: 'Custom footer content goes here...',
    iconsCredit: 'Icons by',
    external: 'external',
    noSlides: 'No slides to display...',
    tableOfContents: 'Table of Contents',
    noHeadings: 'No headings to display...',
    requestFullscreen: 'Presenting. Fullscreen activated. Press Escape to exit.',
    exitFullscreen: 'Not presenting. Fullscreen disabled.',
    hideToc: 'Hide Table of Contents',
    showToc: 'Show Table of Contents'
  },
  presentations: {
    welcome: enWelcomeTranslations,
    cats: enCatsTranslations
  },
};

export default en;
