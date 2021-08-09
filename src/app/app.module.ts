import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetRecordComponent } from './timesheet-record/timesheet-record.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    QrcodeComponent,
    MyTimesheetComponent,
    TimesheetComponent,
    TimesheetRecordComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
