// Entry point for JiT compilation.
declare var System: any;

import './favicon.ico';
import './styles/style.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Enables Hot Module Replacement.
declare var module: any;
if (module.hot) {
  module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);
