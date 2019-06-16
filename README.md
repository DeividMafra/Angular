# Inter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Explanation

I made an internationalization app to learning:

- How to install Angular/cli;
	node -v // To check the version and confirm that you have already installed node.js.
	npm install -g @angular/cli // Execute this command after you have installed node.js.
	ng version // To check the Angular version.
- How to create a new app;
	ng new inter // Where "inter" is the name of the project.
- How  to set the app with tags i18n;
	insert "i18n" tag inside each html tag where is a text to be translated.
	#<h1 i18n>example</h1>
- How to extract this tags for a file to be translated;
	ng xi18n --output-path src/locale // Where "src/locale" is the path where the file will be storaged.
- How to insert <target> tags on this file with the translation;
	After each <source></source> tag with the original text, we need to insert <target></target> 
		with the translated text.
	<source>Hello World</source>
        <target>Olá Mundo</target>
- How to deploy this solution in a localhost as a test;
	ng serve // to run the app on "localhost:4200"
	"build-locale:pt": "ng build --prod --i18n-locale pt --i18n-format xlf --i18n-file src/locale/messages.pt.xlf --output-path=dist/pt --baseHref /pt/",
		// Its a sample of a commando to build a portuguese version of the app. This command is inside the script called "build-locale:pt".
	"build-locale": "npm run build-locale:en && npm run build-locale:pt && npm run build-locale:fr"
		// Creating "build-locale" script to run all script in the same time.
	npm run build-locale // to run a script called "build-locale" inside "package.json"
	ng serve --configuration=pt //to test each language version
- How to deploy the complete solution in a Firebase enviroment for a real-life test.
	ng build --prod --outputPath=dist/ // To build a solution that you will deploy.
	npm install -g firebase-tools // To install Firebase.
	firebase login // To login after you have create the environment on Google.
	firebase init // To setup the project.
	firebase deploy // To upload the project to firebase environment.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
