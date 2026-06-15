# ngx-md-slides

A way to make multi-lingual presentations, using Markdown and Angular components for live examples.

## Features:

- Markdown support
- Add reusable components support (via comment in Markdown code with the name of the Angular component)
- Fullscreen option (via "Present" button)
- Keyboard navigation
  - `Ctrl` + `F5` for fullscreen
  - `Left arrow` and `Page up`, in fullscreen mode, for slide navigation
  - `Right arrow` and `Page down`, in fullscreen mode, for slide navigation
  - `Home` for going to the first slide and `End` for going to the last slide, in fullscreen mode
- Theme options (light, dark, system)
- Slide number (upper-left corner of the slide)
- Card view (Web view) that is zoom-able
- Max width settings
- Routing (switch between slide sets)
- Language switcher and i18n setup (translations) - only 2 languages for now
- Responsive UI
- Accessibility tested (WCAG 2.2 AA)

## To do:

- [ ] Add total number of pages and a "jump to page" feature
- [ ] Perform periodic accessibility checks (WCAG 2.2 minimum) 
- [ ] Add Accessibility statement
- [ ] Save presentation as PDF (?)
- [ ] Add loading states
- [ ] Implement non-hardcoded languages (and use a `select` element)

## Folder structure
```
src
|__ app
|____ layout ...
|____ shared ...
|____ slides <-- all slide sets
|______ slide-set1 <-- demo slide set
|________ i18n <-- translations for slide-set1
```

## How to run

- clone/fork and clone this project
- run `npm install` in the "ngx-md-slides" folder
- run `npm run start` for local development
- edit the example slide sets

## Credits

- Icons: [Lucide](https://lucide.dev/)
