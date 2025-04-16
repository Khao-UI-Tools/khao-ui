# Changelog

## 4.0.6

- re-adjusted spacing in `khao-iamge`

## 4.0.5

- improved spacing in `khao-image` component

## 4.0.4

- added parametet `loadingAnimation` to `khao-image`
- set image dimension to picture tag in `khao-image`

## 4.0.3

- added skeleton loader to `khao-image` componeant

## 4.0.2

- improved reflective behavior of `khao-video`

## 4.0.1

- make `videoId` in `khao-video` reflective

## 4.0.0

- renamed icon `meta-author` into `person`
- renamed icon `meta-category` to `folder`
- renamed icon `meta-lang` into `globe`
- renamed icon `meta-regin` into `map`
- renamed icon `meta-meal` to `noodle-soup`
- renamed icon `meta-date` to `date-time`
- added icon `knife`
- added icon `cooking-pot`
- removed debug messages

## 3.6.1

- added debug messages to textfield

## 3.6.0

- added keyboard events to `khao-text-field`

## 3.5.9

- added `auto-focus` to `khao-text-field`

## 3.5.8

- added `disabled` prop to `khao-text-field`
- changed change handler on `khao-text-field`

## 3.5.7

- `khao-text-field` fires custom event `khao-text-field-change`
- changed website in package.json

## 3.5.6

- added property `iconName` to `khao-textfield`
- added priority `secondary-emphasized` to `khao-link`
- added phone icon

## 3.5.5

- improved spacing of `khao-link`

## 3.5.4

- use "chilled" text decoration in `khao-link`
- improved focus state for `khao-link`

## 3.5.3

- use nav-tag as wrapper for `khao-pagination`

## 3.5.2

- added default and debugging messeages to `khao-pagintaion`

## 3.5.1

- Use type string for `currentPage` and `totalPages` in `khao-pagination`

## 3.5.0

- added `khao-pagination` and `khao-pagintaion-item` components

## 3.4.3

- moved all stories to stories folder

## 3.4.2

- added `dismissable` to `khao-card`
- moved story of `khao-card` to stories folder

## 3.4.1

- added `nowrap` to `khao-button`

## 3.4.0

- refactored `tab` to have fixed widths
- removed outer container from `tab-bar`
- improved ed `scrollShadow` for `ui-tab-bar`

## 3.2.14

- upgraded to `khao-malet` v2.0.6
- added `scrollShadow` to `ui-tab-bar`

## 3.2.13

- upgraded to `khao-malet` v2.0.5

## 3.2.11

- `khao-remote-control` is invisible now
- remove `change.log` in `khao-remote-controlled` and `khao-remote-control`

## 3.2.10

- added `khao-remote-controlled` and `khao-remote-control`

## 3.2.8

- added `--khao-marker-pin-icon-offset-y` and `--khao-marker-pin-icon-offset-x`

## 3.2.7

- added fodus state to form fields

## 3.2.5

- `khao-select-field` fires custom event `khao-select-field-change`

## 3.2.0

- renamed `khao-ui-textfield` into `khao-text-field`
- renamed `khao-ui-selectfield` into `khao-select-field`

## 3.1.6

- added `mortar-pestle` icon
- added `fast` icon
- use yet other icons for `navigate-back` and `navigate-forward`

## 3.1.5

- use `selectedValue` instead of `value` for `khao-ui-selectfield`

## 3.1.4

- use `min-height` instead of `height` for `form-field`

## 3.1.3

- use fatter icons for `navigate-back` and `navigate-forward`
- added prop `placeholder` to `khao-ui-textfield`
- added types `search`, `tel`, `url` to `khao-ui-textfield`
- added `khao-ui-selectfield`

## 3.1.2

added `id` prop to `khao-ui-textfield`

## 3.1.1

- added `khao-ui-textfield` component

## 3.0.9

- use smaller icons for `navigate-back` and `navigate-forward`

## 3.0.8

- added optional `imageCaption` to `khao-ad`

## 3.0.7

- re-added version to chunks

## 3.0.6

- upgraded to `khao-malet 2.0.4`
- added `laef` to `khao-icon`

## 3.0.5

- upgraded to `khao-malet 2.0.3`

## 3.0.4

- upgraded to `khao-malet 2.0.2`

## 3.0.3

- upgraded to `khao-malet 2.0.1`

## 3.0.2

- added `surface-high`, `surface-highest` , `surface-low`, `surface-lowest` as filling option to `khao-card`
- set `surface` as new defult filling for `khao-card`

## 3.0.1

- maded `khao-chip` type `outline` transparent

## 3.0.0

- use `khao-malet 2.0.0` with new color schema and system
- adjusted colors

## 2.0.2

- added error handling to `khao-image`
- add `--khao-image-fallback-background` to `khao-image`

## 2.0.1

- added `icon-reload`
- ommit version in artefact names

## 2.0.0

- upgraded to `khoa-malet v1.0.0`
- adjusted to font-size changes from Design System
- outline color for `khao-chip` is now `--khao-sys-color-outline`

## 1.9.3

- added focus state for `khao-video`
- removed underline for focus state of secondary Link in `khao-link`

