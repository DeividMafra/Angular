import { Component, LOCALE_ID, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inter';
  languageList = [{ code: 'en', label: 'English' },
  { code: 'pt', label: 'Português-BR' },
  { code: 'fr', label: 'Français' }];
  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

}


