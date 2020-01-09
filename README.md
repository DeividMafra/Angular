# Inter

This project was developed for studies purpose. It's a sample of internationalization.

## How to create a new app:
	ng new inter // Where "inter" is the name of the project.
  
## How  to set the app with tags i18n:
	insert "i18n" tag inside each html tag where is a text to be translated. <h1 i18n>example</h1>

## How to extract this tags for a file to be translated:
	ng xi18n --output-path src/locale // Where "src/locale" is the path where the file will be storaged.
  
## How to insert target tags on this file with the translation:
	After each <source></source> tag with the original text, we need to insert <target></target> with the translated text. i.e.:  <source>Hello World</source><target>Olá Mundo</target>
  
## How to deploy this solution in a localhost as a test:
- ng serve // to run the app on "localhost:4200"

Command inside the script called "build-locale:pt".
- "ng build --prod --i18n-locale pt --i18n-format xlf --i18n-file src/locale/messages.pt.xlf --output-path=dist/pt --baseHref /pt/" // Its a sample of a command to build a portuguese version of the app. 

Creating "build-locale" script to run all script at the same time.
- "build-locale": "npm run build-locale:en && npm run build-locale:pt && npm run build-locale:fr"
		
- npm run build-locale // to run a script called "build-locale" inside "package.json".

-	ng serve --configuration=pt //to test each language version.

## How to deploy the complete solution in a Firebase enviroment for a real-life test:
- ng build --prod --outputPath=dist/ //To build a solution that you will deploy.
- npm install -g firebase-tools //To install Firebase.
- firebase login //To login after you have create the environment on Google.
- firebase init //To setup the project.
- firebase deploy //To upload the project to firebase environment.

