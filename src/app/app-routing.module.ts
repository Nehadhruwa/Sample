import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmplistComponent } from './emplist/emplist.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  {path:"samp",component:SampleComponent},
  {path:"emplist",component:EmplistComponent},
  {path:"register",component:EmpAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
