# Khao UI

![Khao UI](khao_ui_logo.jpg "Khao UI")

This is a Component Library based on Svelte Components that are provided as web-components.

## About the Name

"Khao" (ข้าว) is the Thai name for rice. Just as rice is the basis of many Asian dishes, this component library will be the new basis for my blogs [Der Reiskoch](https://www.der-reiskoch.de/) and [ahaan-thai.de](https://www.ahaan-thai.de/)

## Git Submodule

The design-system `khao-malet` is included as a git submodule in to the path `src/design`

Please perform the following command to initialize the submodule:

```bash
git submodule update --init --recursive
```

If you have already initialized the submodule, you can update it with:

```bash
git submodule update --recursive

or

npm run update-design
```

If there are problems with the submodule you can also try to add it again:

```bash
git submodule add https://github.com/Der-Reiskoch/khao-malet.git src/design

```
