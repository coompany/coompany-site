import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TRANSLATION_PROVIDERS, TranslateService, TranslatePipe } from './translate';
import { FooterComponent } from './footer/footer.component';
import { FluidifyDirective } from './fluidify.directive';
import { ProjectComponent } from './home/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TranslatePipe,
    FooterComponent,
    FluidifyDirective,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TRANSLATION_PROVIDERS, TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
