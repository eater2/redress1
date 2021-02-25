import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { RedressSharedModule } from 'app/shared/shared.module';
import { RedressCoreModule } from 'app/core/core.module';
import { RedressAppRoutingModule } from './app-routing.module';
import { RedressHomeModule } from './home/home.module';
import { RedressEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    RedressSharedModule,
    RedressCoreModule,
    RedressHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    RedressEntityModule,
    RedressAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class RedressAppModule {}
