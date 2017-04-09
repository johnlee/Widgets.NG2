//// Entry point for Ahead of Time compilation. For PROD ONLY
//https://angular.io/docs/ts/latest/cookbook/aot-compiler.html

declare var System: any;

import './favicon.ico';
import './styles/style.css';

import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from '../aot/Application/app/app.module.ngfactory';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
