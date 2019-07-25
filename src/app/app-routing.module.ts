import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FpolicyComponent } from './fpolicyApi/fpolicy.component';
import { StudentComponent } from './student/student.component';
import { Employee } from './employee.component';
import { insertpolicy } from './fpolicyApi/insertPolicy.component';



const routes: Routes = [
  {path: 'policies', component: FpolicyComponent},
  {path: 'students', component: StudentComponent},
  {path: 'employees', component: Employee},
  {path: 'insert', component: insertpolicy}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [FpolicyComponent, StudentComponent, Employee, insertpolicy]