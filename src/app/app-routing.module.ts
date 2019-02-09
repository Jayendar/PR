import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'contact',component:ContactPersonComponent},
  {path:'company-home',component:HomeComponent},
  {path:'employees',component:EmployeeDetailsComponent},
  {path:'add-employees',component:AddEmployeesComponent},
  {path:'employee-details',component:EmployeeDetailsComponent},
  {path:'add-employee',component:AddEmployeesComponent},
  {path:'attendance',component:MonthlyAttendanceComponent},
  {path:'monthlyattendance',component:MonthlyAttendanceComponent},
  {path:'holidays',component:HolidaysComponent},
  {path:'workinghours',component:WorkingHoursComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
