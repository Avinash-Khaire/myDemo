import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
