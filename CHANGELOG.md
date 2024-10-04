# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.7]

- upgraded to `khao-maletv0.0.13`
- added sizeFactors up to 20 to `<khao-icon>`

## [1.6.6]

-`<khao-image>` can now handle svg images correctly

## [1.6.5]

- added `--khao-image-border-radius` to `<khao-image>`

## [1.6.4]

- added `customMinWidth` to `<khao-button>`
- added `showButtonOnFirstLoad` in `<khao-infinite-scoll>`

## [1.6.3]

- improved handling of `numberOfPages` in `<khao-infinite-scoll>`

## [1.6.2]

- added `numberOfPages` to `<khao-infinite-scoll>`

## [1.6.1]

- added `khao-spinner`
- use `khao-spinner` in `<khao-infinite-scoll>`
- hide button if there is no more content in `<khao-infinite-scoll>`

## [1.6.0]

- changed behavior of `<khao-infinite-scoll>` by adding a load more button

## [1.5.6]

- added `--khao-image-caption-line-height` custom property to `khao-image`
-

## [1.5.5]

- added `khao-badge` component
- moved repo to khao ui github org

## [1.5.4]

- added margin 0 to figure in `khao-image` component

## [1.5.3]

- reduced padding on caption display for `khao-image` component

## [1.5.2]

- optimized caption display for `khao-image` component

## [1.5.1]

- added `khao-image` component with WebP Support and optional lazy loading

## [1.5.0]

- upgraded to Storybook 8.3.0

## [1.4.28]

- added attribute `size` to `khao-scroll-to-top` component
- use shadow-dom in `khao-scroll-to-top` component

## [1.4.27]

- use size `medium` for `khao-scroll-to-top` component

## [1.4.26]

- remove debug border in `khao-social-icons`
- improved and exported `khao-scroll-to-top` component

## [1.4.25]

- added attribute `size` to `khao-icon-button`
- made widget `khao-social-icons` more compact
- added `khao-scroll-to-top` component

## [1.4.24]

- optimized padding for `khao-tab-bar` wrapper
- added attribute `circle` to `khao-icon-button`

## [1.4.23]

- fixed display of active tab in `khao-tab-bar` for very small screens

## [1.4.22]

- optimizes `khao-tab-bar` for different length of label values

## [1.4.21]

- added `centered` attribute to `khao-tab-bar`

## [1.4.20]

- removed debug messages and borders

## [1.4.19]

- added size `flex` to `khao-tab`
- added `maxWidth` attribute to `khao-tab-bar`

## [1.4.18]

- reduced sizes in `khao-tab`

## [1.4.17]

- added further improvemen for scrolling of active tab in to view in `khao-tab-bar`

## [1.4.16]

- improved scrolling of active tab in to view in `khao-tab-bar`

## [1.4.15]

- added helper class `Breakpoint` and used it in `khao-tab`

## [1.4.14]

- deprecate `khao-tabs-bar` in favor of `khao-tab-bar`

## [1.4.13]

- added `acticeTaBKey` to `tab-bar`

## [1.4.12]

- added alternative `tab-bar` component which gets tabs as json object.

## [1.4.11]

- changed style of `khao-tab`

## [1.4.10]

- `khao-infinte-scroll` can be triggered multiple times

## [1.4.9]

- `khao-infinte-scroll` trigggers lazy load when it becomes visible

## [1.4.8]

- `khao-infinte-scroll` component emits event `khao-infinite-scroll-loaded-more`

## [1.4.7]

- added `khao-chip` component
- added `khao-infinte-scroll` component

## [1.4.6]

- added size to `khao-tab`
- preload tabComponent in `khao-tabs-bar`

## [1.4.5]

- added `khao-tabs-bar` and `khao-tab`

## [1.4.4]

- improved spacing of `khao-link`

## [1.4.3]

- added `iconOpacity` to `khao-link`

## [1.4.2]

- added cutsom proprtery `--khao-card-title-size`
- upgraded to `khao-maletv0.0.12`
- changed back `help` icon in `khao-icon` (again)
- added `youtube` icon to `khao-icon`

## [1.4.1]

- renamed and changed `meta-region` in `khao-icon`

## [1.4.0]

- changed back `help` icon in `khao-icon` (again)
- added `meta-thai-region` to `khao-icon`
- added `meta-meal` to `khao-icon`

## [1.3.9]

- changed `help` icon in `khao-icon` (again)

## [1.3.8]

- changed `help` icon in `khao-icon` (again)

## [1.3.7]

- introduced `priority` to `khao-link`

## [1.3.6]

- added `content-with-icon` component.

## [1.3.5]

- reducted width of `khao-button` for size `compact`

## [1.3.4]

- added meta-icons to `khao-icon`

## [1.3.3]

- fixed instagram url in `khao-social-buttons`

## [1.3.2]

- fixed newsletter link and rss link in `khao-social-buttons`

## [1.3.1]

- added export for `khao-social-buttons`
- unified utils methods

## [1.3.0]

- added `newsletterTeaser` attribute to `khao-social-buttons`
- added icons `navigate-back` and `navigate-forward` to to `khao-icon`
- added `search` icon to `khao-icon`
- changed help icon in `khao-icon`
- added `opensNewWindow` attribute to `khao-link`
- (!) ommited `khao-card-notice`, you can use `khao-card` to layout card accordingly

## [1.2.3]

- added icons `arrow-down`, `arrow-left`, `arrow-right`, and `arrow-up`
- added icon `play`
- added aria-label to `khao-card`

## [1.2.2]

- deprecated `khao-card-notice`
- improved layout for `khao-link`

## [1.2.1]

- fixed default `iconLocation` behavior on `khao-link`

## [1.2.0]

- (!) changed `khao-link` interface: label now has to given as child element.
- improved `khao-link` display
- added `iconLocation` prop to `khao-link`

## [1.1.1]

- added icon `translation`
- added icon `reiskoch-logo`

## [1.1.0]

- adjusted build
- changed artefact names

## [1.0.0]

- removed lib build
- made `khao-malet` a dev dependency
- updated README.md

## [0.0.19]

- changed output artifacts for splitted build

## [0.0.18]

- fixed `khao-share-buttons`

## [0.0.17]

- added icon `help`

## [0.0.16]

- fix `khao-link` margin when there is no icon

## [0.0.15]

- added `khao-link` component
- removed wrapper around svg icons in all components
- added sizeFactor prop to icon component
- added icon storys
- increased size of `khao-map-marker-pin`

## [0.0.14]

- added title and icon to Card component
- added `khao-card-notice` component

## [0.0.13]

- added `khao-card` component
- brought components and their stories to the same folder
- unified icon size for different button sizes

## [0.0.12]

- added `khao-social-buttons`
- added size attribute to button

## [0.0.11]

- added icons to storybook
- unified handling of icons
- updated khao-malet to v0.0.10

## [0.0.10]

- added `khao-icon-button` component
- updated `khao-malet` to v0.0.7

## [0.0.0 - 0.0.9]

- Basic Setup