## 1.9.2

- upgraded to `khao-malet@0.0.19`
- added `label` prop to `khao-link`, slot is deprecated now!
- improved focus state of `khao-link`
- added bg-color hover/focus and active state to `khao-tab`
- replace slot in `khao-tab` by `label`

## 1.9.1

- upgraded to `khao-malet@0.0.18`
- improve focus state for buttons
- prevent empty hrefs for all buttons (to ensure focus)

## 1.9.0

- re-adjusted bg color for `khao-ui-card`

## 1.8.9

- upgraded to `khao-malet@0.0.17`
- use darker surface variant for `khao-ui-card`

## 1.8.8

- removed focus-trap from `khao-ui-share-buttons`
- upgraded to `khao-malet@0.0.16`

## 1.8.7

- renamed svelte-chunk
- improved focus state for `khao-ui-link`
- added focus-trap to `khao-ui-share-buttons`
- upgraded node version to `18.17.0`

## 1.8.5

- moved `khao-ui-ad` to seperate chunk
- moved `khao-ui-button-pay-pal-donate` to seperate chunk
- moved `khao-ui-button-steady` to seperate chunk
- moved `khao-ui-content-with-icon` to seperate chunk
- moved `khao-ui-icon-button` to seperate chunk
- moved `khao-ui-link` to seperate chunk
- moved `khao-ui-marker-pin` to seperate chunk
- moved `khao-ui-scroll-to-top` to seperate chunk
- moved `khao-ui-social-buttons` to seperate chunk
- removed `ButtonSizeDefault` and `isTrue`
- included `openInNewWindow` in `khao-ui-link` and `khao-ui-share-buttons`

## 1.8.4

- added chunk suffix to chunk

## 1.8.3

- make chunks independent
- moved `khao-ui-icon` to seperate chunk

## 1.8.2

- moved `khao-ui-badge`, `khao-ui-tab-bar`, `khao-ui-chip` and `khao-ui-share-buttons` to seperate chunks
- removed dummy slot content in `khao-ui-card` und `khao-ui-chip`

## 1.8.1

- fixed loading of video in `khao-ui-video`
- moved `khao-ui-image` to seperate chunk

## 1.8.0

- moved `khao-ui-infinite-scroll`, `khao-ui-tab-bar`, and `khao-ui-video` to seperate chunks

## 1.7.9

- moved `khao-ui-card` and `khao-ui-button` to seperate chunks

## 1.7.8

- added `khao-ui-image-position` to `khao-ui-image`
- removed ununised bind in `khao-ui-image`

## 1.7.7

- simlified styles for `khao-ui-image`

## 1.7.6

- fixed `startTime` and `autoplay` in `khao-ui-video` component
- renamed `startTime` into `start` (/!\)

## 1.7.5

- added `startTime` to `khao-ui-video` component

## 1.7.4

- fixed `khao-ui-video` consent text and icon for mobile devices

## 1.7.3

- removed consentText from caption in `khao-ui-video` component

## 1.7.2

- introduced `khao-ui-video` component

## 1.7.1

- upgraded to `khao-maletv0.0.14`
- added `.color-surface-variantd30` to color palette

## 1.7.0

- added `lazyLoading` attribute to `<khao-ui-image>`
- removed `lazyloadSrc` and `lazyloadThreshold` from `<khao-ui-image>` (/!\)

## 1.6.7

- upgraded to `khao-maletv0.0.13`
- added sizeFactors up to 20 to `<khao-icon>`

## 1.6.6

-`<khao-ui-image>` can now handle svg images correctly

## 1.6.5

- added `--khao-ui-image-border-radius` to `<khao-ui-image>`

## 1.6.4

- added `customMinWidth` to `<khao-button>`
- added `showButtonOnFirstLoad` in `<khao-infinite-scoll>`

## 1.6.3

- improved handling of `numberOfPages` in `<khao-infinite-scoll>`

## 1.6.2

- added `numberOfPages` to `<khao-infinite-scoll>`

## 1.6.1

- added `khao-spinner`
- use `khao-spinner` in `<khao-infinite-scoll>`
- hide button if there is no more content in `<khao-infinite-scoll>`

## 1.6.0

- changed behavior of `<khao-infinite-scoll>` by adding a load more button

## 1.5.6

- added `--khao-ui-image-caption-line-height` custom property to `khao-ui-image`
-

## 1.5.5

- added `khao-badge` component
- moved repo to khao ui github org

## 1.5.4

- added margin 0 to figure in `khao-ui-image` component

## 1.5.3

- reduced padding on caption display for `khao-ui-image` component

## 1.5.2

- optimized caption display for `khao-ui-image` component

## 1.5.1

- added `khao-ui-image` component with WebP Support and optional lazy loading

## 1.5.0

- upgraded to Storybook 8.3.0

## 1.4.28

- added attribute `size` to `khao-scroll-to-top` component
- use shadow-dom in `khao-scroll-to-top` component

## 1.4.27

- use size `medium` for `khao-scroll-to-top` component

## 1.4.26

- remove debug border in `khao-social-icons`
- improved and exported `khao-scroll-to-top` component

