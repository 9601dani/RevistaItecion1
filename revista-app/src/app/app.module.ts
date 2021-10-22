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
import { LoginAdminComponent } from './body/login/login-admin/login-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MenuAdminComponent } from './menu/menu-admin/menu-admin.component';
import { AsigEtiquetaComponent } from './body/login/login-admin/asig-etiqueta/asig-etiqueta.component';
import { HomeLoginComponent } from './body/login/login-admin/home-login/home-login.component';
import { CrearAdminComponent } from './body/login/login-admin/crear-admin/crear-admin.component';
import { ModAdminComponent } from './body/login/login-admin/mod-admin/mod-admin.component';
import { ModAdminFinalComponent } from './body/login/login-admin/mod-admin-final/mod-admin-final.component';
import { SubirRevistaComponent } from './body/perfil-home/subir-revista/subir-revista.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { MostrarPdfComponent } from './spam/mostrar-pdf/mostrar-pdf.component';
import { VerMisRevistasComponent } from './body/perfil-home/ver-mis-revistas/ver-mis-revistas.component';
import { SolicitudRevistaComponent } from './body/login/login-admin/solicitud-revista/solicitud-revista.component';
import { PorcentajeSoftComponent } from './body/login/login-admin/porcentaje-soft/porcentaje-soft.component';
import { BuscarRevistaComponent } from './body/perfil-home/buscar-revista/buscar-revista.component';
import { MisSuscripcionesComponent } from './body/perfil-home/mis-suscripciones/mis-suscripciones.component';
import { AsigCategoriaComponent } from './body/login/login-admin/asig-categoria/asig-categoria.component';
import { RegistrarAnuncioComponent } from './body/login/login-admin/registrar-anuncio/registrar-anuncio.component';
import { RenovarSuscripcionComponent } from './body/perfil-home/renovar-suscripcion/renovar-suscripcion.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { SolicitudAnunciosComponent } from './body/login/login-admin/solicitud-anuncios/solicitud-anuncios.component';
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
    RegistrarEtiquetaComponent,
    LoginAdminComponent,
    HomeAdminComponent,
    MenuAdminComponent,
    AsigEtiquetaComponent,
    HomeLoginComponent,
    CrearAdminComponent,
    ModAdminComponent,
    ModAdminFinalComponent,
    SubirRevistaComponent,
    MostrarPdfComponent,
    VerMisRevistasComponent,
    SolicitudRevistaComponent,
    PorcentajeSoftComponent,
    BuscarRevistaComponent,
    MisSuscripcionesComponent,
    AsigCategoriaComponent,
    RegistrarAnuncioComponent,
    RenovarSuscripcionComponent,
    SolicitudAnunciosComponent,
    

   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    YouTubePlayerModule
    
  ],
  providers: [ServiceHomeService, NewUsuarioService,LoginSService, ObtenerInfoUserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
 }
