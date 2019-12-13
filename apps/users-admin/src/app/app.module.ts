import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UiLayoutModule } from '@users/ui/layout';
import { DataAccessModule } from '@users/data-access';
import { environment } from '../environments/environment';
import { UiComponentsModule } from '@users/ui/components';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    UiLayoutModule,
    UiComponentsModule,
    DataAccessModule.forRoot({ apiBaseUrl: environment.apiBaseUrl })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
