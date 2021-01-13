import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstaOneComponent } from './components/asta-one/asta-one.component';
import { AstaTwoComponent } from './components/asta-two/asta-two.component';
import { AstaThreeComponent } from './components/asta-three/asta-three.component';
import { PainterDirective } from './directives/painter.directive';
import { AstaFiveComponent } from './components/asta-five/asta-five.component';
import { AstaSixComponent } from './components/asta-six/asta-six.component';

@NgModule({
  declarations: [
    AppComponent,
    AstaOneComponent,
    AstaTwoComponent,
    AstaThreeComponent,
    PainterDirective,
    AstaFiveComponent,
    AstaSixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
