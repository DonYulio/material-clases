import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsoNgIFComponent } from './componentes/uso-ng-if/uso-ng-if.component';
import { UsoNgForComponent } from './componentes/uso-ng-for/uso-ng-for.component';
import { UsoNgSwitchComponent } from './componentes/uso-ng-switch/uso-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    UsoNgIFComponent,
    UsoNgForComponent,
    UsoNgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
