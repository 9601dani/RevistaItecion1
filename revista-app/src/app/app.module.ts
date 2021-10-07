import { ObtenerInfoUserService } from './../../service/obtener-info-user.service';
import { PerfilHomeComponent } from './body/perfil-home/perfil-home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { SpamComponent } from './spam/spam.component';
import { EndPageComponent } from './end-page/end-page.component';
import { ServiceHomeService } from 'service/service-home.service';
import { HomeComponent } from './home/home.component';
import { MenuInicioComponent } from './menu/menu-inicio/menu-inicio.component';
import { LoginComponent } from './body/login/login.component';
import { RegisterComponent } from './body/register/register.component';
import { NAnuncioComponent } from './spam/n-anuncio/n-anuncio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUsuarioService } from 'service/new-usuario.service';
import { HomeCompleteComponent } from './home-complete/home-complete.component';
import { LoginSService } from 'service/login-s.service';
import { HomeUserComponent } from './home-user/home-user.component';
import { MenuUserComponent } from './menu/menu-user/menu-user.component';
import { ModPerfilComponent } from './body/perfil-home/mod-perfil/mod-perfil.component';
import { VerRevistaComponent } from './body/perfil-home/ver-revista/ver-revista.component';
import { RegistrarEtiquetaComponent } from './body/perfil-home/registrar-etiqueta/registrar-etiqueta.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent,
    SpamComponent,
    EndPageComponent,
    HomeComponent,
    MenuInicioComponent,
    LoginComponent,
    RegisterComponent,
    NAnuncioComponent,
    HomeCompleteComponent,
    HomeUserComponent,
    MenuUserComponent,
    PerfilHomeComponent,
    ModPerfilComponent,
    VerRevistaComponent,
    RegistrarEtiquetaComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceHomeService, NewUsuarioService,LoginSService, ObtenerInfoUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
