import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactPersonComponent } from './contact-person/contact-person.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeesComponent } from './employees/add-employees/add-employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { HolidaysComponent } from './attendance/holidays/holidays.component';
import { MonthlyAttendanceComponent } from './attendance/monthly-attendance/monthly-attendance.component';
import { WorkingHoursComponent } from './attendance/working-hours/working-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ContactPersonComponent,
    HomeComponent,
    EmployeesComponent,
    AddEmployeesComponent,
    EmployeeDetailsComponent,
    AttendanceComponent,
    HolidaysComponent,
    MonthlyAttendanceComponent,
    WorkingHoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
