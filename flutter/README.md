# A Hello World Flutter project

## Getting Started

You need to have Flutter SDK installed on your computer in order to build and run this project.

Follow the steps:

- [Flutter SDK installation](https://flutter.dev/docs/get-started/install). There is no need to install Android Studio if you only plan to build a web app.

Then, to enable [Flutter for web](https://flutter.dev/docs/get-started/web) run:

```
 flutter channel beta
 flutter upgrade
 flutter config --enable-web
```

Run your web app

```
flutter run -d chrome
```

Build your wed app to build/web folder:

```
 flutter build web
```

To deploy Flutter Web app to [Azure Static Web Apps](https://docs.microsoft.com/learn/modules/publish-app-service-static-web-app-api) service use this [GitHub Action](https://github.com/webmaxru/hello-flutter/blob/master/.github/workflows/azure-static-web-apps-gentle-sky-0b647711e.yml)
