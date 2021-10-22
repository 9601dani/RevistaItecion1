import { SolicitudAnunciosComponent } from './body/login/login-admin/solicitud-anuncios/solicitud-anuncios.component';
import { HomeCompleteComponent } from './home-complete/home-complete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';

const routes: Routes = [
  {
    path:'',
    component:HomeCompleteComponent
  },
  {
    path:'HOME/:variable',
    component:HomeUserComponent
  },  
  {
    path:'SUPPORT/:variable',
    component:HomeAdminComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
