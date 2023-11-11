import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './pages/components/card/card.component';
import { MenuBarComponent } from './pages/components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './pages/components/card/card-label/card-label.component';
import { CardPricingComponent } from './pages/components/card/card-pricing/card-pricing.component';
import { MenuBarLinkComponent } from './pages/components/menu-bar/menu-bar-link/menu-bar-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    MenuBarLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
