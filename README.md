# hello-worlds

Hello World apps for angular, react, svelte, and vue.

Assumptions:

1. What would a new user do?
1. Simplest CLI commands are used (no flags, let the CLI do its default thing)
1. Build for production
1. Use latest versions of each tool

## Angular

Created with `@angular/cli` version 9.0.3, and commands

```bash
ng new hello
# choose no routing
# choose css
```

Build for production using these commands:

```bash
cd hello
npm install
npm run build -- --prod
```

Instructions to [run the app in dev mode](https://github.com/johnpapa/hello-worlds/tree/master/angular/hello)

## React

Created with `create-react-ap` version 3.4.0, and commands

```bash
create-react-app hello
```

Build for production using these commands:

```bash
cd hello
npm install
npm run build
```

Instructions to [run the app in dev mode](https://github.com/johnpapa/hello-worlds/tree/master/react/hello)

## Vue

Created with `@vue/cli` version 4.2.2, and commands

```bash
vue create hello
# choose "defaults" from the prompt
```

Build for production using these commands:

```bash
cd hello
npm install
npm run build
```

Instructions to [run the app in dev mode](https://github.com/johnpapa/hello-worlds/tree/master/vue/hello)

## Svelte

Created with `sveltejs/template my-svelte-project`, and commands

```bash
npx degit sveltejs/template my-svelte-project
```

Build for production using these commands:

```bash
cd hello
npm install
npm run build
```

Instructions to [run the app in dev mode](https://github.com/johnpapa/hello-worlds/tree/master/svelte/hello)

## jQuery

Created manually

```bash
npm run serve
# choose no routing
# choose css
```

## Resources

- [VS Code](https://code.visualstudio.com?wt.mc_id=helloworlds-github-jopapa)
- [Azure Free Trial](https://azure.microsoft.com/en-us/free/?wt.mc_id=helloworlds-github-jopapa)
- [VS Code Extension for Node on Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=helloworlds-github-jopapa)

### Debugging Resources

- [Debugging Angular in VS Code](https://code.visualstudio.com/docs/nodejs/angular-tutorial?wt.mc_id=helloworlds-github-jopapa)
- [Debugging React in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial?wt.mc_id=helloworlds-github-jopapa)
- [Debugging Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial?wt.mc_id=helloworlds-github-jopapa)
