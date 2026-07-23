<div align="center">
  <div><img style="width: 200px; height: auto;" width="554" height="554" alt="avatar2" src="https://github.com/user-attachments/assets/1dbacedd-a8d0-4637-a848-17c3f7e11ab3" /></div>
  <div>
    <a href="https://ngx-md-slides.vercel.app/">Simple demo</a>
  </div>
  <div>
    <a href="https://slides.chiosa.dev/web-a11y-for-everyone">Real slide content demo</a>
  </div>
  <h1>ngx-md-slides</h1>
  <p>Create multi-language presentations, using Markdown, HTML, and Angular components for live examples.</p>
</div>

<br>

[![Quality gate status](https://sonarcloud.io/api/project_badges/measure?project=ngx-md-slides_ngx-md-slides&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ngx-md-slides_ngx-md-slides)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ngx-md-slides_ngx-md-slides&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ngx-md-slides_ngx-md-slides)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ngx-md-slides_ngx-md-slides&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ngx-md-slides_ngx-md-slides)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ngx-md-slides_ngx-md-slides&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ngx-md-slides_ngx-md-slides)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ngx-md-slides_ngx-md-slides&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=ngx-md-slides_ngx-md-slides)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ngx-md-slides_ngx-md-slides&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=ngx-md-slides_ngx-md-slides)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=ngx-md-slides_ngx-md-slides&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=ngx-md-slides_ngx-md-slides)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ngx-md-slides_ngx-md-slides&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=ngx-md-slides_ngx-md-slides)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ngx-md-slides_ngx-md-slides&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=ngx-md-slides_ngx-md-slides)

<br>

> [!CAUTION]
> **This project is a work in progress and might contain bugs!**
>
> Please report any issues in the [Issues](https://github.com/ngx-md-slides/ngx-md-slides/issues) tab.

## Features:

- Markdown and HTML/CSS
- Live examples (Angular components)
- Fullscreen option (via "Present" button)
- Keyboard navigation
  - `Shift` + `F5` or `⌘` + `Return` for fullscreen
  - `Left arrow` and `Page up`, in fullscreen mode, for slide navigation
  - `Right arrow` and `Page down`, in fullscreen mode, for slide navigation
  - `Home` for going to the first slide and `End` for going to the last slide in fullscreen mode
- Theme options (light, dark, system)
- Slide number (upper-left corner of the slide)
- Layout options
  - Fixed - Maintain an aspect ratio of 16:9 (zoom not supported)
  - Flexible - Allow web page behavior (zoom supported)
- Width settings
- Multiple presentations (slide decks)
- Language switcher and i18n setup (translations). Currently supports 2 languages but more can be easily added.
- Responsive UI
- Table of Contents
- Accessibility tested (WCAG 2.2 AA)

## How to use

### Prerequisites

- "I want to modify this project" - Angular knowledge is required.
- "I just want to use the project to make Markdown/HTML-only slides" - Markdown, HTML and CSS knowledge required.

### Folder structure

```
src
|__ app
|____ layout ...
|____ shared ...
|____ presentations <-- all presentations
|______ welcome <-- demo presentation
|________ i18n <-- translations for the "welcome" presentation
```

### Adding live examples

In your Markdown code, add an HTML comment with the name of the live example component you want to use. For example:

`<!--MyExample-->`

### Limitations

Due to the fact that Markdown code is added to Typescript constants via backticks(\`), backticks cannot be used to write code in Markdown because they will trigger Typescript compilation errors.

**Workaround**: Use the HTML <code>code</code> tag for inline code and the triple **tilde**(\~) for code blocks.

|                       Don't                        |              Do              |
| :------------------------------------------------: | :--------------------------: |
|                   &#96;code&#96;                   |       `<code></code>`        |
| &#96;&#96;&#96; p { color: pink; } &#96;&#96;&#96; | `~~~ p { color: pink; } ~~~` |

## How to run

- Clone/Fork this project
- Run `npm install` in the "ngx-md-slides" folder
- Run `npm run start` for local development
- Edit the translations in one of the presentations to get started

## Recommended extensions

- [Array Index Inlay](https://marketplace.visualstudio.com/items?itemName=antfu.array-index-inlay) to make it easier to know which slide you're currently editing
- [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) to highlight Markdown and HTML code in Typescript files

## Credits

- Icons: [Lucide](https://lucide.dev/)
