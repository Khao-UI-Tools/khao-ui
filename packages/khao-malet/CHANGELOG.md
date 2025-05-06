# Changelog

## 6.1.1

### Patch Changes

- added `--khao-sys-color-neutral95`
- added `--khao-sys-static-color-off-white`
- restoreed pure white for `--khao-sys-static-color-white`

## 6.1.0

### Minor Changes

- replace pure white (#ffffff) by offwhite (#faf9f6)

## 6.0.0

### Major Changes

- integratated to mono-repo, artefacts are now back in `/dist` folder

## 5.0.0

- provide everything in root folder

## 4.0.0

- provided new build artefact `theme/khao-malet.css`

## 3.0.0

- moved fonts to `theme` folder

## 2.0.7

- introduced changeset
- introduced `--khao-sys-size-regular-0`

## 2.0.6

- introduced `--khao-sys-typescale-label-small`
- performed `npm audit fix`

## 2.0.5

- changed `--khao-sys-typescale-title-large-weight` from `400` to `700`

## 2.0.4

- removed `--khao-sys-color-logo`
- added `--khao-sys-color-outline-bright`
- added `--khao-sys-color-background`

## 2.0.3

- re-adjusted `surface-container` colors

## 2.0.2

- re-added fourth brand color
- renamd brand colors
- added `--khao-sys-color-logo`
- re-adjusted `--khao-sys-elevation-level1-shadow`
- re-adjusted `surface-container` colors

## 2.0.1

- adjusted `surface-container` colors
- adjusted `--khao-sys-elevation-level1-shadow`

## 2.0.0

- changed Brand colors
- removed color gold
- removed color sand
- removed `--khao-sys-color-accent`
- removed `--khao-sys-color-container` (use `--khao-sys-color-neutral10` instead)
- changed `--khao-sys-color-surface` it is now calculated from the secondary color
- removed `--khao-sys-color-surface-variantd50` (use `--khao-sys-color-surface-container` instead)
- removed `--khao-sys-color-surface-variantd30` (use `--khao-sys-color-surface-container-low` instead)
- removed `--khao-sys-color-surface-variantd10` (use `--khao-sys-color-surface-container-lowest` instead)
- removed `--khao-sys-color-surface-variantd70` (use `--khao-sys-color-surface-container-high` instead)
- removed `--khao-sys-color-surface-variantd90` (use `--khao-sys-color-surface-container-highest` instead)
- removed `--khao-sys-static-color-red` (use `--khao-sys-static-color-error` instead)
- remoced `--khao-sys-static-color-green` (use `--khao-sys-color-primary` instead)
- added `-container` colors for primary, secondary and tertiary
- added `--khao-sys-static-color-success`
- added `--khao-sys-static-color-success-container` and `--khao-sys-static-color-error-container`

## 1.0.1

- used meaning full sizes for `--khao-sys-size-typography-2` and `--khao-sys-size-typography-3`
- removed `--khao-sys-size-typography-1`

## 1.0.0

- changed the `--khao-ref-base-size-typography` to 4px. So `--khao-sys-size-typography-4` equals `1rem` in default browser settings
- added `--khao-sys-typescale-title-font`
- adjusted `--khao-sys-size-typography-1` to `--khao-sys-size-typography-10`
- GitHub Page will now serve the Storybook for `khao-malet`

## 0.0.19

- added `--khao-sys-color-surface-variantd90`

## 0.0.18

- replaced `--khao-sys-color-neutral100` by `--khao-sys-color-neutral90``
- added `--khao-ref-pallete-gold`
- used `--khao-ref-pallete-gold` for `khao-sys-color-surface`
- added `--khao-sys-color-surface-variantd70`

## 0.0.17

- added `--khao-ref-palette-sand` color
- used `--khao-ref-palette-sand` for `khao-sys-color-surface`
- adjusted calculation of `khao-sys-color-surface` variants
- added `--khao-sys-color-surface-variantd50` color

## 0.0.16

- fixed hover state

## 0.0.15

- improved contrast for secondary color

## 0.0.14

- added `--khao-sys-color-surface-variantd10`

## 0.0.13

- added sizes up to `--khao-sys-size-regular-20`

## 0.0.12

- increased color diff for :hover,:focus and :active state
- added `--khao-sys-size-typography-12`

## 0.0.11

- fixed `--khao-sys-color-surface`

## 0.0.10

- calced `--khao-sys-color-surface` instead of hard coding it.
- added `--khao-sys-color-surface-variantd30`

## 0.0.9

- added on-x color defitions for static colors
- fixed bug in color definitons

## 0.0.8

- improved color and palette definitons

## 0.0.7

- added `--khao-sys-size-regular-11` to `--khao-sys-size-regular-15`

## 0.0.6

- added Fallback Fonts for font-faces

## 0.0.0 - 0.0.5

Basic Setup

---

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).
