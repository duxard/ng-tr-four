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
import { AstaSevenComponent } from './components/asta-seven/asta-seven.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AstaNineComponent } from './components/asta-nine/asta-nine.component';
import { AstaTenComponent } from './components/asta-ten/asta-ten.component';
import { AstaElevenComponent } from './components/asta-eleven/asta-eleven.component';
import { AstaTwelveComponent } from './components/asta-twelve/asta-twelve.component';
import { StunnerComponent } from './components/asta-twelve/stunner.component';
import {USER_TOKEN} from './components/asta-twelve/userToken';
import { AstaTwelveChildComponent } from './components/asta-twelve/asta-twelve-child.component';
import { AstaAComponent } from './components/sharingData/asta-a.component';
import { AstaBComponent } from './components/sharingData/asta-b.component';
import { AstaThirteenComponent } from './components/asta-thirteen/asta-thirteen.component';
import { AstaFourteenComponent } from './components/asta-fourteen/asta-fourteen.component';
import { AstaFourteenPipe } from './components/asta-fourteen/asta-fourteen.pipe';
import { PaneDirective } from './components/asta-fourteen/pane.directive';
import { AppIconComponent } from './components/asta-five/app-icon.component';
import { DirectOneDirective } from './components/asta-five/direct-one.directive';
import { IfNotDirective } from './directives/if-not.directive';
import { DivBoxComponent } from './components/asta-five/div-box.component';
import { RefDirective } from './components/asta-five/ref.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TstInputComponent } from './components/tst-input/tst-input.component';
import { AstaFoteenComponent } from './components/asta-foteen/asta-foteen.component';
import { AstaFifteenComponent } from './components/asta-fifteen/asta-fifteen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseAPIToken, SampleNameToken } from './app.config';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    AstaOneComponent,
    AstaTwoComponent,
    AstaThreeComponent,
    PainterDirective,
    AstaFiveComponent,
    AstaSixComponent,
    AstaSevenComponent,
    AstaNineComponent,
    AstaTenComponent,
    AstaElevenComponent,
    AstaTwelveComponent,
    StunnerComponent,
    AstaTwelveChildComponent,
    AstaAComponent,
    AstaBComponent,
    AstaThirteenComponent,
    AstaFourteenComponent,
    AstaFourteenPipe,
    PaneDirective,
    AppIconComponent,
    DirectOneDirective,
    IfNotDirective,
    DivBoxComponent,
    RefDirective,
    TstInputComponent,
    AstaFoteenComponent,
    AstaFifteenComponent,
    BannerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule
  ],
  entryComponents: [DivBoxComponent],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
