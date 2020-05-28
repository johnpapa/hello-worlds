import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate } from '@glimmer/core';

export default class App extends Component {
  world = 'World';
}

setComponentTemplate(
  createTemplate(`
    Hello {{this.world}}!
  `),
  App
);
