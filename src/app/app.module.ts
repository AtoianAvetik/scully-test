import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ScullyLibModule,
        MatButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
