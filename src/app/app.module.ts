import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MatDatepickerModule } from '@angular/material/datepicker'
import {
  DateFnsAdapter,
  MAT_DATE_FNS_FORMATS
} from '@angular/material-date-fns-adapter'
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core'
import * as deLocale from 'date-fns/locale/de/index.js'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatDatepickerModule],
  providers: [
    {
      provide: DateAdapter,
      useClass: DateFnsAdapter
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FNS_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: deLocale }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
