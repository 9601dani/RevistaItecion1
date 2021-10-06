import { HomeCompleteComponent } from './home-complete/home-complete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeCompleteComponent
  },
  {
    path:'user-home/:variable',
    component:HomeUserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
