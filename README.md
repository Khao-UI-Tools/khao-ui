# Khao UI

This is a Component Library for der-reiskoch.de and ahaan-thai.de

It provides Svelte Components that are provides as web-components

### Git Submodule

The design-system `khao-malet` is included as a git submodule in to the path ```src/design```

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




