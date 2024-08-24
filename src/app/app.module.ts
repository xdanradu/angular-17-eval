import { NgModule } from '@angular/core';
import {BrowserModule, provideClientHydration, withEventReplay} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EstFooter} from "./src/layout/footer/est-footer.component";
import {EstHeader} from "./src/layout/header/est-header.component";
import { provideHttpClient, withFetch} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstFooter,
    EstHeader,
  ],
  providers: [
    provideHttpClient(withFetch()),
    // provideClientHydration(withEventReplay())
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
