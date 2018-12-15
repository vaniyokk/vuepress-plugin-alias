# vuepress-plugin-alias
Vuepress plugin that generates alias pages for proper redirect handling

## Install

* Yarn

  ```sh
  yarn add vuepress-plugin-alias
  ```
* NPM

  ```sh
  npm install vuepress-plugin-sitemap
  ```

## Usage

### Vuepress v1.x

```js
// .vuepress/config.js
module.exports = {
  plugins: [ 'alias' ]
}
```

and in your front-matter add alias to redirect from

```md
---
alias: old-link.html
---
```
or a list of aliases
```md
---
aliases: 
 - old-link1.html
 - old-link2.html
---
```
