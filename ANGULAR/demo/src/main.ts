import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platform } from 'node:os';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


//bootstrapApplication(AppComponent, appConfig)
  //.catch((err) => console.error(err));

  platformBrowserDynamic().bootstrapModule(AppModule)