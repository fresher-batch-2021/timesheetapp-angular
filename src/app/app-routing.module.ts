import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { TimesheetRecordComponent } from './timesheet-record/timesheet-record.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'qrcode',component:QrcodeComponent},
  {path:'login',component:LoginComponent},
  {path:'timesheet',component:TimesheetComponent},
  {path:'my_timesheet',component:MyTimesheetComponent},
  {path:'timesheet_record',component:TimesheetRecordComponent},
  {path:'',redirectTo:'index',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
