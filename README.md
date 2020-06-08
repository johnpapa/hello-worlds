# hello-worlds

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-25-blue.svg?style=flat-square)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Hello World apps for JavaScript/HTML/CSS libraries/frameworks!

Assumptions:

- [ ] only the most simple basic hello world app
- [ ] remove all tests and commands for tests and dependencies for tests
- [ ] must say "Hello World" on the main component
- [ ] only include the minimal components (1 ideally)
- [ ] no routing, not extras whatsoever
- [ ] no styling
- [ ] nothing else !
- [ ] must work by running `npm install` and `npm start` (or equivalent)
- [ ] must be in the folder named `<tech-name>`
- [ ] add yourself using the all-contributors bot `@allcontributors please add @<your-github-account> for code`
- [ ] add build steps and which folder to serve in the README.md
- [ ] verify that the app once built can be served from whatever folder the built assets are placed in
- [ ] verify that running `npx http-server <your-folder-to-serve>` works
- [ ] verify that a Pull Request doesnt already exist. If it does, feel free to contribue to it.

See existing samples for the idea ...

[![Deploy to Azure button](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/?feature.customportal=false&WT.mc_id=build2020_swa-github-jopapa#create/Microsoft.StaticApp)

Projects are listed alphabetically.

| Project     | Build steps                                  | Serve this folder | Folder      |
| ----------- | -------------------------------------------- | ----------------- | ----------- |
| [Alpine.js](https://github.com/alpinejs/alpine/)| | `/`               | alpine      |
| [Angular.js](https://angularjs.org/) | | `/`               | angularjs   |
| [Angular](https://angular.io/)     | `npm run build -- --prod`                    | `dist/hello`      | angular     |
| [Angular Universal](https://angular.io/guide/universal) | `npm run prerender`                     | `dist/hello/browser`| angular-universal|
| [Aurelia](https://aurelia.io/)     | `npm run build`                              | `dist`            | aurelia     |
| [Backbone.js](https://backbonejs.org/) |                                              | `/`               | backbone    |
| [Ember](https://emberjs.com/)       | `npm run build`                              | `dist`            | ember       |
| [Flutter](https://flutter.dev/)     | Install Flutter SDK then `flutter build web` | `build/web`       | flutter     |
| [Gatsby](https://www.gatsbyjs.org/)      | `npm run build`                              | `public`          | gatsby      |
| [Glimmer](https://glimmerjs.com/)     | `npm run build`                              | `dist`            | glimmer     |
| [Gridsome](https://gridsome.org/)    | `npm run build`                              | `dist`            | gridsome    |
| [HTML](https://developer.mozilla.org/docs/Web/HTML)        |                                              | `/`               | html        |
| [Hugo](https://gohugo.io/)        | `npm run build`                              | `public`          | hugo        |
| [Hyperapp](https://hyperapp.dev/)    | (uses CDN)                                   | `/`               | hyperapp    |
| [JavaScript](https://developer.mozilla.org/docs/Web/javascript)  |                                              | `/`               | javascript  |
| [jQuery](https://jquery.com/)      | (uses CDN)                                   | `/`               | jquery      |
| [KnockoutJS](https://knockoutjs.com/)  | `npm run build`                              | `dist`            | knockoutjs  |
| [LitElement](https://lit-element.polymer-project.org/) | `npm run build`                              | `dist`            | lit-element |
| [Marko](https://markojs.com/)       | `npm run build`                              | `public`          | marko       |
| [Meteor](https://www.meteor.com/)      | `npm run build`                              | `bundle`          | meteor      |
| [Mithril](https://mithril.js.org/)     | `npm run build`                              | `dist`            | mithril     |
| [Next.js](https://nextjs.org/)     | `npm run build`                              | `out`             | nextjs      |
| [Nuxt.js](https://nuxtjs.org/)     | `npm run generate`                           | `dist`            | nuxtjs      |
| [Polymer](https://www.polymer-project.org/)     | `npm run build`                              | `build/default`   | polymer     |
| [Preact](https://preactjs.com/)      | `npm run build`                              | `build`           | preact      |
| [React](https://reactjs.org/)       | `npm run build`                              | `build`           | react       |
| [Scully](https://github.com/scullyio/scully)      | `npm run build -- --prod`                    | `dist/hello`      | scully      |
| [Stencil](https://stenciljs.com/)     | `npm run build`                              | `www`             | stencil     |
| [Svelte](https://svelte.dev/)       | `npm run build`                              | `public`          | svelte      |
| [Three.js](https://threejs.org/)     |                                  | `/`               | threejs     |
| [TypeScript](https://www.typescriptlang.org/)   | `npm run build`                              | `dist`            | typescript  |
| [Vue](http://vuejs.com/)               | `npm run build`                              | `dist`            | vue         |
| [VuePress](https://vuepress.vuejs.org/)    | `npm run build`                              | `dist`            | vuepress    |

## Resources

- [Azure Free Trial](https://azure.microsoft.com/en-us/free/?wt.mc_id=helloworlds-github-jopapa)
- [VS Code](https://code.visualstudio.com?wt.mc_id=helloworlds-github-jopapa)

### Azure Static Web Apps

- Learn how to [Publish an Angular, React, Svelte, or Vue JavaScript app and API with Azure Static Web Apps](https://docs.microsoft.com/learn/modules/publish-app-service-static-web-app-api?wt.mc_id=hello_worlds-github-jopapa)
- [API support in Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/apis?wt.mc_id=hello_worlds-github-jopapa)
- [Add an API to Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/add-api?wt.mc_id=hello_worlds-github-jopapa)
- [Authentication and authorization](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization?wt.mc_id=hello_worlds-github-jopapa)
- [Routes](https://docs.microsoft.com/azure/static-web-apps/routes?wt.mc_id=hello_worlds-github-jopapa)
- [Review pre-production environments](https://docs.microsoft.com/azure/static-web-apps/review-publish-pull-requests?wt.mc_id=hello_worlds-github-jopapa)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://johnpapa.net"><img src="https://avatars2.githubusercontent.com/u/1202528?v=4" width="100px;" alt=""/><br /><sub><b>John Papa</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=johnpapa" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/laurieontech"><img src="https://avatars3.githubusercontent.com/u/15000607?v=4" width="100px;" alt=""/><br /><sub><b>LB</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=laurieontech" title="Code">💻</a></td>
    <td align="center"><a href="https://simicode.me"><img src="https://avatars1.githubusercontent.com/u/25581792?v=4" width="100px;" alt=""/><br /><sub><b>Simeon Udoh</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=simeon4real" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/ksivamuthu"><img src="https://avatars0.githubusercontent.com/u/4029525?v=4" width="100px;" alt=""/><br /><sub><b>Sivamuthu Kumar</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=ksivamuthu" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/matiaskm"><img src="https://avatars3.githubusercontent.com/u/18614906?v=4" width="100px;" alt=""/><br /><sub><b>Matias Kohan</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=matiaskm" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Duraimurugan"><img src="https://avatars3.githubusercontent.com/u/7348388?v=4" width="100px;" alt=""/><br /><sub><b>Duraimurugan</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=Duraimurugan" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/sinedied"><img src="https://avatars0.githubusercontent.com/u/593151?v=4" width="100px;" alt=""/><br /><sub><b>Yohan Lasorsa</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=sinedied" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://wassim.dev"><img src="https://avatars2.githubusercontent.com/u/1699357?v=4" width="100px;" alt=""/><br /><sub><b>Wassim Chegham</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=manekinekko" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sandydoo"><img src="https://avatars3.githubusercontent.com/u/7572407?v=4" width="100px;" alt=""/><br /><sub><b>Sander Melnikov</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=sandydoo" title="Code">💻</a></td>
    <td align="center"><a href="https://angularhive.com"><img src="https://avatars0.githubusercontent.com/u/29446574?v=4" width="100px;" alt=""/><br /><sub><b>Udhayakumar Govindarajan</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=askudhay" title="Documentation">📖</a></td>
    <td align="center"><a href="https://behance.net/afifalfiano"><img src="https://avatars1.githubusercontent.com/u/47497276?v=4" width="100px;" alt=""/><br /><sub><b>Afif Alfiano</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=afifalfiano" title="Code">💻</a></td>
    <td align="center"><a href="http://gilcreque.com"><img src="https://avatars2.githubusercontent.com/u/243234?v=4" width="100px;" alt=""/><br /><sub><b>Gil Creque</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=gilcreque" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/afflexux"><img src="https://avatars0.githubusercontent.com/u/35804265?v=4" width="100px;" alt=""/><br /><sub><b>afflexux</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=afflexux" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/apps/allcontributors"><img src="https://avatars0.githubusercontent.com/in/23186?v=4" width="100px;" alt=""/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=allcontributors[bot]" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/btchoum"><img src="https://avatars0.githubusercontent.com/u/9422996?v=4" width="100px;" alt=""/><br /><sub><b>Bertrand Tchoumkeu</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=btchoum" title="Code">💻</a></td>
    <td align="center"><a href="https://medium.com/@webmaxru"><img src="https://avatars1.githubusercontent.com/u/1560278?v=4" width="100px;" alt=""/><br /><sub><b>Maxim Salnikov</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=webmaxru" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/rgolea"><img src="https://avatars0.githubusercontent.com/u/8843202?v=4" width="100px;" alt=""/><br /><sub><b>Rares Golea</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=rgolea" title="Code">💻</a></td>
    <td align="center"><a href="https://swank.dev/"><img src="https://avatars0.githubusercontent.com/u/18602728?v=4" width="100px;" alt=""/><br /><sub><b>Brian Swank</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=bswank" title="Code">💻</a></td>
    <td align="center"><a href="https://codewithhugo.com"><img src="https://avatars1.githubusercontent.com/u/6459679?v=4" width="100px;" alt=""/><br /><sub><b>Hugo</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=hugodf" title="Code">💻</a></td>
    <td align="center"><a href="https://noelmace.com"><img src="https://avatars3.githubusercontent.com/u/7578400?v=4" width="100px;" alt=""/><br /><sub><b>Noël Macé</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=noelmace" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/wolfhoundjesse"><img src="https://avatars1.githubusercontent.com/u/13468509?v=4" width="100px;" alt=""/><br /><sub><b>Jesse M. Holmes</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=wolfhoundjesse" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/carlosroec"><img src="https://avatars0.githubusercontent.com/u/1981518?v=4" width="100px;" alt=""/><br /><sub><b>Carlos G. Rodriguez</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=carlosroec" title="Code">💻</a></td>
    <td align="center"><a href="http://zaceno.github.io"><img src="https://avatars3.githubusercontent.com/u/2061445?v=4" width="100px;" alt=""/><br /><sub><b>Zacharias Enochsson</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=zaceno" title="Code">💻</a></td>
    <td align="center"><a href="https://moemoe89.github.io"><img src="https://avatars0.githubusercontent.com/u/7221739?v=4" width="100px;" alt=""/><br /><sub><b>Bismo Baruno</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=moemoe89" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Filini"><img src="https://avatars1.githubusercontent.com/u/10072578?v=4" width="100px;" alt=""/><br /><sub><b>Filippo Gualandi</b></sub></a><br /><a href="https://github.com/johnpapa/hello-worlds/commits?author=Filini" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