## 1.4.25

- added attribute `size` to `khao-icon-button`
- made widget `khao-social-icons` more compact
- added `khao-scroll-to-top` component

## 1.4.24

- optimized padding for `khao-tab-bar` wrapper
- added attribute `circle` to `khao-icon-button`

## 1.4.23

- fixed display of active tab in `khao-tab-bar` for very small screens

## 1.4.22

- optimizes `khao-tab-bar` for different length of label values

## 1.4.21

- added `centered` attribute to `khao-tab-bar`

## 1.4.20

- removed debug messages and borders

## 1.4.19

- added size `flex` to `khao-tab`
- added `maxWidth` attribute to `khao-tab-bar`

## 1.4.18

- reduced sizes in `khao-tab`

## 1.4.17

- added further improvemen for scrolling of active tab in to view in `khao-tab-bar`

## 1.4.16

- improved scrolling of active tab in to view in `khao-tab-bar`

## 1.4.15

- added helper class `Breakpoint` and used it in `khao-tab`

## 1.4.14

- deprecate `khao-tabs-bar` in favor of `khao-tab-bar`

## 1.4.13

- added `acticeTaBKey` to `tab-bar`

## 1.4.12

- added alternative `tab-bar` component which gets tabs as json object.

## 1.4.11

- changed style of `khao-tab`

## 1.4.10

- `khao-infinte-scroll` can be triggered multiple times

## 1.4.9

- `khao-infinte-scroll` trigggers lazy load when it becomes visible

## 1.4.8

- `khao-infinte-scroll` component emits event `khao-infinite-scroll-loaded-more`

## 1.4.7

- added `khao-chip` component
- added `khao-infinte-scroll` component

## 1.4.6

- added size to `khao-tab`
- preload tabComponent in `khao-tabs-bar`

## 1.4.5

- added `khao-tabs-bar` and `khao-tab`

## 1.4.4

- improved spacing of `khao-link`

## 1.4.3

- added `iconOpacity` to `khao-link`

## 1.4.2

- added cutsom proprtery `--khao-card-title-size`
- upgraded to `khao-maletv0.0.12`
- changed back `help` icon in `khao-icon` (again)
- added `youtube` icon to `khao-icon`

## 1.4.1

- renamed and changed `meta-region` in `khao-icon`

## 1.4.0

- changed back `help` icon in `khao-icon` (again)
- added `meta-thai-region` to `khao-icon`
- added `meta-meal` to `khao-icon`

## 1.3.9

- changed `help` icon in `khao-icon` (again)

## 1.3.8

- changed `help` icon in `khao-icon` (again)

## 1.3.7

- introduced `priority` to `khao-link`

## 1.3.6

- added `content-with-icon` component.

## 1.3.5

- reducted width of `khao-button` for size `compact`

## 1.3.4

- added meta-icons to `khao-icon`

## 1.3.3

- fixed instagram url in `khao-social-buttons`

## 1.3.2

- fixed newsletter link and rss link in `khao-social-buttons`

## 1.3.1

- added export for `khao-social-buttons`
- unified utils methods

## 1.3.0

- added `newsletterTeaser` attribute to `khao-social-buttons`
- added icons `navigate-back` and `navigate-forward` to to `khao-icon`
- added `search` icon to `khao-icon`
- changed help icon in `khao-icon`
- added `opensNewWindow` attribute to `khao-link`
- (!) ommited `khao-card-notice`, you can use `khao-card` to layout card accordingly

## 1.2.3

- added icons `arrow-down`, `arrow-left`, `arrow-right`, and `arrow-up`
- added icon `play`
- added aria-label to `khao-card`

## 1.2.2

- deprecated `khao-card-notice`
- improved layout for `khao-link`

## 1.2.1

- fixed default `iconLocation` behavior on `khao-link`

## 1.2.0

- (!) changed `khao-link` interface: label now has to given as child element.
- improved `khao-link` display
- added `iconLocation` prop to `khao-link`

## 1.1.1

- added icon `translation`
- added icon `reiskoch-logo`

## 1.1.0

- adjusted build
- changed artefact names

## 1.0.0

- removed lib build
- made `khao-malet` a dev dependency
- updated README.md

## 0.0.19

- changed output artifacts for splitted build

## 0.0.18

- fixed `khao-share-buttons`

## 0.0.17

- added icon `help`

## 0.0.16

- fix `khao-link` margin when there is no icon

## 0.0.15

- added `khao-link` component
- removed wrapper around svg icons in all components
- added sizeFactor prop to icon component
- added icon storys
- increased size of `khao-map-marker-pin`

## 0.0.14

- added title and icon to Card component
- added `khao-card-notice` component

## 0.0.13

- added `khao-card` component
- brought components and their stories to the same folder
- unified icon size for different button sizes

## 0.0.12

- added `khao-social-buttons`
- added size attribute to button

## 0.0.11

- added icons to storybook
- unified handling of icons
- updated khao-malet to v0.0.10

## 0.0.10

- added `khao-icon-button` component
- updated `khao-malet` to v0.0.7

## 0.0.0 - 0.0.9

- Basic Setup

---

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).
