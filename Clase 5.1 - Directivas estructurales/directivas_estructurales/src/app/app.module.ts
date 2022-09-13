import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsoNgIFComponent } from './componentes/uso-ng-if/uso-ng-if.component';
import { UsoNgForComponent } from './componentes/uso-ng-for/uso-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    UsoNgIFComponent,
    UsoNgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
